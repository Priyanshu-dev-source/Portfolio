"use client";

import React, { useRef, useEffect } from "react";
import * as THREE from "three";

interface LiquidImageProps {
  src: string;
  alt: string;
  className?: string;
}

export default function LiquidImage({ src, alt, className }: LiquidImageProps) {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;
    const container = mountRef.current;

    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      logarithmicDepthBuffer: true,
    });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    container.innerHTML = "";
    container.appendChild(renderer.domElement);

    renderer.domElement.style.position = "absolute";
    renderer.domElement.style.top = "0";
    renderer.domElement.style.left = "0";
    renderer.domElement.style.width = "100%";
    renderer.domElement.style.height = "100%";

    const geometry = new THREE.PlaneGeometry(2, 2);

    let texture = new THREE.TextureLoader().load(src);
    texture.minFilter = THREE.LinearFilter;
    texture.magFilter = THREE.LinearFilter;

    const uniforms = {
      uTexture: { value: texture },
      uMouse: { value: new THREE.Vector2(0.5, 0.5) },
      uHover: { value: 0.0 },
      uTime: { value: 0.0 },
      uAspect: { value: container.clientWidth / container.clientHeight },
    };

    const material = new THREE.ShaderMaterial({
      uniforms: uniforms,
      transparent: true,
      vertexShader: `
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform sampler2D uTexture;
        uniform vec2 uMouse;
        uniform float uTime;
        uniform float uAspect;
        uniform float uHover;
        varying vec2 vUv;
        
        // Simplex 2D noise
        vec3 permute(vec3 x) { return mod(((x*34.0)+1.0)*x, 289.0); }
        float snoise(vec2 v){
          const vec4 C = vec4(0.211324865405187, 0.366025403784439,
                   -0.577350269189626, 0.024390243902439);
          vec2 i  = floor(v + dot(v, C.yy) );
          vec2 x0 = v -   i + dot(i, C.xx);
          vec2 i1;
          i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
          vec4 x12 = x0.xyxy + C.xxzz;
          x12.xy -= i1;
          i = mod(i, 289.0);
          vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 ))
            + i.x + vec3(0.0, i1.x, 1.0 ));
          vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy),
            dot(x12.zw,x12.zw)), 0.0);
          m = m*m;
          m = m*m;
          vec3 x = 2.0 * fract(p * C.www) - 1.0;
          vec3 h = abs(x) - 0.5;
          vec3 ox = floor(x + 0.5);
          vec3 a0 = x - ox;
          m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );
          vec3 g;
          g.x  = a0.x  * x0.x  + h.x  * x0.y;
          g.yz = a0.yz * x12.xz + h.yz * x12.yw;
          return 130.0 * dot(m, g);
        }

        // 1D Random generator for glitch
        float random(float n) {
            return fract(sin(n) * 43758.5453123);
        }

        void main() {
          vec2 p = vUv;
          vec2 m = uMouse;
          
          p.x *= uAspect;
          m.x *= uAspect;
          
          // Outer image
          vec4 baseColor = texture2D(uTexture, vUv);
          
          // Noise to simulate irregular torn paper edge
          float n1 = snoise(vUv * 8.0 + uTime * 0.1);
          float n2 = snoise(vUv * 16.0 - uTime * 0.2) * 0.5;
          float n3 = snoise(vUv * 32.0) * 0.25;
          float edgeNoise = (n1 + n2 + n3) * 0.10; 
          
          float dist = distance(p, m);
          float radius = 0.16 * uHover; // slightly smaller radius for mask
          float edge = dist + edgeNoise;
          
          // Hard edge cutoff for the torn mask
          float mask = smoothstep(radius + 0.01, radius - 0.01, edge);
          
          // Optional subtle white ripped lip edge on the boundary
          float rimWidth = 0.02 * uHover;
          float rim = smoothstep(radius + rimWidth + 0.01, radius + rimWidth - 0.01, edge) - mask;
          rim = clamp(rim, 0.0, 1.0);
          
          // Simple inner UV (no glitch/jitter)
          vec2 innerUv = vUv;
          
          vec4 innerSample = texture2D(uTexture, innerUv);
          
          // Make it dramatic grayscale like the reference image
          float gray = dot(innerSample.rgb, vec3(0.299, 0.587, 0.114));
          gray = smoothstep(0.1, 0.7, gray); // high contrast
          
          // The background inside the tear should be solid black even if original image was transparent there
          vec3 innerRgb = mix(vec3(0.08), vec3(gray), innerSample.a);
          vec4 revealColor = vec4(innerRgb, 1.0); 
          
          // Combine base, rim, and reveal
          // White rim over transparent base background looks weird if opacity is zero, so multiply by base alpha
          vec4 finalColor = mix(baseColor, vec4(0.95, 0.95, 0.95, baseColor.a), rim); 
          
          // Mix with solid reveal layer using the mask computed
          finalColor = mix(finalColor, revealColor, mask);
          
          // Ensure final alpha is solid where mask is present, or respects base image where mask is absent
          float finalAlpha = max(baseColor.a, mask);
          finalColor.a = finalAlpha;
          
          // Apply final hover scale so that when it hits zero, there's no ghosting
          if (uHover < 0.01) {
              finalColor = baseColor;
          }
          
          gl_FragColor = finalColor;
        }
      `,
    });

    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    let currentMouse = new THREE.Vector2(0.5, 0.5);
    let targetMouse = new THREE.Vector2(0.5, 0.5);

    let currentHover = 0.0;
    let targetHover = 0.0;

    const onMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = 1.0 - (e.clientY - rect.top) / rect.height;

      targetMouse.set(x, y);
    };

    const onMouseEnter = () => {
      targetHover = 1.0;
    };

    const onMouseLeave = () => {
      targetHover = 0.0;
    };

    container.addEventListener("mouseenter", onMouseEnter);
    container.addEventListener("mousemove", onMouseMove);
    container.addEventListener("mouseleave", onMouseLeave);

    let animationId: number;
    let time = 0;

    const animate = () => {
      time += 0.03;
      uniforms.uTime.value = time;

      currentHover += (targetHover - currentHover) * 0.1;
      uniforms.uHover.value = currentHover;

      currentMouse.lerp(targetMouse, 0.1);
      uniforms.uMouse.value.copy(currentMouse);

      renderer.render(scene, camera);
      animationId = requestAnimationFrame(animate);
    };

    animate();

    const onResize = () => {
      if (!container) return;
      renderer.setSize(container.clientWidth, container.clientHeight);
      uniforms.uAspect.value = container.clientWidth / container.clientHeight;
    };
    window.addEventListener("resize", onResize);

    return () => {
      container.removeEventListener("mouseenter", onMouseEnter);
      container.removeEventListener("mousemove", onMouseMove);
      container.removeEventListener("mouseleave", onMouseLeave);
      window.removeEventListener("resize", onResize);
      cancelAnimationFrame(animationId);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      geometry.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, [src]);

  return (
    <div
      ref={mountRef}
      className={className}
      style={{ position: "relative", cursor: "pointer" }}
    >
      <img
        src={src}
        alt={alt}
        style={{
          visibility: "hidden",
          width: "100%",
          height: "100%",
          objectFit: "contain",
        }}
      />
    </div>
  );
}

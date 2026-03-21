"use client";

import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

export default function GlobalLiquidBackground() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;
    const container = mountRef.current;

    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    
    container.innerHTML = '';
    container.appendChild(renderer.domElement);
    
    renderer.domElement.style.position = 'absolute';
    renderer.domElement.style.top = '0';
    renderer.domElement.style.left = '0';
    renderer.domElement.style.width = '100%';
    renderer.domElement.style.height = '100%';
    renderer.domElement.style.pointerEvents = 'none';
    
    const geometry = new THREE.PlaneGeometry(2, 2);
    
    const uniforms = {
      uMouse: { value: new THREE.Vector2(0.5, 0.5) },
      uVelocity: { value: new THREE.Vector2(0.0, 0.0) },
      uTime: { value: 0.0 },
      uAspect: { value: window.innerWidth / window.innerHeight }
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
        uniform vec2 uMouse;
        uniform vec2 uVelocity;
        uniform float uTime;
        uniform float uAspect;
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

        void main() {
          vec2 p = vUv;
          vec2 m = uMouse;
          
          p.x *= uAspect;
          m.x *= uAspect;
          
          float dist = distance(p, m);
          float radius = 0.3; 
          
          vec2 offset = vec2(0.0);
          
          float velMag = length(uVelocity);
          if (dist < radius) {
            float strength = smoothstep(radius, 0.0, dist);
            float wave = sin((dist - uTime * 0.1) * 30.0) * 0.03 * strength * smoothstep(0.0, 0.015, velMag);
            offset = (uVelocity * strength * 0.4 + wave * normalize(uVelocity + vec2(0.0001)));
          }
          
          vec2 distortedUv = vUv - offset;
          
          // Generate a smooth abstract background
          float noiseVal = snoise(distortedUv * 3.0 + uTime * 0.05);
          
          vec3 color1 = vec3(1.0, 1.0, 1.0);       // White
          vec3 color2 = vec3(0.96, 0.96, 0.96);    // Light gray
          vec3 color3 = vec3(0.92, 0.94, 0.98);    // Very subtle cool gray/blue
          
          float mixVal = smoothstep(-1.0, 1.0, noiseVal + distortedUv.y);
          vec3 bgColor = mix(color1, color3, mixVal);
          
          // Ripple highlights
          float highlight = length(offset) * 10.0;
          bgColor += vec3(highlight);
          
          gl_FragColor = vec4(bgColor, 1.0);
        }
      `
    });

    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    let currentMouse = new THREE.Vector2(0.5, 0.5);
    let targetMouse = new THREE.Vector2(0.5, 0.5);
    let currentVelocity = new THREE.Vector2(0, 0);
    let targetVelocity = new THREE.Vector2(0, 0);

    const onMouseMove = (e: MouseEvent) => {
      const x = e.clientX / window.innerWidth;
      const y = 1.0 - (e.clientY / window.innerHeight);
      
      const newMouse = new THREE.Vector2(x, y);
      targetVelocity.subVectors(newMouse, targetMouse); 
      targetMouse.copy(newMouse);
    };

    window.addEventListener('mousemove', onMouseMove);

    let animationId: number;
    let time = 0;

    const animate = () => {
      time += 0.05;
      uniforms.uTime.value = time;
      
      currentMouse.lerp(targetMouse, 0.15);
      uniforms.uMouse.value.copy(currentMouse);
      
      currentVelocity.lerp(targetVelocity, 0.1);
      uniforms.uVelocity.value.copy(currentVelocity);
      
      // Decay velocity so it stops when still
      targetVelocity.multiplyScalar(0.85);
      
      renderer.render(scene, camera);
      animationId = requestAnimationFrame(animate);
    };
    
    animate();

    const onResize = () => {
      renderer.setSize(window.innerWidth, window.innerHeight);
      uniforms.uAspect.value = window.innerWidth / window.innerHeight;
    };
    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', onResize);
      cancelAnimationFrame(animationId);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      geometry.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div 
      ref={mountRef} 
      className="fixed inset-0 w-full h-full z-[-1] pointer-events-none" 
    />
  );
}

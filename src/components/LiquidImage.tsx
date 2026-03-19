"use client";

import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

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

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, logarithmicDepthBuffer: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    
    // Clear and append
    container.innerHTML = '';
    container.appendChild(renderer.domElement);
    
    // Render absolute so it overlaps any other elements inside container if needed
    renderer.domElement.style.position = 'absolute';
    renderer.domElement.style.top = '0';
    renderer.domElement.style.left = '0';
    renderer.domElement.style.width = '100%';
    renderer.domElement.style.height = '100%';
    
    const geometry = new THREE.PlaneGeometry(2, 2);
    
    // Load texture
    let texture = new THREE.TextureLoader().load(src);
    texture.minFilter = THREE.LinearFilter;
    texture.magFilter = THREE.LinearFilter;
    
    const uniforms = {
      uTexture: { value: texture },
      uMouse: { value: new THREE.Vector2(0.5, 0.5) },
      uVelocity: { value: new THREE.Vector2(0.0, 0.0) },
      uTime: { value: 0.0 },
      uAspect: { value: container.clientWidth / container.clientHeight }
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
        uniform vec2 uVelocity;
        uniform float uTime;
        uniform float uAspect;
        varying vec2 vUv;
        
        void main() {
          vec2 p = vUv;
          vec2 m = uMouse;
          
          p.x *= uAspect;
          m.x *= uAspect;
          
          float dist = distance(p, m);
          float radius = 0.20; 
          
          vec2 offset = vec2(0.0);
          
          if (dist < radius) {
            float strength = smoothstep(radius, 0.0, dist);
            // Dynamic ripple
            float wave = sin((dist - uTime * 0.1) * 25.0) * 0.015 * strength;
            
            // Texture offset coordinates according to cursor velocity
            offset = uVelocity * strength * 0.6 + wave * normalize(uVelocity + vec2(0.0001));
          }
          
          vec4 color = texture2D(uTexture, vUv - offset);
          
          // Basic alpha to maintain image boundary
          gl_FragColor = color;
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
      const rect = container.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = 1.0 - ((e.clientY - rect.top) / rect.height);
      
      const newMouse = new THREE.Vector2(x, y);
      targetVelocity.subVectors(newMouse, targetMouse); 
      targetMouse.copy(newMouse);
    };

    const onMouseLeave = () => {
      targetVelocity.set(0, 0);
    };

    window.addEventListener('mousemove', onMouseMove);
    container.addEventListener('mouseleave', onMouseLeave);

    let animationId: number;
    let time = 0;

    const animate = () => {
      time += 0.05;
      uniforms.uTime.value = time;
      
      currentMouse.lerp(targetMouse, 0.15);
      uniforms.uMouse.value.copy(currentMouse);
      
      currentVelocity.lerp(targetVelocity, 0.1);
      uniforms.uVelocity.value.copy(currentVelocity);
      
      // Decay velocity
      targetVelocity.multiplyScalar(0.85);
      
      renderer.render(scene, camera);
      animationId = requestAnimationFrame(animate);
    };
    
    animate();

    const onResize = () => {
      if (!container) return;
      renderer.setSize(container.clientWidth, container.clientHeight);
      uniforms.uAspect.value = container.clientWidth / container.clientHeight;
    };
    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      container.removeEventListener('mouseleave', onMouseLeave);
      window.removeEventListener('resize', onResize);
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
    <div ref={mountRef} className={className} style={{ position: 'relative', cursor:'pointer' }}>
      <img src={src} alt={alt} style={{ visibility: 'hidden', width: '100%', height: '100%', objectFit: 'contain' }} />
    </div>
  );
}

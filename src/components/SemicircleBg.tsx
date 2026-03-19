"use client";
import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

export default function SemicircleBg() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;
    const container = mountRef.current;
    
    const scene = new THREE.Scene();
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: "high-performance" });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    
    container.innerHTML = '';
    container.appendChild(renderer.domElement);
    renderer.domElement.style.width = '100%';
    renderer.domElement.style.height = '100%';
    
    let width = container.clientWidth;
    let height = container.clientHeight;
    
    const camera = new THREE.OrthographicCamera(width / -2, width / 2, height / 2, height / -2, 0.1, 100);
    camera.position.z = 10;
    
    const getRadius = () => Math.min(width, height) * 0.45;
    let geometry = new THREE.CircleGeometry(getRadius(), 256, 0, Math.PI);
    
    const uniforms = {
      uMouse: { value: new THREE.Vector2(9999, 9999) },
      uVelocity: { value: new THREE.Vector2(0, 0) },
      uColor: { value: new THREE.Color('#ea5b25') },
      uTime: { value: 0 }
    };
    
    const material = new THREE.ShaderMaterial({
      uniforms,
      vertexShader: `
        uniform vec2 uMouse;
        uniform vec2 uVelocity;
        uniform float uTime;
        
        void main() {
          vec3 pos = position;
          
          vec2 worldPos = (modelMatrix * vec4(pos, 1.0)).xy;
          float dist = distance(worldPos, uMouse);
          float effectRadius = 250.0;
          
          if (dist < effectRadius && length(uVelocity) > 0.0) {
             float strength = smoothstep(effectRadius, 0.0, dist);
             float velMag = length(uVelocity);
             vec2 dir = uVelocity / velMag;
             
             // Base push from velocity
             vec2 push = dir * min(velMag * 2.5, 150.0) * strength;
             
             // Add a ripple/wobble effect based on time and distance
             float wave = sin(uTime * 15.0 - dist * 0.03) * 10.0 * strength;
             
             pos.xy += push + dir * wave;
          }
          
          gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
        }
      `,
      fragmentShader: `
        uniform vec3 uColor;
        void main() {
          gl_FragColor = vec4(uColor, 1.0);
        }
      `,
      transparent: true,
      side: THREE.DoubleSide
    });
    
    const mesh = new THREE.Mesh(geometry, material);
    mesh.position.y = -getRadius() / 2;
    scene.add(mesh);
    
    const onResize = () => {
      width = container.clientWidth;
      height = container.clientHeight;
      camera.left = width / -2;
      camera.right = width / 2;
      camera.top = height / 2;
      camera.bottom = height / -2;
      camera.updateProjectionMatrix();
      
      mesh.geometry.dispose();
      mesh.geometry = new THREE.CircleGeometry(getRadius(), 256, 0, Math.PI);
      mesh.position.y = -getRadius() / 2;
      
      renderer.setSize(width, height);
    };
    window.addEventListener('resize', onResize);
    onResize();
    
    let currentMouse = new THREE.Vector2(9999, 9999);
    let targetMouse = new THREE.Vector2(9999, 9999);
    let targetVelocity = new THREE.Vector2(0, 0);
    let currentVelocity = new THREE.Vector2(0, 0);
    let lastMousePos = new THREE.Vector2(9999, 9999);
    
    const heroSection = container.parentElement;
    
    const onMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = (e.clientX - rect.left) - width / 2;
      const y = -(e.clientY - rect.top) + height / 2;
      
      targetMouse.set(x, y);
      
      if (lastMousePos.x !== 9999) {
         targetVelocity.x = (x - lastMousePos.x);
         targetVelocity.y = (y - lastMousePos.y);
      }
      lastMousePos.set(x, y);
    };

    const onMouseLeave = () => {
      targetVelocity.set(0, 0);
    };
    
    if (heroSection) {
      heroSection.addEventListener('mousemove', onMouseMove);
      heroSection.addEventListener('mouseleave', onMouseLeave);
    }
    
    const clock = new THREE.Clock();
    let animId: number;
    
    const animate = () => {
      animId = requestAnimationFrame(animate);
      uniforms.uTime.value = clock.getElapsedTime();
      
      currentMouse.lerp(targetMouse, 0.15);
      uniforms.uMouse.value.copy(currentMouse);
      
      currentVelocity.lerp(targetVelocity, 0.1);
      uniforms.uVelocity.value.copy(currentVelocity);
      
      targetVelocity.multiplyScalar(0.85); // decay
      
      renderer.render(scene, camera);
    };
    animate();
    
    return () => {
      window.removeEventListener('resize', onResize);
      if (heroSection) {
        heroSection.removeEventListener('mousemove', onMouseMove);
        heroSection.removeEventListener('mouseleave', onMouseLeave);
      }
      cancelAnimationFrame(animId);
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
      className="absolute inset-0 pointer-events-none z-0" 
    />
  );
}

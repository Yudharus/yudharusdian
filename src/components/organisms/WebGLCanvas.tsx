import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export const WebGLCanvas: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // Check if hardware acceleration / webgl is supported
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 45;
    camera.position.y = 10;
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({
      antialias: false, // Turn off antialias on particle points to maximize fps
      alpha: true,
      powerPreference: 'high-performance',
    });

    // Cap devicePixelRatio to 1.5 to eliminate high-DPI rasterizer lag
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5));
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x111113, 1);
    container.appendChild(renderer.domElement);

    // Optimized particle grid: 1200 points (40 x 30) instead of 2400
    const cols = 40;
    const rows = 30;
    const particlesCount = cols * rows;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particlesCount * 3);
    const colors = new Float32Array(particlesCount * 3);

    const color1 = new THREE.Color(0x3f3f46); // zinc dark
    const color2 = new THREE.Color(0x22c55e); // emerald
    const color3 = new THREE.Color(0xe4e4e7); // off-white highlight

    let i3 = 0;
    const spacing = 2.4;

    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        const x = (c - cols / 2) * spacing;
        const z = (r - rows / 2) * spacing;
        const y = 0;

        positions[i3] = x;
        positions[i3 + 1] = y;
        positions[i3 + 2] = z;

        const mixedColor =
          Math.random() > 0.92 ? color2 : Math.random() > 0.82 ? color3 : color1;
        colors[i3] = mixedColor.r;
        colors[i3 + 1] = mixedColor.g;
        colors[i3 + 2] = mixedColor.b;

        i3 += 3;
      }
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    // Lightweight shader with simplified calculations
    const vertexShader = `
      attribute vec3 color;
      varying vec3 vColor;
      uniform float uTime;
      uniform vec2 uMouse;
      uniform float uScroll;

      void main() {
        vColor = color;
        vec3 pos = position;

        // Smooth wave motion
        float dist = length(pos.xz);
        float wave = sin(dist * 0.15 - uTime * 1.0) * 2.0;
        
        // Mouse influence
        float mouseDist = length(pos.xz - uMouse * 30.0);
        float mouseInfluence = smoothstep(16.0, 0.0, mouseDist) * 3.0;

        pos.y += wave + mouseInfluence - (uScroll * 0.015);

        vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
        gl_PointSize = (110.0 / -mvPosition.z);
        gl_Position = projectionMatrix * mvPosition;
      }
    `;

    const fragmentShader = `
      varying vec3 vColor;

      void main() {
        float d = length(gl_PointCoord - vec2(0.5));
        if (d > 0.5) discard;
        float alpha = smoothstep(0.5, 0.08, d) * 0.5;
        gl_FragColor = vec4(vColor, alpha);
      }
    `;

    const material = new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
      uniforms: {
        uTime: { value: 0 },
        uMouse: { value: new THREE.Vector2(0, 0) },
        uScroll: { value: 0 },
      },
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const points = new THREE.Points(geometry, material);
    points.rotation.x = 0.55;
    scene.add(points);

    // Mouse & scroll tracking
    let targetMouseX = 0;
    let targetMouseY = 0;
    let currentMouseX = 0;
    let currentMouseY = 0;
    let scrollY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      targetMouseX = (e.clientX / window.innerWidth) * 2 - 1;
      targetMouseY = -(e.clientY / window.innerHeight) * 2 + 1;
    };

    const handleScroll = () => {
      scrollY = window.scrollY;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('scroll', handleScroll, { passive: true });

    const handleResize = () => {
      if (!renderer || !camera) return;
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    // Visibility change detection (pause loop when tab inactive)
    let isTabVisible = !document.hidden;
    const handleVisibilityChange = () => {
      isTabVisible = !document.hidden;
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);

    // Optimized Animation Loop
    let animationId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      animationId = requestAnimationFrame(animate);

      if (!isTabVisible) return;

      const elapsedTime = clock.getElapsedTime();
      material.uniforms.uTime.value = elapsedTime;

      currentMouseX += (targetMouseX - currentMouseX) * 0.04;
      currentMouseY += (targetMouseY - currentMouseY) * 0.04;
      material.uniforms.uMouse.value.set(currentMouseX, currentMouseY);
      material.uniforms.uScroll.value = scrollY;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      if (container && renderer.domElement) {
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
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
      style={{ opacity: 0.8 }}
    />
  );
};

// three-scene.js
// Signature 3D piece for the "Tech Orb" section — a wireframe icosahedron
// with two orbiting rings and a drifting point cloud, built in vanilla
// Three.js via ES module CDN import (no bundler, matches the rest of the
// site). Pauses when off-screen or when the tab is hidden, and is skipped
// entirely under prefers-reduced-motion — same discipline as the hero's
// WebGL shader in index.html.

import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.170.0/build/three.module.js';

const canvas = document.getElementById('tech-orb-canvas');

if (canvas && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const ACCENT = 0x5b7dff; // --accent
  const GOLD = 0xd9a24c;   // --accent-2 / --gold

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 100);
  camera.position.set(0, 0, 6);

  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
  const MAX_DPR = 1.75; // same DPR cap philosophy as the hero shader
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, MAX_DPR));

  // Central wireframe icosahedron in the site's accent blue
  const core = new THREE.Mesh(
    new THREE.IcosahedronGeometry(1.6, 1),
    new THREE.MeshBasicMaterial({ color: ACCENT, wireframe: true, transparent: true, opacity: 0.85 })
  );
  scene.add(core);

  // Two gold rings, tilted opposite ways — echoes the hero shader's
  // blue/gold palette so this reads as one design system, not a bolt-on
  const ring = new THREE.Mesh(
    new THREE.TorusGeometry(2.3, 0.012, 12, 120),
    new THREE.MeshBasicMaterial({ color: GOLD, transparent: true, opacity: 0.55 })
  );
  ring.rotation.x = Math.PI / 2.6;
  scene.add(ring);

  const ring2 = ring.clone();
  ring2.rotation.x = -Math.PI / 3.1;
  ring2.rotation.y = Math.PI / 5;
  scene.add(ring2);

  // Soft point cloud drifting behind the core
  const dotCount = 140;
  const positions = new Float32Array(dotCount * 3);
  for (let i = 0; i < dotCount; i++) {
    const r = 3.2 + Math.random() * 1.4;
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos(2 * Math.random() - 1);
    positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
    positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
    positions[i * 3 + 2] = r * Math.cos(phi);
  }
  const dotsGeo = new THREE.BufferGeometry();
  dotsGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  const dots = new THREE.Points(
    dotsGeo,
    new THREE.PointsMaterial({ color: ACCENT, size: 0.02, transparent: true, opacity: 0.4 })
  );
  scene.add(dots);

 let scrollProgress = 0;
  window.setTechOrbScrollProgress = (p) => { scrollProgress = p; };
  function resize() {
    const rect = canvas.getBoundingClientRect();
    if (rect.width === 0) return;
    camera.aspect = rect.width / rect.height;
    camera.updateProjectionMatrix();
    renderer.setSize(rect.width, rect.height, false);
  }
  window.addEventListener('resize', resize);
  resize();

  // Pointer parallax — same restrained-interaction language as the hero
  let targetX = 0, targetY = 0, curX = 0, curY = 0;
  canvas.addEventListener('pointermove', (e) => {
    const rect = canvas.getBoundingClientRect();
    targetX = ((e.clientX - rect.left) / rect.width - 0.5) * 0.6;
    targetY = ((e.clientY - rect.top) / rect.height - 0.5) * 0.6;
  });

  // Pause rendering when the section is off-screen — extends the same
  // visibilitychange discipline the hero shader already uses
  let visible = true;
  const observer = new IntersectionObserver(
    ([entry]) => { visible = entry.isIntersecting; },
    { threshold: 0.05 }
  );
  observer.observe(canvas);

  function animate() {
    requestAnimationFrame(animate);
    if (!visible || document.hidden) return;

    core.rotation.y += 0.0026;
    core.rotation.x += 0.0011;
    ring.rotation.z += 0.0017;
    ring2.rotation.z -= 0.0013;
    dots.rotation.y += 0.0006;

    curX += (targetY - curX) * 0.05;
    curY += (targetX - curY) * 0.05;
    scene.rotation.x = curX;
    scene.rotation.y = curY;

    camera.position.z = 6 - scrollProgress * 1.6;
    scene.rotation.z = (scrollProgress - 0.5) * 0.7;

    renderer.render(scene, camera);
  }
  animate();
}
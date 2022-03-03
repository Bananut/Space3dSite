import './style.css'
import * as THREE from 'three';

//Create camera
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#bg'),
});

//render
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(30);
renderer.render(scene, camera);

//create geometry
const geometry = new THREE.BoxGeometry(15, 15, 15);
const matrial = new THREE.MeshBasicMaterial({wireframe: true});
const box = new THREE.Mesh(geometry, matrial);
scene.add(box);

//lighting
const ambientLight = new THREE.AmbientLight(0xffffff);
scene.add(ambientLight);

//animate
function animate(){
  requestAnimationFrame(animate);
  box.rotation.x += 0.01;
  box.rotation.y += 0.005;
  renderer.render(scene, camera);
}
animate()

//move camera on scroll
function moveCamera(){
  const t = document.body.getBoundingClientRect().top;
  camera.position.z = t * 0.025 + 30;
}

document.body.onscroll = moveCamera;
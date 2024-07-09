import * as THREE from 'three'

export function lights(scene) {
    const ambientLight = new THREE.AmbientLight(0x404040);
    const directionalLight = new THREE.DirectionalLight(0xB3B3B3, 1);
    const directionalLight2 = new THREE.DirectionalLight(0x8E7F75, 2);

    directionalLight.position.set(5, 5, 5).normalize();
    directionalLight2.position.set(-5, 5, 5).normalize();

    scene.add(ambientLight);
    scene.add(directionalLight);
    scene.add(directionalLight2);
}
import * as THREE from 'three'

export function lights(scene) {
    const ambientLight = new THREE.AmbientLight(0x404040);
    const directionalLight = new THREE.DirectionalLight(0xDEDEDE, 4);
    const directionalLight2 = new THREE.DirectionalLight(0xDEDEDE, 3);

    directionalLight.position.set(5, 5, 5).normalize();
    directionalLight2.position.set(-10, 2, 5).normalize();

    scene.add(ambientLight);
    scene.add(directionalLight);
    scene.add(directionalLight2);
}
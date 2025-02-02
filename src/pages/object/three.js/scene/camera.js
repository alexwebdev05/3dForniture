import * as THREE from 'three';

export function myCamera(mount) {
    const camera = new THREE.PerspectiveCamera(75, mount.clientWidth / mount.clientHeight, 0.1, 1000);
    camera.position.z = 4.5;
    camera.position.y = 1;
    return camera;
}
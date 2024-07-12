import * as THREE from 'three';

export function myCamera(mount) {
    const camera = new THREE.PerspectiveCamera(50, mount.clientWidth / mount.clientHeight, 0.1, 1000);
    camera.position.z = 5.5;
    return camera;
}
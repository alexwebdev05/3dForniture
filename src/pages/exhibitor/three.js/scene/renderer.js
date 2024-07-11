import * as THREE from 'three';

export function myRenderer(mount, pointer, camera, raycaster) {
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    // Window
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setClearColor(0x000000, 0)

    // Raycaster
    raycaster.setFromCamera( pointer, camera );

    mount.appendChild(renderer.domElement);

    return renderer
}



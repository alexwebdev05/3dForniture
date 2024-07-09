import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

export function modelCreator(scene, modelRef) {
    const loader = new GLTFLoader()

    loader.load('src/pages/home/three.js/assets/models/grayChair.glb', (gltf) => {
        const model = gltf.scene;
        scene.add(model)
        modelRef.current = model;
    })
}
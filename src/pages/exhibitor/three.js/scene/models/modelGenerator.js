import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

export function modelCreator(scene, modelRef, modelPath) {
    const loader = new GLTFLoader()

    loader.load(modelPath, (gltf) => {
        const model = gltf.scene;
        scene.add(model)
        modelRef.current = model;
    })
}
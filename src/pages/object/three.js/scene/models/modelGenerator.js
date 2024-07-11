import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

export function modelCreator(scene, modelRef, modelPath) {
    const loader = new GLTFLoader()

    loader.load(modelPath, function(gltf) {
        const model = gltf.scene;
        model.rotation.y = 0.6
        scene.add(model)
        modelRef.current = model;
    })
}
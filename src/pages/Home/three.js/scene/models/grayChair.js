import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { fornitures } from '../../../../../fornitures/fornitures'

export function modelCreator(scene, modelRef) {
    const loader = new GLTFLoader()

    loader.load(fornitures.chair1.path, (gltf) => {
        const model = gltf.scene;
        scene.add(model)
        modelRef.current = model;
    })
}
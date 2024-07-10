import { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import * as THREE from 'three';

// Modules
import { myRenderer } from './scene/renderer';
import { lights } from './scene/lightning';
import { myCamera } from './scene/camera';

// Models
import { modelCreator } from './scene/models/modelGenerator';

import styles from './three.module.css';

function Three({ modelPath }) {
  const mountRef = useRef(null);
  const modelRef = useRef(null);

  useEffect(() => {
    const raycaster = new THREE.Raycaster();
    const pointer = new THREE.Vector2();
    const mount = mountRef.current;
    const camera = myCamera(mount);
    const scene = new THREE.Scene();
    const renderer = myRenderer(mount, pointer, camera, raycaster);

    // Lights
    lights(scene);

    // 3D models
    modelCreator(scene, modelRef, modelPath);

    let center = new THREE.Vector3();
    
    // Look at


    function onMouseMove(event) {
      pointer.x = -( event.clientX / window.innerWidth ) + 3;
      pointer.y = ( event.clientY / window.innerHeight );
    }

    window.addEventListener('pointermove', onMouseMove)

    // Animation
    const animate = () => {
      requestAnimationFrame(animate);

      if (modelRef.current) {
        const vector = new THREE.Vector3(pointer.x, pointer.y, 0.5).unproject(camera);
        vector.sub(camera.position).normalize();
        const distance = (camera.position.z / vector.z );
        const pos = camera.position.clone().add(vector.multiplyScalar(distance));

        modelRef.current.lookAt(pos);
      }


      if (modelRef.current) {
        const box = new THREE.Box3().setFromObject(modelRef.current);
        center = box.getCenter(new THREE.Vector3());
      }

      // Look at the center of the model
      camera.lookAt(center);

      renderer.render(scene, camera);
    };
    animate();

    // Clean up
    return () => {
      window.removeEventListener('pointermove', onMouseMove);
      if (renderer && renderer.domElement) {
        mount.removeChild(renderer.domElement);
      }
    };
  }, [modelPath]);

  return (
    <>
      <div ref={mountRef} className={styles.container} />
    </>
  );
}

Three.propTypes = {
  modelPath: PropTypes.string.isRequired,
};

export default Three;

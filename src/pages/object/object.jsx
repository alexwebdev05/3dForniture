// Components
import Brand from '../../components/brand'
import Footer from '../../components/footer'

import './style.scss'

import Three from './three.js/three'
import { useLocation } from 'react-router-dom';


function Object() {
    const location = useLocation();
    const { name, path, description } = location.state;

    return (
        <div className='contentBody'>
            {/* Brand */}
            <Brand />
            
            {/* Content */}
            <div id='objectContent'>

                {/* 3D Model */}
                <section id='object3dModel'>
                    <Three modelPath={path} />
                </section>

                {/* Expecifications */}
                <section id='objectExpecifications' className='white'>
                    <h2>{name}</h2>
                    <h3>Why Choose {name}?</h3>
                    <p>{description}</p>
                </section>

            </div>

            {/* Footer */}
            <Footer />
        </div>
    )
}

export default Object
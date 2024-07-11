// Components
import Brand from '../../components/brand'
import Footer from '../../components/footer'

import './style.scss'

import Three from './three.js/three'
import { fornitures } from '../../fornitures/fornitures'

function Object() {
    return (
        <div className='contentBody'>
            {/* Brand */}
            <Brand />
            
            {/* Content */}
            <div id='objectContent'>

                {/* 3D Model */}
                <section id='object3dModel'>
                    <Three modelPath={fornitures.chair1.path} />
                </section>

                {/* Expecifications */}
                <section id='objectExpecifications'>
                    <h2>{fornitures.chair1.name}</h2>
                    <h3>Why Choose the Ultimate Comfort Grey Office Chair?</h3>
                    <p>In today’s fast-paced work environment, comfort and efficiency are paramount. Our Ultimate Comfort Grey Office Chair ensures that you can focus on your tasks without the distraction of discomfort. Whether you are working from home or in a corporate office, this chair is designed to enhance your sitting experience and support your wellbeing.</p>
                </section>

            </div>

            {/* Footer */}
            <Footer />
        </div>
    )
}

export default Object
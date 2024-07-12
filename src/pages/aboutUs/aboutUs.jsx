// Components
import Brand from '../../components/brand'
import Footer from '../../components/footer'

import './style.scss'

function AboutUs() {
    return (
        <div className='contentBody'>
            {/* Brand */}
            <Brand />

            {/* Content */}
            <section id='aboutContent' className='white'>
            <h2>Hello, I'm alexwebdev05</h2>
            <p>I created this project to showcase my skills in web development. You can explore more of my work on <a href="https://github.com/alexwebdev05" target="_blank">my GitHub profile</a>. I encourage you to visit my GitHub if you find my projects intriguing.</p>
            <p>Regarding this project, it's built using React and Three.js, with models sourced from <a href="https://www.blenderkit.com/" target="_blank">BlenderKit</a>.</p>

            </section>

            {/* Footer */}
            <Footer />
        </div>
    )
}

export default AboutUs
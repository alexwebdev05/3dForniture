import { useNavigate } from 'react-router-dom';
import './style.scss'

// Components
import Brand from '../../components/brand'
import Footer from '../../components/footer'
import Button from '../../components/button';
import Three from './three.js/three'

function Home() {
  const navigate = useNavigate();

  const shop = () => {
    navigate('/shop');
  };

  const aboutUs = () => {
    navigate('/aboutUs');
  };


  return (
    <div className='contentBody'>
      {/* Brand */}
      <Brand />

      {/* Content */}
      <section id='homeContent'>
        <div id='textAndModel'>
          <p className='white'>At <span>3dFornitures</span> we are committed to offering the highest quality furniture on the market at a fair price.<div id='fornitureButtons'>
          <Button onClick={shop}>Exhibitor</Button>
          <Button onClick={aboutUs}>About us</Button>
        </div></p>
          <Three />
        </div>
        
        
      </section>
      

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default Home

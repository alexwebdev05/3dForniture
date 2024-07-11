import { useNavigate } from 'react-router-dom';

// Components
import Brand from '../../components/brand'
import Footer from '../../components/footer'
// import Button from '../../components/button';
import Card from '../../components/card'

import './style.scss'
import { fornitures } from '../../fornitures/fornitures'

function Shop() {
  const navigate = useNavigate();

  const object = () => {
    navigate('/object');
  };

  return (
    <div className='contentBody'> 
      {/* Brand */}
      <Brand />

       {/* Content */}
      <section id='shopContent'>
        <h2>Shop</h2>
        <section id='cards'>
          <Card modelPath={fornitures.chair1.path} onClick={ object } />
          <Card modelPath={fornitures.chair2.path} onClick={ object } />
          <Card modelPath={fornitures.dresser1.path} onClick={ object } />
          <Card modelPath={fornitures.dresser2.path} onClick={ object } />
          <Card modelPath={fornitures.shelf1.path} onClick={ object } />
          <Card modelPath={fornitures.chair1.path} onClick={ object } />
          <Card modelPath={fornitures.chair1.path} onClick={ object } />
          <Card modelPath={fornitures.chair1.path} onClick={ object } />
        </section>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}
  
export default Shop
  
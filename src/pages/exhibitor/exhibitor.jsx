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

  const object = (name, path, description) => {
    navigate('/object', { state: { name, path, description } });
  };

  const keys = Object.keys(fornitures);

  return (
    <div className='contentBody'> 
      {/* Brand */}
      <Brand />

       {/* Content */}
      <section id='shopContent'>
        <h2>Shop</h2>
        <section id='cards'>
          <Card modelNumber={0} onClick={() => object(fornitures[keys[0]].name, fornitures[keys[0]].path, fornitures[keys[0]].description)} />
          <Card modelNumber={1} onClick={() => object(fornitures[keys[1]].name, fornitures[keys[1]].path, fornitures[keys[1]].description)} />
          <Card modelNumber={2} onClick={() => object(fornitures[keys[2]].name, fornitures[keys[2]].path, fornitures[keys[2]].description)} />
          <Card modelNumber={3} onClick={() => object(fornitures[keys[3]].name, fornitures[keys[3]].path, fornitures[keys[3]].description)} />
          <Card modelNumber={4} onClick={() => object(fornitures[keys[4]].name, fornitures[keys[4]].path, fornitures[keys[4]].description)} />
        </section>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}
  
export default Shop
  
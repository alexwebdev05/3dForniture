// import { useNavigate } from 'react-router-dom';

// Components
import Brand from '../../components/brand'
import Footer from '../../components/footer'
// import Button from '../../components/button';
import Card from '../../components/card'

import './style.scss'

function Shop() {
  // const navigate = useNavigate();

  // const home = () => {
  //   navigate('/');
  // };

    return (
      <div id='shopBody'>
        <Brand />

        {/* Content */}
        <section id='shopContent'>
        {/* <Button onClick={home}>About us</Button> */}
          <h2>Shop</h2>
          <section id='cards'>
            <Card modelPath='src/pages/shop/three.js/assets/models/grayChair.glb' />
            <Card modelPath='src/pages/shop/three.js/assets/models/officeChair.glb' />
            <Card modelPath='src/pages/shop/three.js/assets/models/table1.glb' />
            <Card modelPath='src/pages/shop/three.js/assets/models/table2.glb' />
            <Card modelPath='src/pages/shop/three.js/assets/models/officeChair.glb' />
            <Card modelPath='src/pages/shop/three.js/assets/models/officeChair.glb' />
            <Card modelPath='src/pages/shop/three.js/assets/models/officeChair.glb' />
            <Card modelPath='src/pages/shop/three.js/assets/models/officeChair.glb' />

          </section>
          
        </section>

        <Footer />
      </div>
    )
}
  
export default Shop
  
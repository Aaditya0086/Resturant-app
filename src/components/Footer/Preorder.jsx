import React from 'react';

import SubHeading from '../SubHeading/SubHeading';
import './Preorder.css';

const Preorder = () => (
  <div className='app__preorder'>
    <div className='app__preorder-heading'>
      <SubHeading title='Pre-Oredr' />
      <h1 className='headtext__cormorant'>Pamper your Taste Buds!</h1>
      <p className='p__opensans'>Try our food today!</p>
    </div>
    <div className='app__preorder-input flex__center'>
      <input type="Email" placeholder='Enter your order ' />
      <button className='custom__button'>Place Order</button>
    </div>
  </div>
);

export default Preorder;

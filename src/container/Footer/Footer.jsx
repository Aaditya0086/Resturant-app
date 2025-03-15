import React from 'react';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';

import { FooterOverlay } from '../../components';
import { images } from '../../constants';
import './Footer.css';
import Preorder from '../../components/Footer/Preorder';

const Footer = () => (
  <div className='app__footer section__padding '>
    <FooterOverlay />
    <Preorder />

    <div className='app__footer-links'>
      <div className='app__footer-links_contact'>
        <h1 className='app__footer-headtext'>
          Contact Us
        </h1>
        <p className='p__opensans'>Address</p>
        <p className='p__opensans'>Phone.No-1</p>
        <p className='p__opensans'>Phone.No-2</p>
      </div>

      <div className='app__footer-links_logo'>
        <img src={images.gericht} alt="gericht_img" />
        <p className='p__opensans'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis atque explicabo magnam!</p>
        <img src={images.spoon} alt="spoon_img" className='spoon__img' style={{marginTop: 15}}/>
        <div className='app__footer-links_icons'>
          <a href='https://www.facebook.com' target='_blank' rel='noopener noreferrer'><FiFacebook /></a>
          <a href='https://www.twitter.com' target='_blank' rel='noopener noreferrer'><FiTwitter /></a>
          <a href='https://www.instagram.com/startersandmore_bynv?igsh=MW41cDFsNmd5MmxhNg==' target='_blank' rel='noopener noreferrer'><FiInstagram /></a>
        </div>
      </div>

      <div className='app__footer-links_work'>
      <h1 className='app__footer-headtext'>
          Working Hours
        </h1>
        <p className='p__opensans'>Monday - Friday</p>
        <p className='p__opensans'>8:00 a.m - 5:00 p.m</p>
        <p className='p__opensans'>Saturday - Sunday</p>
        <p className='p__opensans'>10:00 a.m - 2:00 p.m</p>
      </div>
    </div>
    <div className='footer__copyright'>
      <p className='p__opensans'>2025 StartersAndMoreByNV. All Rights Reserved.</p>
    </div>
  </div>
);

export default Footer;

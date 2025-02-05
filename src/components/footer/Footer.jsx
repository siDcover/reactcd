import React, { Component } from 'react';
import FooterItem from './FooterItem';
import './Footer.scss';
export default class Footer extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {bgImage} = this.props;
    // const faceBook = publicUrl+"/images/icon-facebook.svg";
    // const 
    return (
      <footer className="footer" style={{ 
          backgroundImage: `url(${bgImage})`,
        }}>
        <ul className="footer__social">
          <FooterItem type="facebook" />
          <FooterItem type="pinterest" />
          <FooterItem type="instagram" />
        </ul>
        
        <div className="attribution">
          
          Coded by <a href="https://www.instagram.com/sidd.dmg/">Sidd.dmg</a>.
        </div>
      </footer>
    )
  }
}

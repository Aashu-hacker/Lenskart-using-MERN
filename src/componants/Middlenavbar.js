import React from 'react';

export default function Middlenavbar() {
    return (
    <div id="nav-bar">
        <div id="left-text">
          <div onclick="location.href='products.html'" id="eyeglasses">
            Eyeglasses
          </div>
          <div onclick="location.href='products.html'" id="computer-glasses">
            Computer Glasses
          </div>
          <div onclick="location.href='products.html'" id="kids-glasses">
            Kids Glasses
          </div>
          <div onclick="location.href='products.html'" id="contact-lenses">
            Contact Lenses
          </div>
          <div onclick="location.href='products.html'" id="sunglasses">
            Sunglasses
          </div>
          <div id="home-eye-test">Home Eye-Test with Trial</div>
          <div id="store-locator">Store Locator</div>
        </div>
        <div class="space"></div>
        <div id="right-images">
          <img onclick="window.location.href = 'tryon.html'" src="https://static.lenskart.com/media/desktop/img/menu/icon_try_on.svg" alt=""/>
          <img src="https://static.lenskart.com/media/desktop/img/menu/blu-icon.svg" alt=""/>
          <img src="https://static.lenskart.com/media/desktop/img/menu/gold-icon.svg" alt=""/>
        </div>
      </div>
    );
} 
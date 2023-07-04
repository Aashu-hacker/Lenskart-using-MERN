import React from 'react';
import '../assets/css/homepage.css';
import '../assets/css/homepage-navbar.css';
import '../assets/fonts/ionicons.ttf';
import '../assets/fonts/ionicons.svg';
import '../assets/fonts/ionicons.eot';
import '../assets/fonts/ionicons.woff';

export default function Navbar() {
    return (
<div id="nav-bar-middle">
        <div>
          <img class="cursor-pointer" onclick="location.href='homepage.html'" src="https://static1.lenskart.com/media/desktop/img/lk-logo-f.png" alt=""/>
        </div>
        <div>
          <div id="search-box">
            <input type="text" placeholder="What are you looking for ?"/>
            <i class="material-icons" onclick="location.href='products.html'">search</i>
          </div>
        </div>
        <div id="nav-bar-middle-right-box">
          <div id="user-logged">Name</div>
          <div class="cursor-pointer" id="user-name">
            <div onclick="signin()">Sign In &amp;&nbsp;</div>
            <div onclick="signup()">Sign Up</div>
          </div>

          <div class="cursor-pointer">Track Order</div>
          <div class="cursor-pointer">
            <i  class="material-icons">favorite_border</i>
            <div>Shortlist</div>
          </div>
          <div class="cursor-pointer">
            <i class="material-icons shopping_cart">shopping_cart</i>
            <div>Cart</div>
          </div>
        </div>

      </div>
    );
} 
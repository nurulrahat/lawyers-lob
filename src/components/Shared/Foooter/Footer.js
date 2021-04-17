import { faFacebook, faLinkedin, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Footer = () => {
    return (
        <div>
            <footer class="bg-white">
    <div class="container py-5">
      <div class="row py-4">
        <div class="col-lg-4 col-md-6 mb-4 mb-lg-0"><img src="img/logo.png" alt="" width="180" class="mb-3"/>
          <h6 class="text-uppercase font-weight-bold mb-4">Location </h6>
          <p class="mb-4"> LOS-Angelous,USA <br/> 30/2 DA, California </p>
        </div>
        <div class="col-lg-2 col-md-6 mb-4 mb-lg-0">
          <h6 class="text-uppercase font-weight-bold mb-4">Social Platforms</h6>
          <ul class="list-unstyled mb-0">
            <li class="mb-2"><a href="#facebook.com" class="text-muted"><a href="#facebook.com" target="_blank" title="twitter"><FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon></a> Facebook</a></li>
            <li class="mb-2"><a href="#facebook.com" class="text-muted"><a href="#facebook.com" target="_blank" title="twitter"><FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon></a> LinkedIn</a></li>
            <li class="mb-2"><a href="#facebook.com" class="text-muted"><a href="#facebook.com" target="_blank" title="twitter"><FontAwesomeIcon icon={faYoutube}></FontAwesomeIcon></a>  YouTube</a></li>
            <li class="mb-2"><a href="#facebook.com" class="text-muted"><a href="#facebook.com" target="_blank" title="twitter"><FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon></a> Twitter</a></li>
          </ul>
        </div>
        <div class="col-lg-2 col-md-6 mb-4 mb-lg-0">
          <h6 class="text-uppercase font-weight-bold mb-4">Company</h6>
          <ul class="list-unstyled mb-0">
            <li class="mb-2"><a href="#facebook.com" class="text-muted">Home</a></li>
            <li class="mb-2"><a href="#facebook.com" class="text-muted">LogIn</a></li>
            <li class="mb-2"><a href="#facebook.com" class="text-muted">Checkout</a></li>
            <li class="mb-2"><a href="#facebook.com" class="text-muted">Our Services</a></li>
          </ul>
        </div>
        <div class="col-lg-4 col-md-6 mb-lg-0">
          <h6 class="text-uppercase font-weight-bold mb-4">Recents</h6>
          <p class="mb-4"> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure at obcaecati accusamus sit aperiam sequi similiqu</p>
          <div class="p-1 rounded border">
            <div class="input-group">
              <input type="email" placeholder="Enter your email address" aria-describedby="button-addon1" class="form-control border-0 shadow-0"/>
              <div class="input-group-append">
                <button id="button-addon1" type="submit" class="btn btn-link">LogIn</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-light py-4">
      <div class="container text-center">
        <p class="text-muted mb-0 py-2">©2020 All rights reserved by Nurul-Rahat</p>
      </div>
    </div>
  </footer>
        </div>
        
    );
};

export default Footer;
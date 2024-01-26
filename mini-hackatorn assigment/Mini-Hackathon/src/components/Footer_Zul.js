import React from 'react';
import './Footer.css';
import { Button } from './Button_Zul';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      {/* Newsletter Subscription */}
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Join the caffeine newsletter to receive the best deals
        </p>
        <p className='footer-subscription-text'>
          You can unsubscribe at any time.
        </p>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Your Email'
            />
            <Button buttonStyle='btn--outline'>Subscribe</Button>
          </form>
        </div>
      </section>

      {/* Footer Links */}
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2 style={{marginRight: '0px', marginLeft: '0px', color: 'black'}}>LINKS</h2>
            <Link to='/'>Homepage</Link>
            <Link to='/about'>Our Story</Link>
            <Link to='/menu'>Menu</Link>
          </div>
          <div class='footer-link-items' style={{marginTop: '112px'}}>
            <Link to='/contacts'>Contact Us</Link>
            <Link to='/'>Terms of Service</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2 style={{marginRight: '0px', marginLeft: '0px', color: 'black'}}>CONTACTS</h2>
            <Link to='/contact'>hello@cssb.com</Link>
          </div>
          <div class='footer-link-items'>
            <h2 style={{marginRight: '0px', marginLeft: '0px', color: 'black'}}>SOCIALS</h2>
            <Link to='/'>Instagram</Link>
            <Link to='/'>Facebook</Link>
            <Link to='/'>Youtube</Link>
            <Link to='/'>Twitter</Link>
          </div>
        </div>
      </div>

      {/* Social Media */}
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              CSSB
              <i class='fab fa-typo3' />
            </Link>
          </div>
          <small class='website-rights'>CSSB © 2024 ALL RIGHTS RESERVED</small>
          <div class='social-icons'>
            <Link
              class='social-icon-link facebook'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <i class='fab fa-facebook-f' />
            </Link>
            <Link
              class='social-icon-link instagram'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </Link>
            <Link
              class='social-icon-link youtube'
              to='/'
              target='_blank'
              aria-label='Youtube'
            >
              <i class='fab fa-youtube' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <i class='fab fa-twitter' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i class='fab fa-linkedin' />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
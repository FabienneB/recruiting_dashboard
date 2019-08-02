import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStream } from '@fortawesome/free-solid-svg-icons';

class Navbar extends React.Component{
  render() {
      return (
          <div id='nav'>
            <img href="#" src='https://cdn.welcometothejungle.co/wttj-front/assets/images/logos/wttj-square.svg?v=3d08f2d8bd6c511554a458de77694a89' alt='wttj-logo'></img>
            <div id='stream-icons'><FontAwesomeIcon icon={faStream} className='stream-icon' /></div>
          </div>
      );
  }
}

export default Navbar;
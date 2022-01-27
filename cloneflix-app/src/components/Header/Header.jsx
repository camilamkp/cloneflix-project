import React from 'react';
import './Header.scss'

import logo from '../../Images/cloneflix.png'

const Header = ({ black }) =>
{

  return (
    <header className={ black ? 'header-black' : '' }>
      <div className="header-logo">

          <a href="/dashboard">
              <img src={ logo } alt="cloneflix" />
          </a>
          
      </div>
        <div className="header-login">

            <a className='avatar' href="/login">
                <img src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/366be133850498.56ba69ac36858.png" alt="user avatar" />
            </a> 

        </div>
           
    </header>
)
};

export default Header;
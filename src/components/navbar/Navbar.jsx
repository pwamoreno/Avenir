import React, { useState} from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/logo.svg';
import './navbar.css';


const Menu = () => (
  <>
    <p><a href='#home'>Home</a></p>
    <p><a href='#whatisavenir'>What is Avenir?</a></p>
    <p><a href='#possibility'>Open AI</a></p>
    <p><a href='#features'>Case Studies</a></p>
    <p><a href='#blog'>Library</a></p>
  </>
)

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false)

  return (
    <div className='avenir__navbar'>
      <div className='avenir__navbar-links'>
        <div className='avenir__navbar-links_logo'>
          <img src={logo} alt='avenir logo'/>
        </div>
        <div className='avenir__navbar-links_container'>
          <Menu />
        </div>
      </div>
      <div className='avenir__navbar-sign'>
        <p>Sign in</p>
        <button type='button'>Sign Up</button>
      </div>
      <div className='avenir__navbar-menu'>
        {toggleMenu
        ? <RiCloseLine color='#fff' size={27} onClick={() => setToggleMenu(false)}/> 
        : <RiMenu3Line color='#fff' size={27} onClick={() => setToggleMenu(true)}/>
        }
        {toggleMenu && (
          <div className='avenir__navbar-menu_container scale-up-center'>
            <div className='avenir__navbar-menu_container-links'>
              <Menu />
              <div className='avenir__navbar-menu_container-links-sign'>
                <p>Sign in</p>
                <button type='button'>Sign Up</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar
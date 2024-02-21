import React from 'react'
import logo from '../images/logo.png'
import { pagelinks } from '../data';
import { socialLinks } from '../data';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="nav-logo" alt="FamilyCoach" />
          <button type="button" className="nav-toggle" id="nav-toggle">
            <i className="fas fa-bars"></i>
          </button>
        </div> 
        <ul className="nav-links" id="nav-links">
          {
            pagelinks.map((link)=>{
              return (
                <li key={link.id}>
                  <a href={link.href} className="nav-link"> {link.text} </a>
                </li>
              )

            })
          }

          
        </ul>

        <ul className="nav-icons">
          {
            socialLinks.map((social) => {
              return (
                <li key={social.id}>
                  <a href={social.href} target="_blank" className="nav-icon"
                    ><i className={social.icon}></i></a>
                </li>
              )
            })
          }
          
          
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
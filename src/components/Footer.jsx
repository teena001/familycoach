import React from 'react'
import { pagelinks, socialLinks } from '../data'

const Footer = () => {
  return (
    <footer className="section footer">
      <ul className="footer-links">
         {
          pagelinks.map((link) =>{
            const {id, href, text} = link
            return (
            <li key={link.id}>
                <a href={href} className="footer-link">{text}</a>
              </li>
            )
          })
         } 
      </ul>
      <ul className="footer-icons">
        {
          socialLinks.map((social) => {
            const {id, href, icon} = social
            return (
              <li>
                <a href={href} target="_blank" className="footer-icon"
                  ><i className={icon}></i></a>
              </li>

            )
          })
        }
         
      </ul>
      <p className="copyright">
        copyright &copy; Backroads travel tours company
        <span id="date">{new Date().getFullYear()}</span> all rights reserved
      </p>
    </footer>
  )
}

export default Footer
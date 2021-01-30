import React from 'react'
import './Footer.css'

function Footer() {
  let date = new Date();
  return (
    <div className="footer">
      <p><i className="far fa-copyright"></i> { date.getFullYear() } Apiki | Empresa especializada em Wordpress</p>
    </div>
  )
}

export default Footer;
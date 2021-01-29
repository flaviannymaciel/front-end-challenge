import React from 'react';
import './Header.css'

function Header() {
  return (
    <header className="container-header">
      <div className="">
      <a href="/">
        <img
          className=""
          src="https://blog.apiki.com/wp-content/uploads/sites/2/2020/04/marca-apiki-blog-h552-e1595420262681.png"
          alt="logo_do_blog_apiki_dev"
        />
      </a>
      </div>

      <div className="nav-item">
        <a
          href="https://www.facebook.com/ApikiWordPress"
          target="blank"
        >
          <i className="fa fa-facebook"></i>
        </a>
        <a
          href="https://www.linkedin.com/company/apiki"
          target="blank"
        >
          <i className="fa fa-linkedin"></i>
        </a>
        <a
          href="https://www.instagram.com/apikiwordpress/"
          target="blank"
        >
          <i className="fa fa-instagram"></i>
        </a>
        <a
          href="https://twitter.com/apikiWordPress"
          target="blank"
        >
          <i className="fa fa-twitter"></i>
        </a>
        <a
          href="https://www.youtube.com/channel/UC__ToR3hqjs1ZktdLIWqYFA"
          target="blank"
        >
          <i className="fa fa-youtube-play"></i>
        </a>
        <a href="https://github.com/Apiki" target="blank">
          <i className="fa fa-github"></i>
        </a>
        <a href="https://blog.apiki.com/feed/" target="blank">
          <i className="fa fa-rss"></i>
        </a>
      </div>
    </header>
  );
}

export default Header;

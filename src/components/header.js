import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header class="masthead">
    <h1 class="masthead__brand">
      <Link to="/">
        {siteTitle}
      </Link>
    </h1>
    <div className="masthead__contact-info">
      <p className="masthead__phone">
        <span class="fa fa-lg fa-phone"></span> (937) 376-8223
      </p>
      <p className="masthead__address">
        <span class="fa fa-lg fa-map-marker-alt"></span> 1121 Dayton Ave, Xenia, OH 45385
      </p>
    </div>
    <p className="masthead__e-giving">
      <Link href="https://give.egive-usa.com/dl/?uid=eGive14263Conv">e-Giving</Link>
    </p>
    <ul className="masthead__socials">
      <li>
        <Link href="https://www.facebook.com/Dayton-Avenue-Baptist-Church-228381720531381/" title="Visit us on Facebook">
          <span class="fab fa-lg fa-facebook-f"></span>
        </Link>
      </li>
      <li>
        <Link href="https://www.youtube.com/channel/UCGbFGDEmWDMkEw6dW-K5hhQ" title="View our YouTube channel">
          <span class="fab fa-lg fa-youtube"></span>
        </Link>
      </li>
      <li>
        <Link href="https://www.hipcast.com/podcast/H6My90VQ" title="Listen to our Podcase on HipCast">
          <span class="fa fa-lg fa-podcast"></span>
        </Link>
      </li>
    </ul>
    <nav className="masthead__nav nav-main">
      <ul className="nav-main__list">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/ministries">Ministries</Link></li>
        <li><Link to="/media">Media</Link></li>
        <li><Link to="/calendar">Calendar</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

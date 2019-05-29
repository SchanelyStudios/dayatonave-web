import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import MastheadConfig from "../config/masthead.config";

const Header = ({ siteTitle, siteSubTitle, activeItem }) => (
  <header className="masthead">
    <h1 className="masthead__brand brand brand--inline">
      <img className="brand__logo" src="//placehold.it/100x100/424b5a/f2f5f7?text=DABC" alt="" />
      <Link className="brand__link" to="/">
        {siteTitle}
      </Link>
      <small className="brand__subtitle">
        {siteSubTitle}
      </small>
    </h1>

    <nav className="masthead__nav nav-main">
      <ul className="nav-main__list">
        {MastheadConfig.navLinks.map(({ path, label }, i) => {
          const activeClass = activeItem === path
            ? "nav-item--active"
            : "";
          return (
            <li className={`nav-item ${activeClass}`} key={i}>
              <Link className="nav-item__link" to={path}>
                {label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>

    <div className="masthead__contacts contacts">
      {MastheadConfig.contactInfo.map(({ alias, label, iconClasses, content }, i) => (
        <p className={`contact contact--${alias}`} key={i}>
          <span className={`contact__icon ${iconClasses}`} title={label}></span>
          <span className="contact__content">
            {content}
          </span>
        </p>
      ))}
    </div>

    <ul className="masthead__socials socials">
      {MastheadConfig.socials.map(({ url, title, iconClasses }, i) => (
        <li className="social" key={i}>
          <a className="social__link" href={url} title={title}>
            <span className={`social__icon ${iconClasses}`}></span>
          </a>
        </li>
      ))}
    </ul>

    <p className="masthead__e-giving e-giving">
      <a className="e-giving__link" href={MastheadConfig.eGiving.url}>
        {MastheadConfig.eGiving.label}
      </a>
    </p>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

import { Link } from "gatsby";
import PropTypes from "prop-types";
import React, { useState } from "react";

import ClassNames from "classnames";

import Logo from "./common/logo";

import MastheadConfig from "../config/masthead.config";

const Header = ({ className, siteTitle, activeItem }) => {

  const [mobileNavOn, setMobileNavState] = useState(false);

  const classNames = ClassNames(
    className,
    "masthead",
    {
      [`masthead--mobile-nav-on`]: mobileNavOn,
    }
  );

  const mobileNavButton = mobileNavOn
    ? (
      <i className="icon icon--menu-close"></i>
    )
    : (
      <i className="icon icon--menu-bars"></i>
    )

  return (
    <header className={classNames}>
    	<Logo type="wordmark" color="mono-light">
        {siteTitle}
      </Logo>
    	<nav className="masthead__nav-main">
    		<h2 className="visually-hidden">Main Navigation Link</h2>
    		<ul className="nav nav--main">
    			{MastheadConfig.navLinks.map(({ path, label }, i) => {
            const activeClass = activeItem === path
              ? "nav__item--active"
              : "";

            return (
              <li className={`nav__item ${activeClass}`} key={i}>
                <Link className="nav__link" to={path}>
                  {label}
                </Link>
              </li>
            );
          })}
    		</ul>
    	</nav>
    	<address className="masthead__address">
    		{MastheadConfig.contactInfo.map(({ alias, label, iconClasses, content }, i) => (
          <p className={`masthead__address__${alias} icon-before icon-before--${iconClasses}`}
            title={`${label} ${content}`}
            key={i}
          >
            {content}
          </p>
        ))}
    	</address>
    	<nav className="masthead__nav-sub">
    		<a className="nav__link nav__link--standalone"
          href={MastheadConfig.eGiving.url}
        >
          {MastheadConfig.eGiving.label}
        </a>

        <h2 className="visually-hidden">Media and Social Links</h2>
    		<ul className="nav nav--socials">
    			{MastheadConfig.socials.map(({ url, title, iconClasses }, i) => (
            <li className="nav__item" key={i}>
              <a className={`nav__link default icon icon--${iconClasses}`}
                href={url}
              >
                <span className="visually-hidden">{title}</span>
              </a>
            </li>
          ))}
    		</ul>
    	</nav>
      {/* TODO: set up interactions here on mobile nav icon */}
    	<button className="btn--clean masthead__menu-icon" onClick={() => setMobileNavState(!mobileNavOn) }>
        {mobileNavButton}
    	</button>
    </header>
  );
}

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;

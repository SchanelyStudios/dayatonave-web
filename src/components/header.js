import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";

import Logo from "./common/logo";

import MastheadConfig from "../config/masthead.config";

const Header = ({ siteTitle, siteSubTitle, activeItem }) => (
  <>
    <header className="masthead">
    	<Logo type="wordmark" color="mono-light" />
    	<nav className="masthead__nav-main">
    		<h2 className="visually-hidden">Main Navigation Link</h2>
    		<ul className="nav nav--main">
    			<li className="nav__item">
    				<a className="nav__link" href="#home">Home</a>
    			</li>
    			<li className="nav__item nav__item--active">
    				<a className="nav__link" href="#about">About</a>
    			</li>
    			<li className="nav__item">
    				<a className="nav__link" href="#ministries">Ministries</a>
    			</li>
    			<li className="nav__item">
    				<a className="nav__link" href="#media">Media</a>
    			</li>
    			<li className="nav__item">
    				<a className="nav__link" href="#calendar">Calendar</a>
    			</li>
    			<li className="nav__item">
    				<a className="nav__link" href="#contact">Contact</a>
    			</li>
    		</ul>
    	</nav>
    	<address className="masthead__address">
    		<p className="masthead__address__phone icon-before icon-before--phone">(937) 376-8223</p>
    		<p className="masthead__address__street icon-before icon-before--map-pointer">1121 Dayton Avenue, Xenia, OH</p>
    	</address>
    	<nav className="masthead__nav-sub">
    		<a className="nav__link nav__link--standalone" href="#giving">Giving</a>
    		<h2 className="visually-hidden">Media and Social Links</h2>
    		<ul className="nav nav--socials">
    			<li className="nav__item">
    				<a href="#podcast" className="nav__link default icon icon--podcast">
    					<span className="visually-hidden">Podcast</span>
    				</a>
    			</li>
    			<li className="nav__item">
    				<a href="#youtube" className="nav__link default icon icon--youtube">
    					<span className="visually-hidden">Youtube</span>
    				</a>
    			</li>
    			<li className="nav__item">
    				<a href="#facebook" className="nav__link default icon icon--facebook">
    					<span className="visually-hidden">Facebook</span>
    				</a>
    			</li>
    		</ul>
    	</nav>
    	<button className="btn--clean masthead__menu-icon">
    		<i className="icon icon--menu-bars"></i>
    	</button>
    	<button className="btn--clean masthead__menu-icon masthead__menu-icon--close">
    		<i className="icon icon--menu-bars"></i>
    	</button>
    </header>

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
  </>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;

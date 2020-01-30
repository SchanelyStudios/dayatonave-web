import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";

import Logo from "./common/logo";

import FooterConfig from "../config/footer.config";

const Footer = ({ siteTitle }) => (
  <footer className="footer">
  	<Logo type="wordmark" color="mono-dark">
      {siteTitle}
    </Logo>

  	<nav className="footer__members">
      <Link className="footer__members__cta btn btn--secondary"
        to={FooterConfig.members.path}
      >
        {FooterConfig.members.label}
      </Link>
  		<p className="footer__members__description">
        {FooterConfig.members.description}
      </p>
  	</nav>

  	<div className="footer__socials">
  		<h2 className="visually-hidden">Media and Social Links</h2>
  		<ul className="nav nav--footer-socials">
  			{FooterConfig.socials.map((item, j) => {
          return (
            <li className="nav__item" key={j}>
              <a className={`nav__link default icon icon--${item.iconClasses}`}
                href={item.url}
              >
                <span className="visually-hidden">
                  {item.label}
                </span>
              </a>
            </li>
          )
        })}
  		</ul>
  	</div>

  	<div className="footer__privacy-terms">
  		<p>
        <Link to={FooterConfig.terms.path}>
          {FooterConfig.terms.label}
        </Link>
      </p>
  	</div>

  	<div className="footer__copyright">
  		{FooterConfig.copyright}
  	</div>
  </footer>
);

Footer.propTypes = {
  siteTitle: PropTypes.string,
};

Footer.defaultProps = {
  siteTitle: ``,
};

export default Footer;

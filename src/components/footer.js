import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";

import Logo from "./common/logo";

import FooterConfig from "../config/footer.config";

const Footer = ({ siteTitle }) => (
  <footer class="footer">
  	<Logo type="wordmark" color="mono-dark">
      {siteTitle}
    </Logo>

  	<nav class="footer__members">
      <Link class="footer__members__cta btn btn--secondary"
        to={FooterConfig.members.path}
      >
        {FooterConfig.members.label}
      </Link>
  		<p class="footer__members__description">
        {FooterConfig.members.description}
      </p>
  	</nav>

  	<div class="footer__socials">
  		<h2 class="visually-hidden">Media and Social Links</h2>
  		<ul class="nav nav--footer-socials">
  			{FooterConfig.socials.map((item, j) => {
          return (
            <li className="nav__item" key={j}>
              <a className={`nav__link default icon icon--${item.iconClasses}`}
                href={item.url}
              >
                <span class="visually-hidden">
                  {item.label}
                </span>
              </a>
            </li>
          )
        })}
  		</ul>
  	</div>

  	<div class="footer__privacy-terms">
  		<p>
        <Link to={FooterConfig.terms.path}>
          {FooterConfig.terms.label}
        </Link>
      </p>
  	</div>

  	<div class="footer__copyright">
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

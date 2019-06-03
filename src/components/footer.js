import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";

import FooterConfig from "../config/footer.config";

const Footer = ({ siteTitle, siteSubTitle }) => (
  <footer className="footer">
    <h1 className="footer__brand brand">
      <img className="brand__logo" src="//placehold.it/100x100/424b5a/f2f5f7?text=DABC" alt="" />
      <Link className="brand__link" to="/">
        {siteTitle}
      </Link>
      <small className="brand__subtitle">
        {siteSubTitle}
      </small>
    </h1>

    <div className="footer__contact footer-group">
      <h2 className="footer-group__heading">
        <Link className="footer-group__heading-link" to={FooterConfig.contactInfo.web.path}>
          Contact
        </Link>
      </h2>
      <div className="footer-group__copy">
        <p>{FooterConfig.contactInfo.address.content}</p>
        <p>{FooterConfig.contactInfo.phone.content}</p>
      </div>
    </div>

    {FooterConfig.navGroups.map((group, i) => (
      <div className={`footer__${group.alias} footer-group`} key={i}>
        <h2 className="footer-group__heading">
          <Link className="footer-group__heading-link" to={group.path}>
            {group.label}
          </Link>
        </h2>
        <ul className="footer-group__nav-links">
          {group.pages.map((item, j) => (
            <li className="footer-group__nav-item" key={j}>
              <Link to={item.path} className="footer-group__nav-link">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    ))}

    <div className="footer__connect footer-group">
      <h2 className="footer-group__heading">Connect</h2>
      <ul className="footer-group__nav-links">
        {FooterConfig.socials.map((item, j) => {
          return (
            <li className="footer-group__nav-item" key={j}>
              <a href={item.url} className="footer-group__nav-link">
                {item.label}
              </a>
            </li>
          )
        })}
      </ul>
    </div>

    <div className="footer__members footer-group">
      <h2 className="footer-group__heading">
        <Link className="footer-group__heading-link" to={FooterConfig.members.path}>
          {FooterConfig.members.label}
        </Link>
      </h2>
      <div className="footer-group__copy">
        <p>News and other information for members and regular attendees.</p>
      </div>
    </div>

    <p className="footer__e-giving e-giving">
      <a className="e-giving__link" href={FooterConfig.eGiving.url}>
        {FooterConfig.eGiving.label}
      </a>
      <Link className="e-giving__more-link" to={FooterConfig.eGiving.more.path}>
        {FooterConfig.eGiving.more.label}
      </Link>
    </p>

    <p className="footer__terms">
      <Link to={FooterConfig.terms.path}>
        {FooterConfig.terms.label}
      </Link>
    </p>

    <p className="footer__copyright">
      {FooterConfig.copyright}
    </p>
  </footer>
);

Footer.propTypes = {
  siteTitle: PropTypes.string,
  siteSubTitle: PropTypes.string,
};

Footer.defaultProps = {
  siteTitle: ``,
  siteSubTitle: ``,
};

export default Footer;

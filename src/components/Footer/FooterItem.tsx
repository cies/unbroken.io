import React from "react";
import Link from "gatsby-link";
import ScrollAnimation from "react-animate-on-scroll";

import styles from "./styles.module.scss";

export interface ILink {
  label?: string;
  linkTo: string;
}

interface IProps {
  heading?: string;
  links: Array<ILink>;
  lang: string;
}

const FooterItem: React.FC<IProps> = ({ heading, links, lang }) => {
  return (
    <div className={`column is-mobile-half ${styles.footerItem}`}>
      <ScrollAnimation animateIn="fadeIn" animateOnce duration={1}>
        <h3 className={styles.itemsHeading}>{heading}</h3>

        <div className={styles.links}>
          {links.map((item, index) => (
            <Link
              key={index}
              className={styles.link}
              to={`/${lang}/${item.linkTo}`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </ScrollAnimation>
    </div>
  );
};
export default FooterItem;

import React from "react";
import ScrollAnimation from "react-animate-on-scroll";

import Button from "../Button/Button";

import styles from "./styles.module.scss";

import icon from "../../images/icon.svg";

interface IProps {
  count?: string;
  className?: string;
  heading?: string;
  subheading?: string;
  buttonLabel?: string;
}

const HomeStepsItem: React.FC<IProps> = ({
  children,
  heading,
  subheading,
  count,
  buttonLabel
}) => {
  return (
    <div className={`column ${styles.column}`}>
      <ScrollAnimation animateIn="fadeIn" duration={1} delay={400}>
        <div className={styles.stepsCount}>
          <span className={styles.count}>{count}</span>
          <img src={icon} alt="-" />
        </div>
        <div>
          <div className={styles.icon}>{children}</div>
        </div>

        <div className={styles.heading}>{heading}</div>

        <div className={styles.subheading}>{subheading}</div>

        <Button label={buttonLabel} fullWidth withoutBackground />
      </ScrollAnimation>
    </div>
  );
};
export default HomeStepsItem;

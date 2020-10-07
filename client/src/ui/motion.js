import theme from "../ui/theme";

class MotionStyle {
  static whileHoverScale = () => ({ scale: 1.1 });

  static springUpHeaders = () => ({
    initial: {
      opacity: 0,
      y: 10,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 50,
      },
    },
  });

  static animateProject = () => ({
    initial: {
      opacity: 0,
      y: 10,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 50,
      },
    },
    whileHover: {
      scale: 1.05,
    },
  });

  static springDownToolBar = () => ({
    initial: {
      y: -50,
    },
    animate: {
      rotate: 0,
      y: 0,
      transition: {
        type: "spring",
        damping: 30,
      },
    },
  });

  static springUpAboutMeHeader = () => ({
    initial: {
      opacity: 0,
      y: 10,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 50,
        delay: 2.5,
      },
    },
  });

  static springUpAboutMeText = () => ({
    initial: {
      opacity: 0,
      y: 10,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 70,
        delay: 4,
      },
    },
  });

  static springUpWelcomeHeader = () => ({
    initial: {
      opacity: 0,
      y: 10,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 80,
      },
    },
  });

  static springUpWelcomeText = () => ({
    initial: {
      opacity: 0,
      y: 10,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 50,
        delay: 1.5,
      },
    },
  });

  static scaleUpSocialIcons = () => ({
    initial: {
      cursor: "pointer",
    },
    whileHover: this.whileHoverScale(),
    whileTap: {
      color: theme.color.dark,
    },
  });

  static scaleUpMenuItem = () => ({
    initial: {
      cursor: "pointer",
    },
    whileHover: this.whileHoverScale(),
    whileTap: {
      color: theme.color.dark,
    },
  });
}

export default MotionStyle;

import theme from "../ui/theme";

class MotionStyle {
  static whileHoverScale = () => ({ scale: 1.1 });

  static springDownToolBar = () => ({
    initial: {
      opacity: 0,
      y: -10,
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

  static springUpAboutMeHeader = () => ({
    initial: {
      opacity: 0,
      y: 20,
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
      y: 20,
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

  static fadeInHeadersLeft = () => ({
    initial: {
      opacity: 0,
      x: 20,
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        damping: 50,
        duration: 3,
      },
    },
  });

  static fadeInTwitterTimelineRight = () => ({
    initial: {
      opacity: 0,
      x: -5,
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        damping: 50,
        duration: 0.5,
      },
    },
  });

  static animateProject = () => ({
    initial: {
      opacity: 0,
      x: -5,
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        damping: 80,
      },
    },
    whileHover: {
      webkitBoxShadow: `3px 3px 5px 6px #ccc` /* Safari 3-4, iOS 4.0.2 - 4.2, Android 2.3+ */,
      mozBoxShadow: `3px 3px 5px 6px #ccc` /* Firefox 3.5 - 3.6 */,
      boxShadow: `3px 3px 5px 6px #ccc` /* Opera 10.5, IE 9, Firefox 4+, Chrome 6+, iOS 5 */,
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

  static scaleUpSocialIcons = () => ({
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

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
}

export default MotionStyle;

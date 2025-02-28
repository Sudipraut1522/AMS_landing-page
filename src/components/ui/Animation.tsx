// Animation variants that can be reused across components
export const fadeInVariants = {
  hidden: { opacity: 0 },
  visible: (custom?: any) => ({
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
      delay: custom?.delay || 0,
    },
  }),
};

export const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

export const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export const listItemVariants = {
  hidden: { x: -20, opacity: 0 },
  visible: (i: number) => ({
    x: 0,
    opacity: 1,
    transition: {
      delay: 0.7 + i * 0.1,
      duration: 0.4,
      ease: "easeOut",
    },
  }),
};

export const imageVariants = {
  hidden: { scale: 0.9, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { delay: 0.5, duration: 0.6, ease: "easeOut" },
  },
};

export const slideInVariants = (
  direction: "left" | "right" | "up" | "down",
  distance = 20
) => {
  const directionMap = {
    left: { x: -distance, y: 0 },
    right: { x: distance, y: 0 },
    up: { x: 0, y: -distance },
    down: { x: 0, y: distance },
  };

  return {
    hidden: { ...directionMap[direction], opacity: 0 },
    visible: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };
};

export const scaleVariants = (initialScale = 0.9, delay = 0) => ({
  hidden: { scale: initialScale, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { delay, duration: 0.6, ease: "easeOut" },
  },
});

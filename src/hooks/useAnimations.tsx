"use client";

import { useInView } from "framer-motion";
import { useRef } from "react";
import * as animationVariants from "../components/ui/Animation";

type AnimationOptions = {
  threshold?: number;
  once?: boolean;
  triggerOnce?: boolean;
};

export function useAnimations(options: AnimationOptions = {}) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: options.once ?? true,
    amount: options.threshold ?? 0.3,
  });

  return {
    ref,
    isInView,
    variants: animationVariants,
    animate: isInView ? "visible" : "hidden",
    initial: "hidden",
  };
}

// Helper hook for staggered list animations
export function useStaggeredList(
  itemCount: number,
  options: AnimationOptions = {}
) {
  const { ref, isInView } = useAnimations(options);

  const items = Array.from({ length: itemCount }).map((_, index) => ({
    custom: index,
    animate: isInView ? "visible" : "hidden",
    initial: "hidden",
    variants: animationVariants.listItemVariants,
  }));

  return {
    containerRef: ref,
    items,
    containerVariants: animationVariants.containerVariants,
    containerAnimate: isInView ? "visible" : "hidden",
    containerInitial: "hidden",
  };
}

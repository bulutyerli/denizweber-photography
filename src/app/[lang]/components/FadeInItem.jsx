"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";

const FadeInItem = ({ children, duration }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref}>
      <span
        style={{
          transform: isInView ? "none" : "opacity(0)",
          opacity: isInView ? 1 : 0,
          transition: `all ${duration} 0.5s`,
        }}
      >
        {children}
      </span>
    </section>
  );
};

export default FadeInItem;

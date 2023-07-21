import React, { useState, useEffect } from "react";
import { useTransition, animated } from "@react-spring/web";
import styles from "./styles.module.css";

const slides = [
  "/lunbo/MIN_2370.jpg",
    "/lunbo/MIN_2597.jpg",
    "/lunbo/MIN_2710.jpg",
    "/lunbo/MIN_2794.jpg副本.jpg",
    "/lunbo/MIN_2825.jpg",
    "/lunbo/MIN_2915.jpg",
    "/lunbo/MIN_2945.jpg",
    "/lunbo/MIN_2975.jpg",
    "/lunbo/MIN_3010.jpg副本.jpg",
    "/lunbo/MIN_3011.jpg",
    "/lunbo/MIN_3062.jpg",
    "/lunbo/MIN_3081.jpg",
    "/lunbo/MIN_3134.jpg",
];

export default function ImageStack() {
  const [index, set] = useState(0);
  const transitions = useTransition(index, {
    key: index,
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: { duration: 3000 },
    onRest: (_a, _b, item) => {
      if (index === item) {
        set((state) => (state + 1) % slides.length);
      }
    },
    exitBeforeEnter: true,
  });
  return (
    <div className="flex fill center">
      {transitions((style, i) => (
        <animated.div
          className={styles.bg}
          style={{
            ...style,
            backgroundImage: `url(${slides[i]})`,
          }}
        />
      ))}
    </div>
  );
}

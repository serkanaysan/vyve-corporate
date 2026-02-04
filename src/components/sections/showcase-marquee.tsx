"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimationFrame, useMotionValue } from "framer-motion";
import "./showcase.css";

const items = [
  { title: "Project One", image: "https://picsum.photos/400/500?1" },
  { title: "Project Two", image: "https://picsum.photos/400/500?2" },
  { title: "Project Three", image: "https://picsum.photos/400/500?3" },
  { title: "Project Four", image: "https://picsum.photos/400/500?4" },
];

const CARD_WIDTH = 320;
const GAP = 8;
const ITEM_SIZE = CARD_WIDTH + GAP;

export function useCurrentTime() {
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    const update = () => {
      const now = new Date();
      const formatted = now.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      });
      setTime(formatted);
    };

    update(); // ilk render
    const interval = setInterval(update, 60_000); // dakikada 1

    return () => clearInterval(interval);
  }, []);

  return time;
}

export function ShowcaseMarquee() {
  const time = useCurrentTime();
  const x = useMotionValue(0);
  const isPaused = useRef(false);

  // 🔁 sürekli akan animasyon
  useAnimationFrame((_, delta) => {
    if (isPaused.current) return;
    const speed = 0.05;
    x.set(x.get() - delta * speed);

    // gerçek infinite loop
    if (x.get() <= -ITEM_SIZE * items.length) {
      x.set(0);
    }
  });

  return (
    <section className="scene">
      <div className="viewport py-16">
        <div className="stage">
          <motion.div
            className="track"
            style={{
              x,
            }}
          >
            {[...items, ...items].map((item, i) => (
              <motion.div
                key={i}
                className="card"
                onMouseEnter={() => (isPaused.current = true)}
                onMouseLeave={() => (isPaused.current = false)}
                whileHover={{
                  scale: 1.08,
                  rotateX: 0,
                  rotateY: 0,
                  z: 80,
                }}
                transition={{
                  type: "spring",
                  stiffness: 220,
                  damping: 18,
                }}
              >
                <div className="status-bar">
                  <span className="time">{time}</span>

                  <div className="status-icons">
                    <span className="wifi">
                      <i></i>
                      <i></i>
                      <i></i>
                    </span>
                    <span className="battery">
                      <span className="battery-level" />
                    </span>
                  </div>
                </div>
                <div className="notch" />
                <img src={item.image} alt={item.title} />
                <div className="overlay">
                  {/* <h3>{item.title}</h3> */}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

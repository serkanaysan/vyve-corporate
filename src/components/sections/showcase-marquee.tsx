"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimationFrame, useMotionValue } from "framer-motion";
import "./showcase.css";
import { useTheme } from "next-themes";

const items = [
  {
    title: "Explorer",
    image: {
      dark: "/images/showcase/explorer-dark.png",
      light: "/images/showcase/explorer-light.png",
    },
  },
  {
    title: "Project Two",
    image: {
      dark: "/images/showcase/explorer-dark.png",
      light: "/images/showcase/explorer-light.png",
    },
  },
  {
    title: "Project Three",
    image: {
      dark: "/images/showcase/explorer-dark.png",
      light: "/images/showcase/explorer-light.png",
    },
  },
  {
    title: "Project Four",
    image: {
      dark: "/images/showcase/explorer-dark.png",
      light: "/images/showcase/explorer-light.png",
    },
  },
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

  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <section className={`scene ${theme}`}>
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
                {/* <div className="status-bar">
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
                <div className="notch" /> */}
                <img
                  src={theme === "dark" ? item.image.dark : item.image.light}
                  alt={item.title}
                />
                <div className="overlay">{/* <h3>{item.title}</h3> */}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

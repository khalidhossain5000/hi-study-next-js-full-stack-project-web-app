'use client'
import React, { useEffect, useState } from "react";

const Test = () => {
  const [scrollPercent, setScrollPercent] = useState(0);

  useEffect(() => {
    let ticking = false;

    const updateScroll = () => {
      const scrollTop = window.scrollY;
      const height = document.documentElement.scrollHeight - window.innerHeight;
      const scroll = (scrollTop / height) * 100;
      setScrollPercent(scroll);
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScroll);
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        height: "5px",
        width: `${scrollPercent}%`,
        background: "linear-gradient(90deg, #6366f1, #9333ea)",
        transition: "width 0.15s ease-out",
        zIndex: 9999,
      }}
    ></div>
  );
};

export default Test;


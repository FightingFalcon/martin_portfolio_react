import React, { useEffect, useRef, useState } from "react";
import anime from "animejs";

interface StaggerLogoProps {
  gridItemColor?: string;
  logoPath?: string;
  logoSize?: number; // Size in pixels
}

const StaggerLogo: React.FC<StaggerLogoProps> = ({
  gridItemColor = "#4550ab",
  logoPath = "/cryptobase.svg",
  logoSize = 150,
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const animationRef = useRef<anime.AnimeInstance | null>(null);
  const [isMostlyVisible, setIsMostlyVisible] = useState(false);

  const gridItemSize = 24;
  const columns = 15;
  const rows = 15;

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleResize = () => {
      createGrid(container);
      initializeAnimation(container);
    };

    createGrid(container);
    initializeAnimation(container);

    const observer = new IntersectionObserver(
      ([entry]) => {
        const isInView = entry.intersectionRatio >= 0.75;
        setIsMostlyVisible(isInView);
      },
      { root: null, threshold: 0.75 }
    );
    observer.observe(container);

    window.addEventListener("resize", handleResize);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (!animationRef.current) return;
    if (isMostlyVisible) {
      animationRef.current.play();
    } else {
      animationRef.current.pause();
    }
  }, [isMostlyVisible]);

  const createGrid = (container: HTMLElement) => {
    const grid = container.querySelector(".stagger-grid") as HTMLElement;
    if (!grid) return;

    grid.innerHTML = Array(columns * rows)
      .fill(null)
      .map((_, index) => {
        const row = Math.floor(index / columns);
        const col = index % columns;
        const isWhiteCell =
          (row === 0 && col <= 3) ||
          (row === 1 && col <= 2) ||
          (row === 2 && col <= 1) ||
          (row === 3 && col === 0);

        return `<div class="grid-item ${
          isWhiteCell ? "grid-item-white" : ""
        }"></div>`;
      })
      .join("");

    // Set the grid width based on columns x item size
    const gridWidth = columns * gridItemSize; // e.g. 15 * 24 = 360
    grid.style.width = `${gridWidth}px`;
    grid.style.margin = "0 auto";
  };

  const initializeAnimation = (container: HTMLElement) => {
    const gridItems = Array.from(container.querySelectorAll(".grid-item"));
    const distances: number[] = [];

    const centerX = Math.floor(columns / 2);
    const centerY = Math.floor(rows / 2);

    gridItems.forEach((_, index) => {
      const row = Math.floor(index / columns);
      const col = index % columns;
      const distanceFromCenter = Math.sqrt(
        Math.pow(centerX - col, 2) + Math.pow(centerY - row, 2)
      );
      distances.push(distanceFromCenter);
    });

    const anim = anime({
      targets: gridItems,
      scale: (_: HTMLElement, i: number) => (distances[i] <= 5 ? [1, 0] : 1),
      opacity: (_: HTMLElement, i: number) => (distances[i] <= 5 ? [1, 0] : 1),
      easing: "easeOutSine",
      autoplay: false,
      delay: anime.stagger(100, { grid: [columns, rows], from: "center" }),
    });

    animationRef.current = anim;
  };

  return (
    <div
      className="stagger-container bg-white relative flex items-center justify-center overflow-hidden scale-50 md:scale-100"
      ref={containerRef}
      style={
        {
          "--grid-item-color": gridItemColor,
          height: "100%",
          transformOrigin: "center", // Ensure the scaling is anchored from the center
        } as React.CSSProperties
      }
    >
      <div className="stagger-grid flex flex-wrap justify-center">
        {/* Grid is populated dynamically */}
      </div>
      <img
        src={logoPath}
        alt="Logo"
        width={logoSize}
        height={logoSize}
        style={{
          opacity: isMostlyVisible ? 1 : 0,
          transition: isMostlyVisible ? "opacity 0.5s .5s" : "opacity 0.5s",
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: 10,
        }}
      />
    </div>
  );
};

export default StaggerLogo;

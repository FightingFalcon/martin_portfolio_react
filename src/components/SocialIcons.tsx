import { useState, useEffect } from "react";
import { FaTwitch, FaGithub, FaEnvelope } from "react-icons/fa";

const SocialIcons = () => {
  const [visibleIcons, setVisibleIcons] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleIcons((prev) => (prev < 3 ? prev + 1 : prev)); // Increment until all icons are visible
    }, 150); // Delay between each icon
    return () => clearInterval(interval); // Cleanup interval
  }, []);

  const icons = [
    {
      id: 1,
      component: <FaEnvelope />,
      href: "mailto:martin.gyhagen@gmail.com",
    },
    {
      id: 2,
      component: <FaGithub />,
      href: "https://github.com/FightingFalcon",
    },
    {
      id: 3,
      component: <FaTwitch />,
      href: "https://www.twitch.tv/martinsaturnia",
    },
    
  ];

  return (
    <div className="absolute top-4 left-4 flex flex-col space-y-6">
      {icons.map((icon, index) => (
        <a
          key={icon.id}
          href={icon.href}
          target="_blank"
          rel="noopener noreferrer"
          className={`text-white text-1xl transition-opacity duration-700 ${
            visibleIcons > index ? "opacity-100" : "opacity-0"
          }`}
        >
          {icon.component}
        </a>
      ))}
    </div>
  );
};

export default SocialIcons;

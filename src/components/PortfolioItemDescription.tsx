import React from 'react';

interface PortfolioItemDescriptionProps {
  title: string;
  subtitle?: string;
  inDevelopment?: boolean;
  text: React.ReactNode;
  carouselItems: React.ReactNode[];
  backgroundColor: string;
}

const PortfolioItemDescription: React.FC<PortfolioItemDescriptionProps> = ({
  title,
  subtitle,
  inDevelopment = false,
  text,
  carouselItems,
  backgroundColor,
}) => {
  return (
    <div
      className="projectInfo w-1/2 flex flex-col items-start"
      style={{ backgroundColor }}
    >
      <div className="w-full">
        <div className="portfolio-item-title pt-10 pb-10 border-b-4 border-white p-4">
          <h2 className="uppercase tracking-widest text-white text-8xl text-center">
            {title}
          </h2>
          {subtitle && <h6 className="text-xl">{subtitle}</h6>}
          {inDevelopment && <h6 className="text-xl">(In Development)</h6>}
        </div>
      </div>
      <div className="flex-grow flex items-center justify-center text-left pl-32 pr-32 text-white">
        {text}
      </div>
      <div className="container mx-auto border-t-4 border-white">
        <div className="carousel">
          {carouselItems.map((item, idx) => (
            <div key={idx}>{item}</div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PortfolioItemDescription;

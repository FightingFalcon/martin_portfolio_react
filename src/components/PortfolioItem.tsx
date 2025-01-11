import React from 'react';
import StaggerLogo from './StaggerLogo';
import PortfolioItemDescription from './PortfolioItemDescription';
import { getMDXComponent } from 'mdx-bundler/client';

interface PortfolioItemProps {
  portfolioData: {
    title: string;
    subtitle?: string;
    inDevelopment?: boolean;
    backgroundColor: string;
    carouselItems?: React.ReactNode[];
    logoPath: string;
    logoSize: number;
    gridItemColor: string;
    text: string;
  };
}

const PortfolioItem: React.FC<PortfolioItemProps> = ({ portfolioData }) => {
  const MDXContent = getMDXComponent(portfolioData.text);

  return (
    <div className="flex w-screen h-screen overflow-hidden">
      <div className="parent w-1/2 flex items-center justify-center">
        <StaggerLogo
          logoPath={portfolioData.logoPath}
          logoSize={portfolioData.logoSize}
          gridItemColor={portfolioData.gridItemColor}
        />
      </div>
      <PortfolioItemDescription
        title={portfolioData.title}
        subtitle={portfolioData.subtitle}
        inDevelopment={portfolioData.inDevelopment}
        text={<MDXContent />}
        carouselItems={portfolioData.carouselItems}
        backgroundColor={portfolioData.backgroundColor}
      />
    </div>
  );
};

export default PortfolioItem;

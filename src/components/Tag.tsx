import React from "react";

interface TagProps {
  label: string;
}

const Tag: React.FC<TagProps> = ({ label }) => {
  return (
    <span className="inline-block text-sm font-small px-3 py-1 mr-2 mb-2">
      #{label}
    </span>
  );
};

export default Tag;

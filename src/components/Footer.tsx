const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="flex flex-col items-center">
        <img src="/favicon.svg" alt="logo" className="h-14 -m-3" /> {/* Reduced margin-bottom */}
        <span className="text-sm">{currentYear}</span>
      </div>
    </footer>
  );
};

export default Footer;

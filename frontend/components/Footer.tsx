import React from "react";

 const Footer: React.FC = () => {
  return (
    <footer className="bg-rose-300 border-t border-rose-300 py-6">    
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-white text-sm">
                Contact: <a href="mailto: urjav21@gmail.com" className="text-white hover:text-white">
                    urjav21@gmail.com 
                </a>
                <a href = "https://www.pexels.com" target="_blank" rel="noreferrer" className="text-white hover:text-white">
                     Photos provided by Pexels
                </a>
            </p>
        </div>
    </footer>
  );
}
export default Footer;
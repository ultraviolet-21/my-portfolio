import React from "react";

//footer includes contact information and photo credits
 const Footer: React.FC = () => {
  return (
    <footer className="bg-rose-300 border-t border-rose-300 py-6 flex flex-col sm:flex-row justify-between items-center gap-4">    
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center columns-2">
            <p className="text-white text-sm mb-2">
                Contact: <a href="mailto: urjav21@gmail.com" className="text-white hover:text-white">
                    urjav21@gmail.com     
                </a>
            </p>
            <p className="text-white text-sm c">
                 <a href="https://www.linkedin.com/in/urja-vaidya-0b341a252" className="text-white hover:text-white">
                    linkedin.com/in/urja-vaidya-0b341a252
                </a>
            </p>
        </div>
    </footer>
  );
}
export default Footer;
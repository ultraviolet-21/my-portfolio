import React from "react";

 const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 py-6">    
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-slate-400 text-sm">
                Contact: <a href="mailto: urjav21@gmail.com" className="text-cyan-400 hover:text-cyan-300">
                    urjav21@gmail.com
                </a>
            </p>
        </div>
    </footer>
  );
}
export default Footer;
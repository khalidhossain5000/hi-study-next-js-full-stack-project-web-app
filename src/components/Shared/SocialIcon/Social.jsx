import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Social = () => {
  return (
    <div className="flex space-x-4 justify-center lg:justify-start items-center py-6">
      {/* Facebook */}
      <a
        href="#"
        className="group relative p-3 rounded-full bg-gray-100 transition-all duration-300 hover:bg-blue-600 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/30"
      >
        <Facebook 
          size={20} 
          className="text-gray-500 transition-all duration-300 group-hover:text-white group-hover:scale-105" 
        />
        <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
          Facebook
        </span>
      </a>

      {/* Twitter */}
      <a
        href="#"
        className="group relative p-3 rounded-full bg-gray-100 transition-all duration-300 hover:bg-sky-500 hover:scale-110 hover:shadow-lg hover:shadow-sky-500/30"
      >
        <Twitter 
          size={20} 
          className="text-gray-500 transition-all duration-300 group-hover:text-white group-hover:scale-105" 
        />
        <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
          Twitter
        </span>
      </a>

      {/* Instagram */}
      <a
        href="#"
        className="group relative p-3 rounded-full bg-gray-100 transition-all duration-300 hover:bg-pink-600 hover:scale-110 hover:shadow-lg hover:shadow-pink-500/30"
      >
        <Instagram 
          size={20} 
          className="text-gray-500 transition-all duration-300 group-hover:text-white group-hover:scale-105" 
        />
        <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
          Instagram
        </span>
      </a>

      {/* LinkedIn */}
      <a
        href="#"
        className="group relative p-3 rounded-full bg-gray-100 transition-all duration-300 hover:bg-blue-700 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/30"
      >
        <Linkedin 
          size={20} 
          className="text-gray-500 transition-all duration-300 group-hover:text-white group-hover:scale-105" 
        />
        <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
          LinkedIn
        </span>
      </a>
    </div>
  );
};

export default Social;
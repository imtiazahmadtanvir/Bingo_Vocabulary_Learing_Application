
const Footer = () => {
    return (
        <div className="bg-white text-gray-800">
            <div className="container mx-auto text-center">
        <p>&copy; 2024 Lingo Bingo. All rights reserved.</p>
        <p>Contact: info@lingobingo.com</p>
        <div className="flex justify-center space-x-4 mt-2">
          <a href="#" className="hover:underline">
            Facebook
          </a>
          <a href="#" className="hover:underline">
            Twitter
          </a>
          <a href="#" className="hover:underline">
            LinkedIn
          </a>
        </div>
      </div>
            
        </div>
    );
};

export default Footer;
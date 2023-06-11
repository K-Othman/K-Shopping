const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto flex flex-wrap justify-between px-3 md:px-0">
        <div className="w-full md:w-1/4 lg:w-1/5 mb-6">
          <h4 className="text-lg font-bold mb-4">About Us</h4>
          <p className="text-sm">
            We are an online store offering a wide range of men's and women's
            clothing and jewelry. Shop with us for the latest fashion trends and
            high-quality products.
          </p>
        </div>
        <div className="w-full md:w-1/4 lg:w-1/5 mb-6">
          <h4 className="text-lg font-bold mb-4">Categories</h4>
          <ul className="text-sm">
            <li className="mb-2">Men's Clothing</li>
            <li className="mb-2">Women's Clothing</li>
            <li className="mb-2">Jewelry</li>
          </ul>
        </div>
        <div className="w-full md:w-1/4 lg:w-1/5 mb-6">
          <h4 className="text-lg font-bold mb-4">Customer Support</h4>
          <ul className="text-sm">
            <li className="mb-2">Contact Us</li>
            <li className="mb-2">FAQ</li>
            <li className="mb-2">Shipping &amp; Returns</li>
            <li className="mb-2">Size Guide</li>
          </ul>
        </div>
        <div className="w-full md:w-1/4 lg:w-1/5 mb-6">
          <h4 className="text-lg font-bold mb-4">Stay Connected</h4>
          <p className="text-sm">
            Follow us on social media to stay up to date with our latest offers
            and promotions.
          </p>
          <div className="flex mt-4">
            <a href="#" className="mr-2">
              <i className="fab fa-facebook-square text-xl"></i>
            </a>
            <a href="#" className="mr-2">
              <i className="fab fa-instagram-square text-xl"></i>
            </a>
            <a href="#" className="mr-2">
              <i className="fab fa-twitter-square text-xl"></i>
            </a>
            <a href="#" className="mr-2">
              <i className="fab fa-pinterest-square text-xl"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="container mx-auto mt-8">
        <p className="text-center text-sm">
          &copy; {new Date().getFullYear()} K-Shopping. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

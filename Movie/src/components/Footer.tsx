import { SiInstagram } from "react-icons/si";
import { FaFacebook } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="bg-white w-full shadow-sm dark:bg-gray-800 mt-auto">
      <div className="mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400 ">
          2025
          <a href="https://www.themoviedb.org/" className="hover:underline">
            The Movies
          </a>
          . All Rights Reserved.
        </span>
        <ul className="flex items-center text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
          <div className="flex justify-center items-center">
            <li>
              <a
                href="https://x.com/themoviedb"
                className="hover:underline me-4 md:me-6 flex"
              >
                <BsTwitterX />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/tmdbmovies/"
                className="hover:underline me-4 md:me-6 flex"
              >
                <SiInstagram />
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/themoviedb/"
                className="hover:underline me-4 md:me-6 flex"
              >
                <FaFacebook />
              </a>
            </li>
          </div>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;

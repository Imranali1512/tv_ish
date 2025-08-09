import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="bg-zinc-900 text-white py-10 px-4 sm:px-10">
      <div className="max-w-7xl mx-auto">
        {/* Top grid links */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-8 text-sm">
          {[
            {
              title: "Home",
              items: ["Categories", "Devices", "FAQ"],
            },
            {
              title: "Movies",
              items: ["Genres", "Trending", "New Release", "Popular"],
            },
            {
              title: "Shows",
              items: ["Genres", "Trending", "New Release", "Popular"],
            },
            {
              title: "Podcast",
              items: ["Latest Podcast", "New Release", "Trending", "Popular"],
            },
            {
              title: "Snips",
              items: ["Top Rated", "For You", "Popular"],
            },
            {
              title: "Music",
              items: ["Weekly Top Song", "New Released song", "Playlist"],
            },
            {
              title: "Support",
              items: ["Contact Us"],
            },
            {
              title: "Subscription",
              items: ["How we work", "Features"],
            },
          ].map((section, idx) => (
            <div key={idx}>
              <h4 className="font-semibold mb-2">{section.title}</h4>
              <ul className="space-y-1 text-zinc-400">
                {section.items.map((item, index) => (
                  <li key={index} className="hover:text-white transition">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Social icons */}
        <motion.div
          className="mt-10 flex items-center flex-wrap gap-4"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <motion.span
            className="text-sm font-semibold text-white cursor-default"
            whileHover={{ color: "#60A5FA" }} // light blue on hover
            transition={{ duration: 0.3 }}
          >
            Connect With Us
          </motion.span>

          <div className="flex gap-3">
            {/* Facebook */}
            <motion.a
              href="#"
              aria-label="Facebook"
              className="p-2 bg-zinc-800 rounded hover:bg-[#1877F2] text-white transition duration-300"
              whileHover={{ scale: 1.15 }}
            >
              <FaFacebookF size={18} />
            </motion.a>

            {/* Twitter */}
            <motion.a
              href="#"
              aria-label="Twitter"
              className="p-2 bg-zinc-800 rounded hover:bg-[#1DA1F2] text-white transition duration-300"
              whileHover={{ scale: 1.15 }}
            >
              <FaTwitter size={18} />
            </motion.a>

            {/* LinkedIn */}
            <motion.a
              href="#"
              aria-label="LinkedIn"
              className="p-2 bg-zinc-800 rounded hover:bg-[#0077B5] text-white transition duration-300"
              whileHover={{ scale: 1.15 }}
            >
              <FaLinkedinIn size={18} />
            </motion.a>
          </div>
        </motion.div>

        {/* Bottom links */}
        <div className="mt-8 border-t border-zinc-700 pt-4 text-sm flex flex-col sm:flex-row justify-between text-zinc-400">
          <p>©2024 tv-ish, All Rights Reserved</p>
          <div className="flex space-x-4 mt-2 sm:mt-0">
            {["Terms of Use", "Privacy Policy", "Cookie Policy"].map((link, idx) => (
              <a
                key={idx}
                href="#"
                className="hover:text-blue-400 transition duration-200"
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

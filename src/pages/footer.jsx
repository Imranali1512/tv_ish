import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="bg-zinc-900 text-white py-8 px-3 sm:py-10 sm:px-10 text-xs sm:text-sm mt-10 mb-20">
      <div className="max-w-7xl mx-auto">
        {/* Top grid links */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4 sm:gap-8">
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
              title: "Education",
              items: ["Trending subject", "Popular Educators"],
            },
            {
              title: "Sports",
              items: ["Popular ACtivity ", "Feature Event", "Trending Sports Event"],
            },
            {
              title: "AI",
              items: ["Weekly Top AI Content", "Top AI Created Vedio"],
            },
            {
              title: "Support",
              items: ["Contact Us", "About Us"],
            },
            {
              title: "Subscription",
              items: ["How we work", "Features"],
            },
          ].map((section, idx) => (
            <div key={idx}>
              <h4 className="font-semibold mb-2 text-sm sm:text-base">{section.title}</h4>
              <ul className="space-y-1 text-zinc-400">
                {section.items.map((item, index) => (
                  <li key={index} className="hover:text-white transition cursor-pointer">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Social icons */}
        <motion.div
          className="mt-6 sm:mt-10 flex items-center flex-wrap gap-3 sm:gap-4"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <motion.span
            className="text-xs sm:text-sm font-semibold text-white cursor-default"
            whileHover={{ color: "#60A5FA" }}
            transition={{ duration: 0.3 }}
          >
            Connect With Us
          </motion.span>

          <div className="flex gap-2 sm:gap-3">
            <motion.a
              href="#"
              aria-label="Facebook"
              className="p-1.5 sm:p-2 bg-zinc-800 rounded hover:bg-[#1877F2] text-white transition duration-300"
              whileHover={{ scale: 1.15 }}
            >
              <FaFacebookF className="w-4 h-4 sm:w-5 sm:h-5" />
            </motion.a>

            <motion.a
              href="#"
              aria-label="Twitter"
              className="p-1.5 sm:p-2 bg-zinc-800 rounded hover:bg-[#1DA1F2] text-white transition duration-300"
              whileHover={{ scale: 1.15 }}
            >
              <FaTwitter className="w-4 h-4 sm:w-5 sm:h-5" />
            </motion.a>

            <motion.a
              href="#"
              aria-label="LinkedIn"
              className="p-1.5 sm:p-2 bg-zinc-800 rounded hover:bg-[#0077B5] text-white transition duration-300"
              whileHover={{ scale: 1.15 }}
            >
              <FaLinkedinIn className="w-4 h-4 sm:w-5 sm:h-5" />
            </motion.a>
          </div>
        </motion.div>

        {/* Bottom links */}
        <div className="mt-6 sm:mt-8 border-t border-zinc-700 pt-3 sm:pt-4 text-xs sm:text-sm flex flex-col sm:flex-row justify-between text-zinc-400">
          <p>©2025 TV-ish Entertainment, All Rights Reserved</p>
          <div className="flex space-x-3 mt-2 sm:mt-0">
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

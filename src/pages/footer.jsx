const Footer = () => {
  return (
    <footer className="bg-zinc-900 text-white py-10 px-4 sm:px-10">
      <div className="max-w-7xl mx-auto">
        {/* Top grid links */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-8 text-sm">
          <div>
            <h4 className="font-semibold mb-2">Home</h4>
            <ul className="space-y-1 text-zinc-400">
              <li>Categories</li>
              <li>Devices</li>
              <li>FAQ</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-2">Movies</h4>
            <ul className="space-y-1 text-zinc-400">
              <li>Genres</li>
              <li>Trending</li>
              <li>New Release</li>
              <li>Popular</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-2">Shows</h4>
            <ul className="space-y-1 text-zinc-400">
              <li>Genres</li>
              <li>Trending</li>
              <li>New Release</li>
              <li>Popular</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-2">Podcast</h4>
            <ul className="space-y-1 text-zinc-400">
              <li>Latest Podcast</li>
              <li>New Release</li>
              <li>Trending</li>
              <li>Popular</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-2">Snips</h4>
            <ul className="space-y-1 text-zinc-400">
              <li>Top Rated</li>
              <li>For You</li>
              <li>Popular</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-2">Music</h4>
            <ul className="space-y-1 text-zinc-400">
              <li>Weekly Top Song</li>
              <li>New Released song</li>
              <li>Playlist</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-2">Support</h4>
            <ul className="space-y-1 text-zinc-400">
              <li>Contact Us</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-2">Subscription</h4>
            <ul className="space-y-1 text-zinc-400">
              <li>How we work</li>
              <li>Features</li>
            </ul>
          </div>
        </div>

        {/* Social icons */}
        <div className="mt-8 flex items-center space-x-4">
          <span className="text-sm font-semibold text-white">Connect With Us</span>
          <div className="flex space-x-2">
            {/* Facebook */}
            <a href="#" className="p-2 bg-zinc-800 rounded hover:bg-zinc-700">
              <i className="fab fa-facebook-f text-white" />
            </a>
            {/* Twitter */}
            <a href="#" className="p-2 bg-zinc-800 rounded hover:bg-zinc-700">
              <i className="fab fa-twitter text-white" />
            </a>
            {/* LinkedIn */}
            <a href="#" className="p-2 bg-zinc-800 rounded hover:bg-zinc-700">
              <i className="fab fa-linkedin-in text-white" />
            </a>
          </div>
        </div>

        {/* Bottom links */}
        <div className="mt-8 border-t border-zinc-700 pt-4 text-sm flex flex-col sm:flex-row justify-between text-zinc-400">
          <p>©2024 tv-ish, All Rights Reserved</p>
          <div className="flex space-x-4 mt-2 sm:mt-0">
            <a href="#">Terms of Use</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

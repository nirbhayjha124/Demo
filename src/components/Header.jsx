import { Menu, Search } from 'lucide-react';



const navItems = [
  "Search Categories",
  "Top Stores",
  "Best Offers",
  "Collections",
  "Share & Earn",
];


function Header() {
  return (
    <header className="w-full bg-gray-800 text-white px-4 py-3 shadow-md">
      {/* Top Section */}
      <div className="flex justify-between items-center">
        {/* Mobile (sm) */}
        {/* <div className="flex items-center lg:hidden space-x-4">
          <Search className="w-5 h-5" />
        </div> */}

        {/* Desktop (lg and above) */}
        <div className="lg:flex items-center w-full justify-center">
          <div className="relative w-[80vw] lg:w-[700px]">
            <Search className="absolute right-3 top-2.5 text-gray-400" />
            <input
              type="text"
              placeholder="Search..."
              className="w-full pl-10 pr-3 py-2 rounded-md text-black"
            />
          </div>
        </div>


        {/* Menu or Hamburger */}
        <div>
          <Menu className="w-6 h-6 cursor-pointer lg: hidden" />
        </div>
      </div>

      {/* Navigation Links - Only visible on lg and above */}
      <div className="hidden lg:flex  justify-center mt-3 space-x-6 text-sm font-medium">
        {
          navItems.map((item, index) =>(
            <button className="hover:text-gray-400 transition" key={index}>{item}</button>
          ))
        }
      </div>
    </header>
  );
}

export default Header;
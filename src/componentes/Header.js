const Header = () => {
  return (
    <div className="shadow-lg shadow-white backdrop-blur	w-full fixed top-0 left-0">
      <div className="sm:px-10 py-4 px-7 sm:flex justify-between items-center">
        <div className="flex text-3xl cursor-pointer items-center gap-2">
        <span class="ml-10 relative px-8 py-1 font-bold text-white group">
            <span class="absolute inset-0 w-full h-full opacity-40 transition duration-300 ease-out transform -translate-x-2 -translate-y-2 bg-gray-300 group-hover:translate-x-0 group-hover:translate-y-0"></span>
            <span class="absolute inset-0 w-full h-full border-4 border-white"></span>
            <span class="relative">LUIS CARO</span>
          </span>
        </div>
        <div className="flex pl-9 md:pl-0 font-semibold">
          <div className="w-7 h-7  right-8 top-6 cursor-pointer sm:hidden"></div>

          <ul
            className={`sm:flex pl-9 sm:pl-0 sm:items-center sm:pb-0 pb-12  sm:static sm:z-auto z-[-1] left-0 w-full transition-all duration-500 ease-in 
         `}
          >
            <li className="my-4 sm:my-0 sm:ml-8">Contact</li>
            <li className="my-4 sm:my-0 sm:ml-8">About</li>
            <li className="my-4 sm:my-0 sm:ml-8">Project</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">

      <h2 className="text-2xl font-bold text-blue-600">
        Digital Agency
      </h2>

      <ul className="hidden md:flex gap-8 text-gray-700">
        <li className="hover:text-blue-600 cursor-pointer">
          Home
        </li>

        <li >
            <a href="#services" className="hover:text-blue-600">
              Services
            </a>
        </li>
        <li>
            <a href="#portfolio" className="hover:text-blue-600">
              Portfolio
            </a>
        </li>

        

        <li>
            <a href="#Contact" className="hover:text-blue-600">
              Contact
            </a>
          </li>

        <li>
            <a href="#FAQ" className="hover:text-blue-600">
              FAQ
            </a>
        </li>
      </ul>

      <button className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700">
        Hire Us
      </button>

    </nav>
  );
}

export default Navbar;
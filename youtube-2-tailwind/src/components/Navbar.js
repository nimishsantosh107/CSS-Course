const Navbar = (props) => {
    return (
        <nav className="text-right">
            <div className="flex items-center justify-between">
                <h1 className="font-bold text-lg p-4 uppercase border-b border-gray-100">
                    <a href="/">TailWind Bro</a>
                </h1>
                <div className="p-4 cursor-pointer md:hidden">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-7 h-7"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                        />
                    </svg>
                </div>
            </div>
            <ul className="mt-6 hidden md:block">
                <li className="pt-3">
                    <a href="/" className="pr-4 border-r-4 border-primary">
                        <span>Home</span>
                    </a>
                </li>
                <li className="pt-3 pr-4 border-r-4 border-white">
                    <a href="/">
                        <span>About</span>
                    </a>
                </li>
                <li className="pt-3 pr-4 border-r-4 border-white">
                    <a href="/">
                        <span>Contact</span>
                    </a>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;

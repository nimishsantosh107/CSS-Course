const Navbar = (props) => {
    return (
        <nav>
            <div>
                <h1 className="font-bold uppercase p-4 border-b border-gray-100">
                    <a href="/">TailWind Bro</a>
                </h1>
            </div>
            <ul>
                <li>
                    <a href="/">
                        <span>Home</span>
                    </a>
                </li>
                <li>
                    <a href="/">
                        <span>About</span>
                    </a>
                </li>
                <li>
                    <a href="/">
                        <span>Contact</span>
                    </a>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;

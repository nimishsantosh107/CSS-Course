const Card = ({ src }) => {
    return (
        <div className="card">
            <img src={src} className="w-full h-32 sm:h-48 object-cover" />

            <div className="badge flex items-center">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-4 h-4"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                </svg>
                <span className="pl-1">25 mins</span>
            </div>

            <div className="m-4">
                <span className="font-bold">Dish 1</span>
                <span className="block text-gray-500 text-sm font-extralight">Recipe by Bro</span>
            </div>
        </div>
    );
};

export default Card;

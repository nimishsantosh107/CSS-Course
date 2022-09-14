const Card = ({ src }) => {
    return (
        <div className="card">
            <img src={src} className="w-full h-32 sm:h-48 object-cover" />

            <div className="badge">
                <span>25 mins</span>
            </div>

            <div className="m-4">
                <span className="font-bold">Dish 1</span>
                <span className="block text-gray-500 text-sm font-extralight">Recipe by Bro</span>
            </div>
        </div>
    );
};

export default Card;

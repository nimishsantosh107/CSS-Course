const Card = ({ src }) => {
    return (
        <div className="mt-8">
            <img src={src} />
            <div>
                <span>Dish 1</span>
                <span>Recipe by Bro</span>
            </div>
        </div>
    );
};

export default Card;

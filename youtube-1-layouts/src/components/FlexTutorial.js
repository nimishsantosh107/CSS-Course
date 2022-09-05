import "./FlexTutorial.css";
import React from "react";

const FlexTutorial = (props) => {
    return (
        <div className="flex-tutorial">
            <div className="flex-container">
                <div className="flex-item">Item 1</div>
                <div className="flex-item">Item 2</div>
                <div className="flex-item">Item 3</div>
            </div>
        </div>
    );
};

export default FlexTutorial;

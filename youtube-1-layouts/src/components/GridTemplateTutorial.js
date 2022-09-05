import "./GridTemplateTutorial.css";
import React from "react";

const GridTemplateTutorial = (props) => {
    return (
        <div className="grid-template">
            <div className="container">
                <header>Header</header>
                <main>Main</main>
                <nav>Nav</nav>
                <aside>Aside</aside>
                <footer>Footer</footer>
            </div>
        </div>
    );
};

export default GridTemplateTutorial;

import "./FlexProject.css";
import React from "react";

const FlexProject = (props) => {
    return (
        <div className="flex-project">
            <div>
                <nav className="navbar">
                    <div className="container">
                        <div className="logo">Flexbox</div>
                        <div className="nav">
                            <a href="#">Home</a>
                            <a href="#">About</a>
                            <a href="#">Contact</a>
                        </div>
                    </div>
                </nav>
                <header className="header">
                    <div className="container">
                        <div>
                            <h1>Flexbox Crash Course</h1>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Phasellus congue varius est,
                                nec egestas orci viverra molestie. Interdum et
                            </p>
                        </div>
                        <img src="https://traversymedia.com/images/grid.svg" />
                    </div>
                </header>
                <section className="boxes">
                    <div className="container">
                        <div className="box">
                            <h2>Alignment & Space</h2>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Phasellus congue varius est,
                                nec egestas orci viverra molestie. Interdum et
                            </p>
                        </div>
                        <div className="box">
                            <h2>Alignment & Space</h2>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Phasellus congue varius est,
                                nec egestas orci viverra molestie. Interdum et
                            </p>
                        </div>
                        <div className="box">
                            <h2>Alignment & Space</h2>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Phasellus congue varius est,
                                nec egestas orci viverra molestie. Interdum et
                            </p>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default FlexProject;

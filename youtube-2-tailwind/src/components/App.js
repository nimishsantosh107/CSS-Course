import Navbar from "./Navbar";
import Card from "./Card";

const App = () => {
    return (
        <>
            {/* NAVBAR */}
            <div>
                <Navbar />
            </div>
            {/* NAVBAR END */}
            {/* MAIN */}
            <main>
                <div>
                    <a href="#">Log in</a>
                    <a href="#">Sign Up</a>
                </div>

                <header>
                    <h2> Recipes</h2>
                    <h3> For Dummies</h3>
                </header>

                <div>
                    <h4>Latest Recipes</h4>
                    <div>
                        {/* CARDS */}
                        <Card src="/image.png" />
                    </div>

                    <h4>PopularRecipes</h4>
                    <div>
                        {/* CARDS */}
                        <Card src="/image.png" />
                    </div>

                    <div>
                        <div>Load more...</div>
                    </div>
                </div>
            </main>
        </>
    );
};

export default App;

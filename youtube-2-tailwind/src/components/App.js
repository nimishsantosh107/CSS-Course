import Navbar from "./Navbar";
import Card from "./Card";

const App = () => {
    return (
        <div className="text-gray-700 font-body grid md:grid-cols-3">
            {/* NAVBAR */}
            <div className="md:col-span-1">
                <Navbar />
            </div>
            {/* NAVBAR END */}
            {/* MAIN */}
            <main className="px-16 py-6 bg-gray-200 md: col-span-2">
                <div className="text-primary flex justify-center md:justify-end">
                    <a
                        href="#"
                        className="button md:border-2 border-primary hover:bg-primary hover:text-white transition"
                    >
                        Log in
                    </a>
                    <a
                        href="#"
                        className="button md:border-2 border-primary hover:bg-primary hover:text-white transition ml-2"
                    >
                        Sign Up
                    </a>
                </div>

                <header>
                    <h2 className="text-5xl font-bold"> Recipes</h2>
                    <h3 className="text-2xl font-light"> For Dummies</h3>
                </header>

                <div>
                    <h4 className="font-bold mt-12 pb-2 border-b border-gray-300">
                        Latest Recipes
                    </h4>
                    <div className="card-grid">
                        {/* CARDS */}
                        <Card src="/image.png" />
                        <Card src="/image.png" />
                        <Card src="/image.png" />
                    </div>

                    <h4 className="font-bold mt-12 pb-2 border-b border-gray-300">
                        PopularRecipes
                    </h4>
                    <div className="card-grid">
                        {/* CARDS */}
                        <Card src="/image.png" />
                        <Card src="/image.png" />
                        <Card src="/image.png" />
                    </div>

                    <div className="flex justify-center mt-6">
                        <div className="button bg-secondary-100 text-secondary-200 p-2 rounded-md hover:shadow-inner">
                            Load more...
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default App;

import Navbar from "./Navbar";
import Card from "./Card";

const App = () => {
    return (
        <div className="text-gray-700 font-body">
            {/* NAVBAR */}
            <div className="">
                <Navbar />
            </div>
            {/* NAVBAR END */}
            {/* MAIN */}
            <main className="px-16 py-6 bg-gray-200">
                <div className="text-primary flex justify-center md:justify-end">
                    <a href="#">Log in</a>
                    <a href="#" className="ml-2">
                        Sign Up
                    </a>
                </div>

                <header>
                    <h2 className="text-5xl font-bold"> Recipes</h2>
                    <h3 className="text-2xl font-light"> For Dummies</h3>
                </header>

                <div>
                    <h4 className="font-bold mt-12 pb-2 border-b border-gray-200">
                        Latest Recipes
                    </h4>
                    <div>
                        {/* CARDS */}
                        <Card src="/image.png" />
                        <Card src="/image.png" />
                        <Card src="/image.png" />
                    </div>

                    <h4 className="font-bold mt-12 pb-2 border-b border-gray-300">
                        PopularRecipes
                    </h4>
                    <div>
                        {/* CARDS */}
                        <Card src="/image.png" />
                        <Card src="/image.png" />
                        <Card src="/image.png" />
                    </div>

                    <div className="flex justify-center">
                        <div className="bg-secondary-100 text-white p-2 rounded-md hover:bg-secondary-200 transition">
                            Load more...
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default App;

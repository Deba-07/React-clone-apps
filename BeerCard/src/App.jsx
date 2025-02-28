import React, { useEffect, useState } from "react";
import BeerCard from "./components/BeerCard";

const App = () => {
  const [data, setData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [darkMode, setDarkMode] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://api.sampleapis.com/beers/ale");
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  const filteredBeers = data.filter((beer) =>
    beer.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className={`min-h-screen p-5 transition-all ${darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-white"}`}>
      <button onClick={toggleDarkMode} className="mb-4 px-4 py-2 bg-blue-500 text-white rounded">
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>

      <input
        type="text"
        placeholder="Search for a beer..."
        className="w-full p-2 border rounded mb-4 text-blue-700"
        onChange={(e) => setSearchQuery(e.target.value)}
      />

      {loading ? (
        <p className="text-center">Loading...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {filteredBeers.length > 0 ? (
            filteredBeers.map((beer) => <BeerCard key={beer.id} beer={beer} />)
          ) : (
            <p className="text-center col-span-3">No beers found.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default App;

import React from "react";
import { motion } from "framer-motion";

const BeerCard = ({ beer }) => {
  return (
    <motion.div
      className="border p-4 rounded-lg shadow-lg transition-transform hover:scale-105 bg-white dark:bg-gray-800"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <img src={beer.image} alt={beer.name} className="w-32 h-32 mx-auto rounded-md" />
      <h3 className="mt-2 text-lg font-semibold text-center">{beer.name}</h3>
      <p className="text-center text-gray-500">Price: {beer.price || "N/A"}</p>
      <p className="text-center text-yellow-500 font-bold">
        Rating: {beer.rating?.average ? beer.rating.average.toFixed(1) : "N/A"}
      </p>
    </motion.div>
  );
};

export default BeerCard;

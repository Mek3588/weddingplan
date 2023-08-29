import React from 'react'

const Budgetracking = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-2xl font-bold mb-4">Budget Tracking</h1>

        {/* Budget Item Form */}
        <div className="bg-white p-4 rounded shadow mb-4">
          <h2 className="text-lg font-semibold mb-2">Add New Budget Item</h2>
          <div className="mb-2">
            <input
              type="text"
              placeholder="Item Name"
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div className="mb-2">
            <input
              type="text"
              placeholder="Category"
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div className="mb-2">
            <input
              type="number"
              placeholder="Estimated Cost"
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            Add Item
          </button>
        </div>

        {/* Total Budget Calculation */}
        <div className="bg-white p-4 rounded shadow mb-4">
          <h2 className="text-lg font-semibold mb-2">Total Budget</h2>
          <div className="flex items-center">
            <p className="mr-2">Estimated Total:</p>
            <span className="text-green-600 font-semibold">$10,000</span>
          </div>
          <div className="flex items-center">
            <p className="mr-2">Actual Spending:</p>
            <span className="text-red-600 font-semibold">$8,500</span>
          </div>
          <div className="flex items-center">
            <p className="mr-2">Remaining Budget:</p>
            <span className="text-blue-600 font-semibold">$1,500</span>
          </div>
        </div>

        {/* Budget Categories */}
        <div className="bg-white p-4 rounded shadow mb-4">
          <h2 className="text-lg font-semibold mb-2">Budget Categories</h2>
          <ul>
            <li className="mb-2">Venue</li>
            <li className="mb-2">Catering</li>
            <li className="mb-2">Decorations</li>
            {/* Add more categories */}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Budgetracking
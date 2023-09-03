import React from 'react';

const CategoryList = ({ budgetData }) => {
  return (
    <div className="lg:w-1/2 md:w-1/3 sm:w-1/2 w-full bg-gray-100 p-4 rounded-lg shadow-lg ml-4">
      <h2 className="text-xl font-semibold mb-4">Categories</h2>
      <ul>
        {budgetData.labels.map((label, index) => (
          <li key={index} className="flex justify-between items-center mb-4">
            <span className="text-lg text-gray-700">{label}</span>
            <span className="text-lg text-green-500 font-semibold ml-4">${budgetData.datasets[0].data[index]}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryList;

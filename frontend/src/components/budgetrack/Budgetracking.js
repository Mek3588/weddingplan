import React, { useState } from 'react';
import { Doughnut } from 'react-chartjs-2';
import 'chart.js/auto';
import 'chartjs-plugin-datalabels';
import CategoryList from './CatagoryList';

const BudgetTracker = () => {
  const initialBudget = 1500;
  const [budget, setBudget] = useState(initialBudget);

  const budgetData = {
    labels: ['Food', 'Rent', 'Entertainment', 'Other'],
    datasets: [
      {
        data: [300, 800, 200, 500],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4CAF50'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4CAF50'],
      },
    ],
  };

  const options = {
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'end',
        offset: 10,
        color: 'black',
        font: {
          weight: 'bold',
        },
        formatter: (value, context) => {
          const label = budgetData.labels[context.dataIndex];
          const amount = budgetData.datasets[0].data[context.dataIndex];
          return `${label}: $${amount}`;
        },
      },
    },
  };

  const totalExpenses = budgetData.datasets[0].data.reduce((acc, value) => acc + value, 0);
  const remainingBudget = budget - totalExpenses;

  return (
    <div className="container mx-auto py-8">
      <div className="lg:flex">
        <div className="lg:w-1/2 p-4">
          <div className="mb-4">
            <h1 className="text-3xl font-semibold mb-2">Budget Tracker</h1>
            <p className="text-lg font-semibold">Budget Limit: ${budget}</p>
            <p className="text-lg font-semibold">Remaining Budget: ${remainingBudget}</p>
          </div>
          <Doughnut data={budgetData} options={options} />
        </div>
        <div className="lg:w-1/2">
          <CategoryList budgetData={budgetData} />
        </div>
      </div>
    </div>
  );
};

export default BudgetTracker;

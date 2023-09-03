import React, { useState,useEffect  } from 'react';
import { motion } from 'framer-motion';
import Pays from './Pays';
import { useLocation } from 'react-router-dom';

function Payments() {
  const location = useLocation();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [amount, setAmount] = useState(0);
  
  
  useEffect(() => {
    
    const queryParams = new URLSearchParams(location.search);
    const amountParam = queryParams.get('amount');
    
    if (amountParam !== null) {
      const parsedAmount = parseFloat(amountParam);
      if (!isNaN(parsedAmount) && parsedAmount >= 0) {
        setAmount(parsedAmount);
      }
    }
  }, [location.search]);
    
  const isAmountInvalid = amount < 0;

  const tx_ref = `PAYMENT-${Date.now()}`;
  const public_key ="CHAPUBK_TEST-HGcky5M8HaaUBwgeyyhXwfzPZC2zKRBH"

  return (
    <div className="min-h-screen flex items-center justify-center bg-indigo-500"> 
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="max-w-xl w-full p-8 bg-white shadow-md rounded-lg"
  >
    <h2 className="text-2xl font-semibold mb-4 text-indigo-500">Make a Payment</h2> {/* Changed text color */}
    
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="fname">
          Bride Name
        </label>
        <input
          type="text"
          id="fname"
          className="w-full p-2 border rounded-md focus:ring focus:ring-indigo-200 focus:border-indigo-400" 
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="lname">
          Groom Name
        </label>
        <input
          type="text"
          id="lname"
          className="w-full p-2 border rounded-md focus:ring focus:ring-indigo-200 focus:border-indigo-400" 
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="email">
          Email
        </label>
        <input
          type="email"
          id="email"
          className="w-full p-2 border rounded-md focus:ring focus:ring-indigo-200 focus:border-indigo-400" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="amount">
          Amount
        </label>
        <input
              type="number"
              id="amount"
              className={`w-full p-2 border rounded-md border-indigo-400 focus:ring ${
              isAmountInvalid ? 'ring-red-500' : 'ring-indigo-200'
            }`}
            value={amount}
            readOnly 
              onChange={(e) => setAmount(e.target.value)}
              />

        {isAmountInvalid && (
          <p className="text-red-500 text-sm mt-1">Amount cannot be negative</p>
        )}
      </div>
      <Pays firstName={firstName} lastName={lastName} email={email} amount={amount} tx_ref={tx_ref} public_key={public_key}/>
   
  </motion.div>
</div>

  );
}

export default Payments;

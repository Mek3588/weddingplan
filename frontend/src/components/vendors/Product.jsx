import React from 'react'

function Product() {

    const vendors = [
        { id: 1, name: 'Vendor 1', category: 'Electronics' },
        { id: 2, name: 'Vendor 2', category: 'Clothing' },
        { id: 3, name: 'Vendor 3', category: 'Food' },
        
      ];
        return (
          <div className="bg-gray-100 min-h-screen py-8">
            <div className="container mx-auto px-4">
              <h1 className="text-3xl font-bold mb-4">Vendors</h1>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {vendors.map((vendor) => (
                  <div
                    key={vendor.id}
                    className="bg-white p-4 shadow-md rounded-md"
                  >
                    <h2 className="text-xl font-semibold mb-2">{vendor.name}</h2>
                    <p className="text-gray-600">{vendor.category}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      
                }
export default Product
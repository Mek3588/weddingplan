import React,{useState} from 'react';
import { FaCamera } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { ImagetoBase64 } from '../utility/ImagetoBase64'
import { toast } from 'react-hot-toast'


function NewProduct() {
  const [data,setData] = useState({
    name : "",
    category : "",
    image : "",
    price : "",
    description : ""
  })

  const handleOnChange = (e)=>{
    const {name,value} = e.target

    setData((preve)=>{
        return{
          ...preve,
          [name] : value
        }
    })

  }

  const uploadImage = async(e)=>{
    const data = await ImagetoBase64(e.target.files[0])

    setData((preve)=>{
      return{
        ...preve,
        image : data
      }
    })
}

const handleSubmit = async(e)=>{
  e.preventDefault()
  console.log(data)

  const {name,image,category,price} = data

  if(name && image && category && price){
    const fetchData = await fetch(`${process.env.REACT_APP_SERVER_DOMIN}/uploadProduct`,{
      method : "POST",
      headers : {
        "content-type" : "application/json"
      },
      body : JSON.stringify(data)
    })

    const fetchRes =  await fetchData.json()

    console.log(fetchRes)
    toast(fetchRes.message)

    setData(()=>{
      return{
        name : "",
        category : "",
        image : "",
        price : "",
        description : ""
      }
    })
  }
  else{
    toast("Enter required Fields")
  }
}


  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <motion.form
        className="w-full max-w-2xl p-8 bg-white rounded-lg shadow-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        onSubmit={handleSubmit}
      >
        <h2 className="text-3xl text-gray-800 font-semibold mb-6">
          Add a New Product
        </h2>
        <label htmlFor="name" className="text-gray-600 font-medium mb-2">
          Product Name
        </label>
        <input
          type="text"
          id='name'
          name="name"
          className="w-full bg-gray-200 p-3 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          onChange={handleOnChange}
          value={data.name}
        />

        <label htmlFor="category" className="text-gray-600 font-medium mb-2">
          Category
        </label>
        <select
          className="w-full bg-gray-200 p-3 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          id="category"
          name="category"
          onChange={handleOnChange}
          value={data.category}
        >
          <option value={"other"}>Select category</option>
          <option value={"venue"}>Venue</option>
          <option value={"decor"}>Decorations</option>
          <option value={"catering"}>Catering</option>
          <option value={"flowers"}>Flowers</option>
          <option value={"photography"}>Photography</option>
          <option value={"hotel"}>Hotel</option>
          <option value={"cars"}>Cars</option>
          
        </select>

        <label htmlFor="image" className="text-gray-600 font-medium mb-2">
          Product Image
          <div className="h-80 w-full bg-gray-200 rounded-md flex items-center justify-center cursor-pointer mt-2">
          {
              data.image ? <img src={data.image} className="h-full" /> :<span className='text-5xl'><FaCamera className="text-gray-500 text-5xl" /></span> 
            }
            <input
              type="file"
              accept="image/*"
              id="image"
              className="hidden"
              onChange={uploadImage}
            />
            
          </div>
        </label>

        <label htmlFor="price" className="text-gray-600 font-medium mb-2">
          Price
        </label>
        <input
          type="text"
          name="price"
          id='price'
          className="w-full bg-gray-200 p-3 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          onChange={handleOnChange}
          value={data.price}
        />

        <label htmlFor="description" className="text-gray-600 font-medium mb-2">
          Description
        </label>
        <textarea
          rows={4}
          name="description"
          className="w-full bg-gray-200 p-3 rounded-md mb-4 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={data.description}
          onChange={handleOnChange}
       ></textarea>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-full bg-blue-500 hover:bg-blue-600 text-white text-lg font-medium py-3 rounded-md transition-transform"
        >
          Add Product
        </motion.button>
      </motion.form>
    </div>
  );
}

export default NewProduct;

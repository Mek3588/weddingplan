import "./App.css"
import Pages from "./components/pages/Pages"
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { setDataProduct } from "./components/redux/productSlide";

function App() {
  const dispatch = useDispatch()
  const productData = useSelector((state)=>state.product)
  console.log(productData)
 
  useEffect(()=>{
    (async()=>{
      const res = await fetch(`${process.env.REACT_APP_SERVER_DOMIN}/Product`)
      const resData = await res.json()
      dispatch(setDataProduct(resData))
    })()
  },[])

  return (
    
  <Pages />)

}

export default App

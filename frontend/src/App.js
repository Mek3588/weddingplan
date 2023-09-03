import "./App.css";
import Pages from "./components/pages/Pages";
import { useDispatch, useEffect } from "react";
import { setDataProduct } from "./components/redux/productSlide";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchData() {
      try {
        // Fetch data from your backend API
        const response = await fetch('https://backend-8afy.onrender.com/Product', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const responseData = await response.json();

        // Dispatch the data to your Redux store
        dispatch(setDataProduct(responseData));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, [dispatch]);

  return <Pages />;
}

export default App;

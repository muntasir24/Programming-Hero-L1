import axios from "axios";
import { useEffect, useState } from "react";

const useProducts=()=>{
    const [products, setProducts] = useState([]);
    const [Loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        axios("../furnitureData.json")
            .then(data => setProducts(data.data))
            .catch(err => setError(err))
            .finally(() => setLoading(false))
  },[])

    return { products, Loading, error };
}

export default useProducts;
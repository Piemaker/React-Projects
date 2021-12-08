import {useState, useEffect} from "React"
export  const useFetch = (url) => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);

  const getProducts = (async () => {
    const response = await fetch(url);
    const products = await response.json();
    console.log(products)
    setProducts(products);
    setLoading(false);
  });

  useEffect(() => {
    getProducts();
  }, [url, getProducts]);
  return { loading, products };
};

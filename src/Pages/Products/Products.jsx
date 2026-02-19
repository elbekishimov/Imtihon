// Products.jsx
import { useEffect, useState } from "react";
import ProductItem from "./_components/ProductsItem";

export default function Products() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const req = await fetch("/db.json");
        const res = await req.json();
        setData(res.products || []);
        localStorage.setItem("userProduct", JSON.stringify(res.products || []));
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);
  return (
    <div className="grid grid-cols-4 gap-5 p-10">
      {data.length === 0 ? (
        <h1>Loading...</h1>
      ) : (
        data.map((item) => (
          <div key={item.id} className="shadow p-3 rounded-xl">
            <ProductItem product={item} />
          </div>
        ))
      )}
    </div>
  );
}
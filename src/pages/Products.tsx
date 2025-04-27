import Product from "../components/eCommerce/Product"
import { useLoaderData } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { useEffect } from "react";
import actGetProducts from "../store/products/act/actGetProducts";

const Products = () => {
  const category = useLoaderData();
  const dispatch = useAppDispatch();
  const {records, loading, error} = useAppSelector(state => state.productsSlice)
  useEffect(()=>{
    dispatch(actGetProducts(category));
  }, [dispatch]);

  const productsList = records.length > 0 ?
    records.map(record => <Product key={record.id} {...record} />) :
    "There are no products"
  ;

  return (
    <>
      {
        (loading === "idle" || loading === "succeeded") ? 
          (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
              {productsList}
            </div>
          )
        : (<div>Loading...</div>)
      }
    </>
  )

}

export default Products
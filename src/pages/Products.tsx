import Product from "../components/eCommerce/Product";
import { useLoaderData } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { useEffect } from "react";
import actGetProducts from "../store/products/act/actGetProducts";
import { productsCleanUp } from "../store/products/productsSlice";
import Loading from "../components/common/Loading";
import GridList from "../components/common/GridList";

const Products = () => {
  const category: string = useLoaderData();
  const dispatch = useAppDispatch();
  const { records, loading, error } = useAppSelector(
    (state) => state.productsSlice
  );
  useEffect(() => {
    dispatch(actGetProducts(category));
    return () => {
      dispatch(productsCleanUp());
    };
  }, [dispatch, category]);

  
  return (
    <>
      <Loading status={loading} error={error}>
        <GridList records={records} renderItem={(record) => <Product key={record.id} {...record} /> } />
      </Loading>
    </>
  );
};

export default Products;

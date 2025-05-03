import { useAppDispatch, useAppSelector } from "../store/hooks";
import actGetCategories from "../store/categories/act/actGetCategories";
import Category from "../components/eCommerce/Category";
import { useEffect } from "react";
import Loading from "../components/common/Loading";
import GridList from "../components/common/GridList";

const Categories = () => {
  const dispatch = useAppDispatch();
  const { records, loading, error } = useAppSelector(
    (state) => state.categoriesSlice
  );
  useEffect(() => {
    if (records.length == 0) {
      dispatch(actGetCategories());
    }
  }, [dispatch, records]);

  return (
    <>
      <Loading status={loading} error={error}>
        <GridList records={records} renderItem={(record) => <Category key={record.id} {...record} /> } />
      </Loading>
    </>
  );
};

export default Categories;

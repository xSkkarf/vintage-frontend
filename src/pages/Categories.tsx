import { useAppDispatch, useAppSelector } from "../store/hooks";
import actGetCategories from "../store/categories/act/actGetCategories";
import Category from "../components/eCommerce/Category";
import { useEffect } from "react";
import Loading from "../components/common/Loading";

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

  const categoriesList =
    records.length > 0
      ? records.map((record) => <Category key={record.id} {...record} />)
      : "There are no categories";
  return (
    <>
      <Loading status={loading} error={error}>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
          {categoriesList}
        </div>
      </Loading>
    </>
  );
};

export default Categories;

type TGridListProps<T> = {
  records: T[];
  renderItem: (record: T) => React.ReactNode;
};

const GridList = <T,>({ records, renderItem }: TGridListProps<T>) => {
  const recordsList =
    records.length > 0
      ? records.map((record) => renderItem(record))
      : "There are no items in this List";
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">{recordsList}</div>
  );
};

export default GridList;

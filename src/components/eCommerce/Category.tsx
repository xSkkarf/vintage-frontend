import { Link } from "react-router-dom";
import { TCategory } from "../../types/types";

const Category = ({ name, image, prefix }: TCategory) => {
  return (
    <Link to={`/products/${prefix}`}>
      <div
        style={{ "--image-url": `url(${image})` } as React.CSSProperties}
        className="flex flex-col justify-center items-center my-6"
      >
        <div className="bg-[image:var(--image-url)] bg-cover bg-center bg-no-repeat w-50 h-50 rounded-full"></div>
        <div className="text-3xl mt-4">{name}</div>
      </div>
    </Link>
  );
};

export default Category;

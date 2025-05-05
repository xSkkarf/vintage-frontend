import { addToCart } from "../../store/cart/cartSlice";
import { useAppDispatch } from "../../store/hooks";
import { TProduct } from "../../types/types";

const Product = ({ id, image, name, price, oldPrice }: TProduct) => {
  const dispatch = useAppDispatch();

  function addToCartHandler() {
    dispatch(addToCart(id));
  }
  return (
    <div className="my-6">
      <div
        style={{ "--image-url": `url(${image})` } as React.CSSProperties}
        className="w-50 h-60 bg-[image:var(--image-url)] bg-cover bg-center bg-no-repeat rounded-md"
      ></div>
      <div className="my-1 text-2xl">{name}</div>
      <div className="my-1">
        <span className="line-through text-gray-500">{oldPrice}$</span>
        <span className="ml-2 text-black">{price}$</span>
      </div>
      <div>
        <button
          type="button"
          onClick={addToCartHandler}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 hover:cursor-pointer"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Product;

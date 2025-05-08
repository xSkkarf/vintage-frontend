import Logo from "../../assets/cart.svg?react";
import { useAppSelector } from "../../store/hooks";

const Cart = () => {
  const { count } = useAppSelector((state) => state.rootReducer.cartSlice);

  return (
    <div className="fixed flex top-10 right-10">
      <div className="flex bg-white p-2 rounded-2xl">
        <Logo className="w-8 h-8" />
        <div className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
          {count}
        </div>
      </div>
    </div>
  );
};

export default Cart;

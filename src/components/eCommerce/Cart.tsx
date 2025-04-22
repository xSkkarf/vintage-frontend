import Logo from "../../assets/cart.svg?react";

const Cart = () => {
  return (
    <div className="relative flex mr-4">
      <Logo className="w-8 h-8" />
      <div className="absolute -top-3 -right-3 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
        3
      </div>
    </div>
  );
};

export default Cart;
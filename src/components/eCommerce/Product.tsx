
const Product = () => {

  function addToCart(){

  }
  return (
    <div className="my-6">
      <div className="w-50 h-60 bg-blue-300"></div>
      <div className="my-1 text-2xl">title</div>
      <div className="my-1">
        <span className="line-through text-gray-500">49.99$</span> 
        <span className="ml-2 text-black">39.99$</span>
      </div>
      <div>
        <button 
              type="button" 
              onClick={addToCart} 
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 hover:cursor-pointer"
            >
              Add to Cart
        </button>
      </div>
    </div>
  )
}

export default Product
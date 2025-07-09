function ProductCard({ product }) {
  return (
        <div className="bg-white rounded-xl shadow-md p-4 w-[220px] h-[320px] flex flex-col items-center space-y-2">
      {/* Product Image */}
      <img
        src={product.image}
        alt={product.title}
        className="h-28 object-cover rounded-md"
      />

      {/* Store Logo */}
      <div className="bg-white px-2 py-1 rounded-md shadow -mt-5 z-10">
        <img src={product.storeLogo} alt="Store" className="h-5 object-contain" />
      </div>

      {/* Title */}
      <h3 className="text-sm font-semibold text-center line-clamp-2">
        {product.title}
      </h3>

      {/* Cashback Badge */}
      <div className="bg-green-100 text-green-700 text-xs font-medium px-3 py-1 rounded-full flex items-center space-x-1">
        <img src="/cashback-icon.png" alt="cashback" className="h-4" />
        <span>{product.cashback}</span>
      </div>

      {/* Price */}
      <div className="text-center mt-auto">
        <p className="text-lg font-semibold text-gray-900">
          ₹{product.discountedPrice}*
          <span className="line-through text-gray-400 text-sm ml-1">
            ₹{product.originalPrice}
          </span>
        </p>
        <p className="text-xs text-gray-500">*After Discount & Cashback</p>
      </div>
    </div>
  );
}

export default ProductCard;

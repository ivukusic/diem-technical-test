import { useState } from 'react';

import { useLoaderData } from '@remix-run/react';

import { ProductReview } from '../productReview';
import { RatingStars } from '../ratingStars';
import { ProductDetailsGallery } from '../productDetailsGallery';

export const ProductDetails = () => {
  const product = useLoaderData();

  const [quantity, setQuantity] = useState(product.minimumOrderQuantity);

  const handleQuantityChange = (e) => {
    setQuantity(e.target.value);
  };

  const isBuyAvailable = product.stock >= product.minimumOrderQuantity;

  let discount = 0;
  const originalPrice = product.price;
  let price = product.price;
  if (product.discountPercentage) {
    discount = (product.price / 100) * product.discountPercentage;
    price = (product.price - discount).toFixed(2);
  }
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="-mx-4 flex flex-col lg:flex-row">
        <ProductDetailsGallery product={product} />

        <div className="px-4 md:flex-1">
          <div className="relative flex items-start justify-between">
            <div className="mr-2 pr-24">
              <h2 className="font-bold leading-3">{product.brand}</h2>
              <h3 className="mb-2 text-2xl font-bold">{product.title}</h3>
            </div>
            <div className="absolute right-0 top-0 flex flex-col items-center">
              <div className="-mt-2 h-24 w-24">
                <img
                  className="h-full w-full object-cover"
                  src={product.meta?.qrCode}
                  alt={`qrCode-${product.tile}`}
                />
              </div>
              <span className="text-[11px] leading-3 opacity-90">
                {product.meta?.barcode}
              </span>
            </div>
          </div>

          <div>
            <span className="mr-1 font-bold">SKU:</span>
            <span>{product.sku}</span>
          </div>

          <div className="mr-4">
            <span className="mr-1 font-bold">Price:</span>$
            <span className="mr-2">{price}</span>
            {discount ? (
              <span className="text-sm line-through">{`$${originalPrice}`}</span>
            ) : (
              ''
            )}{' '}
            {!!product.discountPercentage && (
              <span className="ml-2 rounded-full bg-yellow-600 p-2 py-1.5 font-bold text-white">
                -{product.discountPercentage}%
              </span>
            )}
          </div>

          <div className="mt-4">
            <span className="mr-1 font-bold">Availability:</span>
            <span>{product.availabilityStatus}</span>
          </div>

          <div className="mt-4">
            <RatingStars rating={product.rating} />
          </div>

          <div className="mt-4">
            <span className="font-bold">Product description:</span>
            <p className="mt-1 text-sm">{product.description}</p>
          </div>

          <div className="mt-4">
            {!!product.dimensions?.width && (
              <div>
                <span className="mr-1 font-bold">Dimensions:</span>
                <span className="text-sm">
                  {product.dimensions.width}x{product.dimensions.height}x
                  {product.dimensions.depth}
                </span>
              </div>
            )}
            {!!product.returnPolicy && (
              <div>
                <span className="mr-1 font-bold">Return policy:</span>
                <span className="text-sm">{product.returnPolicy}</span>
              </div>
            )}
            {!!product.returnPolicy && (
              <div>
                <span className="mr-1 font-bold">Shipping information:</span>
                <span className="text-sm">{product.shippingInformation}</span>
              </div>
            )}
          </div>

          <div className="mt-4 flex flex-col">
            {isBuyAvailable ? (
              <input
                className="w-32 rounded-md border border-gray-400 p-2 text-center"
                type="number"
                id="quantity"
                name="quantity"
                min={product.minimumOrderQuantity}
                max={product.stock}
                onChange={handleQuantityChange}
                step={1}
                value={quantity}
              />
            ) : (
              <div className="mb-3 text-sm text-red-600">
                There are not enough products in stock.
              </div>
            )}
            <span className="mt-1 text-xs leading-3 opacity-80">
              In stock: {product.stock}
            </span>
            <span className="mt-1 text-xs leading-3 opacity-80">
              Minimum order quantity: {product.minimumOrderQuantity}
            </span>
          </div>

          <div className="my-4 mt-8 flex gap-2">
            <div className="w-1/2">
              {isBuyAvailable && (
                <button className="w-full rounded-full bg-gray-600 px-4 py-2 font-bold text-white hover:bg-gray-800 dark:hover:bg-gray-700">
                  Add to Cart
                </button>
              )}
            </div>
            <div className="w-1/2">
              <button className="w-full rounded-full bg-gray-600 px-4 py-2 font-bold text-white hover:bg-gray-800 dark:hover:bg-gray-700">
                Add to Wishlist
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-4">
        <ProductReview reviews={product.reviews} />
      </div>
    </div>
  );
};

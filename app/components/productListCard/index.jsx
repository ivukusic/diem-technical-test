import { Link, useLoaderData } from '@remix-run/react';

export const ProductListCard = ({ product }) => {
  let discount = 0;
  let price = product.price;
  if (product.discountPercentage) {
    discount = (product.price / 100) * product.discountPercentage;
    price = (product.price - discount).toFixed(2);
  }
  return (
    <article className="group mx-auto flex flex-1 cursor-pointer flex-col justify-between rounded-2xl border border-gray-200/60 p-4 transition-all duration-500 hover:shadow-md sm:mr-0 lg:mx-auto">
      <Link className="flex flex-1 cursor-pointer flex-col" to={`/products/${product.id}`}>
        <div className="relative">
          <img
            src={product.thumbnail}
            alt={product.title}
            className="max-h-80 w-full rounded-2xl object-contain"
          />

          {!!product.discountPercentage && (
            <div className="absolute -top-1 right-0">
              <div className="text-md rounded-xl bg-primary/80 p-2 font-semibold leading-6 text-white transition-all duration-500 group-hover:bg-primary">
                -{product.discountPercentage}%
              </div>
            </div>
          )}
        </div>
        <div className="mt-5">
          <div className="flex flex-row items-start justify-between">
            <h6 className="text-xl font-semibold leading-6 text-black transition-all duration-500 group-hover:text-primary">
              {product.title}
            </h6>
            <span className="rounded-xl text-xl font-semibold leading-6 text-primary">
              ${price}
            </span>
          </div>
          <p className="mt-2 line-clamp-3 max-w-prose text-sm font-normal leading-6 text-gray-500">
            {product.description}
          </p>
        </div>
      </Link>
    </article>
  );
};

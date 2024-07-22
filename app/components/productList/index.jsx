import { Link, useLoaderData } from '@remix-run/react';

export const ProductList = ({ count, featured }) => {
  const productList = useLoaderData();
  const products = productList.products.slice(0, count || 10);

  return (
    <section className="container mx-auto px-4 py-6">
      <div className="mb-8 flex items-center">
        <h2 className="text-4xl font-bold text-black">
          {featured ? 'Featured products' : 'Product list'}
        </h2>
        {!!featured && (
          <Link
            className="ml-4 rounded-full border border-gray-600 px-6 py-2 font-bold text-gray-800 hover:border-gray-800"
            to="/products/list"
          >
            View all
          </Link>
        )}
      </div>
      <div className="grid grid-cols-1 gap-4 gap-y-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {!!products.length &&
          products.map((product) => {
            let discount = 0;
            let price = product.price;
            if (product.discountPercentage) {
              discount = (product.price / 100) * product.discountPercentage;
              price = (product.price - discount).toFixed(2);
            }
            return (
              <article
                key={product.id}
                className="group mx-auto flex flex-1 cursor-pointer flex-col justify-between rounded-2xl border border-gray-200/60 p-4 transition-all duration-500 hover:shadow-md sm:mr-0 lg:mx-auto"
              >
                <Link
                  className="flex flex-1 cursor-pointer flex-col"
                  to={`/products/${product.id}`}
                >
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
          })}
      </div>
    </section>
  );
};

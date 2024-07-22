import { Link, useLoaderData } from '@remix-run/react';

import { ProductListCard } from '../productListCard';

export const ProductList = ({ count, featured }) => {
  const productList = useLoaderData();
  const products = productList.products.slice(0, count || 10);

  const renderProduct = (product) => <ProductListCard key={product.id} product={product} />;

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
        {!!products?.length && products.map(renderProduct)}
      </div>
    </section>
  );
};

import { json } from '@remix-run/node';

import { ProductList } from '../components/productList';
import { getProducts } from '../data';

export default function ProductListPage() {
  return (
    <main className="flex flex-1">
      <ProductList />
    </main>
  );
}

export async function loader() {
  const productList = await getProducts();
  if (!productList.products.length) {
    throw json({ message: 'Could not find products' }, { status: 404 });
  }
  return json(productList);
}

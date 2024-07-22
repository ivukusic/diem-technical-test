import { json } from '@remix-run/node';

import { ProductDetails } from '../components/productDetails';
import { links as productReviewLinks } from '../components/productReview';
import { links as productDetailsGalleryLinks } from '../components/productDetailsGallery';
import { getProductDetails } from '../data';

export default function ProductListPage() {
  return (
    <main className="flex flex-1">
      <ProductDetails />
    </main>
  );
}

export function links() {
  return [...productReviewLinks(), ...productDetailsGalleryLinks()];
}

export async function loader({ params }) {
  const product = await getProductDetails(params.productId);
  if (!product) {
    throw json({ message: 'Could not find products' }, { status: 404 });
  }
  return product;
}

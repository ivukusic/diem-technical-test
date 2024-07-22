import { useState } from 'react';

import Lightbox from 'yet-another-react-lightbox';
import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails';

import css from 'yet-another-react-lightbox/styles.css';
import thumbnail from 'yet-another-react-lightbox/plugins/thumbnails.css';

export function links() {
  return [
    { rel: 'stylesheet', href: css },
    { rel: 'stylesheet', href: thumbnail },
  ];
}

export const ProductDetailsGallery = ({ product }) => {
  const [open, setOpen] = useState(false);
  const [itemIndex, setItemIndex] = useState(0);

  const handleOpen = (index) => () => {
    setOpen(true);
    setItemIndex(index);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const images = product.images;
  const image = images?.[0];
  const restImages = images?.slice(1, images?.length).map((src) => ({ src }));
  return (
    <>
      <div className="mb-4 px-4 md:flex-1">
        <div className="mb-1 h-[460px] rounded-lg bg-gray-100" onClick={handleOpen(0)}>
          <img className="h-full w-full object-contain" src={image} alt="Product Image" />
        </div>

        <div className="grid grid-cols-3 gap-1">
          {!!restImages?.length &&
            restImages.slice(0, 3).map((image, index) => (
              <div
                key={index.toString()}
                className="relative mb-4 h-[160px] rounded-lg border border-gray-200/70"
              >
                <img
                  className="h-full w-full object-contain"
                  data-lightbox="product-details-gallery"
                  src={image.src}
                  alt={product.title}
                  onClick={handleOpen(index + 1)}
                />
                {restImages.length > 3 && index === 2 && (
                  <div
                    className="absolute bottom-0 left-0 right-0 top-0 flex items-center justify-center bg-white/95"
                    onClick={handleOpen}
                  >
                    <span className="text-2xl font-bold text-black/60">
                      +{restImages.length - 3}
                    </span>
                  </div>
                )}
              </div>
            ))}
        </div>
      </div>
      <Lightbox
        close={handleClose}
        plugins={restImages?.length ? [Thumbnails] : []}
        slides={[{ src: image }, ...(restImages?.length ? restImages : [])]}
        index={itemIndex}
        open={open}
        styles={{
          container: { backgroundColor: 'white' },
          root: {
            '--yarl__color_backdrop': 'rgba(255, 255, 255, 1)',
            '--yarl__thumbnails_thumbnail_background': 'rgba(255,255,255,1)',
            '--yarl__thumbnails_thumbnail_border_color': 'rgba(0,0,0,0.1)',
            '--yarl__thumbnails_thumbnail_active_border_color': 'rgba(0,0,0,0.4)',
          },
        }}
        thumbnails={{
          position: 'bottom',
          width: 60,
          height: 60,
          border: 1,
          borderRadius: 10,
          padding: 10,
          gap: 4,
        }}
      />
    </>
  );
};

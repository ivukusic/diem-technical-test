import dayjs from 'dayjs';

import { Swiper, SwiperSlide } from 'swiper/react';

import { RatingStars } from '../ratingStars';

const swiperCDNHref = 'https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.css';

export const ProductReview = ({ reviews }) => {
  const renderReview = (review, index) => (
    <SwiperSlide key={`review-${index}`}>
      <div className="mx-auto flex w-full flex-col justify-between rounded-2xl border border-gray-200/70 p-4 px-6">
        <div className="text-md">
          <div className="mb-1 text-xs font-light text-gray-500">
            {dayjs(review.date).format('MMMM D, YYYY')} at{' '}
            {dayjs(review.date).format('HH:mm')}
          </div>
          <h4 className="mb-2 text-sm leading-3">{review.reviewerName}</h4>
        </div>
        <RatingStars rating={review.rating} />
        <p className="mb-3 mt-1">{review.comment}</p>
      </div>
    </SwiperSlide>
  );

  if (!reviews?.length) {
    return <></>;
  }
  const breakpoints = {
    480: { slidesPerView: 1.2 },
    768: { slidesPerView: 2.2 },
    1024: { slidesPerView: 3.2 },
    1440: { slidesPerView: 4.2 },
  };
  return (
    <div className="max-w-svw w-full">
      <div className="w-full">
        <Swiper
          slidesPerView={1.2}
          breakpoints={breakpoints}
          spaceBetween={10}
          freeMode={true}
          className="mySwiper"
        >
          {reviews.map(renderReview)}
        </Swiper>
      </div>
    </div>
  );
};

export function links() {
  return [{ rel: 'stylesheet', href: swiperCDNHref }];
}

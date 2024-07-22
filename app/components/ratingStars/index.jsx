export const RatingStars = ({ rating }) => {
  const numberOfStars = Math.floor(rating);
  const starsFull = Array.from({ length: numberOfStars }, (_, i) => i);
  const starsEmpty = Array.from({ length: 5 - numberOfStars }, (_, i) => i);
  return (
    <div className="flex items-center mb-2">
      <div className="flex items-center mb-1 gap-x-1">
        {starsFull.map((_, i) => (
          <svg
            key={`full-start${i}`}
            className="w-4 h-4 text-yellow-500"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 22 20"
          >
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
          </svg>
        ))}
        {starsEmpty.map((_, i) => (
          <svg
            key={`empty-start-${i}`}
            className="w-4 h-4 dark:text-gray-300"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 22 20"
          >
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
          </svg>
        ))}
      </div>
      <p className="text-sm ml-2">{rating}</p>
      <p className="text-sm mx-1">out of</p>
      <p className="text-sm">5</p>
    </div>
  );
};

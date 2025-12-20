import { FaRegBookmark, FaShareAlt, FaStar, FaEye } from "react-icons/fa";
import { Link } from "react-router";

const NewsCard = ({ news }) => {
  const {
    id,
    title,
    details,
    thumbnail_url,
    author,
    rating,
    total_view,
  
  } = news;

  return (
    <div className="bg-white shadow-sm rounded-xl border border-gray-200 p-6  mx-auto">
      {/* Header */}
      <div className="flex justify-between items-center mb-3">
        <div className="flex items-center gap-3">
          <img
            src={author?.img}
            alt={author?.name}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <h3 className="font-semibold text-gray-800">{author?.name}</h3>
            <p className="text-sm text-gray-500">
              {new Date(author?.published_date).toLocaleDateString()}
            </p>
          </div>
        </div>
        <div className="flex gap-3 text-gray-500 text-lg">span
          <FaRegBookmark className="cursor-pointer hover:text-blue-500" />
          <FaShareAlt className="cursor-pointer hover:text-blue-500" />
        </div>
      </div>

      {/* Title */}
      <h2 className="text-lg font-bold text-gray-900 mb-3 leading-snug">
        {title}
      </h2>

      {/* Thumbnail */}
      <img
        src={thumbnail_url}
        alt={title}
        className="rounded-lg w-full mb-3 object-cover"
      />

      {/* Details */}
      <p className="text-sm text-gray-700 mb-3">
        {details.length > 250 ? (
          <>
            {details.slice(0, 250)}...
            <Link to={`/news-details/${id}`} className="text-orange-500 font-medium cursor-pointer hover:underline">
              Read More
            </Link>
          </>
        ) : (
          details
        )}
      </p>

      {/* Footer */}
      <div className="flex justify-between items-center border-t pt-3 text-gray-600">
        <div className="flex items-center gap-1 text-orange-500">
          {[...Array(5)].map((_, i) => (
            <FaStar key={i} className={i < rating?.number ? "fill-orange-500" : "fill-gray-300"} />
          ))}
          <span className="ml-2 text-gray-700 font-medium">{rating?.number}</span>
        </div>

        <div className="flex items-center gap-1">
          <FaEye className="text-gray-500" />
          <span className="text-gray-700 font-medium">{total_view}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;

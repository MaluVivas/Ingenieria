import { useState } from "react";

interface StarRatingProps {
  value?: number;
  totalStars?: number;
  readOnly?: boolean;
  onRatingChange?: (rating: number) => void;
}

export default function StarRating({
  value = 0,
  totalStars = 5,
  readOnly = false,
  onRatingChange,
}: StarRatingProps) {
  const [hoverRating, setHoverRating] = useState(0);

  const handleRating = (ratingValue: number) => {
    if (readOnly) return;

    if (onRatingChange) {
      onRatingChange(ratingValue);
    }
  };

  return (
    <div className="star-rating">
      {Array.from({ length: totalStars }).map((_, index) => {
        const starValue = index + 1;
        const activeValue = hoverRating || value;
        const isActive = starValue <= activeValue;

        return (
          <button
            key={starValue}
            type="button"
            className={`star-button ${isActive ? "star-active" : ""}`}
            onClick={() => handleRating(starValue)}
            onMouseEnter={() => !readOnly && setHoverRating(starValue)}
            onMouseLeave={() => !readOnly && setHoverRating(0)}
            disabled={readOnly}
            aria-label={`Rate ${starValue} stars`}
          >
            ★
          </button>
        );
      })}
    </div>
  );
}
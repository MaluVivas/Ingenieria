/* import { useEffect, useState } from "react";
import StarRating from "./StarRating";

interface Comment {
  id: number;
  userName: string;
  text: string;
  rating: number;
  createdAt: string;
}

interface ArticleCommentsProps {
  articleSlug: string;
  onAverageRatingChange: (averageRating: number, totalComments: number) => void;
}

export default function ArticleComments({
  articleSlug,
  onAverageRatingChange,
}: ArticleCommentsProps) {
  const storageKey = `comments-${articleSlug}`;

  const [comments, setComments] = useState<Comment[]>([]);
  const [commentText, setCommentText] = useState("");
  const [rating, setRating] = useState(0);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const savedComments = localStorage.getItem(storageKey);

    if (savedComments) {
      setComments(JSON.parse(savedComments));
    }
  }, [storageKey]);

  useEffect(() => {
    localStorage.setItem(storageKey, JSON.stringify(comments));

    if (comments.length === 0) {
      onAverageRatingChange(0, 0);
      return;
    }

    const totalRating = comments.reduce(
      (total, comment) => total + comment.rating,
      0
    );

    const averageRating = totalRating / comments.length;

    onAverageRatingChange(averageRating, comments.length);
  }, [comments, storageKey, onAverageRatingChange]);

  const handleSubmitComment = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (rating === 0) {
      setErrorMessage("Please select a star rating before commenting.");
      return;
    }

    if (commentText.trim() === "") {
      setErrorMessage("Please write a comment before sending.");
      return;
    }

    const newComment: Comment = {
      id: Date.now(),
      userName: "Pet Owner",
      text: commentText.trim(),
      rating,
      createdAt: new Date().toLocaleDateString(),
    };

    setComments([newComment, ...comments]);
    setCommentText("");
    setRating(0);
    setErrorMessage("");
  }; */

 /*  return (
    <section className="article-comments-section">
      <h2>Comments</h2>

      <form className="article-comment-form" onSubmit={handleSubmitComment}>
        <label>Rate this article</label>

        <StarRating value={rating} onRatingChange={setRating} />

        <label>Your comment</label>

        <textarea
          placeholder="Write your comment here..."
          value={commentText}
          onChange={(event) => setCommentText(event.target.value)}
        />

        {errorMessage && <p className="comment-error">{errorMessage}</p>}

        <button type="submit">Send comment</button>
      </form>

      <div className="article-comments-list">
        {comments.length > 0 ? (
          comments.map((comment) => (
            <article className="article-comment-card" key={comment.id}>
              <div className="article-comment-header">
                <div>
                  <h3>{comment.userName}</h3>
                  <p>{comment.createdAt}</p>
                </div>

                <StarRating value={comment.rating} readOnly />
              </div>

              <p className="article-comment-text">{comment.text}</p>
            </article>
          ))
        ) : (
          <p className="no-comments-message">
            No comments yet. Be the first to leave one.
          </p>
        )}
      </div>
    </section>
  ); */
}
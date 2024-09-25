import { Link } from "react-router-dom";

function PostCard({post}) {
    return (
        <Link to={`/post/${post.id}`} class="category-card">
            <div class="container">
                <img src={post.imageUrl} alt={post.title} className="category-card__img"   />
                <h2 class="category-card__title">
                    <i>{post.title}</i>
                </h2>

            </div>
        </Link>
    );
}

export default PostCard;
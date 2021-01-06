import Link from 'next/link';

const PostListItem = ({ slug, icon, title, description, date, firstPost }) => {
    console.log(Object.entries(firstPost));

    return (
        <Link href={`/post/${slug}`}>
            <a className="postListItem">
                {icon ? `${icon} ${title}` : title}
                {description ? (
                    <p className="postListItem__description">{description}</p>
                ) : null}
                <small className="postListItem__date">{date}</small>
            </a>
        </Link>
    );
};

export default PostListItem;

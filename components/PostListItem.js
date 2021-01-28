import Link from 'next/link';
import { motion } from 'framer-motion';

import { scale } from '../lib/animations';

const PostListItem = ({ slug, icon, title, description, date }) => {
    return (
        <Link href={`/post/${slug}`}>
            <motion.a className='postListItem' whileHover={scale}>
                {icon ? `${icon} ${title}` : title}
                {description ? (
                    <p className='postListItem__description'>{description}</p>
                ) : null}
                <small className='postListItem__date'>{date}</small>
            </motion.a>
        </Link>
    );
};

export default PostListItem;

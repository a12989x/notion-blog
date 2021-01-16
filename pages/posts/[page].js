import Link from 'next/link';
import { useContext } from 'react';
import { motion } from 'framer-motion';

import { RouterContext } from '../../context/RouterContext';

import PostListItem from '../../components/PostListItem';

import {
    orderPosts,
    getPublishedPosts,
    getPostsForPage,
    getFirstPost,
} from '../../lib/api';
import { fadeInUp } from '../../lib/animations';

export const getStaticPaths = async () => {
    const posts = await getPublishedPosts();
    const postsOrderer = await orderPosts(posts);
    const pagePosts = await getPostsForPage(7, postsOrderer, 5);

    const pagesNumber = pagePosts.map((post, index) => ++index);

    return {
        paths: pagesNumber.map((pageNumber) => ({
            params: { page: pageNumber.toString() },
        })),
        fallback: false,
    };
};

export const getStaticProps = async ({ params: { page } }) => {
    const posts = await getPublishedPosts();
    const postsOrderer = await orderPosts(posts);
    const pagePosts = await getPostsForPage(7, postsOrderer, 5);

    const firstPost = await getFirstPost(pagePosts[page - 1]);

    const pagesNumber = pagePosts.map((post, index) => ++index);

    return {
        props: {
            posts: pagePosts[page - 1],
            firstPost,
            pagesNumber,
        },
    };
};

const Posts = ({ posts, firstPost, pagesNumber }) => {
    const { router } = useContext(RouterContext);

    if (router.isFallback) return <h1>Loading...</h1>;

    return (
        <motion.main
            className="posts"
            variants={fadeInUp}
            initial="initial"
            animate={'animate'}
            exit={{ opacity: 0 }}
        >
            {posts.map((post) => (
                <PostListItem
                    key={post.id}
                    {...post}
                    description={
                        Object.entries(firstPost)[0][0] === post.id
                            ? Object.entries(firstPost)[2][1]?.value.properties
                                  .title[0][0]
                            : null
                    }
                />
            ))}
            <section className="posts__pagesNumber">
                {pagesNumber.map((pageNumber) => (
                    <Link key={pageNumber} href={`/posts/${pageNumber}`}>
                        <a>
                            <button
                                className={
                                    router.query.page == pageNumber
                                        ? 'active'
                                        : ''
                                }
                            >
                                {pageNumber}
                            </button>
                        </a>
                    </Link>
                ))}
            </section>
        </motion.main>
    );
};

export default Posts;

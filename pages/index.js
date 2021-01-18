import Link from 'next/link';
import { motion } from 'framer-motion';

import { orderPosts, getPublishedPosts, getFirstPost } from '../lib/api';
import { fadeInUp, stagger } from '../lib/animations';

import AboutMe from '../components/AboutMe';
import PostListItem from '../components/PostListItem';

export const getStaticProps = async () => {
    const publishedPosts = await getPublishedPosts();
    const publishedPostsOrder = await orderPosts(publishedPosts);

    const firstPost = await getFirstPost(publishedPostsOrder);

    return { props: { posts: publishedPostsOrder, firstPost } };
};

const Home = ({ posts, firstPost }) => {
    const firstPosts = posts.slice(0, 5);

    return (
        <motion.section
            className="home"
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            exit={{ opacity: 0, x: '-75vw' }}
        >
            <AboutMe />
            <hr className="home__hr" />
            <motion.section
                className="home__posts"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
            >
                {firstPosts.map((post) => (
                    <PostListItem
                        key={post.id}
                        {...post}
                        description={
                            Object.entries(firstPost)[0][0] === post.id
                                ? Object.entries(firstPost)[2][1]?.value
                                      .properties.title[0][0]
                                : null
                        }
                    />
                ))}

                {posts.length > 5 && (
                    <Link href="/posts/1">
                        <a className="home__more">
                            <button>Ver más</button>
                        </a>
                    </Link>
                )}
            </motion.section>
        </motion.section>
    );
};

export default Home;

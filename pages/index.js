import Link from 'next/link';

import AboutMe from '../components/AboutMe';
import PostListItem from '../components/PostListItem';

import { getPublishedPosts, getFirstPost } from '../lib/api';

export const getStaticProps = async () => {
    const publishedPosts = await getPublishedPosts();
    const publishedPostsOrder = publishedPosts.reverse();

    const firstPost = await getFirstPost(publishedPostsOrder);

    return { props: { posts: publishedPostsOrder, firstPost } };
};

const Home = ({ posts, firstPost }) => {
    console.log(firstPost);

    return (
        <section className="home">
            <AboutMe />
            <hr className="home__hr" />
            <section className="home__posts">
                {posts.map((post) => (
                    <PostListItem
                        key={post.id}
                        {...post}
                        description={
                            Object.entries(firstPost)[0][0] === post.id
                                ? Object.entries(firstPost)[2][1].value
                                      .properties.title[0][0]
                                : null
                        }
                        firstPost={firstPost}
                    />
                ))}
            </section>
        </section>
    );
};

export default Home;
// @import './pages/post';

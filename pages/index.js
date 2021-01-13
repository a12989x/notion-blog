import Link from 'next/link';

import { orderPosts, getPublishedPosts, getFirstPost } from '../lib/api';

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
        <section className="home">
            <AboutMe />
            <hr className="home__hr" />
            <section className="home__posts">
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
                            <button>See more</button>
                        </a>
                    </Link>
                )}
            </section>
        </section>
    );
};

export default Home;

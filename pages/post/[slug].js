import Image from 'next/image';
import { NotionRenderer } from 'react-notion';

import { getPublishedPosts, getPost } from '../../lib/api';

import 'react-notion/src/styles.css';
import 'prismjs/themes/prism-tomorrow.css';

import Back from '../../components/Back';

export const getStaticPaths = async () => {
    const posts = await getPublishedPosts();

    return {
        paths: posts.map((post) => ({ params: { slug: post.slug } })),
        fallback: true,
    };
};

export const getStaticProps = async ({ params: { slug } }) => {
    const posts = await getPublishedPosts();

    const post = posts.find((t) => t.slug === slug);
    const content = await getPost(post.id);

    const icon = Object.entries(content)[0][1].value.format?.page_icon;
    const cover = Object.entries(content)[0][1].value.format?.page_cover;
    post.title = icon ? `${icon} ${post.title}` : post.title;
    post.cover = cover ? cover : null;

    return { props: { post, content } };
};

const Post = ({ post, content }) => {
    return (
        <section className="post">
            <Back cover={post.cover ? post.cover : null} />
            {post.cover ? (
                <Image
                    src={post.cover}
                    width="800"
                    height="300"
                    layout="responsive"
                />
            ) : null}
            <div className="post__container">
                <h1 className="post__title">{post.title}</h1>
                <small className="post__author">
                    by {post.authors[0].fullName}
                </small>
                <small className="post__date">published on {post.date}</small>
                <NotionRenderer blockMap={content} />
            </div>
        </section>
    );
};

export default Post;

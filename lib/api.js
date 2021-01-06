const { BASE_URL, NOTION_BLOG_ID } = process.env;

const getAllPosts = async () => {
    const res = await fetch(`${BASE_URL}table/${NOTION_BLOG_ID}`);
    const data = await res.json();

    return data;
};

const getPublishedPosts = async () => {
    const allPosts = await getAllPosts();
    const publishedPosts = await allPosts.filter(
        (post) => post.published === true
    );

    return publishedPosts;
};

const getPost = async (postId) => {
    const res = await fetch(`${BASE_URL}page/${postId}`);
    const data = await res.json();

    return data;
};

const getFirstPost = async (posts) => {
    const idFirstPost = posts[0].id;
    const firstPost = await getPost(idFirstPost);

    return firstPost;
};

export { getPublishedPosts, getPost, getFirstPost };

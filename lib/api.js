const { BASE_URL, NOTION_BLOG_ID } = process.env;

const slugify = (text) =>
    text
        .toString()
        .toLowerCase()
        .replace(/\s+/g, '-') // Replace spaces with -
        .replace(/[^\w\-]+/g, '') // Remove all non-word chars
        .replace(/\-\-+/g, '-') // Replace multiple - with single -
        .replace(/^-+/, '') // Trim - from start of text
        .replace(/-+$/, ''); // Trim - from end of text

const getAllPosts = async () => {
    const res = await fetch(`${BASE_URL}table/${NOTION_BLOG_ID}`);
    const data = await res.json();

    return data;
};

const orderPosts = async (posts) =>
    await posts
        .sort((a, b) => {
            var keyA = new Date(a.date),
                keyB = new Date(b.date);
            // Compare the 2 dates
            if (keyA < keyB) return -1;
            if (keyA > keyB) return 1;
            return 0;
        })
        .reverse();

const getPublishedPosts = async () => {
    const allPosts = await getAllPosts();
    const publishedPosts = await allPosts.filter(
        (post) => post.published === true
    );

    publishedPosts.map(
        (publishedPost) =>
            (publishedPost.slug = publishedPost.slug
                ? publishedPost.slug
                : slugify(publishedPost.title))
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

const getPostsForPage = async (postsForPage, posts, postsHomepage) => {
    const postsArray = posts.slice(postsHomepage);
    const pagePosts = [];

    let postsDivided = Math.floor(postsArray.length / postsForPage);
    if (postsArray.length % postsForPage !== 0) postsDivided = postsDivided + 1;

    for (let i = 0; i < postsDivided; i++) {
        const sliceNumber = postsForPage * i;

        const postsSliced = postsArray.slice(
            sliceNumber,
            sliceNumber + postsForPage
        );

        pagePosts.push(postsSliced);
    }

    return pagePosts;
};

export {
    slugify,
    orderPosts,
    getPublishedPosts,
    getPost,
    getFirstPost,
    getPostsForPage,
};

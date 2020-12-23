import NextHead from 'next/head';

const Head = ({ description }) => {
    return (
        <NextHead>
            <meta charSet="UTF-8" />
            <title>My Blog | Codax</title>
            <meta name="description" content={description || ''} />
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1"
            />
        </NextHead>
    );
};

export default Head;

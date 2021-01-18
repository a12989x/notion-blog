import NextHead from 'next/head';

const Head = () => {
    return (
        <NextHead>
            <meta charSet="UTF-8" />
            <title>Mi Blog | Codax</title>
            <meta
                name="description"
                content="Amas el desarrollo web? Conoce los principles temas relacionados y tips que te ayudaran a ser un mejor desarrollador web."
            />
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1"
            />
        </NextHead>
    );
};

export default Head;

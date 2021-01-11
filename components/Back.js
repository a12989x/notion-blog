import Link from 'next/link';
import Image from 'next/image';

const Back = ({ cover = null }) => {
    return (
        <Link href="/">
            <a className={`post__back ${cover ? 'post__back-cover' : ''}`}>
                <button>
                    <Image
                        src="/assets/back.svg"
                        alt="back"
                        height="100%"
                        width="100%"
                        layout="responsive"
                    />{' '}
                    Go Back
                </button>
            </a>
        </Link>
    );
};

export default Back;

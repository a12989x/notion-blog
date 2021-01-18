import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const AboutMe = () => {
    return (
        <section className="aboutMe">
            <h1 className="aboutMe__title">Hola, Soy Alexis Guzman</h1>
            <p className="aboutMe__description">
                Soy un apasionado de desarrollo web frontend. Eh construido
                algunas paginas como{' '}
                <a className="link" href="#" rel="noreferrer" target="_blank">
                    Covid Tracker
                </a>{' '}
                y{' '}
                <a className="link" href="#" rel="noreferrer" target="_blank">
                    Superchat
                </a>
                .
                <br />
                <Link href="/about/#contact">
                    <a className="aboutMe__contact">
                        <button>Contáctame!</button>
                    </a>
                </Link>
            </p>
            <Image
                src="/assets/avatar.jpg"
                alt="avatar"
                height={'100%'}
                width={'100%'}
                className="aboutMe__img"
                layout="responsive"
            />
        </section>
    );
};

export default AboutMe;
// @import './pages/about';

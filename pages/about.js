import Link from 'next/link';
import { motion } from 'framer-motion';
import { fadeInUp } from '../lib/animations';

const About = () => {
    return (
        <motion.main
            className='about'
            variants={fadeInUp}
            initial='initial'
            animate='animate'
            exit={{ opacity: 0 }}
        >
            <h1 className='about__header'>Acerca de</h1>
            <p className='about__paragraph'>
                Soy un freelance de 19 años frontend developer viviendo en CDMX,
                Mexico. La mayoría de las veces construyo páginas con react como
                framework. Durante el año pasado, He estado aprendiendo en
                bottega y construyendo sitios web.
                <br />
                <br />
                Este sitio web fue construido con Nextjs para el frontend y
                Notion como CMS para las publicaciones y proyectos.
            </p>

            <h2 className='about__header'>Skills :</h2>
            <ul className='about__skills'>
                <li>Next JS</li>
                <li>React JS</li>
                <li>Javascript</li>
                <li>SCSS</li>
                <li>Node JS</li>
            </ul>

            <h2 className='about__header'>Canal de YouTube</h2>
            <p className='about__paragraph'>
                Tengo un{' '}
                <Link href='https://www.youtube.com/channel/UCMY0GhV1HuX4XdbgalC77VQ'>
                    <a className='link'>Canal de YouTube</a>
                </Link>
                , donde a veces subo videos sobre los temas que publico aqui.
            </p>

            <h2 className='about__header'>Que es Codax</h2>
            <p className='about__paragraph'>
                No significa nada. Pero me gusta, es como mi nickname.
            </p>

            <h2 id='#contact' className='about__header'>
                Estemos en contacto
            </h2>
            <p className='about__paragraph'>
                Puedes enviarme un correo electrónico a{' '}
                <Link href='mailto:alexis12989x@gmail.com'>
                    <a className='link'>alexis12989x@gmail.com</a>
                </Link>
                .
            </p>
        </motion.main>
    );
};

export default About;

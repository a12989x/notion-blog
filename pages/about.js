import Link from 'next/link';
import { motion } from 'framer-motion';
import { fadeInUp } from '../lib/animations';

const About = () => {
    return (
        <motion.main
            className="about"
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            exit={{ opacity: 0 }}
        >
            <h1 className="about__header">About</h1>
            <p className="about__paragraph">
                I'm a 19-year old freelance frontend developer living in CDMX,
                Mexico. Most of the time i build pages with react framework.
                Over the past year, I've been learning in Bottega and building
                websites.
                <br />
                <br />
                This website was build with Nextjs for the frontend and Notion
                as CMS for posts.
            </p>

            <h2 className="about__header">Skills :</h2>
            <ul className="about__skills">
                <li>Next JS</li>
                <li>React JS</li>
                <li>Javascript</li>
                <li>SCSS</li>
                <li>Node JS</li>
            </ul>

            <h2 className="about__header">YouTube Channel</h2>
            <p className="about__paragraph">
                I have a{' '}
                <Link href="https://www.youtube.com/channel/UCMY0GhV1HuX4XdbgalC77VQ">
                    <a className="link">YouTube chanel</a>
                </Link>
                , where I sometimes post videos about topics that I find
                interesting.
            </p>

            <h2 className="about__header">What is Codax</h2>
            <p className="about__paragraph">
                It doesn't mean anything. But I like it, it's like my nickname.
            </p>

            <h2 id="#contact" className="about__header">
                Getting in touch
            </h2>
            <p className="about__paragraph">
                You can email me at{' '}
                <Link href="mailto:alexis12989x@gmail.com">
                    <a className="link">alexis12989x@gmail.com</a>
                </Link>
                .
            </p>
        </motion.main>
    );
};

export default About;

import { motion } from 'framer-motion';
import { fadeInUp } from '../lib/animations';

const Projects = () => {
    return (
        <motion.div
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            exit={{ opacity: 0 }}
        >
            <p>Projects Component</p>
        </motion.div>
    );
};

export default Projects;

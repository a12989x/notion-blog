import Image from 'next/image';

const AboutMe = () => {
    return (
        <section className="aboutMe">
            <h1 className="aboutMe__title">Hi, I'm Alexis Guzman</h1>
            <p className="aboutMe__description">
                I'm a student frontend developer, I build some pages such as{' '}
                <a className="aboutMe__link" href="#" target="_blank">
                    Covid Tracker
                </a>{' '}
                and{' '}
                <a className="aboutMe__link" href="#" target="_blank">
                    Superchat
                </a>
                .
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

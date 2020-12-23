import Link from 'next/link';

const Navigation = () => {
    return (
        <header className="navigation">
            <Link href="/">
                <a className="navigation__logo">Codax</a>
            </Link>
            <ul className="navigation__links">
                <li>
                    <Link href="/about">
                        <a className="navigation__link">About</a>
                    </Link>
                </li>
                <li>
                    <Link href="/projects">
                        <a className="navigation__link">Projects</a>
                    </Link>
                </li>
            </ul>
        </header>
    );
};

export default Navigation;

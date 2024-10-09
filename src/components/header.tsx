import Link from 'next/link';
import React from 'react';

const Header: React.FC = () => {
    return (
        <header className="flex p-4">
            <Link href={"/"}>
            <img src="/matafarLogo.svg" alt="Metafar Logo" className="h-12" />
            </Link>
        </header>
    );
};

export default Header;

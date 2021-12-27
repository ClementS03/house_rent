import React from 'react';
import { HeartIcon } from '@heroicons/react/solid'

const Footer = () => {
    return (

        <p className='bg-red-400 h-20 text-xl text-white flex justify-center items-center fixed w-full bottom-0'>
            Site Fait Avec <HeartIcon className='mx-4' width={20} height={20} />
        </p>
    );
};

export default Footer;
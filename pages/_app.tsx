import React from 'react';
import type { AppProps } from 'next/app';
import Head from 'next/head';

import '../css/index.css';
import '../css/form.css';

export default function _App({ Component, pageProps }: AppProps) {
    return (
        <div>
            <Head>
                <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
            </Head>
            <Component {...pageProps} />
        </div>
    );
}
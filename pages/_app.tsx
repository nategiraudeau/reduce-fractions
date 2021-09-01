import React from 'react';
import type { AppProps } from 'next/app';
import Head from 'next/head';

import '../scss/index.scss';

export default function _App({ Component, pageProps }: AppProps) {
    return (
        <div>
            <Head>
                <title>Reduce Fractions</title>
                <link href="https://fonts.googleapis.com/css2?family=Rubik:wght@100;200;300;400;500;600;700;800;900&family=Rubik+Mono+One&family=Roboto+Mono:wght@400;500;600;700;800&family=Fira+Mono&display=swap" rel="stylesheet" />
            </Head>
            <Component {...pageProps} />
        </div>
    );
}
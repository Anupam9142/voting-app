import React from 'react';
import { Header } from './Header';
import { Footer } from './Footer';

export function PageLayout({ children }) {
    return (
        <>
            <Header />
            <main style={{marginTop: '60px', maxWidth:'100%',fontFamily:'Open-Sans',}}>
                {children}
            </main>
            <Footer />
        </>
    )
};
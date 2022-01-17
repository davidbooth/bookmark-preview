import { NextPage } from 'next';
import Head from 'next/head';
import { Container } from '../components/layout/container';
import { Nav } from '../components/nav/nav';
import { Hero } from '../components/hero/hero';
import { LinkInput } from '../components/linkInput/linkInput';
import { Bookmarks } from '../components/bookmark/bookmarks';
import { Footer } from '../components/footer/footer';

const Home: NextPage = () => {
    return (
        <>
            <Head>
                <title>Pelican - Bookmarks saved in localStorage.</title>
            </Head>

            <Container>
                <Nav />
                <Hero />
                <LinkInput />
                <Bookmarks />
                <Footer />
            </Container>
        </>
    );
};

export default Home;

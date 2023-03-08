import { Hero } from '../components/home-page/Hero';
import { FeaturePosts } from '../components/home-page/FeaturePosts';
import { getFeaturedPosts } from '../helpers/posts-util'
import Head from 'next/head'

const HomePage = ({posts}) => {

    return (
        <>
            <Head>
                <title>Max Blog</title>
                <meta 
                    name='description' 
                    content='I post about programming and web development' 
                />
            </Head>
            <Hero/>
            <FeaturePosts posts={posts}/>
        </>
    )
}

export const getStaticProps = () => {
    const featuredPosts = getFeaturedPosts();

    return {
        props: {
            posts: featuredPosts
        },
        revalidate: 1800
    }
}
export default HomePage
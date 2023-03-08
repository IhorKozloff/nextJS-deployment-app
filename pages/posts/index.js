import { AllPosts } from "../../components/posts/AllPosts"
import { getAllPosts } from "../../helpers/posts-util"
import Head from 'next/head'


const AllPostsPage = ({posts}) => {

    return (
        <>
        <Head>
            <title>Contact Me</title>
            <meta 
                name='description' 
                content='A list of all programming-related tutorials and posts!' 
            />
        </Head>
        <AllPosts posts={posts}/>
        </>
    )
}

export const getStaticProps = () => {

    const allPosts = getAllPosts();

    return {
        props: {
            posts: allPosts
        }
    }
}
export default AllPostsPage
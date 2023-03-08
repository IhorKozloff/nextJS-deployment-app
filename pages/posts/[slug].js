import { PostContent } from '../../components/posts/post-detail/PostContent'
import { getPostData, getPostsFiles } from '../../helpers/posts-util'
import Head from 'next/head'

const PostDetailsPage = ({post}) => {

    const title = post.title || 'TITLE PLUG';
    const excerpt = post.excerpt || 'EXCERPT PLUG'

    return ( 
    <>
    <Head>
            <title>{title}</title>
            <meta 
                name='description' 
                content={excerpt} 
            />
        </Head>
    <PostContent post={post}/>
   </>
   )
}

export const getStaticProps = (context) => {

    const { params } = context;
    const { slug } = params;

    const postData = getPostData(slug);

    
    return {
        props: {
            post: postData
        },
        revalidate: 600
    }
}

export const getStaticPaths = () => {

    const postFilenames = getPostsFiles();

    const slugs = postFilenames.map(item => item.replace(/\.md$/, ''))

    return {
        paths: slugs.map(slug => ({params: {slug: slug}})),
        fallback: "blocking"
    }
}
export default PostDetailsPage
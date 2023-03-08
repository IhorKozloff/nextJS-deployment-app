import classes from './featured-posts.module.css'
import { PostGrid } from '../posts/PostsGrid'

export const FeaturePosts = ({posts}) => {

    return (
        <section className={classes.latest}>
            <h2>Featured Posts</h2>
            <PostGrid posts={posts}/>
        </section>
    )
}


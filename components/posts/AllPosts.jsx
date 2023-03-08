import classes from './all-posts.module.css';
import { PostGrid } from './PostsGrid';

export const AllPosts = ({ posts }) => {

    return (
        <section className={classes.posts}>
            <h1>All Posts</h1>
            <PostGrid posts={posts}/>
        </section>
    )
}
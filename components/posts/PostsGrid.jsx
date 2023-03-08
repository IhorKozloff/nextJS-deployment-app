import classes from './posts-grid.module.css';
import { PostItem } from './PostItem'

export const PostGrid = ({ posts }) => {

    return (
        <ul className={classes.grid}>
            {posts.map(item => {
                return <PostItem key={item.slug} post={item}/>
            })}
        </ul>
    )
}
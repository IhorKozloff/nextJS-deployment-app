import classes from './post-header.module.css';
import Image from 'next/image';

export const PostHeader = ({title, image}) => {

    return (
        <header className={classes.header}>
            <h1>{title}</h1>
            <Image
                src={image}
                alt={title}
                width={250}
                height={150}
            />
        </header>
    )
}
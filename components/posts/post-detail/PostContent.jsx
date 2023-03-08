import classes from './post-content.module.css';
import { PostHeader } from './PostHeader';
import ReactMarkdown from 'react-markdown';
import Image from 'next/image';
import { PrismLight as SyntaxHighlighter} from 'react-syntax-highlighter'
import atomDark from 'react-syntax-highlighter/dist/cjs/styles/prism/atom-dark'
import js from 'react-syntax-highlighter/dist/cjs/languages/prism/javascript'

SyntaxHighlighter.registerLanguage('js', js)

export const PostContent = ({post}) => {

    const imagePath = `/images/posts/${post.slug}/${post.image}`

    const customRenderers = {
        img (image) {

            const imagePath = `/images/posts/${post.slug}/${image.src}`

            return (
            <Image 
                src={imagePath}
                alt={`${image.alt}`} 
                width={600} 
                height={300}
            />
            )
        },
        code (code) {

            const {className, children} = code;
            const match = /language-(\w+)/.exec(className || '')
            console.log(code)

            return (
                <SyntaxHighlighter 
                    style={atomDark}
                    language={match[1]} 
                >
                    {children}
                </SyntaxHighlighter>
            )
        }
    }

    return (
        <article className={classes.content}> 
            <PostHeader title={post.title} image={imagePath}/>
            <ReactMarkdown components={customRenderers}>
                {post.content}
            </ReactMarkdown>
        </article>
    )
}
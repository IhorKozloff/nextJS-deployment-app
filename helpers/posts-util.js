import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';


const postsDirectory = path.join(process.cwd(), 'posts');

export const getPostsFiles = () => {
    return fs.readdirSync(postsDirectory);
}

export const getPostData = (postIdentifier) => {
    const postSlug = postIdentifier.replace(/\.md$/, '') //remove file extention - .md

    const filePath = path.join(postsDirectory, `${postSlug}.md`)
    const fileContent = fs.readFileSync(filePath, 'utf-8')
    const { data, content } = matter(fileContent)

    
    const postData = {
        slug: postSlug,
        ...data,
        content
    }

    return postData
}


export const getAllPosts = () => {
    const postFiles = fs.readdirSync(postsDirectory);

    const allPosts = postFiles.map(item => {
        return getPostData(item);
    })

    return allPosts
}

export const getFeaturedPosts = () => {
   const allPosts = getAllPosts();

   return allPosts.filter(item => item.isFeatured)
}


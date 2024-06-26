import fs from 'fs'
import path from 'path'
import matter from 'gray-matter';

export default function getPosts() {
    const postsDirectory = path.join(process.cwd(), 'src/app/blog/posts');
    const folderYears = fs.readdirSync(postsDirectory);
    let posts = [];
    // Iterate over the folders in the posts directory which will be the years folder
    for(let i=0; i<folderYears.length;i++){
        // Get the folders inside the years folder
        const folderNames = fs.readdirSync(path.join(postsDirectory, folderYears[i]));
        // Iterate over the folders inside the years folder
        for(let j=0;j<folderNames.length;j++) {
            const fullPath = path.join(postsDirectory, folderYears[i], folderNames[j]) + '/page.mdx';
            // Read the contents of the file
            const fileContents = fs.readFileSync(fullPath, 'utf8');
            // Parse the front matter
            const  {data, content} = matter(fileContents)
            // Append the data object to the posts array
            data.publishDate = new Date(data.publishDate)
            posts.push(data);
        }
    }
    // Order elements according to the date, that means the date which is recent will be first in the array and so on
    posts.sort((a, b) => b.publishDate - a.publishDate);
    
    return posts
}
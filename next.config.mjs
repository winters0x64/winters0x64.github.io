import createMDX from '@next/mdx';
import remarkFrontmatter from 'remark-frontmatter'
import remarkGfm from 'remark-gfm'
import rehypeHighlight from 'rehype-highlight'
import rehypeSlug from 'rehype-slug'

/** @type {import('next').NextConfig} */
const nextConfig = {
    pageExtensions: ['tsx', 'mdx', 'jsx', 'ts', 'js', 'md'],
    images:{
        unoptimized:true
    },
    output:'export'
};

const withMDX = createMDX({
    extension: /\.mdx?$/,
    options: {
        remarkPlugins: [remarkGfm,remarkFrontmatter],
        rehypePlugins: [rehypeHighlight,rehypeSlug]
    },
});

export default withMDX(nextConfig); 
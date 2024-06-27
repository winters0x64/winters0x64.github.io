import { Audiowide } from "next/font/google";
import getPosts from "@/utils/getPosts";
import Cards from "@/components/cards";
import { JetBrains_Mono } from "next/font/google";
import Link from "next/link";
import Tech from "@/components/tech";

const jetbrains_thin = JetBrains_Mono({subsets:['latin'],weight:'100'})
const audiowide = Audiowide({subsets: ["latin"], weight:["400"]});
const jetbrains_mid = JetBrains_Mono({subsets:['latin'],weight:'500'})

export default function Blog() {
    const posts = getPosts();

    function formatDate(date:any) {
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed
        const year = date.getFullYear();
    
        return `${day}/${month}/${year}`;
    }

    return (
        <>
            {/* Mother Container */}
            <div className={`${audiowide.className}  flex flex-col justify-start items-center space-x-10 h-full w-screen`}>
                    {/* Blog Container */}
                    <div className="flex flex-col h-full w-1/2 space-y-10">
                        {/* Container to hold Blog text and Search bar */}
                        <div className="flex flex-row justify-between items-center">
                            <h1 className="text-3xl">
                                <u>BLOGS</u>
                            </h1>
                            <div className="w-1/6">
                            <input size={60} placeholder='   Search Blogs...' 
                                type='text'
                                name='inp_text' 
                                className="bg-black border border-white text-white h-10 w-full rounded-md">
                            </input>
                            </div>
                        </div>

                        {/* Container to hold Blog Cards */}
                        <div className={`${jetbrains_mid.className} flex flex-col space-y-10`}>
                        {posts.map((post, index) => {
                            return (
                                <Link href={`/blog/posts/${post.slug}`} key={index}>
                                    <Cards key={index} title={post.title} desc={post.description} tags={post.tags} date={formatDate(post.publishDate)} image={post.image} />
                                </Link>
                            )
                        })}
                        </div>
                    </div>
                    <div className={`${jetbrains_thin.className} flex flex-col justify-center items-center space-x-3`}>
                        <Tech />
                    </div>
            </div>
        </>
    )
}
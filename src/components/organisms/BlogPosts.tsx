import { BlogPost } from "../../types";
import { BlogCard } from "../molecules/BlogCard";

type Props = {
    blogPosts: BlogPost[],
}

export const BlogPosts: React.VFC<Props> = ({
    blogPosts
}) => {
    return (
        <div className="bg-white py-6 sm:py-8 lg:py-12">
            <div className="max-w-screen-xl px-4 md:px-8 mx-auto">
                <div className="mb-10 md:mb-16">
                    <h2 className="text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-6">Blog</h2>

                    <p className="max-w-screen-md text-gray-500 md:text-lg text-center mx-auto">This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text but is random or otherwise generated.</p>
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4 md:gap-6 xl:gap-8">
                    <ul>
                    {blogPosts.map((blog) => {
                        <BlogCard blog={blog} />
                    })}
                    </ul>
                </div>
            </div>
        </div>
    );
};
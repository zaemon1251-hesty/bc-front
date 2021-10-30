import { GetStaticProps, NextPage } from "next";
import { BlogPostsTemplate } from "../../components/templates/BlogPostsTemplate";
import { BlogPost } from "../../types";
import { BlogPostsSample } from "../../utils/sample";

type StaticProps = {
    blogPosts:BlogPost[]
}

export const BlogPostsPage:NextPage<StaticProps> = ({
    blogPosts
}) =>{
    return (
        <BlogPostsTemplate blogPosts={blogPosts} />
    );
};

export const getStaticProps:GetStaticProps<StaticProps> = (context) => {
    const props:StaticProps = {
        blogPosts:BlogPostsSample
    }
    return { props }
}


export default BlogPostsPage;
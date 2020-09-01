import matter from "gray-matter";
import Link from "next/link";
import {format} from "date-fns";
import LCSSEO from "../../lib/seolib";

export default function BlogIndex({posts}) {
    return (
        <>
            <div className="md:flex relative lcs-container">
                <LCSSEO title="Blog"
                        description="News and resources from Life Changing School, a virtual high school entrepreneurship program and incubator, run by Cornell University members."/>
                <div className="lcs-bg-red md:absolute flex flex-shrink-0 h-full lcs-blog-sidebar">
                    <div className="ml-auto md:w-64 py-8 md:pr-8">
                        <h1 className="lcs-uppercase-bold">Blog</h1>
                        <p className="max-w-xl">The latest from the LCS team about the program, entrepreneurship,
                            college
                            admissions, and more.</p>
                    </div>
                </div>
                <div className="w-64 flex-shrink-0"/>
                <div className="md:pl-8">
                    {posts && posts.map((post) => (
                        <div key={post.slug}
                             className="my-8 p-6 shadow-md hover:shadow-lg transition transition-shadow">
                            <Link href={`/blog/${post.slug}`}>
                                <a>
                                    <div>
                                        <h3 className="heading leading-none mb-4 text-2xl">{post.frontmatter.title}</h3>
                                        <p>{format(new Date(post.frontmatter.date), "MMMM dd, yyyy")}</p>
                                    </div>
                                </a>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export async function getStaticProps() {
    const posts = ((context) => {
        const keys = context.keys();
        const values = keys.map(context);
        const data = keys.map((key, index) => {
            let slug = key.replace(/^.*[\\\/]/, '').slice(0, -3);
            const value: any = values[index];
            const document = matter(value.default);
            const frontmatter = {
                title: document.data.title,
                date: document.data.date.toString(),
                tags: document.data.tags,
            }
            return {
                frontmatter: frontmatter,
                markdownBody: document.content,
                slug
            };
        });
        return data;
    })(require.context("../../content/blog", true, /\.md$/));

    return {props: {posts}};
}
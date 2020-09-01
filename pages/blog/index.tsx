import matter from "gray-matter";
import Link from "next/link";
import {format} from "date-fns";
import LCSSEO from "../../lib/seolib";

export default function BlogIndex({posts}) {
    return (
        <div className="lcs-container">
            <LCSSEO title="Blog" description="News and resources from Life Changing School, a virtual high school entrepreneurship program and incubator, run by Cornell University members."/>
            <h1 className="heading">Blog</h1>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {posts && posts.map((post) => (
                        <Link href={`/blog/${post.slug}`} key={post.slug}>
                            <a>
                                <div className="p-4 border">
                                    <h3>{post.frontmatter.title}</h3>
                                    <p>{format(new Date(post.frontmatter.date), "MMMM dd, yyyy")}</p>
                                </div>
                            </a>
                        </Link>
                ))}
            </div>
        </div>
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

    return {props: { posts }};
}
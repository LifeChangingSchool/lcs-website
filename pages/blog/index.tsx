import matter from "gray-matter";
import Link from "next/link";

export default function BlogIndex({posts}) {
    return (
        <div className="lcs-container">
            <h1 className="heading">Blog</h1>
            {posts && posts.map((post) => (
                <div key={post.slug}>
                    <Link href={`/blog/${post.slug}`}>
                        <a>{post.frontmatter.title}</a>
                    </Link>
                </div>
            ))}
        </div>
    )
}

export async function getStaticProps() {
    const posts = ((context) => {
        const keys = context.keys();
        const values = keys.map(context);
        const data = keys.map((key, index) => {
            let slug = key.replace(/^.*[\\\/]/, '').slice(0, -3);
            const value = values[index];
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
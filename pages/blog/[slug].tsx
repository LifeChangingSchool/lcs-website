import matter from 'gray-matter';
import ReactMarkdown from 'react-markdown';
import {format} from "date-fns";
import Link from "next/link";

export default function BlogPost({frontmatter, markdownBody}) {
    return (
        <div className="lcs-container">
            <Link href="/blog"><a>&lt; All posts</a></Link>
            <h1 className="heading">{frontmatter.title}</h1>
            <p>{format(new Date(frontmatter.date), "MMMM dd, yyyy")}</p>
            <hr/>
            <div className="content">
                <ReactMarkdown source={markdownBody}/>
            </div>
        </div>
    )
}

export async function getStaticProps({...ctx}) {
    const {slug} = ctx.params;
    const content = await import(`../../content/blog/${slug}.md`);
    const data = matter(content.default);
    const frontmatter = {
        title: data.data.title,
        date: data.data.date.toString(),
        tags: data.data.tags,
    }
    return {
        props: {
            frontmatter: frontmatter,
            markdownBody: data.content
        }
    }
}

export async function getStaticPaths() {
    const blogSlugs = ((context) => {
        const keys = context.keys();
        const data = keys.map(key => {
            let slug = key.replace(/^.*[\\\/]/, '').slice(0, -3);
            return slug;
        });
        return data;
    })(require.context("../../content/blog", true, /\.md$/));

    const paths = blogSlugs.map((slug) => `/blog/${slug}`);

    return {
        paths,
        fallback: false,
    }
}
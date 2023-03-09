import { allBlogPosts } from 'contentlayer/generated'

import { compareDesc, format, parseISO } from 'date-fns'
import Link from 'next/link'

export default function Blog() {
  const posts = allBlogPosts.sort((a: any, b: any) =>
    compareDesc(new Date(a.date), new Date(b.date))
  )

  return (
    <div>
      <h1>Blog</h1>
      <section>
        <ul>
          {posts.map((post: any, i: number) => (
            <li key={i}>
              <Link href={`/blog${post.url}`}>
                <h2>{post.title}</h2>
                <p>{post.overview}</p>
                <p>{format(parseISO(post.date), 'LLLL d, yyyy')}</p>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}

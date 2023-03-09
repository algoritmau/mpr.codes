import { allBlogPosts } from 'contentlayer/generated'

type BlogPostPageProps = {
  params: {
    slug: string
  }
}

// Returns a list of `params` to populate the [slug] dynamic segment
export async function generateStaticParams() {
  return allBlogPosts.map(({ slug }) => ({
    slug
  }))
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = params
  const blogPost = allBlogPosts.find(
    ({ slug: blogPostSlug }) => blogPostSlug === slug
  )

  if (!blogPost) {
    // TODO: Redirect to custom NotFound page
    throw new Error('No such blog post was found!')
  }

  return (
    <article>
      <div dangerouslySetInnerHTML={{ __html: blogPost.body.html }} />
    </article>
  )
}

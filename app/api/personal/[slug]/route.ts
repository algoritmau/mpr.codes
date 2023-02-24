import { Slug } from '@/types'

import { personalData } from '@/data/api/personalData'

export async function GET(_: Request, { params }: { params: any }) {
  const slug: Slug = params.slug
  const data = await JSON.stringify(personalData[slug])

  return new Response(data)
}

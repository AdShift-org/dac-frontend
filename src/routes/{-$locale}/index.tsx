import { createFileRoute } from '@tanstack/react-router'
import { defaultLocale } from 'intlayer'

import { seoFor } from '@/lib/seo'

export const Route = createFileRoute('/{-$locale}/')({
  head: ({ params }) => seoFor('home', '/', params.locale ?? defaultLocale),
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/-locale/"!</div>
}

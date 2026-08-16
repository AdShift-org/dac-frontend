import { createFileRoute } from '@tanstack/react-router'
import { defaultLocale } from 'intlayer'

import { seoFor } from '@/lib/seo'

import { Hero } from '@/components/home/hero'
import { Statement } from '@/components/home/statement'
import { History } from '@/components/home/history'
import { Services } from '@/components/home/services'
import { FeaturedProjects } from '@/components/home/featured-projects'
import { Philosophy } from '@/components/home/philosophy'
import { Leadership } from '@/components/home/leadership'
import { Clients } from '@/components/home/clients'
import { Cta } from '@/components/home/cta'
import { Footer } from '@/components/footer'

export const Route = createFileRoute('/{-$locale}/')({
  head: ({ params }) => seoFor('home', '/', params.locale ?? defaultLocale),
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <>
      <Hero />
      <Statement />
      <History />
      <Services />
      <FeaturedProjects />
      <Philosophy />
      <Leadership />
      <Clients />
      <Cta />
      <Footer />
    </>
  )
}

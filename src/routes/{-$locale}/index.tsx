import { createFileRoute } from '@tanstack/react-router'
import { defaultLocale } from 'intlayer'
import { useIntlayer } from 'react-intlayer'

import { seoFor } from '@/lib/seo'

import dacLogo from '#/assets/dac-logo.png'

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
  const content = useIntlayer("home-noscript")
  return (
    <>
      <noscript>
        <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center gap-8 bg-neutral-950 px-6 text-center text-white">
          <img src={dacLogo} alt="DAC" className="w-40 object-contain" />
          <div>
            <h1 className="mb-3 font-serif text-2xl font-bold uppercase">
              {content.title}
            </h1>
            <p className="font-sans text-sm leading-relaxed text-white/70">
              {content.message}
            </p>
          </div>
        </div>
      </noscript>
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

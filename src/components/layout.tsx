import Head from 'next/head'
import Header from './header'
import Footer from './footer'

export const siteTitle = 'Market Choo'

export default function Layout({ children, home }: { children: React.ReactNode; home?: boolean }) {
  return (
    <div className="flex flex-col min-h-screen justify-between">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Learn how to build a personal website using Next.js" />
        <meta
          property="og:image"
          content="/images/800_4200.jpg"
          // content={`https://og-image.vercel.app/${encodeURI(
          //   siteTitle
          // )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Header></Header>
      <main>{children}</main>
      <Footer />
    </div>
  )
}

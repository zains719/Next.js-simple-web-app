import Link from 'next/link'
import Styles from '../styles/Home.module.css'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>
            Ninja List | Home
        </title>
        <meta name="keywords" content="ninjas" />
      </Head>
      <div>
        <h1 className={Styles.title}>Homepage</h1>
        <p className={Styles.title}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <p className={Styles.title}>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        <Link href="/ninjas">
          <a className={Styles.btn}>See Ninja Listing</a>
        </Link>
      </div>
    </>
  )
}

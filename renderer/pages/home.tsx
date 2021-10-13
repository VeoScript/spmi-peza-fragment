import type { NextPage } from 'next'
import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import About from '../components/About'

const Home: NextPage = () => {
  return (
    <React.Fragment>
      <Head>
        <title>PEZA + SPMI Fragment</title>
      </Head>
      <div className="flex flex-col items-center justify-center w-full h-screen space-y-10 cursor-default bg-gray-700 text-white">
        <About />
        <div className="flex flex-col items-center w-full space-y-1">
          <span className="font-bold text-white text-3xl">PEZA + SPMI Fragment</span>
          <span className="font-normal text-white text-opacity-50 text-base">Print Document Desktop Application</span>
        </div>
        <div className="flex flex-col items-center w-full space-y-2">
          <Link href="application_for_permit">
            <a className="uppercase w-full max-w-sm px-3 py-5 bg-gray-800 text-white text-center rounded-lg transition ease-in-out duration-200 hover:bg-opacity-50">
              Application For Permit
            </a>
          </Link>
          <Link href="monitoring_slip">
            <a className="uppercase w-full max-w-sm px-3 py-5 bg-gray-800 text-white text-center rounded-lg transition ease-in-out duration-200 hover:bg-opacity-50">
              Monitoring Slip
            </a>
          </Link>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Home

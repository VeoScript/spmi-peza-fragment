import type { NextPage } from 'next'
import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import SideBar from '../components/ApplicationForPermit/SideBar'
import PrintPreviewFront from '../components/ApplicationForPermit/PrintPreviewFront'
import PrintPreviewBack from '../components/ApplicationForPermit/PrintPreviewBack'

const ApplicationForPermit: NextPage = () => {
  
  const [items, setItem] = React.useState<any>([])
  const [singleItem, setSingleItem] = React.useState<any>([])

  return (
    <React.Fragment>
      <Head>
        <title>PEZA + SPMI Fragment (Application for Permit)</title>
      </Head>
      <div className="flex flex-col w-full h-screen cursor-default bg-gray-700 text-white">
        <div className="flex flex-col w-full max-w-full h-full overflow-hidden border-b border-black border-opacity-10">
          <SideBar items={items} setItem={setItem} setSingleItem={setSingleItem} />
        </div>
        <div className="flex flex-col w-full max-w-full h-full overflow-y-auto">
          <div className="flex flex-col w-full p-2">
            <div className="flex items-center justify-between w-full px-5 py-3">
              <h1 className="font-bold text-xl">COMMODITIES LIST</h1>
              <Link href="/home">
                <a className="font-light text-xs px-3 py-2 bg-gray-800 text-white text-center rounded-lg transition ease-in-out duration-200 hover:bg-opacity-50">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                  </svg>
                </a>
              </Link>
              {items.length !== 0 && (
                <div className="flex items-center space-x-3">
                  <PrintPreviewFront items={items} singleItem={singleItem} />
                  <PrintPreviewBack items={items} singleItem={singleItem} />
                </div>
              )}
            </div>
            <table className="table-auto p-10 border border-black border-opacity-10">
              <thead className="border border-black border-opacity-10">
                <tr>
                  <th className="p-3 text-sm text-blue-300 border border-black border-opacity-10">No. of Pkgs. Units</th>
                  <th className="p-3 text-sm text-blue-300 border border-black border-opacity-10">Marks & Numbers</th>
                  <th className="p-3 text-sm text-blue-300 border border-black border-opacity-10">Description of Commodities</th>
                  <th className="p-3 text-sm text-blue-300 border border-black border-opacity-10">Quantity</th>
                  <th className="p-3 text-sm text-blue-300 border border-black border-opacity-10">Weights/Measurements</th>
                  <th className="p-3 text-sm text-blue-300 border border-black border-opacity-10">Unit Value</th>
                  <th className="p-3 text-sm text-blue-300 border border-black border-opacity-10">Total Value</th>
                </tr>
              </thead>
              <tbody>
                {items.map((item: any, i: number) => (
                  <tr className="border border-black border-opacity-10 hover:bg-gray-800 hover:bg-opacity-50" key={i}>
                    <td className="px-5 py-3 text-sm text-gray-100 border border-black border-opacity-10">{item.pkgs_unit}</td>
                    <td className="px-5 py-3 text-sm text-gray-100 border border-black border-opacity-10">{item.marks_numbers}</td>
                    <td className="px-5 py-3 text-sm text-gray-100 border border-black border-opacity-10">{item.description_commodities}</td>
                    <td className="px-5 py-3 text-sm text-gray-100 border border-black border-opacity-10">{item.quantity}</td>
                    <td className="px-5 py-3 text-sm text-gray-100 border border-black border-opacity-10">{item.weights_measurements}</td>
                    <td className="px-5 py-3 text-sm text-gray-100 border border-black border-opacity-10">{item.unit_value}</td>
                    <td className="px-5 py-3 text-sm text-gray-100 border border-black border-opacity-10">{item.total_value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className={`${singleItem.length !== 0 ? 'flex' : 'hidden'} flex-col w-full px-1 border-t border-black border-opacity-10 mt-5`}>
              <div className="flex w-full px-5 py-3">
                <h1 className="font-bold text-xl">OTHER DATA</h1>
              </div>
              <div className="flex flex-col w-full space-y-2">
                <div className="flex flex-row items-center w-full space-x-2">
                  <div className="flex flex-col w-full p-3 rounded-lg border border-black border-opacity-10 bg-gray-800 space-y-1">
                    <span className="flex w-full font-light text-xs text-white text-opacity-50">Use of good in the Zone</span>
                    <span>{ singleItem.use_of_goods_in_the_zone }</span>
                  </div>
                  <div className="flex flex-col w-full p-3 rounded-lg border border-black border-opacity-10 bg-gray-800 space-y-1">
                    <span className="flex w-full font-light text-xs text-white text-opacity-50">Currency in which payment will be made</span>
                    <span>{ singleItem.currency_payment_will_be_made }</span>
                  </div>
                </div>
                <div className="flex flex-row items-center w-full space-x-2">
                  <div className="flex flex-col w-full p-3 rounded-lg border border-black border-opacity-10 bg-gray-800 space-y-1">
                    <span className="flex w-full font-light text-xs text-white text-opacity-50">Name and Address of Supplier</span>
                    <span>{ singleItem.name_address_supplier }</span>
                  </div>
                  <div className="flex flex-col w-full p-3 rounded-lg border border-black border-opacity-10 bg-gray-800 space-y-1">
                    <span className="flex w-full font-light text-xs text-white text-opacity-50">Date of Delivery to the Zone</span>
                    <span>{ singleItem.date_delivery_zone }</span>
                  </div>
                  <div className="flex flex-col w-full p-3 rounded-lg border border-black border-opacity-10 bg-gray-800 space-y-1">
                    <span className="flex w-full font-light text-xs text-white text-opacity-50">Carrier</span>
                    <span>{ singleItem.carrier }</span>
                  </div>
                </div>
                <div className="flex flex-col w-full p-3 rounded-lg border border-black border-opacity-10 bg-gray-800 space-y-1">
                  <span className="flex w-full font-light text-xs text-white text-opacity-50">Zone Enterprise & Registration No.</span>
                  <span>{ singleItem.zone_enterprise_registration_no }</span>
                </div>
                <div className="flex flex-row items-center w-full space-x-2">
                  <div className="flex flex-col w-full p-3 rounded-lg border border-black border-opacity-10 bg-gray-800 space-y-1">
                    <span className="flex w-full font-light text-xs text-white text-opacity-50">Persmission is hereby granted to bring into the</span>
                    <span>{ singleItem.permission_hereby_granted }</span>
                  </div>
                  <div className="flex flex-col w-full p-3 rounded-lg border border-black border-opacity-10 bg-gray-800 space-y-1">
                    <span className="flex w-full font-light text-xs text-white text-opacity-50">Permit Date</span>
                    <span>{ singleItem.permit_date }</span>
                  </div>
                </div>
                <div className="flex flex-col w-full p-3 rounded-lg border border-black border-opacity-10 bg-gray-800 space-y-1">
                  <span className="flex w-full font-light text-xs text-white text-opacity-50">Delivery Receipt No.</span>
                  <span>{ singleItem.delivery_receipt_no }</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default ApplicationForPermit

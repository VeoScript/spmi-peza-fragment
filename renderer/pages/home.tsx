import type { NextPage } from 'next'
import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import SideBar from '../components/SideBar'
import PrintPreviewFront from '../components/PrintPreviewFront'

const Home: NextPage = () => {
  
  const [items, setItem] = React.useState<any>([])
  const [singleItem, setSingleItem] = React.useState<any>([])

  console.log(items)

  return (
    <React.Fragment>
      <Head>
        <title>SPMI Fragment</title>
      </Head>
      <div className="flex flex-col w-full h-screen cursor-default bg-gray-700 text-white">
        <div className="flex flex-col w-full max-w-full h-full overflow-hidden border-b border-black border-opacity-10">
          <SideBar items={items} setItem={setItem} setSingleItem={setSingleItem} />
        </div>
        <div className="flex flex-col w-full max-w-full h-full overflow-y-auto">
          <div className="flex flex-col w-full p-2">
            <div className="flex items-center justify-between w-full px-5 py-3">
              <h1 className="font-bold text-xl">List of Commodities</h1>
              <PrintPreviewFront items={items} singleItem={singleItem} />
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
                <h1 className="font-bold text-xl">Other Data</h1>
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
                    <span>{ singleItem.getdate }</span>
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

export default Home

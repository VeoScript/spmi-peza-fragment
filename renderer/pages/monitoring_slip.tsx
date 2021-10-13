import type { NextPage } from 'next'
import React from 'react'
import Head from 'next/head'
import SideBar from '../components/MonitoringSlip/SideBar'
import TopBar from '../components/MonitoringSlip/TopBar'
import PrintPreview from '../components/MonitoringSlip/PrintPreview'

const MonitoringSlip: NextPage = () => {

  const [items, setItem] = React.useState<any>([])
  const [singleItem, setSingleItem] = React.useState<any>([])

  return (
    <React.Fragment>
      <Head>
        <title>PEZA + SPMI Fragment (Monitoring Slip)</title>
      </Head>
      <div className="flex flex-row w-full h-screen overflow-hidden cursor-default bg-gray-700 text-white">
        <SideBar setItem={setItem} setSingleItem={setSingleItem} />
        <div className="flex flex-col w-full h-full overflow-hidden">
          {singleItem.length !== 0 && (
            <TopBar items={items} setItem={setItem} setSingleItem={setSingleItem} />
          )}
          <div className="flex flex-col w-full h-full overflow-y-auto">
            {items.length !== 0 && (
              <React.Fragment>
                <div className="flex flex-row items-center justify-between w-full">
                  <div className="flex items-center justify-between w-full px-5 py-3">
                    <h1 className="font-bold text-base">COMMODITIES LIST</h1>
                    <div className="flex items-center space-x-2">
                      <PrintPreview items={items} singleItem={singleItem} />
                    </div>
                  </div>
                </div>
                <table className="table-auto p-10 border border-black border-opacity-10">
                  <thead className="border border-black border-opacity-10">
                    <tr>
                      <th className="p-3 text-sm text-blue-300 border border-black border-opacity-10">QUANTITY/UNIT</th>
                      <th className="p-3 text-sm text-blue-300 border border-black border-opacity-10">DESCRIPTION OF GOODS/COMMODITIES</th>
                      <th className="p-3 text-sm text-blue-300 border border-black border-opacity-10">VALUE</th>
                    </tr>
                  </thead>
                  <tbody>
                    {items.map((item: any, i: number) => (
                      <tr className="border border-black border-opacity-10 hover:bg-gray-800 hover:bg-opacity-50" key={i}>
                        <td className="px-5 py-3 text-sm text-gray-100 border border-black border-opacity-10">{ item.quantity_unit }</td>
                        <td className="px-5 py-3 text-sm text-gray-100 border border-black border-opacity-10">{ item.description_of_goods_commodities }</td>
                        <td className="px-5 py-3 text-sm text-gray-100 border border-black border-opacity-10">{ item.unit_value }</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </React.Fragment>
            )}
            {singleItem.length !== 0 && (
              <React.Fragment>
                <div className="flex items-center w-full px-5 py-3">
                  <h1 className="font-bold text-base">OTHER DATA</h1>
                </div>
                <div className="flex flex-col w-full border-t border-black border-opacity-10">
                  <div className="flex flex-row items-center w-full p-5 space-x-2 border-b border-black border-opacity-10">
                    <span className="font-normal text-sm text-gray-300 uppercase">PEZA Enterprise:</span>
                    <span className="font-bold text-base text-blue-300">{ singleItem.peza_enterprise }</span>
                  </div>
                  <div className="flex flex-row items-center w-full p-5 space-x-2 border-b border-black border-opacity-10">
                    <span className="font-normal text-sm text-gray-300 uppercase">ECOZONE LOCATION:</span>
                    <span className="font-bold text-base text-blue-300">{ singleItem.ecozone_location }</span>
                  </div>
                  <div className="flex flex-row items-center w-full p-5 space-x-2 border-b border-black border-opacity-10">
                    <span className="font-normal text-sm text-gray-300 uppercase">PEZA Accountable Form Serial No.:</span>
                    <span className="font-bold text-base text-blue-300">{ singleItem.peza_accountable_form_serial_no }</span>
                  </div>
                  <div className="flex flex-row items-center w-full p-5 space-x-2 border-b border-black border-opacity-10">
                    <span className="font-normal text-sm text-gray-300 uppercase">Processor's Name:</span>
                    <span className="font-bold text-base text-blue-300">{ singleItem.processor_name }</span>
                  </div>
                  <div className="flex flex-row items-center w-full p-5 space-x-2 border-b border-black border-opacity-10">
                    <span className="font-normal text-sm text-gray-300 uppercase">Broker/Company Name:</span>
                    <span className="font-bold text-base text-blue-300">{ singleItem.broker_company_name }</span>
                  </div>
                  <div className="flex flex-row items-center w-full p-5 space-x-2 border-b border-black border-opacity-10">
                    <span className="font-normal text-sm text-gray-300 uppercase">Date Filed:</span>
                    <span className="font-bold text-base text-blue-300">{ singleItem.date_filed }</span>
                  </div>
                </div>
              </React.Fragment>
            )}
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default MonitoringSlip
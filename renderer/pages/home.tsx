import type { NextPage } from 'next'
import React from 'react'
import Head from 'next/head'
import SideBar from '../components/SideBar'

const Home: NextPage = () => {
  
  const [items, setItem] = React.useState<any>([])

  return (
    <React.Fragment>
      <Head>
        <title>SPMI Fragment</title>
      </Head>
      <div className="flex w-full h-screen bg-gray-700 text-white">
        <div className="flex flex-col w-full max-w-xs h-full overflow-y-auto border-r border-black border-opacity-10">
          <SideBar items={items} setItem={setItem} />
        </div>
        <div className="flex flex-col w-full max-w-full h-full overflow-y-auto">
          <div className="flex flex-col w-full p-2">
            <div className="flex items-center w-full px-5 py-3">
              <h1 className="font-bold text-sm">List of Commodities</h1>
            </div>
            <table className="table-auto p-10 border border-black border-opacity-10">
              <thead className="border border-black border-opacity-10">
                <tr>
                  <th className="p-3 text-sm text-blue-400 border border-black border-opacity-10">No. of Pkgs. Units</th>
                  <th className="p-3 text-sm text-blue-400 border border-black border-opacity-10">Marks & Numbers</th>
                  <th className="p-3 text-sm text-blue-400 border border-black border-opacity-10">Description of Commodities</th>
                  <th className="p-3 text-sm text-blue-400 border border-black border-opacity-10">Quantity</th>
                  <th className="p-3 text-sm text-blue-400 border border-black border-opacity-10">Weights/Measurements</th>
                  <th className="p-3 text-sm text-blue-400 border border-black border-opacity-10">Unit Value</th>
                  <th className="p-3 text-sm text-blue-400 border border-black border-opacity-10">Total Value</th>
                </tr>
              </thead>
              <tbody>
                {items.map((item: any, i: number) => (
                  <tr className="border border-black border-opacity-10" key={i}>
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
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Home

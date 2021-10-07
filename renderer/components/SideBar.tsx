import React from 'react'
import { useForm } from 'react-hook-form'
import Moment from 'react-moment'

type TypeProps = {
  items: any
  setItem: any
  setSingleItem: any
}

interface FormData {
  pkgs_unit: string
  marks_numbers: string
  description_commodities: string
  quantity: string
  weights_measurements: string
  unit_value: string
  total_value: string

  use_of_goods_in_the_zone: string
  currency_payment_will_be_made: string
  name_address_supplier: string
  date_delivery_zone: string
  carrier: string
  zone_enterprise_registration_no: string
  permission_hereby_granted: string
  permit_date: string
  delivery_receipt_no: string
}

const SideBar: React.FC<TypeProps> = ({ items, setItem, setSingleItem }) => {

  const { handleSubmit, register, reset } = useForm()

  function addCommodity(formData: FormData) {
    const pkgs_unit = formData.pkgs_unit
    const marks_numbers = formData.marks_numbers
    const description_commodities = formData.description_commodities
    const quantity = formData.quantity
    const weights_measurements = formData.weights_measurements
    const unit_value = formData.unit_value
    const total_value = formData.total_value
    const use_of_goods_in_the_zone = formData.use_of_goods_in_the_zone
    const currency_payment_will_be_made = formData.currency_payment_will_be_made
    const name_address_supplier = formData.name_address_supplier
    const date_delivery_zone = formData.date_delivery_zone
    const carrier = formData.carrier
    const zone_enterprise_registration_no = formData.zone_enterprise_registration_no
    const permission_hereby_granted = formData.permission_hereby_granted
    const permit_date = formData.permit_date
    const delivery_receipt_no = formData.delivery_receipt_no

    let format= (d,a=d.toString().split` `)=> a[2]+"-"+a[1]+"-"+a[3]

    const getdate = format(Date())

    const initialData = [{
      pkgs_unit: pkgs_unit,
      marks_numbers: marks_numbers,
      description_commodities: description_commodities,
      quantity: quantity,
      weights_measurements: weights_measurements,
      unit_value: unit_value,
      total_value: total_value
    }]

    setItem([...items, ...initialData])

    setSingleItem({
      getdate: getdate,
      use_of_goods_in_the_zone: use_of_goods_in_the_zone,
      currency_payment_will_be_made: currency_payment_will_be_made,
      name_address_supplier: name_address_supplier,
      date_delivery_zone: date_delivery_zone,
      carrier: carrier,
      zone_enterprise_registration_no: zone_enterprise_registration_no,
      permission_hereby_granted: permission_hereby_granted,
      delivery_receipt_no: delivery_receipt_no
    })

    reset({
      use_of_goods_in_the_zone,
      currency_payment_will_be_made,
      name_address_supplier,
      date_delivery_zone,
      carrier,
      zone_enterprise_registration_no,
      permission_hereby_granted,
      permit_date,
      delivery_receipt_no
    })
  }

  return (
    <form onSubmit={handleSubmit(addCommodity)} className="flex flex-row items-center w-full h-full">     
      <div className="flex flex-col items-start w-full h-full overflow-y-auto px-3 py-5 space-y-5">
        <div className="font-bold text-sm">SPMI FRAGMENT (Single Data)</div>
        <div className="flex flex-col w-full space-y-3">
          <div className="flex flex-row items-center w-full space-x-2">
            <div className="flex flex-col w-full space-y-1">
              <label className="px-1 text-xs text-white text-opacity-50">Use of goods in the zone</label>
              <div className="flex items center w-full rounded-lg bg-gray-800 border border-gray-800 focus-within:border-gray-400">
                <input type="text" className="w-full p-3 bg-transparent outline-none" {...register('use_of_goods_in_the_zone', { required: true })} />
              </div>
            </div>
            <div className="flex flex-col w-full space-y-1">
              <label className="px-1 text-xs text-white text-opacity-50">Currency in which payment will be made</label>
              <div className="flex items center w-full rounded-lg bg-gray-800 border border-gray-800 focus-within:border-gray-400">
                <input type="text" className="w-full p-3 bg-transparent outline-none" {...register('currency_payment_will_be_made', { required: true })} />
              </div>
            </div>
          </div>
          <div className="flex flex-row items-center w-full space-x-2">
            <div className="flex flex-col w-full space-y-1">
              <label className="px-1 text-xs text-white text-opacity-50">Name and Address of Supplier</label>
              <div className="flex items center w-full rounded-lg bg-gray-800 border border-gray-800 focus-within:border-gray-400">
                <input type="text" className="w-full p-3 bg-transparent outline-none" {...register('name_address_supplier', { required: true })} />
              </div>
            </div>
            <div className="flex flex-col w-full space-y-1">
              <label className="px-1 text-xs text-white text-opacity-50">Date of Delivery to the Zone</label>
              <div className="flex items center w-full rounded-lg bg-gray-800 border border-gray-800 focus-within:border-gray-400">
                <input type="text" className="w-full p-3 bg-transparent outline-none" {...register('date_delivery_zone', { required: true })} />
              </div>
            </div>
            <div className="flex flex-col w-full space-y-1">
              <label className="px-1 text-xs text-white text-opacity-50">Carrier</label>
              <div className="flex items center w-full rounded-lg bg-gray-800 border border-gray-800 focus-within:border-gray-400">
                <input type="text" className="w-full p-3 bg-transparent outline-none" {...register('carrier', { required: true })} />
              </div>
            </div>
          </div>
          <div className="flex flex-col w-full space-y-1">
            <label className="px-1 text-xs text-white text-opacity-50">Zone Enterprise & Registration No.</label>
            <div className="flex items center w-full rounded-lg bg-gray-800 border border-gray-800 focus-within:border-gray-400">
              <input type="text" className="w-full p-3 bg-transparent outline-none" {...register('zone_enterprise_registration_no', { required: true })} />
            </div>
          </div>
          <div className="flex flex-col w-full space-y-1">
            <label className="px-1 text-xs text-white text-opacity-50">Persmission is hereby granted to bring into the</label>
            <div className="flex items center w-full rounded-lg bg-gray-800 border border-gray-800 focus-within:border-gray-400">
              <input type="text" className="w-full p-3 bg-transparent outline-none" {...register('permission_hereby_granted', { required: true })} />
            </div>
          </div>
          <div className="flex flex-row items-center w-full space-x-2">
            <div className="flex flex-col w-full space-y-1">
              <label className="px-1 text-xs text-white text-opacity-50">Delivery Receipt No.</label>
              <div className="flex items center w-full rounded-lg bg-gray-800 border border-gray-800 focus-within:border-gray-400">
                <input type="text" className="w-full p-3 bg-transparent outline-none" {...register('delivery_receipt_no', { required: true })} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-start w-full max-w-xl h-full overflow-y-auto px-3 py-5 space-y-5">
        <div className="font-bold text-sm">SPMI FRAGMENT (Data List)</div>
        <div className="flex flex-col w-full space-y-3">
          <div className="flex flex-row items-center w-full space-x-2">
            <div className="flex flex-col w-full space-y-1">
              <label className="px-1 text-xs text-white text-opacity-50">No. of Pkgs. Units</label>
              <div className="flex items center w-full rounded-lg bg-gray-800 border border-gray-800 focus-within:border-gray-400">
                <input type="text" className="w-full p-3 bg-transparent outline-none" {...register('pkgs_unit', { required: true })} />
              </div>
            </div>
            <div className="flex flex-col w-full space-y-1">
              <label className="px-1 text-xs text-white text-opacity-50">Marks & Numbers</label>
              <div className="flex items center w-full rounded-lg bg-gray-800 border border-gray-800 focus-within:border-gray-400">
                <input type="text" className="w-full p-3 bg-transparent outline-none" {...register('marks_numbers', { required: true })} />
              </div>
            </div>
          </div>
          <div className="flex flex-col w-full space-y-1">
            <label className="px-1 text-xs text-white text-opacity-50">Description of Commodities</label>
            <div className="flex items center w-full rounded-lg bg-gray-800 border border-gray-800 focus-within:border-gray-400">
              <textarea className="w-full p-3 text-sm bg-transparent outline-none resize-none" rows={3} {...register('description_commodities', { required: true })} />
            </div>
          </div>
          <div className="flex flex-row items-center w-full space-x-2"> 
            <div className="flex flex-col w-full space-y-1">
              <label className="px-1 text-xs text-white text-opacity-50">Quantity</label>
              <div className="flex items center w-full rounded-lg bg-gray-800 border border-gray-800 focus-within:border-gray-400">
                <input type="text" className="w-full p-3 bg-transparent outline-none" {...register('quantity', { required: true })} />
              </div>
            </div>
            <div className="flex flex-col w-full space-y-1">
              <label className="px-1 text-xs text-white text-opacity-50">Weights/Measurements</label>
              <div className="flex items center w-full rounded-lg bg-gray-800 border border-gray-800 focus-within:border-gray-400">
                <input type="text" className="w-full p-3 bg-transparent outline-none" {...register('weights_measurements', { required: true })} />
              </div>
            </div>
          </div>
          <div className="flex flex-row items-center w-full space-x-2"> 
            <div className="flex flex-col w-full space-y-1">
              <label className="px-1 text-xs text-white text-opacity-50">Unit Value</label>
              <div className="flex items center w-full rounded-lg bg-gray-800 border border-gray-800 focus-within:border-gray-400">
                <input type="text" className="w-full p-3 bg-transparent outline-none" {...register('unit_value', { required: true })} />
              </div>
            </div>
            <div className="flex flex-col w-full space-y-1">
              <label className="px-1 text-xs text-white text-opacity-50">Total Value</label>
              <div className="flex items center w-full rounded-lg bg-gray-800 border border-gray-800 focus-within:border-gray-400">
                <input type="text" className="w-full p-3 bg-transparent outline-none" {...register('total_value', { required: true })} />
              </div>
            </div>
          </div>
          <div className="flex flex-col w-full space-y-2">
            <button
              className="w-full p-3 text-sm text-white text-opacity-70 rounded-lg bg-gray-800 hover:bg-opacity-70"
              type="submit"
            >
              Add Commodity
            </button>
            <button
              className="w-full p-3 text-sm text-white text-opacity-70 rounded-lg bg-gray-800 hover:bg-opacity-70"
              type="button"
              onClick={() => {
                setItem([])
                setSingleItem([])
                reset()
              }}
            >
              Clear All
            </button>
          </div>
        </div>
      </div>
    </form>
  )
}

export default SideBar
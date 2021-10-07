import { Dialog, Transition } from '@headlessui/react'
import { FC, Fragment, useState } from 'react'
import { PDFViewer, Page, Text, View, Document } from '@react-pdf/renderer'
import { styles } from '../utils/PDFStyles'

interface TypeProps {
  items: any
  singleItem: any
}

const PrintPreview: FC<TypeProps> = ({ items, singleItem }) =>  {
  let [isOpen, setIsOpen] = useState(false)

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  return (
    <>
      <button
        className="rounded-full outline-none transition ease-in-out duration-200"
        type="button"
        onClick={openModal}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
        </svg>
      </button>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={closeModal}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block w-full h-screen p-6 my-8 overflow-hidden align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                <PDFViewer className="w-full h-full">
                  <MyDocument items={items} singleItem={singleItem} />
                </PDFViewer>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}

const MyDocument = ({ items, singleItem }) => {
  return (
    <Document>
      <Page size="LETTER" style={styles.body}>
        <View style={styles.header}>
          <Text style={styles.top_date}>{ singleItem.getdate }</Text>
          <Text style={styles.top_permission}>{ singleItem.permission_hereby_granted }</Text>
        </View>
        <View style={styles.table}>
          {items.map((item: any, i: any) => (
            <View style={styles.row} key={i}>
              <Text style={styles.pkgs_unit}>{ item.pkgs_unit }</Text>
              <Text style={styles.marks_numbers}>{ item.marks_numbers }</Text>
              <Text style={styles.description_commodities}>{ item.description_commodities }</Text>
              <Text style={styles.quantity}>{ item.quantity }</Text>
              <Text style={styles.weights_measurements}>{ item.weights_measurements }</Text>
              <Text style={styles.unit_value}>{ item.unit_value }</Text>
              <Text style={styles.total_value}>{ item.total_value }</Text>
            </View>
          ))}
        </View>
        <View style={styles.commodity_info}>
          <Text style={styles.use_of_goods_in_the_zone}>Use of goods in the Zone</Text>
          <Text style={styles.currency_payment_will_be_made}>Currency in which payment will be made</Text>
          <Text style={styles.name_address_supplier}>Name and Address of Supplier</Text>
          <View style={styles.row_container}>
            <Text style={styles.date_delivery_zone}>Date of Delivery to the Zone</Text>
            <Text style={styles.carrier}>Carrier</Text>
          </View>
          <Text style={styles.zone_enterprise_registration_no}>Zone Enterprise & Registration No.</Text>
        </View>
        <View style={styles.permit_area}>
          <Text style={styles.bottom_date}>Date</Text>
          <Text style={styles.bottom_permission}>Permission Permission Permission Permission</Text>
        </View>
      </Page>
    </Document>
  )
}

export default PrintPreview
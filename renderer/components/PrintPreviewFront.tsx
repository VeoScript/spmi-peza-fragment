import { Dialog, Transition } from '@headlessui/react'
import { FC, Fragment, useState } from 'react'
import { PDFViewer, Page, Text, View, Document } from '@react-pdf/renderer'
import { styles } from '../utils/PDFStyles'

interface TypeProps {
  items: any
  singleItem: any
}

const PrintPreviewFront: FC<TypeProps> = ({ items, singleItem }) =>  {
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
        className="flex items-center space-x-1 rounded-full outline-none transition ease-in-out duration-200 hover:underline"
        type="button"
        onClick={openModal}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
        </svg>
        <span className="font-light text-xs">Print Front Page</span>
      </button>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={closeModal}
        >
          <div className="min-h-screen text-center">
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
              <div className="inline-block w-full h-screen overflow-hidden align-middle transition-all transform">
                <div className="flex flex-row items-center justify-between w-full text-white bg-black">
                  <div className="px-5 font-bold text-white">PRINT PREVIEW</div>
                  <button
                    className="p-3 outline-none transition ease-in-out duration-200 transform hover:scale-95"
                    type="button"
                    onClick={closeModal}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
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
          <Text style={styles.use_of_goods_in_the_zone}>{ singleItem.use_of_goods_in_the_zone }</Text>
          <Text style={styles.currency_payment_will_be_made}>{ singleItem.currency_payment_will_be_made }</Text>
          <Text style={styles.name_address_supplier}>{ singleItem.name_address_supplier }</Text>
          <View style={styles.row_container}>
            <Text style={styles.date_delivery_zone}>{ singleItem.date_delivery_zone }</Text>
            <Text style={styles.carrier}>{ singleItem.carrier }</Text>
          </View>
          <Text style={styles.zone_enterprise_registration_no}>{ singleItem.zone_enterprise_registration_no }</Text>
        </View>
        <View style={styles.permit_area}>
          <Text style={styles.bottom_date}>{ singleItem.getdate }</Text>
          <Text style={styles.bottom_permission}>{ singleItem.permission_hereby_granted }</Text>
        </View>
      </Page>
    </Document>
  )
}

export default PrintPreviewFront
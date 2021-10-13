import { Dialog, Transition } from '@headlessui/react'
import { FC, Fragment, useState } from 'react'
import { PDFViewer, Page, Text, View, Document } from '@react-pdf/renderer'
import { styles } from '../PDFStyles/MonitoringSlip'

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
        className="flex items-center space-x-1 rounded-full outline-none transition ease-in-out duration-200 hover:underline"
        type="button"
        onClick={openModal}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
        </svg>
        <span className="font-light text-xs">Print Preview</span>
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
        <View style={styles.first_layer}>
          <Text style={styles.peza_enterprise}>{singleItem.peza_enterprise}</Text>
          <Text style={styles.processor_name}>{singleItem.processor_name}</Text>
        </View>
        <View style={styles.second_layer}>
          <Text style={styles.ecozone_location}>{singleItem.ecozone_location}</Text>
          <Text style={styles.broker_company_name}>{singleItem.broker_company_name}</Text>
        </View>
        <View style={styles.third_layer}>
          <Text style={styles.peza_accountable_form_serial_no}>{singleItem.peza_accountable_form_serial_no}</Text>
        </View>
        <View style={styles.fourth_layer}>
          {items.map((item: any, i: number) => (
            <View style={styles.table_row} key={i}>
              <Text style={styles.quantity_unit}>{ item.quantity_unit }</Text>
              <Text style={styles.description_of_goods_commodities}>{ item.description_of_goods_commodities }</Text>
              <Text style={styles.unit_value}>{ item.unit_value }</Text>
            </View>
          ))}
        </View>
        <View style={styles.fifth_layer}>
          <Text>{singleItem.date_filed}</Text>
        </View>
      </Page>
    </Document>
  )
}

export default PrintPreview
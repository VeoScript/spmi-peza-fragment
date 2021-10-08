import { StyleSheet } from '@react-pdf/renderer'

export const styles = StyleSheet.create({
  body: {
    flexDirection: 'column',
  },
  header: {
    marginTop: 110,
    marginRight: 90,
  },
  table: {
    marginTop: 70,
    flexDirection: 'column',
    justifyContent: 'center',
    textAlign: 'center',
    height: 20,
    maxHeight: 20
  },
  table_backpage: {
    marginTop: 130,
    flexDirection: 'column',
    justifyContent: 'center',
    textAlign: 'center',
    height: 20,
    maxHeight: 20
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    textAlign: 'center',
  },
  commodity_info: {
    marginTop: 140
  },
  top_date: {
    textAlign: 'right',
    fontSize: 10,
    marginRight: 30
  },
  top_permission: {
    textAlign: 'right',
    fontSize: 10,
    marginTop: 60,
    marginRight: 10
  },
  pkgs_unit: {
    textAlign: 'center',
    fontSize: 10,
    width: 50,
  },
  marks_numbers: {
    textAlign: 'center',
    fontSize: 10,
    width: 60,
    marginLeft: 10
  },
  description_commodities: {
    textAlign: 'center',
    fontSize: 10,
    width: 180,
    paddingLeft: 10
  },
  quantity: {
    textAlign: 'center',
    fontSize: 10,
    width: 60,
    marginLeft: 10
  },
  weights_measurements: {
    textAlign: 'center',
    fontSize: 10,
    width: 60,
    marginLeft: 10
  },
  unit_value: {
    textAlign: 'left',
    fontSize: 10,
    width: 50,
    marginLeft: 10
  },
  total_value: {
    textAlign: 'left',
    fontSize: 10,
    width: 50,
    marginLeft: 10
  },
  use_of_goods_in_the_zone: {
    fontSize: 10,
    marginLeft: 150,
  },
  currency_payment_will_be_made: {
    fontSize: 10,
    marginTop: 5,
    marginLeft: 210
  },
  name_address_supplier: {
    fontSize: 10,
    marginTop: 3,
    marginLeft: 180
  },
  row_container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  date_delivery_zone: {
    fontSize: 10,
    marginTop: 9,
    marginLeft: 150
  },
  carrier: {
    fontSize: 10,
    marginTop: 9,
    marginLeft: 100
  },
  zone_enterprise_registration_no: {
    fontSize: 10,
    marginTop: 100,
    marginLeft: 80
  },
  delivery_receipt_no: {
    marginTop: 80,
    marginLeft: 130,
    fontSize: 10
  },
  permit_area: {
    marginTop: 40,
  },
  bottom_date: {
    textAlign: 'right',
    fontSize: 10,
    marginRight: 60
  },
  bottom_permission: {
    textAlign: 'center',
    fontSize: 10,
    marginTop: 30,
    marginLeft: 12
  }
})
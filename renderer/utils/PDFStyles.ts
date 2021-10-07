import { StyleSheet } from '@react-pdf/renderer'

export const styles = StyleSheet.create({
  body: {
    flexDirection: 'column',
  },
  header: {
    marginTop: 80,
  },
  table: {
    marginTop: 50,
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
    marginTop: 200
  },
  top_date: {
    textAlign: 'right',
    fontSize: 10,
    marginRight: 30
  },
  top_permission: {
    textAlign: 'right',
    fontSize: 10,
    marginTop: 50,
    marginRight: 40
  },
  pkgs_unit: {
    textAlign: 'left',
    fontSize: 10,
    width: 50,
  },
  marks_numbers: {
    textAlign: 'left',
    fontSize: 10,
    width: 60,
    marginLeft: 10
  },
  description_commodities: {
    textAlign: 'left',
    fontSize: 10,
    width: 180,
    marginLeft: 10
  },
  quantity: {
    textAlign: 'left',
    fontSize: 10,
    width: 60,
    marginLeft: 10
  },
  weights_measurements: {
    textAlign: 'left',
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
    marginLeft: 200
  },
  name_address_supplier: {
    fontSize: 10,
    marginTop: 5,
    marginLeft: 180
  },
  row_container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  date_delivery_zone: {
    fontSize: 10,
    marginTop: 10,
    marginLeft: 180
  },
  carrier: {
    fontSize: 10,
    marginTop: 10,
    marginLeft: 180
  },
  zone_enterprise_registration_no: {
    fontSize: 10,
    marginTop: 100,
    marginLeft: 80
  },
  permit_area: {
    marginTop: 50,
  },
  bottom_date: {
    textAlign: 'right',
    fontSize: 10,
    marginRight: 30
  },
  bottom_permission: {
    textAlign: 'right',
    fontSize: 10,
    marginRight: 150,
    marginTop: 50
  }
})
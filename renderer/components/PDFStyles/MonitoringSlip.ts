import { StyleSheet } from '@react-pdf/renderer'

export const styles = StyleSheet.create({
  body: {
    flexDirection: 'column',
    paddingHorizontal: 50,
    fontSize: 10
  },
  first_layer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 116
  },
  second_layer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  third_layer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 10
  },
  fourth_layer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 135,
    width: 500,
    height: 80
  },
  fifth_layer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 5,
    marginLeft: 55
  },
  table_row: {
    display: 'flex',
    flexDirection: 'row',
    padding: 3
  },
  quantity_unit: {
    display: 'flex',
    justifyContent: 'flex-start',
    marginLeft: 5,
    width: 100
  },
  description_of_goods_commodities: {
    display: 'flex',
    justifyContent: 'center',
    width: 300
  },
  unit_value: {
    display: 'flex',
    justifyContent: 'flex-end',
    width: 100
  },
  peza_enterprise: {
    marginLeft: 100
  },
  ecozone_location: {
    marginLeft: 100
  },
  peza_accountable_form_serial_no: {
    marginLeft: 180
  }
})
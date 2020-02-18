import library from './library'
import BaseClass from '../utils/BaseClass'

export class DeliveryLeadTimeCollection extends BaseClass {
  static className = 'DeliveryLeadTime'
  minHours: number
  maxHours: number
  minDays: number
  maxDays: number
  id: string
  createdAt: Date
  updatedAt: Date
  reference: string
  metadata: object
  static define() {
    this.attributes(
      'minHours',
      'maxHours',
      'minDays',
      'maxDays',
      'id',
      'createdAt',
      'updatedAt',
      'reference',
      'metadata'
    )
    this.hasOne('stockLocation', { className: 'StockLocation' })
    this.hasOne('shippingMethod', { className: 'ShippingMethod' })
  }
}

const DeliveryLeadTime = library.createResource<DeliveryLeadTimeCollection>(
  DeliveryLeadTimeCollection
)

export default DeliveryLeadTime

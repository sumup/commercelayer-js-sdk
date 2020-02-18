import library from './library'
import BaseClass from '../utils/BaseClass'

export class SkuOptionCollection extends BaseClass {
  static className = 'SkuOption'
  name: string
  description: string
  priceAmountCents: number
  priceAmountFloat: number
  formattedPriceAmount: string
  delayHours: number
  delayDays: number
  skuCode_regex: string
  id: string
  createdAt: Date
  updatedAt: Date
  reference: string
  metadata: object
  static define() {
    this.attributes(
      'name',
      'description',
      'priceAmountCents',
      'priceAmountFloat',
      'formattedPriceAmount',
      'delayHours',
      'delayDays',
      'skuCodeRegex',
      'id',
      'createdAt',
      'updatedAt',
      'reference',
      'metadata'
    )

    this.hasOne('market', { className: 'Market' })
  }
}

const SkuOption = library.createResource<SkuOptionCollection>(
  SkuOptionCollection
)

export default SkuOption

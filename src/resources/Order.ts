import library from './library'
export class Order extends library.Base {
  id: string
  number: number
  skusCount: number
  status: string
  static define() {
    this.attributes(
      'number',
      'status',
      'payment_status',
      'fulfillment_status',
      'guest',
      'editable',
      'placeable',
      'customer_email',
      'customer_password',
      'language_code',
      'currency_code',
      'tax_included',
      'tax_rate',
      'freight_taxable',
      'country_code',
      'shipping_country_code_lock',
      'coupon_code',
      'subtotal_amount_cents',
      'subtotal_amount_float',
      'formatted_subtotal_amount',
      'shipping_amount_cents',
      'shipping_amount_float',
      'formatted_shipping_amount',
      'payment_method_amount_cents',
      'payment_method_amount_float',
      'formatted_payment_method_amount',
      'discount_amount_cents',
      'discount_amount_float',
      'formatted_discount_amount',
      'total_tax_amount_cents',
      'total_tax_amount_float',
      'formatted_total_tax_amount',
      'subtotal_tax_amount_cents',
      'subtotal_tax_amount_float',
      'formatted_subtotal_tax_amount',
      'shipping_tax_amount_cents',
      'shipping_tax_amount_float',
      'formatted_shipping_tax_amount',
      'payment_method_tax_amount_cents',
      'payment_method_tax_amount_float',
      'formatted_payment_method_tax_amount',
      'discount_tax_amount_cents',
      'discount_tax_amount_float',
      'formatted_discount_tax_amount',
      'total_amount_cents',
      'total_amount_float',
      'formatted_total_amount',
      'total_taxable_amount_cents',
      'total_taxable_amount_float',
      'formatted_total_taxable_amount',
      'subtotal_taxable_amount_cents',
      'subtotal_taxable_amount_float',
      'formatted_subtotal_taxable_amount',
      'shipping_taxable_amount_cents',
      'shipping_taxable_amount_float',
      'formatted_shipping_taxable_amount',
      'payment_method_taxable_amount_cents',
      'payment_method_taxable_amount_float',
      'formatted_payment_method_taxable_amount',
      'discount_taxable_amount_cents',
      'discount_taxable_amount_float',
      'formatted_discount_taxable_amount',
      'total_amount_with_taxes_cents',
      'total_amount_with_taxes_float',
      'formatted_total_amount_with_taxes',
      'fees_amount_cents',
      'fees_amount_float',
      'formatted_fees_amount',
      'skus_count',
      'line_item_options_count',
      'shipments_count',
      'payment_source_details',
      'token',
      'cart_url',
      'return_url',
      'terms_url',
      'privacy_url',
      'checkout_url',
      '_place',
      '_cancel',
      '_approve',
      '_capture',
      '_refund',
      '_update_taxes',
      '_billing_address_clone_id',
      '_shipping_address_clone_id',
      '_customer_payment_source_id',
      '_shipping_address_same_as_billing',
      '_billing_address_same_as_shipping',
      '_save_payment_source_to_customer_wallet',
      '_save_shipping_address_to_customer_address_book',
      '_save_billing_address_to_customer_address_book',
      '_refresh',
      'placed_at',
      'approved_at',
      'cancelled_at',
      'payment_updated_at',
      'fulfillment_updated_at',
      'id',
      'created_at',
      'updated_at',
      'reference',
      'metadata'
    )

    this.hasOne('market', { className: 'Market' }) // Required
    this.hasOne('customer', { className: 'Customer' })
    this.hasOne('shippingAddress', { className: 'Address' })
    this.hasOne('billingAddress', { className: 'Address' })
    this.hasOne('paymentMethod', { className: 'PaymentMethod' })
    this.hasOne('paymentSource', {
      className: 'PaymentSource',
      polymorphic: true
    })

    this.hasMany('availablePaymentMethods', { className: 'PaymentMethod' })
    this.hasMany('lineItems', { className: 'LineItem' })
    this.hasMany('shipments', { className: 'Shipment' })
  }
}

export default library.createResource<Order>(Order)

import {service} from './documents/service'
import {order} from './documents/order'
import {review} from './documents/review'
import {coupon} from './documents/coupon'
import {shopSettings} from './documents/shopSettings'
import {customer} from './documents/customer'
import {professional} from './documents/professional'

import {seo} from './objects/seo'
import {price} from './objects/price'
import {serviceVariant} from './objects/serviceVariant'
import {address} from './objects/address'
import {orderItem} from './objects/orderItem'
import {supportNote} from './objects/supportNote'

export const schemaTypes = [
  // documents
  service,
  order,
  review,
  coupon,
  shopSettings,
  customer,
  professional,
  // objects
  seo,
  price,
  serviceVariant,
  address,
  orderItem,
  supportNote,
]

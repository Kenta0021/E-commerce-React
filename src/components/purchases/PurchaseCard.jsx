import React from 'react'
import { changeDateFormat } from '../../utils/date'
import ProductPurchase from './ProductPurchase'
import './styles/PurchaseCard.css'

const PurchaseCard = ({purchase}) => {
  return (
    <article className='purchaseCard'>
      <h2 className='purchaseCard__date'>{changeDateFormat(purchase.createdAt)}</h2>
      <hr className='purchaseCard__line'/>
      <section className='purchaseCard__list'>
        {
          purchase.cart.products.map(productPurchase => <ProductPurchase key={productPurchase.id} productPurchase={productPurchase}/>)
        }
      </section>
    </article>
  )
}

export default PurchaseCard
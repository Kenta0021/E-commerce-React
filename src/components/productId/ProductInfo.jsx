import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addProductCar } from '../../store/slices/cart.slice'
import './styles/ProductInfo.css'

const positionImg = ['first', 'second', 'third']

const ProductInfo = ({ product }) => {
  const [quantity, setQuantity] = useState(1)
  const [currentImg, setCurrentImg] = useState(0)

  const dispatch = useDispatch()

  const handlePlus = () => {
    setQuantity(quantity + 1)
  }

  const handleMinus = () => {
    const newValue = quantity - 1
    if (newValue >= 1) {
      setQuantity(newValue)
    }
  }

  const handleAddProduct = () => {
    const data = {
      id: product.id,
      quantity: quantity
    }
    dispatch(addProductCar(data))
  }

  const handleClickLeft = () => {
    const newValue = currentImg - 1
    if(newValue >= 0){
      setCurrentImg(newValue)
    }else{
      setCurrentImg(positionImg.length - 1)
    }
  }

  const handleClickRight = () => {
    const newValue = currentImg + 1
    if(newValue <= 2) {
      setCurrentImg(newValue)
    }else{
      setCurrentImg(0)
    }
  }

  return (
    <article className='productInfo'>
      <div className='productInfo__slider'>
        <div className={`productInfo__slider-container ${positionImg[currentImg]}`}>
          <img src={product?.productImgs[0]} alt="" />
          <img src={product?.productImgs[1]} alt="" />
          <img src={product?.productImgs[2]} alt="" />
        </div>
        <i onClick={handleClickLeft} className='productInfo__slider-arrowLeft  bx bxs-left-arrow'></i>
        <i onClick={handleClickRight} className='productInfo__slider-arrowRight bx bxs-right-arrow'></i>
      </div>
      <div className='productInfo__info'>
        <h2 className='productInfo__title'>{product?.title}</h2>
        <p className='productInfo__description'>{product?.description}</p>
        <footer className='productInfo__footer'>
          <div className='productInfo__container-price'>
            <h3 className='productInfo__price-title'>Price</h3>
            <span className='productInfo__price'>${product?.price}</span>
          </div>
          <div className='productInfo__container-quantity'>
            <h3 className='productInfo__quantity-title'>Quantity</h3>
            <div className='productInfo__container-counter'>
              <div className='productInfo__minus' onClick={handleMinus}>-</div>
              <div className='productInfo__counter'>{quantity}</div>
              <div className='productInfo__plus' onClick={handlePlus}>+</div>
            </div>
          </div>
          <button
            className='productInfo__btn'
            onClick={handleAddProduct}
          >Add to Cart <i className='bx bx-cart'></i>
          </button>
        </footer>
      </div>
    </article>
  )
}

export default ProductInfo
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Categories = ({setCategory}) => {

  const [categories, setCategories] = useState([])

  const handleClickCategory = (id) => {
    setCategory(id)
  }

  useEffect(() => {
    const URL = 'https://e-commerce-api.academlo.tech/api/v1/products/categories'
    axios.get(URL)
      .then(res => setCategories(res.data.data.categories))
      .catch(err => console.log(err))
  }, [])

  return (
    <section>
      <ul>
        <li onClick={() => handleClickCategory('')}>All Products</li>
        {
          categories.map(category => <li onClick={() => handleClickCategory(category.id)} key={category.id}>{category.name}</li>)
        }
      </ul>
    </section>
  )
}

export default Categories
import React, { useState } from 'react'

const SearchProduct = ({handleSearchProduct}) => {

 const [inputValue, setInputValue] = useState("")

 const handleSearch = (e) =>  {
    setInputValue(e.target.value)

    setTimeout(() => {
        handleSearchProduct(inputValue)
    }, 400)
 }

  return (
    <input
        type='text'
        value={inputValue}
        onChange={handleSearch}
    />
  )
}

export default SearchProduct
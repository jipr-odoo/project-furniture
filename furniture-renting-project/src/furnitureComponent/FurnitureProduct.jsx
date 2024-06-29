import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchFurnitureDataStart } from '../store/actions/furnitureAction'
import SearchProduct from './SearchProduct';
const FurnitureProduct = () => {

    const [productData, setProductData] = useState([]);
    const dispatch = useDispatch()

    useEffect(() => {
    
        dispatch(fetchFurnitureDataStart())
    }, [])

    const data = useSelector(state => state.furnitureReducer.furnitureData.data)

    useEffect(() => {
        setProductData(data)
    }, [data]) 

    console.log(data, "sdasds")

    console.log(data)

    const handleSearchProduct = (value) => {

        if (value.trim() === '') {
            setProductData(data); 
        } else {
            const filterProduct = data.filter(item => {
                return item?.name.toLowerCase().includes(value?.toLowerCase());
            });
            setProductData(filterProduct);
        }
    }
  return (
    <>
    <SearchProduct handleSearchProduct={handleSearchProduct}/>
    <div
        
        className="product-container"
    >
    {
        productData.length > 0 
         &&
        (
            productData?.map((item) => (
    <div key={item?.id} className="card" style={{ width: '18rem' }}>
        <img src={item?.images} className="card-img-top" alt="..." />
        <div className="card-body">
            <h5 className="card-title">{item?.name}</h5>
            
            <p><span style={{fontWeight: "700"}}>Rent price: </span>{item?.rental_price}</p>
            <p className="card-text">
                {item?.description}
            </p>
            <p><span style={{fontWeight: "700"}}>Avaibility status: </span>{item?.availability_status}</p>
            {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
        </div>
    </div>
    ))
    )
    }
    

    </div>
    </>
  )
}

export default FurnitureProduct
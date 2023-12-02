import React from 'react'
import { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { emptyCart, removeFromCart } from '../redux/slice/cartSlice'

function Cart() {
    
  const navigate = useNavigate()
  const cartArray = useSelector((state)=>state.cartReducer)
  const dispatch = useDispatch()
  const handleCart = () =>{
   dispatch(emptyCart()) 
   alert("Order Successfully Placed... Thankyou for Purchasing with us !!")
   navigate("/")
  }
  const [total,setTotal] = useState(0)
  const getCartTotal = () =>{
    if(cartArray.length>0){
      setTotal(cartArray.map(item=>item.price).reduce((p1,p2)=>p1+p2))
    }else{
      setTotal(0)
    }
  }
// Ivide enthinaan useEffect use cheythath
  useEffect(()=>{
    getCartTotal()
  },[cartArray])
  return (
    <div className='mt-5 container' style={{color:'white',marginTop:'100px'}}>
    {
      cartArray.length>0?
      <div className='row mt-5'>
     
        <div className='col-lg-7'>
          <table className='table shadow border'>
            <thead>
              <tr>
                <th>Index no.</th>
                <th>Product Name</th>
                <th>Products</th>
                <th>Price</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {
                cartArray.map((product,index)=>(
                  <tr key={index}>
                    <td>{index+1}</td>
                    <td>{product.title}</td>
                    <td><img width={'100px'} height={'100px'} src={product.image} alt="" /></td>
                    <td>${product.price}</td>
                    <td><Button onClick={()=>dispatch(removeFromCart(product.id))} className='btn btn-light'>
                 <i className='fa-solid fa-trash text-danger fa-2x'></i>
               </Button></td>
                  </tr>
                ))
              }
            </tbody>

          </table>

        </div>
        <div className='col-lg-1'></div>
        <div className='col-lg-4'>
          <div className='border p-3 rounded shadow'>
            <h1 className='text-primary'>Cart Summary</h1>
            <h4 className='mt-3'>Total Products <span>{cartArray.length}</span></h4>
            <h4>Total: <span className='text-danger fw-bolder fs-2'>{total}</span></h4>
            <div className='d-grid mt-5'>
              {/* Checkout means cart empty aavanam */}
              <button onClick={handleCart}  className='btn btn-success rounded'>Check Out</button>
            </div>

          </div>

        </div>

      </div>
      :<div className='w-100 d-flex flex-column justify-content-center align-items-center'>
            <img style={{width:'400px'}} src="https://i.giphy.com/media/fscIxPfKjPyShbwUS5/giphy.webp" alt="" />
            <p className='text-secondary fw-bolder fs-4'>Your wishlist is empty</p>
            <Link style={{textDecoration:'none'}} className='btn btn-success rounded mt-3' to={'/'}>Back to Home</Link>
            </div>
           
    }
    </div>
  )
}

export default Cart
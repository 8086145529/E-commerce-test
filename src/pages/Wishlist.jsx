import React from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { removeFromWishlist } from '../redux/slice/wishlistSlice'
import { addToCart } from '../redux/slice/cartSlice'

function Wishlist() {
  const wishlistArray = useSelector((state)=>state.wishlistReducer) // Header componentile " const wishlist = useSelector((state)=>state.wishlistReducer) " ee same arrayine variable name maatti koduthath aan ith.
  const dispatch = useDispatch()
  const handleWishlistCart = (product)=>{
    dispatch(addToCart(product))
    dispatch(removeFromWishlist(product.id))
  }
  return (
   <div>
      <Row className='ms-5' style={{marginTop:'100px'}}>
      {/* sm={12} md={6} lg={4} xl={3} means medium sizeil 6/12 = 1/2 i.e half portion of the available space eduthitt ee oru column display cheyum.largeil 4/12 = 1/3 eduthitt ee oru column display aavum.i.e 4 columns indenkil 3 column oru rowilum remaining 1 column next rowilum undayirikum  */}
      {/* Ivide nammal conditional rendering kodukkunath,Home componentile pole thanne aanekilum,wishlistArrayine base cheythittan nammal ivide rendering cheyunnath.ee arrayil nammal Home componentile ethoke cardsile(Each product from the data array) wishlist buttone aano click cheythath,aa cards (products) mathram store cheythittula stateil ninnum undakiya array aan wishlistArray */}
           { 
           wishlistArray?.length>0?wishlistArray?.map((product,index)=>( // ippo arrayude lengthinod equal aayittula number of cards display aavum.without
             <Col key={index} className='mb-5' sm={12} md={6} lg={4} xl={3}>
             <Card className='shadow rounded' style={{ width: '18rem',height:'29rem' }}>
             <Card.Img height={'200px'}  variant="top" src={product.image} />
             <Card.Body>
               <Card.Title>{product?.title}</Card.Title>
               <Card.Text>
                <p>{product?.description.slice(0,55)}...</p>
                <h5>${product.price}</h5>
               </Card.Text>
             <div className='d-flex justify-content-between'>  
               <Button onClick={()=>dispatch(removeFromWishlist(product.id))} className='btn btn-light'>
                 <i className='fa-solid fa-trash text-danger fa-2x'></i>
               </Button>
               <Button onClick={handleWishlistCart} className='btn btn-light'>
                 <i className='fa-solid fa-cart-plus text-success fa-2x'></i>
               </Button>
               </div>
             </Card.Body>
           </Card>
             </Col>
           )):<div className='w-100 d-flex flex-column justify-content-center align-items-center'>
            <img style={{width:'400px'}} src="https://i.giphy.com/media/fscIxPfKjPyShbwUS5/giphy.webp" alt="" />
            <p className='text-secondary fw-bolder fs-4'>Your wishlist is empty</p>
            <Link style={{textDecoration:'none'}} className='btn btn-success rounded mt-3' to={'/'}>Back to Home</Link>
            </div>
           
            }
          </Row>
   </div>
  )
}

export default Wishlist
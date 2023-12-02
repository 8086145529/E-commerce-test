import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { addToWishlist } from '../redux/slice/wishlistSlice'
import { addToCart } from '../redux/slice/cartSlice'


function Home() {
    const [searchTerm, setSearchTerm] = useState("")
    const [data, setData] = useState([])
    const dispatch = useDispatch()
    useEffect(() => {
        axios.get("https://fakestoreapi.com/products")// In this kind of api calling for a specific id we need to give a '/' in the url inorder to add the id in the url.OR use `http://localhost:4000/users/${id}` 
            .then(res => { setData(res.data) })// responseinte i.e res inte data enna keyil aan sherikum json serveril ninnumula array ullath.ath nammal .then(res=>console.log(res)) vech resine console cheyth nokkiyal kittum

            .catch(err => { console.log(err) })
    }, [])
    return (
        <Row className='ms-5' style={{ marginTop: '100px' }}>
            {/* sm={12} md={6} lg={4} xl={3} means medium sizeil 6/12 = 1/2 i.e half portion of the available space eduthitt ee oru column display cheyum.largeil 4/12 = 1/3 eduthitt ee oru column display aavum.i.e 4 columns indenkil 3 column oru rowilum remaining 1 column next rowilum undayirikum  */}
            {/* data is an array of objects(products).where each product is an object */}
            {/* Ee data enna arrayine base cheythitt venam Rowile Column and it's contents display aavan  */}

            {/* Search bar */}
            <div>
                <input placeholder='Search product name' className='form-control w-25 mb-5' onChange={e => setSearchTerm(e.target.value)} type="text" />
            </div>
            {
                data?.length>0?data.filter((product) => {
                    if (searchTerm == "") {
                        return product
                    } else if (product.title.toLowerCase().includes(searchTerm.toLowerCase())) {
                        return product
                    }
                }).map((product, index) => ( // ippo arrayude lengthinod equal aayittula number of cards display aavum.without
                    <Col key={index} className='mb-5' sm={12} md={6} lg={4} xl={3}>
                        <Card className='shadow rounded' style={{ width: 'auto', height: '30rem' }}>
                            <Card.Img height={'200px'} variant="top" src={product.image} />
                            <Card.Body style={{ height: '20rem' }}>
                                <Card.Title style={{ height: '70px' }}>{product?.title}</Card.Title>
                                <Card.Text>
                                    <p >{product?.description.slice(0, 55)}...</p>
                                    <h5 style={{ height: '30px' }}>${product.price}</h5>
                                </Card.Text>
                                <div className='d-flex justify-content-between'>
                                    
                                    <Button onClick={()=>dispatch(addToWishlist(product))} className='btn btn-dark'>
                                        <i className='fa-solid fa-heart text-danger fa-2x'></i>
                                    </Button>
                                   
                                    <Button  onClick={()=>dispatch(addToCart(product))} className='btn btn-light'>
                                        <i className='fa-solid fa-cart-plus text-success fa-2x'></i>
                                    </Button>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                )) : <p className='text-danger fw-bolder fs-4'>Nothing to display!!!</p>

            }
        </Row>

    )
}

export default Home
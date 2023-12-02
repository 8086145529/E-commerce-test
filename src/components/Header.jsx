import React from 'react'
import { Badge } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'



function Header() {
    const wishlist = useSelector((state)=>state.wishlistReducer)//ee wishlist arrayil nammal Home componentile ethoke cardsile(Each product from the data array) wishlist buttone aano click cheythath,aa cards (products) mathram store cheythittula stateil ninnum undakiya array aan ith.
  const cart = useSelector((state)=>state.cartReducer)
  return (
    // <div>Header</div>
    <Navbar style={{zIndex:"1",height:'50px'}} expand="lg" className="bg-primary position-fixed top-0 w-100 mb-5 ">
    <Container>
      <Navbar.Brand ><Link to={"/"} style={{textDecoration:"none",color:'black',fontWeight:'bold'}}>E-Cart</Link></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <Nav.Link><Link to={"/wishlist"} className='d-flex align-items-center' style={{textDecoration:"none",color:'black',fontWeight:'bold'}}> Wishlist
          <i className='fa-solid fa-heart text-danger me-2'></i>
          <Badge bg="dark">{wishlist.length}</Badge>
          </Link></Nav.Link>
          <Nav.Link ><Link to={"/cart"} className='d-flex align-items-center' style={{textDecoration:"none",color:'black',fontWeight:'bold'}}> Cart
          <i className='fa-solid fa-cart-shopping text-warning me-2'></i>
          <Badge bg="dark">{cart.length}</Badge>
          </Link></Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default Header
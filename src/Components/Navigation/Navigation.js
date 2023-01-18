import React from 'react'
import Nav from 'react-bootstrap/Nav';
import "./Navigation.css"
import logo from '../../images/technology.png'
import LabelImportantIcon from '@mui/icons-material/LabelImportant';
import WifiCalling3Icon from '@mui/icons-material/WifiCalling3';

export default function Navigation() {
  return (
    <div>
      <div className='d-flex container'>
        <span className='text-theme py-1'><LabelImportantIcon/> support.ran@gmail.com</span>
        <span className='ms-auto text-theme py-1'><WifiCalling3Icon/> +8801799666555</span>
      </div>
      <div className='bg-theme  d-flex '> 
      <Nav className="container my-auto" activeKey="/home">
      <Nav.Item className=' d-flex'>
        <img src={logo} width="60px" height="60px" alt="" className='rounded-3 my-auto'/>
        <Nav.Link href="/home" className='text-light me-5 my-auto brand-name'>RAN</Nav.Link>
        </Nav.Item>
        <Nav.Item className='d-flex'>
          <Nav.Link href="/whoweare" eventKey="link-2" className='text-light my-auto '>WHO WE ARE</Nav.Link>
        </Nav.Item>
        <Nav.Item className=' d-flex'>
          <Nav.Link href="/whatwedo" className='text-light my-auto ' id="wed">WHAT WE DO</Nav.Link>
        </Nav.Item>
         <Nav.Item className=' d-flex'>
          <Nav.Link href="howweworks" eventKey="link-1" className='text-light my-auto '>HOW WE WORKS</Nav.Link>
        </Nav.Item>
       
         {/*<Nav.Item className=' d-flex'>
          <Nav.Link eventKey="" className='text-light my-auto'>
            Downlaod
          </Nav.Link>
        </Nav.Item> */}
        <Nav.Item className=' d-flex'>
          <Nav.Link href="/aboutran" className='text-light my-auto '>ABOUT RAN</Nav.Link>
        </Nav.Item>
        <Nav.Item className=' d-flex'>
          <Nav.Link href="/contactus" className='text-light my-auto '>CONTACT</Nav.Link>
        </Nav.Item>

        <Nav.Item className='ms-auto d-flex'>
          <Nav.Link href="/login" className='text-light my-auto'>LogIn</Nav.Link>
        </Nav.Item>
        <Nav.Item className='d-flex'>
          <Nav.Link href="/signup" className='text-light my-auto'><button className='btn btn-outline-light py-auto'>SignIn</button></Nav.Link>
        </Nav.Item>
      </Nav>
      </div>
    </div>
  )
}

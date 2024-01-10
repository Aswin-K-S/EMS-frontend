import React from 'react'
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand
} from 'mdb-react-ui-kit';

import './Header.css'

function Header() {
  return (
    <div>
      <MDBNavbar className='Navbar' light >
        <MDBContainer fluid>
          <MDBNavbarBrand href='/'>
          <i class="fa-solid fa-users m-2 fs-3" ></i>
            <span style={{fontSize:'30px',fontWeight:'600'}}>EMS</span>
          </MDBNavbarBrand>
        </MDBContainer>
      </MDBNavbar>
    </div>
  )
}

export default Header
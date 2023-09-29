import React from 'react'
import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    NavbarMenuToggle,
    NavbarMenu,
    NavbarMenuItem,
    Link,
    Button,
} from "@nextui-org/react";
import './Navbar.scss';


const NavbarPage = () => {
  return (
    <Navbar className='nav'>
        <NavbarBrand>
            <p className='title'>WRP</p>
        </NavbarBrand>
        <NavbarContent className='content'>
            <NavbarItem className='items'>
                <Link className='link' href='/'>
                    Home
                </Link>
            </NavbarItem>
            <NavbarItem>
                <Link className='link' href='/'>
                    Contact
                </Link>
            </NavbarItem>
            <NavbarItem>
                <Link className='link' href='/'>
                    About
                </Link>
            </NavbarItem>
        </NavbarContent>
    </Navbar>
  )
}

export default NavbarPage
import React, { Component } from 'react';
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem,
    DropdownToggle, DropdownMenu, DropdownItem, UncontrolledDropdown
     } from 'reactstrap';
    import { NavLink } from 'react-router-dom';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isNavOpen: false,
        };
        this.toggleNav = this.toggleNav.bind(this);
   
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    render() {
        return (
            <>  {/* website navbar */}
                <Navbar light color='white' expand='md'>
                    <div className='container-fluid'>
                        <NavbarBrand className='mr-auto' href='/'>
                        <img src='/assets/images/logo2.png' height='50' width='51px'
                            alt='Shirleys Studio logo' 
                        />  <span className='navbrand pl-3'>Shirleys Art Studio</span>
                        </NavbarBrand>
                        <NavbarToggler onClick={this.toggleNav} />
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar className='justify-content-center ml-auto'>
                                <NavItem>
                                    <NavLink className='nav-link' to='/'>
                                        <span className='font-two'>Home</span>
                                    </NavLink>
                                </NavItem>
                                <UncontrolledDropdown nav>
                                    <DropdownToggle nav className='font-two'>Gallery<span className='fa fa-chevron-down ml-2'></span></DropdownToggle>
                                    <DropdownMenu className='drop-menu mt-2' top>
                                        <DropdownItem className='drop-item'>
                                            <NavLink to='/gallery' className='font-two py-2'>All works</NavLink>
                                        </DropdownItem>
                                        <DropdownItem className='drop-item'>
                                            <NavLink to='/gallery/available' className='font-two'>Available</NavLink>
                                        </DropdownItem>
                                        <DropdownItem className='drop-item'>
                                            <NavLink to='/gallery/sold' className='font-two py-2'>Sold</NavLink>
                                        </DropdownItem>
                                    </DropdownMenu>
                                </UncontrolledDropdown>
                            </Nav>
                            {/* dropdown nav-link - about */}
                            <Nav navbar className='ml-auto'>
                                <NavItem>
                                    <NavLink className='nav-link' to='/about'>
                                        <span className='font-two'>About</span>
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className='nav-link' to='/contact'>
                                       <span className='font-two'>Contact</span>
                                    </NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>
           

            </>
        );
    }
}

export default Header;
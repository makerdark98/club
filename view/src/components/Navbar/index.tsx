import React from 'react';
import './Navbar.css';
import NavbarMenuItem from './item';
import { Menu, MenuItem } from "../Model";
import IconMenu from 'material-ui/IconMenu';
interface Props {
    menu: Menu
}

const Navbar: React.FC<Props> = ({ menu }:Props) => {
  return <div />;
};

export default Navbar;

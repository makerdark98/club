import React from "react";
import { MenuItem } from "../Model";

interface Props {
    item: MenuItem
}

const NavbarMenuItem : React.FC<Props> = ({ item }:Props) => {
    return (<a className="Item" href={item.href}>
        {item.title}
    </a>);
};

export default NavbarMenuItem;
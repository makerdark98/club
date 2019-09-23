import React, { CSSProperties } from "react";
import { MenuItem } from "../Model";

const itemStyle: CSSProperties = {
    display: "block"
};

interface Props {
    item: MenuItem
}

const SidebarMenuItem : React.FC<Props> = ({ item }:Props) => {
    return (<a className="Item" href={item.href} style={itemStyle}>
        {item.title}
    </a>);
}
export default SidebarMenuItem;

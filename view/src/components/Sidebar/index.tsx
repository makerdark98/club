import React from 'react';
import { Menu, MenuItem } from '../Model';
import SidebarMenuItem from './item';
interface Props {
    menu: Menu
}

const Sidebar : React.FC<Props> = ({ menu }:Props) => {
    return (<div className="Sidebar">Sidebar
        {menu.map((item : MenuItem, idx : number) =>  <SidebarMenuItem key={idx} item={item}/>)}
    </div>);
};

export default Sidebar;

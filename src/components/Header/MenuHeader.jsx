import React from 'react';

const MenuHeader = (props) => {
    return (
        <a href="#0" className="flex items-center">
            <img src={props.icon} alt="" />
            &nbsp; {props.menu}
        </a>
    );
};

export default MenuHeader;

import React from 'react';
import Dragicon from '../../image/drag-outlined.svg';

const ListToolMenu = (props) => {
    return (
        <button className="flex justify-between items-center hover:bg-yellow-light w-full px-4 py-2 rounded-md border border-gray-2 hover:border-yellow bg-opacity-30 mb-2 text-sm">
            <div className="flex items-center space-x-3">
                <img src={props.icon} alt="" />
                <h1 className="text-left">{props.menu}</h1>
            </div>
            <img src={Dragicon} alt="" />
        </button>
    );
};

export default ListToolMenu;

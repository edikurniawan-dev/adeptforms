import React, { useState } from 'react';

const Menu = (props) => {
    const [bgColor, setBgColor] = useState(false);

    return (
        <li
            onMouseEnter={() => setBgColor(true)}
            onMouseLeave={() => setBgColor(false)}
            className="">
            <a href="#0" className="flex w-20 h-16">
                <div
                    className={
                        bgColor === false
                            ? 'w-3 h-full'
                            : 'w-3 h-full bg-yellow'
                    }></div>
                <div
                    href="#0"
                    className={
                        bgColor === false
                            ? 'flex justify-center items-center w-full'
                            : 'flex justify-center items-center w-full bg-yellow-light bg-opacity-30'
                    }>
                    <div className="">
                        <img src={props.icon} alt="" />
                    </div>
                </div>
            </a>
        </li>
    );
};

export default Menu;

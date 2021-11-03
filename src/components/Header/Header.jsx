import React from 'react';
import MenuHeader from './MenuHeader';

import Logo from '../../image/logo.png';
import Details from '../../image/details.svg';
import Refresh from '../../image/refresh.svg';
import Profile from '../../image/profile.svg';
import Balance from '../../image/balance.svg';
import Message from '../../image/message.svg';
import Issue from '../../image/issue.svg';
import Setting from '../../image/setting.svg';
import Logout from '../../image/logout.svg';

const Header = () => {
    return (
        <div className="flex justify-between items-center h-28">
            <div className="flex items-center space-x-10 2xl:space-x-14">
                <a href="/" className="">
                    <img src={Logo} alt="" />
                </a>
                <a href="#0" className="">
                    <img src={Details} alt="" />
                </a>
                <a href="#0" className="">
                    <img src={Refresh} alt="" />
                </a>
            </div>
            <div className="flex items-center space-x-10 2xl:space-x-14 pr-5 2xl:pr-10">
                <MenuHeader icon={Profile} menu="My Profile" />
                <MenuHeader icon={Balance} menu="My Balance" />
                <MenuHeader icon={Message} menu="Messages" />
                <MenuHeader icon={Issue} menu="Issue" />
                <MenuHeader icon={Setting} menu="Settings" />
                <MenuHeader icon={Logout} menu="Logout" />
            </div>
        </div>
    );
};

export default Header;

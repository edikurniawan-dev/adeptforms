import React from 'react';
import Menu from './Menu';

import User from '../../image/left-menu/user.png';
import Home from '../../image/left-menu/home.svg';
import Document from '../../image/left-menu/document.svg';
import Folder from '../../image/left-menu/folder.svg';
import Record from '../../image/left-menu/record.svg';
import Contract from '../../image/left-menu/contract.svg';
import Report from '../../image/left-menu/report.svg';
import PieChart from '../../image/left-menu/pie-chart.svg';
import Calendar from '../../image/left-menu/calendar.svg';
import DocumentView from '../../image/left-menu/document-view.svg';
import Book from '../../image/left-menu/book.svg';
import ArchiveBox from '../../image/left-menu/archive-box.svg';
import RoundSensors from '../../image/left-menu/round-sensors.svg';
import BookInformation from '../../image/left-menu/book-information.svg';
import People from '../../image/left-menu/people.svg';
import PaperPlane from '../../image/left-menu/paper-plane.svg';

const LeftMenu = () => {
    return (
        <div className="bg-white    ">
            <ul className="bg-white w-20">
                <li className="flex justify-center items-center w-full  pt-10 pb-4">
                    <a href="#0" className="">
                        <img src={User} alt="" />
                    </a>
                </li>
                <Menu icon={Home} />
                <Menu icon={Document} />
                <Menu icon={Folder} />
                <Menu icon={Record} />
                <Menu icon={Contract} />
                <Menu icon={Report} />
                <Menu icon={PieChart} />
                <Menu icon={Calendar} />
                <Menu icon={DocumentView} />
                <Menu icon={Book} />
                <Menu icon={ArchiveBox} />
                <Menu icon={RoundSensors} />
                <Menu icon={BookInformation} />
                <Menu icon={People} />
                <Menu icon={PaperPlane} />
            </ul>
        </div>
    );
};

export default LeftMenu;

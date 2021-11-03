import React from 'react';
import Menu from './Menu';

import User from '../../image/user.png';
import Home from '../../image/home.svg';
import Document from '../../image/document.svg';
import Folder from '../../image/folder.svg';
import Record from '../../image/record.svg';
import Contract from '../../image/contract.svg';
import Report from '../../image/report.svg';
import PieChart from '../../image/pie-chart.svg';
import Calendar from '../../image/calendar.svg';
import DocumentView from '../../image/document-view.svg';
import Book from '../../image/book.svg';
import ArchiveBox from '../../image/archive-box.svg';
import RoundSensors from '../../image/round-sensors.svg';
import BookInformation from '../../image/book-information.svg';
import People from '../../image/people.svg';
import PaperPlane from '../../image/paper-plane.svg';

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

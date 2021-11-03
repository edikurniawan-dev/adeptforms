import React from 'react';
import ListToolMenu from './ListToolMenu';
import DoubleRightIcon from '../../image/small-double-right.svg';
import SearchIcon from '../../image/search.svg';
import BottomIcon from '../../image/icon-bottom-chevron.svg';
import TableLayoutIcon from '../../image/table-layout.svg';
import BlankSpaceIcon from '../../image/blank-space.svg';
import CaptionIcon from '../../image/title.svg';
import TitleIcon from '../../image/caption.svg';
import HintsIcon from '../../image/hints.svg';
import GeolocationIcon from '../../image/geolocation.svg';
import ColorPickerIcon from '../../image/color-picker.svg';
import AttachmentsIcon from '../../image/attachments.svg';
import SignatureIcon from '../../image/signature.svg';
import PlusIcon from '../../image/plus.svg';

import User1 from '../../image/user1.png';
import User2 from '../../image/user2.png';
import User3 from '../../image/user3.png';

const ToolsMenu = () => {
    return (
        <div className="w-30 space-y-6">
            {/* add fields */}
            <div className="bg-white p-4 rounded-lg shadow-md space-y-8">
                <div className="flex items-center space-x-4 ">
                    <button className="border-2 rounded-full p-1 border-gray-2">
                        <img src={DoubleRightIcon} alt="" />
                    </button>
                    <h1 className="font-medium">Add Fields</h1>
                </div>
                <div className="flex items-center space-x-4 rounded-lg border-gray-2 border">
                    <button>
                        <img src={SearchIcon} alt="" className="ml-3" />
                    </button>
                    <input
                        className="w-full rounded-lg h-10 focus:outline-none"
                        type="text"
                        placeholder="Search Components"
                    />
                </div>

                <div className="">
                    <div className="space-y-4 mb-4">
                        <a
                            href="#0"
                            className="flex justify-between items-center mx-5">
                            <h1 className="font-medium text-sm">
                                Basic Components
                            </h1>
                            <div className="">
                                <img src={BottomIcon} alt="" />
                            </div>
                        </a>
                        <hr className="border-gray-2" />
                    </div>
                    <div className="space-y-4 mb-4">
                        <a
                            href="#0"
                            className="flex justify-between items-center mx-5">
                            <h1 className="font-medium text-sm">
                                Date and Time Components
                            </h1>
                            <div className="">
                                <img src={BottomIcon} alt="" />
                            </div>
                        </a>
                        <hr className="border-gray-2" />
                    </div>
                    <div className="space-y-4 mb-4">
                        <a
                            href="#0"
                            className="flex justify-between items-center mx-5">
                            <h1 className="font-medium text-sm">
                                Miscellaneous Components
                            </h1>
                            <div className="transform rotate-180">
                                <img src={BottomIcon} alt="" />
                            </div>
                        </a>
                        <hr className="border-gray-2" />
                    </div>
                    <ListToolMenu icon={TableLayoutIcon} menu="Table Layout" />
                    <ListToolMenu icon={BlankSpaceIcon} menu="Blank Space" />
                    <ListToolMenu icon={TitleIcon} menu="Title" />
                    <ListToolMenu icon={CaptionIcon} menu="Caption" />
                    <ListToolMenu icon={HintsIcon} menu="Hints" />
                    <ListToolMenu icon={GeolocationIcon} menu="Geolocation" />
                    <ListToolMenu icon={ColorPickerIcon} menu="Color Picker" />
                    <ListToolMenu icon={AttachmentsIcon} menu="Attachments" />
                    <ListToolMenu icon={SignatureIcon} menu="Signature" />
                </div>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-md space-y-5">
                <div className="flex items-center space-x-4 ">
                    <div className="border-2 rounded-full p-1 border-gray-2">
                        <img src={DoubleRightIcon} alt="" />
                    </div>
                    <h1 className="font-medium">Form Asignee</h1>
                </div>
                <div className="flex justify-center space-x-3">
                    <div className="border-2 border-yellow rounded-full">
                        <img src={User1} alt="" />
                    </div>
                    <div className="">
                        <img src={User2} alt="" />
                    </div>
                    <div className="">
                        <img src={User3} alt="" />
                    </div>
                    <button className="flex justify-center items-center border border-dashed border-yellow rounded-full w-9">
                        <img src={PlusIcon} alt="" />
                    </button>
                </div>
                <table className="text-sm w-full">
                    <tbody>
                        <tr>
                            <td className="text-gray-3 py-1">Template Name</td>
                            <td>Leave Form</td>
                        </tr>
                        <tr>
                            <td className="text-gray-3 py-1">
                                Template Author
                            </td>
                            <td>Admin RIta</td>
                        </tr>
                        <tr>
                            <td className="text-gray-3 py-1">Workflow</td>
                            <td>Leave Approval</td>
                        </tr>
                        <tr>
                            <td className="text-gray-3 py-1">Created</td>
                            <td>Februari 11, 2021</td>
                        </tr>
                        <tr>
                            <td className="text-gray-3 py-1">Last Modified</td>
                            <td>March 18, 2021</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ToolsMenu;

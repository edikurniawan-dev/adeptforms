import React from 'react';
import ListToolMenu from './ListToolMenu';
import DoubleRightIcon from '../../image/small-double-right.svg';
import SearchIcon from '../../image/search.svg';
import BottomIcon from '../../image/icon-bottom-chevron.svg';

// basic components icon
import CheckBoxIcon from '../../image/basic-components/checkbox.svg';
import DropDownIcon from '../../image/basic-components/dropdown.svg';
import ImageIcon from '../../image/basic-components/image.svg';
import RadioButtonIcon from '../../image/basic-components/radio-button.svg';
import InputTextIcon from '../../image/basic-components/input-text.svg';
import NumberIcon from '../../image/basic-components/number.svg';
import VideoIcon from '../../image/basic-components/video.svg';

// date and time components icon
import CalendarIcon from '../../image/date-and-time-components/calendar.svg';
import DateTimeIcon from '../../image/date-and-time-components/date-and-time.svg';
import DateBirthIcon from '../../image/date-and-time-components/date-of-birth.svg';
import MonthlyCalendarIcon from '../../image/date-and-time-components/monthly-calendar.svg';
import TimeIcon from '../../image/date-and-time-components/time.svg';

// miscellaneous components icons
import TableLayoutIcon from '../../image/miscellaneous-components/table-layout.svg';
import BlankSpaceIcon from '../../image/miscellaneous-components/blank-space.svg';
import CaptionIcon from '../../image/miscellaneous-components/title.svg';
import TitleIcon from '../../image/miscellaneous-components/caption.svg';
import HintsIcon from '../../image/miscellaneous-components/hints.svg';
import GeolocationIcon from '../../image/miscellaneous-components/geolocation.svg';
import ColorPickerIcon from '../../image/miscellaneous-components/color-picker.svg';
import AttachmentsIcon from '../../image/miscellaneous-components/attachments.svg';
import SignatureIcon from '../../image/miscellaneous-components/signature.svg';
import PlusIcon from '../../image/plus.svg';

import User1 from '../../image/user1.png';
import User2 from '../../image/user2.png';
import User3 from '../../image/user3.png';

import useVisibility from '../hooks/useVisibility';

const ToolsMenu = () => {
    const [listMenuBasic, toogleVisibilityMenuBasic] = useVisibility(
        <div className="mb-10">
            <ListToolMenu icon={InputTextIcon} menu="Short Text" />
            <ListToolMenu icon={InputTextIcon} menu="Long Text" />
            <ListToolMenu icon={NumberIcon} menu="Number" />
            <ListToolMenu icon={NumberIcon} menu="Telephone Number" />
            <ListToolMenu icon={ImageIcon} menu="Image Upload" />
            <ListToolMenu icon={VideoIcon} menu="Video Upload" />
            <ListToolMenu icon={CheckBoxIcon} menu="Checkboxes" />
            <ListToolMenu icon={RadioButtonIcon} menu="Radio Buttons" />
            <ListToolMenu icon={DropDownIcon} menu="Drop-down Menus" />
        </div>,
        true,
    );

    const [listMenuDateTime, toogleVisibilityMenuDateTime] = useVisibility(
        <div className="mb-10">
            <ListToolMenu icon={CalendarIcon} menu="Today's Date" />
            <ListToolMenu icon={CalendarIcon} menu="Date Calendar" />
            <ListToolMenu icon={DateTimeIcon} menu="Date and Time Calendar" />
            <ListToolMenu icon={DateBirthIcon} menu="Date of Birth" />
            <ListToolMenu icon={MonthlyCalendarIcon} menu="Monthly Calendar" />
            <ListToolMenu icon={TimeIcon} menu="Time" />
        </div>,
        false,
    );

    const [listMenuMiscellaneous, toogleVisibilityMenuMiscellaneous] =
        useVisibility(
            <div className="mb-10">
                <ListToolMenu icon={TableLayoutIcon} menu="Table Layout" />
                <ListToolMenu icon={BlankSpaceIcon} menu="Blank Space" />
                <ListToolMenu icon={TitleIcon} menu="Title" />
                <ListToolMenu icon={CaptionIcon} menu="Caption" />
                <ListToolMenu icon={HintsIcon} menu="Hints" />
                <ListToolMenu icon={GeolocationIcon} menu="Geolocation" />
                <ListToolMenu icon={ColorPickerIcon} menu="Color Picker" />
                <ListToolMenu icon={AttachmentsIcon} menu="Attachments" />
                <ListToolMenu icon={SignatureIcon} menu="Signature" />
            </div>,
            false,
        );

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
                        className="w-full rounded-lg h-10 focus:outline-none text-sm"
                        type="text"
                        placeholder="Search Components"
                    />
                </div>

                <div className="">
                    <div className="space-y-4 mb-4">
                        <button
                            className="w-full flex justify-between items-center px-5"
                            onClick={toogleVisibilityMenuBasic}>
                            <p className="font-medium text-sm text-left">
                                Basic Components
                            </p>
                            <img
                                src={BottomIcon}
                                alt=""
                                className={
                                    listMenuBasic === null
                                        ? ''
                                        : 'transform rotate-180'
                                }
                            />
                        </button>
                        <hr className="border-gray-2" />
                    </div>
                    {listMenuBasic}

                    <div className="space-y-4 mb-4">
                        <button
                            className="w-full flex justify-between items-center px-5"
                            onClick={toogleVisibilityMenuDateTime}>
                            <p className="font-medium text-sm text-left">
                                Date and Time Components
                            </p>
                            <img
                                src={BottomIcon}
                                alt=""
                                className={
                                    listMenuDateTime === null
                                        ? ''
                                        : 'transform rotate-180'
                                }
                            />
                        </button>
                        <hr className="border-gray-2" />
                    </div>
                    {listMenuDateTime}

                    <div className="space-y-4 mb-4">
                        <button
                            className="w-full flex justify-between items-center px-5"
                            onClick={toogleVisibilityMenuMiscellaneous}>
                            <p className="font-medium text-sm text-left">
                                Miscellaneous Components
                            </p>
                            <img
                                src={BottomIcon}
                                alt=""
                                className={
                                    listMenuMiscellaneous === null
                                        ? ''
                                        : 'transform rotate-180'
                                }
                            />
                        </button>
                        <hr className="border-gray-2" />
                    </div>
                    {listMenuMiscellaneous}
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
                    <tbody className="align-top">
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

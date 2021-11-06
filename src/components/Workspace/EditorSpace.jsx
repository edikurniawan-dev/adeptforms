import { Menu, Transition } from '@headlessui/react';
import { Fragment } from 'react';

import HeaderImage from '../../image/header.png';
import BottomIcon from '../../image/icon-bottom-chevron.svg';
import Bold from '../../image/bold.svg';
import Italic from '../../image/italic.svg';
import Underline from '../../image/underline.svg';
import AlignLeft from '../../image/alignleft.svg';
import AlignCenter from '../../image/aligncenter.svg';
import AlignRight from '../../image/alignright.svg';
import Link from '../../image/link.svg';
import Star from '../../image/star.svg';
import Paper from '../../image/paper.svg';
import Image from '../../image/image.svg';
import TreeDots from '../../image/treedots.svg';
import Plus from '../../image/plusgray.svg';
import Minus from '../../image/minusgray.svg';
import Input from '../../image/input.svg';
import Dropdown from '../../image/dropdown.svg';
import Undo from '../../image/undo.svg';
import Redo from '../../image/redo.svg';
import Light from '../../image/light.svg';

// dropdown icon component
import UploadImageIcon from '../../image/dropdown-menu/upload-image.svg';
import DeleteComponentIcon from '../../image/dropdown-menu/delete-component.svg';
import EditLineIcon from '../../image/dropdown-menu/edit-line.svg';
import AddFieldIcon from '../../image/dropdown-menu/add-field.svg';

const EditorSpace = () => {
    return (
        <div className="w-full flex flex-col space-y-10">
            <div className="relative w-full h-100 bg-white rounded-2xl shadow-lg">
                <div className="absolute left-0 top-0 w-full">
                    <img src={HeaderImage} alt="" className="w-full" />
                </div>
                <div className="relative py-4 px-4 2xl:px-8 bg-white bg-opacity-50 rounded-2xl flex items-center justify-between">
                    <div className="flex justify-between items-center bg-white h-9 w-32 2xl:w-44 rounded-lg p-2">
                        <h1>Nunito</h1>
                        <button className="">
                            <img src={BottomIcon} alt="" />
                        </button>
                    </div>
                    <div className="flex justify-between items-center bg-white h-9 w-28 2xl:w-32 rounded-lg px-4">
                        <button className="">
                            <img src={Minus} alt="" />
                        </button>
                        <hr className="bg-gray-2 border border-gray-2 h-full" />
                        <h1>11</h1>
                        <hr className="bg-gray-2 border border-gray-2 h-full" />
                        <button className="">
                            <img src={Plus} alt="" />
                        </button>
                    </div>
                    <div className="">
                        <img src={Bold} alt="" />
                    </div>
                    <div className="">
                        <img src={Italic} alt="" />
                    </div>
                    <div className="">
                        <img src={Underline} alt="" />
                    </div>
                    <div className="flex h-9">
                        <hr className="bg-gray-2 border border-gray-2 h-full" />
                    </div>
                    <div className="">
                        <img src={AlignLeft} alt="" />
                    </div>
                    <div className="">
                        <img src={AlignCenter} alt="" />
                    </div>
                    <div className="">
                        <img src={AlignRight} alt="" />
                    </div>
                    <div className="flex h-9">
                        <hr className="bg-gray-2 border border-gray-2 h-full" />
                    </div>
                    <div className="">
                        <img src={Link} alt="" />
                    </div>
                    <div className="">
                        <img src={Star} alt="" />
                    </div>
                    <div className="flex items-center">
                        <img src={Paper} alt="" />
                        <h1 className="text-gray-3">&nbsp;Edit Paper</h1>
                    </div>
                </div>

                <div className="relative mt-5 py-4 px-8 2xl:px-16 space-y-10">
                    <div className="flex items-center justify-between space-x-8">
                        <Menu
                            as="div"
                            className="relative flex justify-between text-left space-x-4 h-24 w-1/3 px-3 2xl:px-5 rounded-lg border border-gray-2 bg-gray">
                            <div className="flex items-center text-sm 2xl:text-base">
                                <img src={Image} alt="" />
                                <h1>&nbsp;Image Upload</h1>
                            </div>
                            <Menu.Button className="">
                                <img src={TreeDots} alt="" />
                            </Menu.Button>
                            <Transition
                                as={Fragment}
                                enter="transition ease-out duration-100"
                                enterFrom="transform opacity-0 scale-95"
                                enterTo="transform opacity-100 scale-100"
                                leave="transition ease-in duration-75"
                                leaveFrom="transform opacity-100 scale-100"
                                leaveTo="transform opacity-0 scale-95">
                                <Menu.Items className="absolute -right-52 2xl:-right-60 top-7 z-30 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-2xl shadow-lg focus:outline-none">
                                    <div className="px-6 2xl:px-8 py-6 space-y-5 text-sm 2xl:text-base">
                                        <Menu.Item>
                                            <button className="flex items-center">
                                                <img
                                                    src={UploadImageIcon}
                                                    alt=""
                                                />
                                                <h1 className="pl-3">
                                                    Upload an Image
                                                </h1>
                                            </button>
                                        </Menu.Item>
                                        <Menu.Item>
                                            <button className="flex items-center">
                                                <img
                                                    src={DeleteComponentIcon}
                                                    alt=""
                                                />
                                                <h1 className="pl-3">
                                                    Delete This Component
                                                </h1>
                                            </button>
                                        </Menu.Item>
                                    </div>
                                </Menu.Items>
                            </Transition>
                        </Menu>
                        <div className="flex flex-col justify-center items-center h-24 w-1/3 px-3 2xl:px-5 rounded-lg border border-dashed border-gray-2 text-sm 2xl:text-base">
                            <h1 className="font-medium">
                                Premier Transportation
                            </h1>
                            <h1>Charter Log</h1>
                        </div>
                        <div className="flex justify-between items-center space-x-4 h-24 w-1/3 px-5 rounded-lg border border-dashed border-gray-2 "></div>
                    </div>
                    <div className="relative">
                        <div className="absolute left-0 top-0 w-full">
                            <hr className="bg-gray-2 border border-gray-2" />
                        </div>
                        <div className="relative flex -top-5 justify-center">
                            <div className="bg-white border border-gray-2 rounded-full p-2">
                                <img src={Plus} alt="" className="h-5" />
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-between items-center space-x-8">
                        <div className="flex flex-col  w-1/2 space-y-2">
                            <h1 className="font-medium">Driver Name :</h1>
                            <Menu
                                as="div"
                                className="relative flex justify-between items-center bg-gray border border-gray-2 rounded-lg px-2 2xl:px-5 h-12">
                                <div className="flex items-center">
                                    <img src={Input} alt="" />
                                    <h1 className="pl-2 2xl:pl-4 text-yellow italic">
                                        Employee Name; Employee List
                                    </h1>
                                </div>
                                <Menu.Button className="">
                                    <img src={TreeDots} alt="" />
                                </Menu.Button>
                                <Transition
                                    as={Fragment}
                                    enter="transition ease-out duration-100"
                                    enterFrom="transform opacity-0 scale-95"
                                    enterTo="transform opacity-100 scale-100"
                                    leave="transition ease-in duration-75"
                                    leaveFrom="transform opacity-100 scale-100"
                                    leaveTo="transform opacity-0 scale-95">
                                    <Menu.Items className="absolute -right-64 2xl:-right-72 top-0 z-30 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-2xl shadow-lg focus:outline-none">
                                        <div className="px-6 2xl:px-8 py-6 space-y-5 text-sm 2xl:text-base">
                                            <Menu.Item>
                                                <button className="flex items-center">
                                                    <img
                                                        src={EditLineIcon}
                                                        alt=""
                                                    />
                                                    <h1 className="pl-3">
                                                        Edit Text Field
                                                        Propertis
                                                    </h1>
                                                </button>
                                            </Menu.Item>
                                            <Menu.Item>
                                                <Menu as="div" className="">
                                                    <Menu.Button className="flex items-center space-x-5">
                                                        <img
                                                            src={AddFieldIcon}
                                                            alt=""
                                                        />
                                                        <h1 className="">
                                                            Add Field In This
                                                            Section
                                                        </h1>
                                                        <img
                                                            src={BottomIcon}
                                                            alt=""
                                                            className="transform -rotate-90"
                                                        />
                                                    </Menu.Button>

                                                    <Transition
                                                        as={Fragment}
                                                        enter="transition ease-out duration-100"
                                                        enterFrom="transform opacity-0 scale-95"
                                                        enterTo="transform opacity-100 scale-100"
                                                        leave="transition ease-in duration-75"
                                                        leaveFrom="transform opacity-100 scale-100"
                                                        leaveTo="transform opacity-0 scale-95">
                                                        <Menu.Items className="absolute -right-40 2xl:-right-48 top-9 z-30 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-2xl shadow-lg focus:outline-none">
                                                            <div className="px-6 2xl:px-8 py-6 space-y-5 text-sm 2xl:text-base">
                                                                <Menu.Item>
                                                                    <button className="flex items-center">
                                                                        <h1 className="pl-3">
                                                                            To
                                                                            The
                                                                            Left
                                                                        </h1>
                                                                    </button>
                                                                </Menu.Item>
                                                                <Menu.Item>
                                                                    <button className="flex items-center">
                                                                        <h1 className="pl-3">
                                                                            To
                                                                            The
                                                                            Right
                                                                        </h1>
                                                                    </button>
                                                                </Menu.Item>
                                                                <Menu.Item>
                                                                    <button className="flex items-center">
                                                                        <h1 className="pl-3">
                                                                            Above
                                                                            This
                                                                            Field
                                                                        </h1>
                                                                    </button>
                                                                </Menu.Item>
                                                                <Menu.Item>
                                                                    <button className="flex items-center">
                                                                        <h1 className="pl-3">
                                                                            Below
                                                                            This
                                                                            Field
                                                                        </h1>
                                                                    </button>
                                                                </Menu.Item>
                                                            </div>
                                                        </Menu.Items>
                                                    </Transition>
                                                </Menu>
                                            </Menu.Item>
                                            <Menu.Item>
                                                <button className="flex items-center">
                                                    <img
                                                        src={
                                                            DeleteComponentIcon
                                                        }
                                                        alt=""
                                                    />
                                                    <h1 className="pl-3">
                                                        Delete This Component
                                                    </h1>
                                                </button>
                                            </Menu.Item>
                                        </div>
                                    </Menu.Items>
                                </Transition>
                            </Menu>
                        </div>
                        <div className="flex flex-col w-1/2 space-y-2">
                            <h1 className="font-medium">Coach Number :</h1>
                            <Menu
                                as="div"
                                className="relative flex justify-between items-center bg-gray border border-gray-2 rounded-lg px-2 2xl:px-5 h-12">
                                <div className="flex items-center">
                                    <img src={Dropdown} alt="" />
                                    <h1 className="pl-2 2xl:pl-4 text-yellow italic">
                                        Employee ID; Employee List
                                    </h1>
                                </div>
                                <div className="flex justify-between space-x-6">
                                    <img src={BottomIcon} alt="" />
                                    <Menu.Button className="">
                                        <img src={TreeDots} alt="" />
                                    </Menu.Button>
                                </div>
                                <Transition
                                    as={Fragment}
                                    enter="transition ease-out duration-100"
                                    enterFrom="transform opacity-0 scale-95"
                                    enterTo="transform opacity-100 scale-100"
                                    leave="transition ease-in duration-75"
                                    leaveFrom="transform opacity-100 scale-100"
                                    leaveTo="transform opacity-0 scale-95">
                                    <Menu.Items className="absolute -right-64 2xl:-right-72 top-0 z-30 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-2xl shadow-lg focus:outline-none">
                                        <div className="px-6 2xl:px-8 py-6 space-y-5 text-sm 2xl:text-base">
                                            <Menu.Item>
                                                <button className="flex items-center">
                                                    <img
                                                        src={EditLineIcon}
                                                        alt=""
                                                    />
                                                    <h1 className="pl-3">
                                                        Edit Text Field
                                                        Propertis
                                                    </h1>
                                                </button>
                                            </Menu.Item>
                                            <Menu.Item>
                                                <Menu as="div" className="">
                                                    <Menu.Button className="flex items-center space-x-5">
                                                        <img
                                                            src={AddFieldIcon}
                                                            alt=""
                                                        />
                                                        <h1 className="">
                                                            Add Field In This
                                                            Section
                                                        </h1>
                                                        <img
                                                            src={BottomIcon}
                                                            alt=""
                                                            className="transform -rotate-90"
                                                        />
                                                    </Menu.Button>

                                                    <Transition
                                                        as={Fragment}
                                                        enter="transition ease-out duration-100"
                                                        enterFrom="transform opacity-0 scale-95"
                                                        enterTo="transform opacity-100 scale-100"
                                                        leave="transition ease-in duration-75"
                                                        leaveFrom="transform opacity-100 scale-100"
                                                        leaveTo="transform opacity-0 scale-95">
                                                        <Menu.Items className="absolute -left-44 right-68 2xl:-left-52 2xl:right-76 top-9 z-30 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-2xl shadow-lg focus:outline-none">
                                                            <div className="px-6 2xl:px-8 py-6 space-y-5 text-sm 2xl:text-base">
                                                                <Menu.Item>
                                                                    <button className="flex items-center">
                                                                        <h1 className="pl-3">
                                                                            To
                                                                            The
                                                                            Left
                                                                        </h1>
                                                                    </button>
                                                                </Menu.Item>
                                                                <Menu.Item>
                                                                    <button className="flex items-center">
                                                                        <h1 className="pl-3">
                                                                            To
                                                                            The
                                                                            Right
                                                                        </h1>
                                                                    </button>
                                                                </Menu.Item>
                                                                <Menu.Item>
                                                                    <button className="flex items-center">
                                                                        <h1 className="pl-3">
                                                                            Above
                                                                            This
                                                                            Field
                                                                        </h1>
                                                                    </button>
                                                                </Menu.Item>
                                                                <Menu.Item>
                                                                    <button className="flex items-center">
                                                                        <h1 className="pl-3">
                                                                            Below
                                                                            This
                                                                            Field
                                                                        </h1>
                                                                    </button>
                                                                </Menu.Item>
                                                            </div>
                                                        </Menu.Items>
                                                    </Transition>
                                                </Menu>
                                            </Menu.Item>
                                            <Menu.Item>
                                                <button className="flex items-center">
                                                    <img
                                                        src={
                                                            DeleteComponentIcon
                                                        }
                                                        alt=""
                                                    />
                                                    <h1 className="pl-3">
                                                        Delete This Component
                                                    </h1>
                                                </button>
                                            </Menu.Item>
                                        </div>
                                    </Menu.Items>
                                </Transition>
                            </Menu>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col justify-center items-center space-y-4">
                <div className="flex space-x-5 justify-center items-center">
                    <button className="bg-white p-2 rounded-full border border-gray-2 shadow-lg">
                        <img src={Undo} alt="" />
                    </button>
                    <button className="bg-white p-2 rounded-full border border-gray-2 shadow-lg">
                        <img src={Redo} alt="" />
                    </button>
                    <div className="h-9 bg-white border border-gray-2 rounded-lg shadow-lg flex justify-center items-center py-2 px-4 space-x-4">
                        <h1>51%</h1>
                        <button className="">
                            <img src={BottomIcon} alt="" />
                        </button>
                    </div>
                    <button className="bg-white p-2 rounded-full border border-gray-2 shadow-lg">
                        <img src={Minus} alt="" className="w-4" />
                    </button>
                    <button className="bg-white p-2 rounded-full border border-gray-2 shadow-lg">
                        <img src={Plus} alt="" className="w-4" />
                    </button>
                </div>
                <div className="flex items-center space-x-3">
                    <img src={Light} alt="" />
                    <h1 className="text-sm">
                        Tips : Fill all the form field in blue box
                    </h1>
                </div>
            </div>
        </div>
    );
};

export default EditorSpace;

import React from 'react';

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

const EditorSpace = () => {
    return (
        <div className="w-full flex flex-col space-y-10">
            <div class="relative w-full h-full bg-white rounded-2xl shadow-lg">
                <div class="absolute left-0 top-0 w-full">
                    <img src={HeaderImage} alt="" className="w-full" />
                </div>
                <div class="relative py-4 px-8 bg-white bg-opacity-50 rounded-2xl flex items-center justify-between">
                    <div class="flex justify-between items-center bg-white h-9 w-44 rounded-lg p-2">
                        <h1>Nunito</h1>
                        <button className="">
                            <img src={BottomIcon} alt="" />
                        </button>
                    </div>
                    <div class="flex justify-between items-center bg-white h-9 w-32 rounded-lg px-4">
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

                <div class="relative mt-5 py-4 px-16 space-y-10">
                    <div className="flex items-center justify-between space-x-8">
                        <div className="flex justify-between items-center space-x-4 h-24 w-1/3 px-5 rounded-lg border border-gray-2 bg-gray">
                            <div className="flex items-center">
                                <img src={Image} alt="" />
                                <h1>&nbsp;Image Upload</h1>
                            </div>
                            <img src={TreeDots} alt="" />
                        </div>
                        <div className="flex flex-col justify-center items-center h-24 w-1/3 px-5 rounded-lg border border-dashed border-gray-2 ">
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
                            <div className="flex justify-between items-center bg-gray border border-gray-2 rounded-lg px-5 h-12">
                                <div className="flex items-center">
                                    <img src={Input} alt="" />
                                    <h1 className="pl-4 text-yellow italic">
                                        Employee Name; Employee List
                                    </h1>
                                </div>
                                <div className="">
                                    <img src={TreeDots} alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col w-1/2 space-y-2">
                            <h1 className="font-medium">Coach Number :</h1>
                            <div className="flex justify-between items-center bg-gray border border-gray-2 rounded-lg px-5 h-12">
                                <div className="flex items-center">
                                    <img src={Dropdown} alt="" />
                                    <h1 className="pl-4 text-yellow italic">
                                        Employee Name; Employee List
                                    </h1>
                                </div>
                                <div className="flex items-center space-x-5">
                                    <img src={BottomIcon} alt="" />

                                    <img src={TreeDots} alt="" />
                                </div>
                            </div>
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

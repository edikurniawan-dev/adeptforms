import React from 'react';
import Page from '../../image/pages.png';
import AddIcon from '../../image/icon-add.svg';

const Pages = () => {
    return (
        <div className="w-1/4 space-y-6 flex flex-wrap  content-between">
            <div className="space-y-6 w-full">
                <div className="flex justify-between">
                    <div className="flex justify-center items-center bg-yellow rounded-full w-8 h-8">
                        1
                    </div>
                    <img src={Page} alt="" className="w-32 2xl:w-48" />
                </div>
                <button className="border-2 border-dashed hover:border-solid border-yellow hover:bg-white w-full flex px-3 2xl:px-5 py-3 rounded-lg items-center space-x-2 2xl:space-x-5">
                    <img src={AddIcon} alt="" />
                    <h1 className="font-medium">Add More Pages</h1>
                </button>
            </div>
            <div className="">
                <h1 className="text-gray-3">
                    2021 &copy;
                    <span className="font-medium text-yellow">
                        {' '}
                        Adept Forms
                    </span>
                </h1>
            </div>
        </div>
    );
};

export default Pages;

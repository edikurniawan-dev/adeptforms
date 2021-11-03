import React from 'react';

import BackIcon from '../../image/back-fill.svg';
import EditIcon from '../../image/edit-line.svg';
import FolderIcon from '../../image/folder-open.svg';
import UploadIcon from '../../image/cloud-upload.svg';

const Title = () => {
    return (
        <div className="flex justify-between w-full h-32">
            <div className="flex items-center space-x-4">
                <button className="bg-white p-2 rounded-full border border-gray-2 shadow-md">
                    <img src={BackIcon} alt="" />
                </button>
                <h2 className="font-medium text-xl tracking-tight">
                    Charter Log
                </h2>
                <button className="">
                    <img src={EditIcon} alt="" />
                </button>
                <button className="">
                    <img src={FolderIcon} alt="" />
                </button>
                <p className="text-xs font-medium text-gray-3">
                    Templates - Draft - Charter Log
                </p>
            </div>
            <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                    <img src={UploadIcon} alt="" />
                    <p className="text-xs font-medium text-gray-3">Saving..</p>
                </div>
                <button className="w-32 py-3 bg-gradient-to-t from-white to-white hover:from-yellow hover:to-yellow-light border-2 hover:border-0 border-yellow rounded-lg shadow-md font-medium">
                    Save
                </button>
                <button className="w-32 py-3 bg-gradient-to-t from-yellow to-yellow-light hover:from-white hover:to-white hover:border-2 hover:border-yellow rounded-lg shadow-md font-medium">
                    Publish
                </button>
            </div>
        </div>
    );
};

export default Title;

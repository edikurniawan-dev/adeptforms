import React from 'react';

import BackIcon from '../../image/back-fill.svg';
import EditIcon from '../../image/edit-line.svg';
import FolderIcon from '../../image/folder-open.svg';
import UploadIcon from '../../image/cloud-upload.svg';

const Title = () => {
    return (
        <div className="flex justify-between w-full h-32">
            <div className="flex items-center space-x-4">
                <div className="bg-white rounded-full h-8 w-8 flex justify-center items-center shadow-md border border-gray-2">
                    <img src={BackIcon} alt="" />
                </div>
                <h2 className="font-medium text-xl tracking-tight">
                    Charter Log
                </h2>
                <img src={EditIcon} alt="" />
                <img src={FolderIcon} alt="" />
                <p className="text-xs font-medium text-gray-3">
                    Templates - Draft - Charter Log
                </p>
            </div>
            <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                    <img src={UploadIcon} alt="" />
                    <p className="text-xs font-medium text-gray-3">Saving..</p>
                </div>
                <button className="w-32 py-3 bg-white border-2 border-yellow rounded-lg shadow-md font-medium">
                    Save
                </button>
                <button className="w-32 py-3 bg-gradient-to-t from-yellow to-yellow-light  rounded-lg shadow-md font-medium">
                    Publish
                </button>
            </div>
        </div>
    );
};

export default Title;

import React from 'react';
import Title from './Title';
import Pages from './Pages';
import EditorSpace from './EditorSpace';
import ToolsMenu from './ToolsMenu';

const Workspace = () => {
    return (
        <div className="w-full px-20">
            <Title />
            <div className="flex justify-between space-x-10">
                <Pages />
                <EditorSpace />
                <ToolsMenu />
            </div>
        </div>
    );
};

export default Workspace;

import React, {useState} from 'react';
import {SimpleTreeView, TreeItem} from '@mui/x-tree-view';
import './FileExplorer.css';

const FileExplorer = ({files}) => {
    const [selectedFile, setSelectedFile] = useState(files[0]?.name);
    const [selectedContent, setSelectedContent] = useState(files[0]?.content);

    const handleFileClick = (event, itemId) => {
        const file = files.find(file => file.name === itemId);
        setSelectedFile(file.name);
        setSelectedContent(file.content);
    };

    return (
        <div className="wrapper">
            {selectedFile}
            <div className="container">
                <SimpleTreeView
                    onItemSelectionToggle={handleFileClick}
                    className="toolbar"
                >
                    {files.map((file, index) => (
                        <TreeItem key={index} itemId={file.name} label={file.name}  classes={{ root: selectedFile === file.name ? 'selected-item' : '' }} />
                    ))}
                </SimpleTreeView>
                <div className="content-box">
                    <div>{selectedContent}</div>
                </div>
            </div>
        </div>
    );
};

export default FileExplorer;

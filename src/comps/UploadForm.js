import React, { useState } from 'react';
import ProgressBar from './ProgressBar';

const UploadForm = () => {
    //create a local state for to store our file/file-info
    const [file, setFile] = useState(null);
    //state for errors
    const [error, setError] = useState(null);
    //lets make sure that the file selected is valid image type
    const fileType = ['image/png', 'image/jpeg'];
    const handleChange = (e) => {
        //selected the file
        let selectedFile = e.target.files[0];
        //check if the file is selected
        if(selectedFile && fileType.includes(selectedFile.type)) {
            setFile(selectedFile);
            setError('');
        }else{
            setFile(null);
            setError('please select a valid image type (png or jpeg)');
        }
    }
    return (
        <form className="form-upload">
            <input  type = "file" onChange={ handleChange } />
            <div className="output">
                { error && <div className="error">{ error }</div> }
                { file && <div className="file">{ file.name }</div>}
                { file && <ProgressBar file={file} setFile={setFile} />}
            </div>
        </form>
    )
}

export default UploadForm;
import React from 'react';
import useFirestore from '../hooks/useFirestore';

const ImageGrid = ({setSelectedImg}) => {
    const {docs} = useFirestore('images');
    console.log(docs);

    return(
        <div className="image-grid">
            {docs && docs.map(doc => (
                <div className='image-wrap' key={doc.id}
                onClick={() => setSelectedImg(doc.url)} >
                    <img src={doc.url} className='image-wrap-img' alt='uploaded' />
                </div>
            ))}
        </div>
    )
}

export default ImageGrid;
import React from 'react';
import './imageLinkForm.css';

const ImageLinkForm = ({ onInputChange, onButtonSubmit}) => {
    return (
        <div>
            <p className='f3'>
                {'This Magic Brain will detect faces in your pictures. Give it a try...'}
            </p>

            <div className='flex-center' >
                <div className='flex-center pa4 br3 shadow-5 pat' style={{width: '500px'}}>
                    <input className='f3 pa2 w-70 center' type='text' onChange={onInputChange}/>
                    <button className='w-30 f4 link ph3 pv2 dib white bg-light-purple pointer' onClick={onButtonSubmit}>Detect</button>
                </div>
            </div>
        </div>
    );
}

export default ImageLinkForm;
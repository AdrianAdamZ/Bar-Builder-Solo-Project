/* eslint-disable indent */
/* eslint-disable no-trailing-spaces */
import React from 'react';

export default function BarContainer(props) {
    
    const { barContents, ingName } = props;
    console.log('ingName: ', ingName);
    console.log('barContents: ', barContents);
    console.log('props: ', props);

    // if (!barContents) {
    //     let notify = document.getElementsByClassName('input-message');
    //     notify.innerHTML = <h3>Submit an Ingredient to Stock your Bar!</h3>;
    //     return notify;
    // }

    return (
    <><h1 className='your-bar'>Your Bar Contents</h1>
        <div className='bar-top'>
            <div id='user-input'>
                <div className='contents'>
                    {barContents.map((url, i) => (
                        <><img style={{ transform: `translate(${i % 2 === 0 && i !== 1 ? 2.5 * i : -2.5 * i}vw)` }} src={url} key={`${ingName}${i}`} alt={ingName} useMap='#clickable' /><map name='clickable'><area shape='rect' coords='145.6,0,185.6,331.2' target='_blank' href={url}></area></map></>

                        // <><a href={url}><img style={{ transform: `translate(${i % 2 === 0 && i !== 1 ? 2.5 * i : -2.5 * i}vw)` }} src={url} key={`${ingName}${i}`} alt={ingName} useMap='' /></a></>
                    ))}
                </div>
            </div>
        </div></>

    );

}
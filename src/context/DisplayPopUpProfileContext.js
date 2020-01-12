import React, { createContext, useState } from 'react';

export const DisplayPopUpProfileContext = createContext();

const DisplayPopUpProfileContextProvider = (props) => {
    const [displayPopUpProfile, setDisplayPopUpProfile] = useState(true);
    const [overlayProfile] = useState('Profile')

    const toggleDisplayPopUpProfile = () => {
        setDisplayPopUpProfile(!displayPopUpProfile);
        // alert('working');
    }
    return (
        <DisplayPopUpProfileContext.Provider
            value={{displayPopUpProfile, toggleDisplayPopUpProfile, overlayProfile}}>
            {props.children}
        </DisplayPopUpProfileContext.Provider>
    );
}
 
export default DisplayPopUpProfileContextProvider;
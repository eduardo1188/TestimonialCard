import React from 'react'
import { GrFormPreviousLink } from 'react-icons/fa';
import { GrFormNextLink } from 'react-icons/fa';

export const ButtonCard = ({name, buttonProp, buttonAction}) => {
    return(
        <button onClick={buttonAction}>
            {name}
        </button>
    )
}


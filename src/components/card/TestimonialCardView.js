import React, { useState } from 'react'
import { ButtonCard } from '../Button/ButtonCard';
import './testimonialCard.css';
import { testimonialDB } from '../utils/TestimonialDB.js';
import { TestimonialCardcontainer} from './TestimonialCardContainer'

export const  TestimonialCardView = ({name, imgCard, testimonial, backButton, nextButton}) => {

    return (
        <>
            <div className="card">
                <div className="card-image">
                    <img className="card-image-post" src={imgCard}></img>
                </div>
                <div className="card-body">
                    <h2 className="card-name">{name}</h2>
                    <p>{testimonial}</p>
                    <ButtonCard name={'Anterior'} buttonProp={'GrFromPreviousLink'} buttonAction={backButton}/>
                    <ButtonCard name={'Siguiente'} buttonProp={'GrFromNextLink'} buttonAction={nextButton}/>
                </div>
            </div>
        </>
    )
}
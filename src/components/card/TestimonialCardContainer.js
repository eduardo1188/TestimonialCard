import React, {useState} from 'react'
import { testimonialDB } from "../utils/TestimonialDB.js";
import { TestimonialCardView} from './TestimonialCardView'

export const TestimonialCardContainer = () => {
        const [card, setCard] = useState(0)
    
        const {name, testimonial, imgCard} = testimonialDB[card]
    
        const nextButton = () => {
            console.log('adelante');
            if (card >= testimonialDB.length-1){
                setCard(0)
            }else{
                setCard(card+1)
            }
        }
    
        const backButton = () => {
            console.log('atras');
            if (card <= 0) {
                setCard(testimonialDB.length-1)
            }else{
                setCard(card-1)
            }
        }
    return ( 
        <>
            <TestimonialCardView 
                name={name}
                imgCard={imgCard}
                testimonial={testimonial}
                backButton={backButton}
                nextButton={nextButton}
            />
        </>
    )
}

import { keyframes } from "styled-components";
export const fadeIn = keyframes`
from {
    opacity: 0;
    transform: translate3d(0, 0, 0);
    
} 

to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
}`;

export const appearFromRight = keyframes`
from {
    opacity: 0;
    transform: translate(75px, 0);
    
} 

to {
    opacity: 1;
    transform: translate(0, 0);
}`;

export const loader = keyframes`
 
from { transform: rotate(0deg) }

to { transform: rotate(360deg) }`;

export const fadeOut = keyframes`
from {
    opacity: 1;
    transform: translate(0, 0);
}

to {
    opacity: 0;
    transform: translate(0,50px);
}`;

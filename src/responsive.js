import { css } from 'styled-components';

export const mobile = (props) => {
    return css`
        @media only screen and (max-width: 1000px) {
            ${props}
        }
    `;
}

export const xs = (props) => {
    return css`
        @media only screen and (max-width: 475px) {
            ${props}
        }
    `
}

import {css} from 'styled-components'

export const smaller = (props) => {
    return css`
    // 490 and below
        @media only screen and (max-width: 490px) {
            ${props}
        }
    `
}

export const mini = (props) => {
    return css`
    // 442 and below
        @media only screen and (max-width: 442px) {
            ${props}
        }
    `
}
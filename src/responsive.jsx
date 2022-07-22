
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
export const midMini = (props) => {
    return css`
    // 330 and below
        @media only screen and (max-width: 355px) {
            ${props}
        }
    `
}
export const superMini = (props) => {
    return css`
    // 330 and below
        @media only screen and (max-width: 330px) {
            ${props}
        }
    `
}
import {ReactJSXElement} from "@emotion/react/types/jsx-namespace";

export default interface TextProps{
    text:string | ReactJSXElement
    type:'xl'|'l'|'m'|'sm'|'xs'|'smbold'|'xsbold'|'xxs'|'xxsbold'|'supersmall'
    color: 'black'|'orange'|'grey'|'white'
}
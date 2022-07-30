import { extendTheme } from "@chakra-ui/react";
import {mode} from "@chakra-ui/theme-tools"



const styles = {
    


}


const config = {
    initialColorMode: 'dark',
    useSystemColorMode: true
  }

const fonts = {
    heading: "'Patua One'"
}

export const notesTheme = extendTheme({config, 
 styles, fonts, components: {
    Heading: {
        baseStyle:{
        color: 'red'
    }},
    Link: {
        baseStyle:{color: 'blue'}
    }}})
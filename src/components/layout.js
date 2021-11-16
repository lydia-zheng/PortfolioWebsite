import React from 'react'
import Footer from '../components/footer.js'
import Header from '../components/header.js'
import {createTheme, responsiveFontSizes, ThemeProvider} from '@material-ui/core';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import CssBaseline from '@material-ui/core/CssBaseline';
//import * as layoutStyles from './layout.module.scss';
import {Helmet} from 'react-helmet';

let theme = createTheme({
  palette: {
    type: "dark",
    primary: {
      main: "#A0C4D6",
    } ,
    secondary: {
      main: '#D6B1A0',
      light:'#ffe3d1'
    }
  },
  typography: {
    fontsize: '1.1rem',
    fontFamily: [
      'Lato',
      'Roboto'
    ].join(','),
  },
});

theme = responsiveFontSizes(theme);


const Layout = (props) => {
  return (
    <ThemeProvider theme={theme}> <CssBaseline/>
    <div 
    // className= {layoutStyles.bg} //delete or reuse later
    >
      <Helmet>
      <link href='http://fonts.googleapis.com/css?family=Lato&subset=latin,latin-ext' rel='stylesheet' type='text/css'/>
      </Helmet>
    <div 
    //className={layoutStyles.container}//delete or reuse later
    >
      <div 
      //className={layoutStyles.content}//delete or reuse later
      >
        <Header/>
        {props.children} {/* curly braces for js variable*/}
      </div>
      <Footer/>
    </div>
    </div>
    </ThemeProvider>
  )
}
export default Layout
import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import { Typography, Button} from '@material-ui/core'
import * as pdfStyles from './pdf.module.scss'

const PDFButton = () => {
  const pdf = useStaticQuery(graphql`
  query{
    pdf: file(name: {eq: "resume"}){
      name
      extension
      publicURL
    }
  }     
  `)

  return (
    <Typography variant="button"><Button variant="contained" color="secondary"><a href={pdf.pdf.publicURL} target="_blank" rel="noreferrer">Resume</a></Button></Typography>
  )
} 
export default PDFButton
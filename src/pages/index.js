import React from 'react'
import { Link } from 'gatsby'//optimized linking rather than full page refresh
import Layout from '../components/layout'
import { Typography, Button, Container, Grid} from '@material-ui/core'
import Paper from '@material-ui/core/Paper'
import * as indexStyles from './index.module.scss'
import {makeStyles} from '@material-ui/core/styles'
const useStyles = makeStyles((theme) => ({
  section: {
    height: '90vh',
    //backgroundImage: "url(https://www.publicdomainpictures.net/pictures/240000/velka/geometric-background-1514584882En0.jpg)",
    backgroundImage: "url(https://www.ppt-backgrounds.net/thumbs/black-wooden-minimalist-hd-ppt.jpeg)",
    backgroundSize: "cover",
    backgroundPosition: "center",
    fontFamily: theme.typography,
    textAlign: 'center'
  },
  content: {
    height: "100%"
  },
  container: {
    height: "100%"
  }
})) //passes theme and specifies style

const IndexPage = () => {
  const styles = useStyles();
  return (
    <Layout>
      <Paper className={styles.section}>
        <Container className={styles.container} maxWidth="md">
          <Grid className={styles.content} container alignItems="center">
            <Grid item> 
              <Typography variant="subtitle1">Hi there! I'm</Typography>
            <Typography variant="h3">Lydia Zheng.</Typography>
            <Typography variant="h5">A software developer that likes to build projects and help others! </Typography>
            <Typography variant="subtitle1">Need a Developer?</Typography>
            <Typography variant="button"><Button variant="contained" color="secondary" size="medium"><Link to='/contact' className={indexStyles.link}>Get in touch</Link></Button></Typography>
            </Grid>
          </Grid>  
        </Container>
      </Paper>
   </Layout>
  )
}

export default IndexPage
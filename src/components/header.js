import React from 'react'
import {Link, graphql, useStaticQuery} from 'gatsby'
//import './header.module.scss'

import * as headerStyles from './header.module.scss'
import PDFButton from './pdf';

const HeaderPage = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <header>
      <h1>
        <Link className={headerStyles.title} activeClassName={headerStyles.activeNavItem} to="/">
          {/* {data.site.siteMetadata.title}  */}
          {/* <img src= '../img/favicon.ico' alt tag= "logo"/>  not working*/}
        </Link>
      </h1>
      <nav>
        <ul className={headerStyles.navList}>
          <li>
            <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/"> Home </Link>
          </li>
          <li>
            <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/about"> About me </Link>
          </li>
          <li>
            <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/projects">Projects</Link>
          </li>
          <li>
            <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/blog">Blog</Link>
          </li>
          <li>
            <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/contact">Contact </Link>
          </li>
          <li>
            <PDFButton/>
          </li>
        </ul>
      </nav>
    </header>
  )
}
export default HeaderPage

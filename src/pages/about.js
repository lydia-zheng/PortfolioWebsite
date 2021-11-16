import React from 'react'
import {Link} from 'gatsby'

import Layout from '../components/layout.js'

const AboutPage = () => {
  return (
    <Layout>
      <h1>About Me</h1>
      <p>Hi, I'm Lydia Zheng, I'm a recent alumni from UBC computer science! I enjoy the rewarding feeling of finally figuring out a solution to hours of debugging, or solutions to a difficult coding problem. I also love learning new things, technical and otherwise.</p>
      <p>In my free time, I can usually be found drawing, gaming and listening to music. I'm not the most active person, but I enjoy occassional hikes and walks with friends and family!</p>
      <p>Currently searching for an entry level full-time developer position in 2021!</p>
      <p><Link to="/contact">Get in touch</Link></p>
    </Layout>
  )
}
export default AboutPage

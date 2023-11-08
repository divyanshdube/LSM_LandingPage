// ** React Imports
import { Fragment } from 'react';
import "./style.css";
import CardTitles from './Testimonials/CardTitles';
import Testimonials from './Testimonials';
import Blogs from './Blogs';
// import KeynoteSpeaker from "./KeynoteSpeaker/KeynoteSpeaker"
import Contact from './Contact';
import Footer from './Footer/footer';



// ** Custom Components
// import Breadcrumbs from '@components/breadcrumbs'

const LastSection = () => {
  return (
    <Fragment>
      {/* <Breadcrumbs title='Basic Cards' data={[{ title: 'Cards' }, { title: 'Basic Cards' }]} /> */}
      <Testimonials />
      <Blogs/>
      <Contact />
      <Footer/>
    </Fragment>
  )
}

export default LastSection 

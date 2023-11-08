import React from 'react'
import { Fragment } from 'react';
import ContactCard from './ContactCard';
import ContactCardHeader from './ContactCardHeader'


const Contact = () => {
  return (
    <div>
        <ContactCardHeader/>
        <Fragment>
            <ContactCard/>
        </Fragment>
    </div>
  )
}

export default Contact
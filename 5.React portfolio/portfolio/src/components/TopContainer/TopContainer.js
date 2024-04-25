import './TopContainer.css';
import { Element } from 'react-scroll';
import TopContent from '../TopContent/TopContent';

import React from 'react';

function TopContainer() {
  return (
   <Element name='about' className='topContainer'>
        <TopContent/>
   </Element>
  )
}

export default TopContainer;
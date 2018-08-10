import React from 'react'
import {Image } from 'semantic-ui-react';

const SearchSomething =() =>(
    // <Image src='../../search2.png'
    // as='a'
    // size='medium'
    // href="www.google.com"
    // content='search here'
    // target="_blank"
    // />
    <div>
    <Image
    src='../../search2.png'
    as='a'
    size='small'
    href='http://google.com'
    target='_blank'
  /><span>CLICK ON SEARCH ICON TO SEARCH SOMETHING</span>
  </div>
)
export default SearchSomething;
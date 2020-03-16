import {createGlobalStyle} from 'styled-components';

import React from 'react';

// import { Container } from './styles';

export default createGlobalStyle`

*{
  background-color: #fff!important;
}

  body{
    background: #fff;
    -webkit-font-smoothing: antialiased; 
  }
  body, input, button{
    font: 14px sans-serif;
  }


  button{
    cursor:pointer;
  }

ul{
 width:5em
}

li{
 display:inline;
 list-style-type:none;
}

`


import styled from 'styled-components';

// backgrounds

import BG_DESKTOP_DARK from '../../images/bg-desktop-dark.jpg'
import BG_DESKTOP_LIGHT from '../../images/bg-desktop-light.jpg'
import BG_MOBILE_DARK from '../../images/bg-mobile-dark.jpg'
import BG_MOBILE_LIGHT from '../../images/bg-mobile-light.jpg'

const Wrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  min-height: 100vh;
  padding: 0 1rem;
  background: url(${(props)=>props.darkMode ? BG_DESKTOP_DARK:BG_DESKTOP_LIGHT}) top no-repeat;
 
  @media screen and (max-width:468px) {
  background: url(${(props) => props.darkMode ? BG_MOBILE_DARK : BG_MOBILE_LIGHT}) top no-repeat;
  ${(props) => {
  return props.darkMode ?
    `background-color: var(--VeryDarkBlue);`
    :`background-color: var(--veryLightGrayishBlue-lt);`
  }}
  }
    ${(props) => {
  return props.darkMode ?
    `background-color: var(--VeryDarkBlue);`
    :`background-color: var(--veryLightGrayishBlue-lt);`
  }} 
`;

export default Wrapper;
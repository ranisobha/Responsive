import {Link as LinkR} from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`
// background:#000;
// height:80px;
// // margin-top:-80px;
// display:flex;
// justify-content:center;
// font-size:1rem;
top:0;
z-index:10;

@media screen and (max-width:960px){
  transition:0.8s all ease;
}

`;

export const NavbarContainer = styled.div`
display:flex;
justify-content:space-between;
height:80px;
z-index:1;
width:100%;
padding:0 24px;
max-width:1100px;
`;

export const NavLogo=styled(LinkR)`
color:#fff;
justify-self:flex-start;
cursor:pointer;
font-size:1.5rem;
display:flex;
align-items:center;
margin-left:24px;
font-weight:bold;
text-decoration:none;
`;
export const MobileIcon = styled.div`
display:none;
@media screen and(max-width:768px){
    display:block;
    top:0;
    position:absolute;
    right:0;
    transform:trnaslate(-100%,60%);
    font-size:1.8rem;
    cursor:pointer;
    color:#fff;
}
`
export const NavMenu = styled.ul`

display:flex;
align-items:center;
list-style:none;
text-align:center;
margin-right:-280px;

@media screen and (max-width:768px){
    display:none;
}
`;

export const NavItem = styled.li`
 height:30px;
 margin-top:20px;
 margin-right:2em
`;
export const NavLinks = styled.nav`
color:#fff;
display:flex;
align-items:center;
padding:0 1rem
height:100%
cursor:pointer;
text-decoration:none;


&.active{
    border-bottom: 3px solid #01bf71;
}`;

export const NavBtn = styled.nav`
display:flex;
@media screen and (max-width:768px){
    display:none;
}`

export const NavBtnLink=styled.div`
border-radius:5px;
background:orange;
white-space:nowrap;
padding:5px 20px;
margin-bottom:2rem;
color:#fff;
ouline:none;
border:none;
cursor:pointer;
font-size:16px;
transition:all 0.2s ease-in-out;
text-decoration:none;

&:hover{
    transition:all 0.2s ease-in-out;
    background:orange;
    color:#010606;
}
`
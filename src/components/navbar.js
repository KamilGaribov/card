import styled from "styled-components";
// import { BrowserRouter, Link } from "react-router-dom";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
// import Link from 'next/link';
// import { ThemeIcon } from './icons';
// import logo from '../public/logo.svg';
// import logoDark from '../public/logo-dark.png';

const NavbarContainer = styled.div`
  width: 100%;
  height: 80px;
  display: grid;
  grid-template-columns: 2fr 1fr;
  justify-content: space-between;
  align-items: center;
  // padding: 20px 60px;
  background: #2d2424;
  & > div:nth-child(2) {
    display: grid;
    grid-template-columns: repeat(3, 100px);
    column-gap: 20px;
  }
`;
// background: ${(props) => props.theme.background2};
const NavbarLogo = styled.div`
  width: 120px;
  height: 50px;
  cursor: pointer;
  // border: 1px solid black;
  background-image: url("../public/logo.svg");
  background-position: left top;
  background-size: 120px 50px;
  background-repeat: no-repeat;
`;
// background-image: url('${(props) => (props.theme.name == 'light' ? logo.src : logoDark.src)}');
const Button = styled.button`
  padding: 14px 17px;
  color: ${(props) => props.theme.button.color};
  background: ${(props) => props.theme.button.background};
  border-radius: 5px;
  cursor: pointer;
  outline: none;
  border: none;
`;

// export const Navbar = ({ actionText, setTheme, router }) => {
//     return (
//         <NavbarContainer>
//             <NavbarLogo onClick={() => router('/')} />
//             <div>
//                 {/* <ThemeIcon setTheme={setTheme} /> */}
//                 <Button onClick={() => router('/posts/new')}>{actionText}</Button>
//             </div>
//         </NavbarContainer>
//     );
// };

export const Navbar = () => {
  return (
    <NavbarContainer>
      <div>Logo</div>
      <div>
        <Link to="/">Home</Link>
        <Link to="/card">Cards</Link>
        <Link to="/transaction">Transactions</Link>
      </div>
    </NavbarContainer>
  );
};

export default Navbar;

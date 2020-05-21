import React,{ Component } from 'react';
import { Link } from "react-router-dom";
import './Top_title&menu.css';


class Header extends Component {
  render(){
  return (
    <div className = 'home'>
      <div className="Home_title"> 
      <Link to = "/"style={{ textDecoration: 'none', color: 'inherit'}}>
      <h1 align="center" style={{ margin:0}}>
        <font size ="7">창<font size ="5">원대의</font>밤</font>
        </h1>
     </Link>
     </div>
     <div className="top_menu">
        <ul className="menubar">
          <li>
            <Link to="/campus"style={{ textDecoration: 'none', color: 'inherit'}}>캠퍼스</Link>
          </li>
          <li>
            <Link to="/community"style={{ textDecoration: 'none', color: 'inherit'}}>커뮤니티</Link>
          </li>
          <li>
            <Link to="/employment"style={{ textDecoration: 'none', color: 'inherit'}}>취업·진로</Link>
          </li>
          <li>
            <Link to="/notice"style={{ textDecoration: 'none', color: 'inherit'}}>정보센터</Link>
          </li>
          <li>
            <Link to="/life"style={{ textDecoration: 'none', color: 'inherit'}}>생활</Link>
          </li>
        </ul>
      </div>

      
    </div>
  )
}
}
export default Header;
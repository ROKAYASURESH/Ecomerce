import React from 'react';
import { BsYoutube,BsFacebook } from "react-icons/bs";
import { AiFillInstagram, AiFillLinkedin,AiOutlineMenu,AiOutlineReload,AiOutlineHeart, AiTwotoneAccountBook ,AiOutlineShoppingCart} from "react-icons/ai";
import {NavLink, Link } from 'react-router-dom';

export default function Header() {
  return (
    <>  
    <div className="container-fluid ">
        <div className="row  nab">
            <div className="col-lg-4 nab offset-lg-1    ">
                <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                        <NavLink  activeClassName="menu_active" className="nav-link" aria-current="page" to="/">HOME</NavLink >
                        </li>
                        <li className="nav-item">
                        <NavLink  activeClassName="menu_active"  className="nav-link" to="/about">ABOUT</NavLink >
                        </li>
                        <li className="nav-item">
                        <NavLink  className="nav-link" to="/blog">Blog</NavLink >
                        </li>
                        <li className="nav-item ">
                        <NavLink  className="nav-link" to="/shop">SHOP</NavLink >
                        </li>
                        <li className="nav-item ">
                        <NavLink activeClassName="menu_active" className="nav-link" to="/contact">CONTACT</NavLink>
                        </li>

                    </ul>
                    </div>
                </div>
                </nav>
            </div>

            <div className="col-lg-4 pt-3  hurry">HURRY UP !! SALE UP TO 50% ON WINTER SALE!</div>
            <div className="col-lg-2 pt-3 icons ">
                <ul>
                    <li> <BsFacebook/></li>
                    <li><AiFillInstagram/></li>
                    <li><AiFillLinkedin/></li>
                    <li><BsYoutube/></li>
                    <li><AiOutlineMenu/></li>
                </ul>
            </div>

        </div>
        <div className="row my-1">
            <div className="col-lg-2 offset-lg-1    ">
                <img src="https://demo.bosathemes.com/bosa/beauty-shop/wp-content/uploads/sites/68/2022/11/logo-beauty-shop.png" alt="" />
            </div>

            <div className="col-lg-6">
                <img src="https://demo.bosathemes.com/bosa/beauty-shop/wp-content/uploads/sites/68/2022/11/img55.jpg" alt="" />
            </div>

            <div className="col-lg-2 pt-3 icon">
                <ul>
                    <li><AiOutlineReload/></li>
                    <li><AiOutlineHeart/></li>
                    <li><AiTwotoneAccountBook/></li>
                    <li><AiOutlineShoppingCart/></li>
                </ul>
            </div>
        </div>
    </div>

    <div className="container-fluid">
        <div className="row nabb">
            <div className="col-lg-6 offset-lg-1">
                    <nav className="navbar navbar-expand-lg  ">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                        <a className="nav-link bgs my-0" aria-current="page" href="#">CATEGORIES</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="#">COSMETICS</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="#">FASION KIT</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="#">MEDICATION</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="#">FACEWASH</a>
                        </li>
                    </ul>
                    </div>
                </div>
                </nav>

            </div>
            <div className="col-lg-4 forms py-2 ">
                  <form className="d-flex " role="search">
                <input className="form-control me-1" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-success" type="submit">Search</button>
                </form>

            </div>
        </div>
    </div>
    </>
  )
}

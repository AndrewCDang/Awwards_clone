import React, { Component } from 'react';
import App from './App';


class Nav extends Component {
    componentDidMount() {
        const searchBar = document.getElementsByClassName("nav-input")[0];
        const searchWrap = document.getElementsByClassName("toggle-focus-search")[0];
        const idIN = document.getElementById('id-in');
        const dropDown = document.getElementsByClassName("dropdown-focus-wrap")[0];
        const searchLogo = document.getElementById("search-logo")
        const navInsp = document.getElementsByClassName('nav-insp-text')[0];
        const navPointer = document.getElementById('navDrop-pointer');
        const inspirationDrop = document.getElementsByClassName('inspiration-drop')[0];
        const foreground = document.getElementsByClassName('foreground')[0];
        const foregroundNav = document.getElementsByClassName('foreground-nav')[0];
        const background = document.getElementsByClassName('background')[0];



        searchBar.addEventListener("focus", function(){
        searchBar.classList.add("nav-placeholder");
        searchBar.style.color = 'rgb(220, 220, 220)';
        searchLogo.style.fill = 'rgb(220, 220, 220)';
        idIN.style.color = 'rgb(220, 220, 220)';
        navInsp.style.color = 'rgb(220, 220, 220)';
        navPointer.style.fill = 'rgb(220, 220, 220)';
        inspirationDrop.classList.add('box-shadow');
        foreground.classList.add("web-filter")
        background.classList.add("web-filter-2")


        searchWrap.style.opacity = '1';
        searchWrap.style.visibility ='visible';
        dropDown.style.opacity ='1';
        dropDown.style.visibility='visible'
        });

        searchBar.addEventListener("focusout", function(){
        searchBar.classList.remove("nav-placeholder");
        searchBar.style.color = 'black';
        searchLogo.style.fill = 'black';
        idIN.style.color = 'darkgray';
        navInsp.style.color = 'black';
        navPointer.style.fill = 'black';
        inspirationDrop.classList.remove('box-shadow');
        foreground.classList.remove("web-filter")
        foregroundNav.classList.remove("web-filter")
        background.classList.remove("web-filter-2")




        searchWrap.style.opacity = '0';
        searchWrap.style.visibility ='hidden';
        dropDown.style.opacity ='0';
        dropDown.style.visibility='hidden'
        });

        // Toggle nav 'inspiration' Button Event listener
        window.addEventListener("click", function(e){
            if(e.target.classList.contains('nav-insp') && !inspirationDrop.classList.contains('inspiration-open') ){
                inspirationDrop.classList.add('inspiration-open');
                navInsp.style.color = 'rgb(220, 220, 220)';
                navPointer.style.fill = 'rgb(220, 220, 220)';
            }else if (inspirationDrop.classList.contains('inspiration-open')){
                inspirationDrop.classList.remove('inspiration-open');
                navInsp.style.color = 'black';
                navPointer.style.fill = 'black';
            }
        })
    }

    render(){
        console.log(this.props.featured[0].imgUrl)
        return(
            <div className="navbar inner foreground-nav">
                <div className="flex-center">
                    <a href="/" className="nav-logo">
                        <svg width="30" height="16" viewBox="0 0 30 16"><path d="m18.4 0-2.803 10.855L12.951 0H9.34L6.693 10.855 3.892 0H0l5.012 15.812h3.425l2.708-10.228 2.709 10.228h3.425L22.29 0h-3.892ZM24.77 13.365c0 1.506 1.12 2.635 2.615 2.635C28.879 16 30 14.87 30 13.365c0-1.506-1.12-2.636-2.615-2.636s-2.615 1.13-2.615 2.636Z"></path>
                            <path d="m18.4 0-2.803 10.855L12.951 0H9.34L6.693 10.855 3.892 0H0l5.012 15.812h3.425l2.708-10.228 2.709 10.228h3.425L22.29 0h-3.892ZM24.77 13.365c0 1.506 1.12 2.635 2.615 2.635C28.879 16 30 14.87 30 13.365c0-1.506-1.12-2.636-2.615-2.636s-2.615 1.13-2.615 2.636Z"></path>
                        </svg>
                    </a>
                </div>
                <div className="flex-center nav-search-toggle">
                    <div className="nav-search-form">
                        <div className="nav-inputField">
                            <div >
                                <svg height='20' version="1.1" id="search-logo" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 408.1 408" className="search-icon" xmlSpace="preserve">
                                    <path d="M402,372L298,268c51-65,46-160-14-219C253,18,211,0,166,0S80,17,49,49C17,80,0,122,0,166s17,86,49,118c31,31,73,49,118,49c37,0,73-12,102-35l104,104c4,4,9,6,15,6c6,0,11-2,15-6C410,394,410,380,402,372z M78,254c-23-23-36-55-36-88s13-64,36-88c24-23,55-36,88-36s64,13,88,36c48,49,48,127,0,176c-23,23-55,36-88,36C133,291,102,278,78,254z" />
                                </svg>
                            </div>
                            <div className="nav-input-wrap">
                                <input className="nav-input" placeholder="Search websites, elements, courses..."></input>
                            </div>
                        </div>
                    </div>
                    <div id='inspiration-wrap' className="nav-dropdown-wrap">
                        <div>
                            <div id='id-in' className="caption graytext IN">IN</div>
                        </div>
                        <div className="nav-dropdown nav-insp-btn">
                            <a className='nav-drop-btn-wrapper nav-insp'></a>
                            <p className="bold text nav-insp-text">Inspiration</p>
                            <svg width={15} version="1.1" id="navDrop-pointer" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                viewBox="0 0 364 203" className="enable-background:new 0 0 364 203;" xmlspace="preserve">
                            <path d="M182,203c-6,0-11-2-15-6L6,36c-8-8-8-21,0-30c8-8,21-8,30,0l146,146L328,6c8-8,21-8,30,0c8,8,8,21,0,30L197,197
                                C193,201,187,203,182,203L182,203z"/>
                            </svg>
                            <div className="inspiration-drop">
                                <p id='nav-first' className='text'>Inspiration</p>
                                <p className='text nav-sub'>Websites</p>
                                <p className='text nav-sub'> Elements</p>
                                <p className='text nav-sub'>Collections</p>
                                <p className='text'>Blog</p>
                                <p className='text'>Courses</p>
                                <p className='text'>Directory</p>
                            </div>
                        </div>
                    </div>
                    <div className="toggle-focus-search">
                    </div>
                    <div className="dropdown-focus-wrap">
                        <div className='dropdown-focus-items'>
                            <p className='caption gray-text'>featured in Awwards</p>
                            <div className='dropdown-contents'>
                                <div className='dropdown-content'>
                                    <img className='dropdown-image' src={`./Images/${this.props.featured[0].imgUrl}`}></img>
                                    <p className='text light-gray-text drop-text'>Sites of the Day</p>
                                </div>
                                <div className='dropdown-content'>
                                    <img className='dropdown-image' src={`./Images/${this.props.featured[1].imgUrl}`}></img>
                                    <p className='text light-gray-text drop-text'>Websites</p>
                                </div>
                                <div className='dropdown-content'>
                                    <img className='dropdown-image' src={`./Images/${this.props.featured[2].imgUrl}`}></img>
                                    <p className='text light-gray-text drop-text'>Elements</p>
                                </div>
                                <div className='dropdown-content'>
                                    <img className='dropdown-image' src={`./Images/${this.props.featured[3].imgUrl}`}></img>
                                    <p className='text light-gray-text drop-text'>Courses</p>
                                </div>
                            </div>
                            <p className='caption gray-text'>Best tags</p>
                            <div className='dropdown-contents'>
                                <p className='dropfield-btn'>Animation</p>
                                <p className='dropfield-btn'>Portfolio</p>
                                <p className='dropfield-btn'>404 Pages</p>
                                <p className='dropfield-btn'>Clean</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div id='logIn-signUp' className="flex-center">
                    <div className="nav-userLinks">
                        <div className='pointer'>
                            <p className="bold text-center">Log in</p>
                        </div>
                        <div className='pointer'>
                            <p className="bold text-center">Sign up</p>
                        </div>
                    </div>
                    <div id='pro-submit-btns' className="right-0 nav-userLinks">
                        <div className="button btn-black pointer probtn">
                            <p className="text-center white-text">Be Pro</p>
                        </div>
                        <div className="button pointer submitbtn">
                            <p className="text-center">Submit Website</p>
                        </div>
                    </div>
                </div>
                <div id='svg-profile'>
                    <svg fill="#000000" width="36px" viewBox="-8 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13.84 16.48c-0.76-0.76-1.64-1.36-2.64-1.72 0.88-0.8 1.44-2 1.44-3.28 0-2.44-2-4.48-4.48-4.48s-4.48 2-4.48 4.48c0 1.32 0.56 2.48 1.44 3.28-1 0.36-1.88 0.92-2.64 1.72-2.64 2.88-2.48 7.52-2.48 7.72 0.040 0.48 0.4 0.8 0.88 0.8s0.8-0.4 0.8-0.88c0-0.040-0.16-4.12 2.12-6.52 1.080-1.12 2.56-1.68 4.4-1.68s3.32 0.56 4.4 1.68c2.28 2.36 2.12 6.44 2.12 6.52-0.040 0.48 0.32 0.84 0.8 0.88h0.040c0.44 0 0.8-0.36 0.84-0.8 0.040-0.2 0.24-4.84-2.56-7.72zM5.44 11.48c0-1.52 1.24-2.8 2.8-2.8 1.52 0 2.8 1.24 2.8 2.8 0 1.52-1.24 2.8-2.8 2.8-1.56-0.040-2.8-1.28-2.8-2.8z"></path>
                    </svg>
                </div>
            </div>
        )
    }
}
export default Nav;
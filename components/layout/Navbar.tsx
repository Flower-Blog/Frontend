import PropTypes from "prop-types";
import React from "react";

import Login from "@/components/Login";

export default function Navbar(props: any) {
  return (
    <>
      <>
        <header data-thq="thq-navbar" className="navbar-navbar mx-0 mt-4 mb-2">
          <a href="../">
            <img alt={props.pastedImage_alt} src={props.pastedImage_src} className="navbar-pasted-image" />
          </a>
          <div className="navbar-container1">
            <img alt={props.image_alt} src={props.image_src} className="navbar-image" />
            <input type="text" placeholder={props.Input_placeholder} className="navbar-input input" />
          </div>
          <div data-thq="thq-navbar-nav" data-role="Nav" className="navbar-desktop-menu">
            <nav data-thq="thq-navbar-nav-links" data-role="Nav" className="navbar-nav">
              <button className="button">
                <a href="./createArticle">
                  <span className="navbar-text">創建文章</span>
                </a>
              </button>
              <Login />
              <div className="navbar-thq-dropdown1 list-item">
                <div className="navbar-dropdown-toggle05">
                  <button className="navbar-view2 button">
                    <img alt={props.image_alt2} src={props.image_src2} loading="lazy" className="navbar-image2" />
                    <span className="navbar-text06">{props.text8}</span>
                  </button>
                  <div data-thq="thq-dropdown-arrow" className="navbar-dropdown-arrow1"></div>
                </div>
                <ul className="navbar-dropdown-list1">
                  <li className="navbar-dropdown05 list-item"></li>
                  <li className="navbar-dropdown06 list-item">
                    <div className="navbar-dropdown-toggle06">
                      <span className="navbar-text07">{props.text13}</span>
                    </div>
                  </li>
                  <li className="navbar-dropdown07 list-item">
                    <div className="navbar-dropdown-toggle07">
                      <span className="navbar-text08">{props.text14}</span>
                    </div>
                  </li>
                  <li className="navbar-dropdown08 list-item">
                    <div className="navbar-dropdown-toggle08">
                      <span className="navbar-text09">{props.text15}</span>
                    </div>
                  </li>
                  <li className="navbar-dropdown09 list-item">
                    <div className="navbar-dropdown-toggle09">
                      <span className="navbar-text10">{props.text16}</span>
                    </div>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
          <div data-thq="thq-burger-menu" className="navbar-burger-menu">
            <button className="button navbar-button">
              <svg viewBox="0 0 1024 1024" className="navbar-icon">
                <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
              </svg>
            </button>
          </div>
          <div data-thq="thq-mobile-menu" className="navbar-mobile-menu">
            <div data-thq="thq-mobile-menu-nav" data-role="Nav" className="navbar-nav1">
              <div className="navbar-container2">
                <span className="navbar-logo">{props.Logo}</span>
                <div data-thq="thq-close-menu" className="navbar-menu-close">
                  <svg viewBox="0 0 1024 1024" className="navbar-icon02">
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <nav data-thq="thq-mobile-menu-nav-links" data-role="Nav" className="navbar-nav2">
                <span className="navbar-text11">{props.text1}</span>
                <span className="navbar-text12">{props.text2}</span>
                <span className="navbar-text13">{props.text3}</span>
                <span className="navbar-text14">{props.text4}</span>
                <span className="navbar-text15">{props.text5}</span>
                <span className="navbar-text16">{props.text6}</span>
              </nav>
              <div className="navbar-container3">
                <button className="navbar-login button">{props.Login}</button>
                <button className="button">{props.Register}</button>
              </div>
            </div>
            <div className="navbar-icon-group">
              <svg viewBox="0 0 950.8571428571428 1024" className="navbar-icon04">
                <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
              </svg>
              <svg viewBox="0 0 877.7142857142857 1024" className="navbar-icon06">
                <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
              </svg>
              <svg viewBox="0 0 602.2582857142856 1024" className="navbar-icon08">
                <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
              </svg>
            </div>
          </div>
        </header>
      </>
      <style>
        {`
          .navbar-container {
            width: 100%;
            height: 178px;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
          }
          .navbar-navbar {
            width: 100%;
            display: flex;
            position: relative;
            max-width: 1440px;
            align-items: center;
            justify-content: space-between;
          }
          .navbar-pasted-image {
            width: auto;
            height: 84px;
          }
          .navbar-container1 {
            flex: 0 0 auto;
            width: 600px;
            display: flex;
            box-shadow: 8px 8px 0px 0px #000000;
            align-items: flex-start;
            padding-top: 0px;
            border-color: var(--dl-color-gray-black);
            border-width: 1px;
            padding-left: 8px;
            border-radius: var(--dl-radius-radius-radius4);
            padding-right: 8px;
            padding-bottom: 0px;
            background-size: cover;
            border-top-left-radius: var(--dl-radius-radius-radius4);
            border-top-right-radius: var(--dl-radius-radius-radius4);
            border-bottom-left-radius: var(--dl-radius-radius-radius4);
            border-bottom-right-radius: var(--dl-radius-radius-radius4);
          }
          .navbar-image {
            width: 35px;
            height: 40px;
            align-self: center;
            object-fit: cover;
          }
          .navbar-input {
            width: 639px;
            height: 49px;
            border-color: rgba(0, 0, 0, 0);
            background-size: auto;
            background-color: transparent;
            background-position: center;
          }
          .navbar-desktop-menu {
            color: var(--dl-color-threefish-3e454c);
            display: flex;
          }
          .navbar-nav {
            gap: var(--dl-space-space-twounits);
            flex: 1;
            color: #ffffff;
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .navbar-text {
            align-self: center;
            font-family: Arial Black;
            font-weight: bold;
          }
          .navbar-thq-dropdown {
            cursor: pointer;
            position: relative;
            border-radius: var(--dl-radius-radius-radius2);
          }
          .navbar-dropdown-toggle {
            fill: #595959;
            color: #595959;
            width: 100%;
            display: inline-flex;
            align-items: center;
            padding-top: 0px;
            padding-left: 0px;
            border-radius: var(--dl-radius-radius-radius2);
            padding-right: 0px;
            padding-bottom: 0px;
          }
          .navbar-view1 {
            width: 241px;
            height: 58px;
            display: flex;
            padding: 5px;
            padding-top: 1px;
            padding-left: 1px;
            padding-right: 1px;
            flex-direction: row;
            padding-bottom: 1px;
            background-color: #ffcf77;
          }
          .navbar-image1 {
            width: 57px;
            height: 100%;
            object-fit: cover;
            border-radius: var(--dl-radius-radius-round);
          }
          .navbar-text01 {
            align-self: center;
            font-style: normal;
            text-align: center;
            font-family: Arial Black;
            font-weight: 900;
          }
          .navbar-dropdown-arrow {
            transition: 0.3s;
          }
          .navbar-dropdown-list {
            left: 0%;
            width: max-content;
            z-index: 100;
            position: absolute;
            min-width: 100%;
            transition: 0.3s;
            align-items: stretch;
            border-color: #d9d9d9;
            border-width: 1px;
            border-radius: var(--dl-radius-radius-radius4);
            flex-direction: column;
            list-style-type: none;
            background-color: var(--dl-color-gray-white);
            list-style-position: inside;
          }
          .navbar-dropdown {
            cursor: pointer;
            display: inline-block;
            position: relative;
            border-radius: var(--dl-radius-radius-radius2);
          }
          .navbar-dropdown01 {
            cursor: pointer;
            display: inline-block;
            position: relative;
            border-radius: var(--dl-radius-radius-radius2);
          }
          .navbar-dropdown-toggle01 {
            fill: #595959;
            color: #595959;
            width: 100%;
            display: inline-flex;
            transition: 0.3s;
            align-items: center;
            padding-top: var(--dl-space-space-halfunit);
            padding-left: var(--dl-space-space-unit);
            border-radius: var(--dl-radius-radius-radius4);
            padding-right: var(--dl-space-space-unit);
            padding-bottom: var(--dl-space-space-halfunit);
          }
          .navbar-dropdown-toggle01:hover {
            fill: #fff;
            color: #fff;
            background-color: #595959;
          }
          .navbar-text02 {
            width: 100%;
            cursor: pointer;
            display: flex;
            font-size: 14px;
            font-style: normal;
            font-weight: 500;
          }
          .navbar-dropdown02 {
            cursor: pointer;
            display: inline-block;
            position: relative;
            border-radius: var(--dl-radius-radius-radius2);
          }
          .navbar-dropdown-toggle02 {
            fill: #595959;
            color: #595959;
            width: 100%;
            display: inline-flex;
            transition: 0.3s;
            align-items: center;
            padding-top: var(--dl-space-space-halfunit);
            padding-left: var(--dl-space-space-unit);
            border-radius: var(--dl-radius-radius-radius4);
            padding-right: var(--dl-space-space-unit);
            padding-bottom: var(--dl-space-space-halfunit);
          }
          .navbar-dropdown-toggle02:hover {
            fill: #fff;
            color: #fff;
            background-color: #595959;
          }
          .navbar-text03 {
            width: 100%;
            cursor: pointer;
            display: flex;
            font-size: 14px;
            font-style: normal;
            font-weight: 500;
          }
          .navbar-dropdown03 {
            cursor: pointer;
            display: inline-block;
            position: relative;
            border-radius: var(--dl-radius-radius-radius2);
          }
          .navbar-dropdown-toggle03 {
            fill: #595959;
            color: #595959;
            width: 100%;
            display: inline-flex;
            transition: 0.3s;
            align-items: center;
            padding-top: var(--dl-space-space-halfunit);
            padding-left: var(--dl-space-space-unit);
            border-radius: var(--dl-radius-radius-radius4);
            padding-right: var(--dl-space-space-unit);
            padding-bottom: var(--dl-space-space-halfunit);
          }
          .navbar-dropdown-toggle03:hover {
            fill: #fff;
            color: #fff;
            background-color: #595959;
          }
          .navbar-text04 {
            width: 100%;
            cursor: pointer;
            display: flex;
            font-size: 14px;
            font-style: normal;
            font-weight: 500;
          }
          .navbar-dropdown04 {
            cursor: pointer;
            display: inline-block;
            position: relative;
            border-radius: var(--dl-radius-radius-radius2);
          }
          .navbar-dropdown-toggle04 {
            fill: #595959;
            color: #595959;
            width: 100%;
            display: inline-flex;
            transition: 0.3s;
            align-items: center;
            padding-top: var(--dl-space-space-halfunit);
            padding-left: var(--dl-space-space-unit);
            border-radius: var(--dl-radius-radius-radius4);
            padding-right: var(--dl-space-space-unit);
            padding-bottom: var(--dl-space-space-halfunit);
          }
          .navbar-dropdown-toggle04:hover {
            fill: #fff;
            color: #fff;
            background-color: #595959;
          }
          .navbar-text05 {
            width: 100%;
            cursor: pointer;
            display: flex;
            font-size: 14px;
            font-style: normal;
            font-weight: 500;
          }
          .navbar-thq-dropdown1 {
            cursor: pointer;
            display: none;
            position: relative;
            border-radius: var(--dl-radius-radius-radius2);
          }
          .navbar-dropdown-toggle05 {
            fill: #595959;
            color: #595959;
            width: 100%;
            display: inline-flex;
            align-items: center;
            padding-top: 0px;
            padding-left: 0px;
            border-radius: var(--dl-radius-radius-radius2);
            padding-right: 0px;
            padding-bottom: 0px;
          }
          .navbar-view2 {
            width: auto;
            height: 58px;
            display: flex;
            padding: 5px;
            padding-top: 1px;
            padding-left: 2px;
            padding-right: 2px;
            flex-direction: row;
            padding-bottom: 1px;
            background-color: #ffcf77;
          }
          .navbar-image2 {
            width: 63px;
            height: 100%;
            object-fit: cover;
            border-radius: var(--dl-radius-radius-round);
          }
          .navbar-text06 {
            width: 100%;
            align-self: center;
            font-style: normal;
            text-align: center;
            font-family: Arial Black;
            font-weight: 900;
          }
          .navbar-dropdown-arrow1 {
            transition: 0.3s;
          }
          .navbar-dropdown-list1 {
            left: 0%;
            width: max-content;
            display: none;
            z-index: 100;
            position: absolute;
            min-width: 100%;
            transition: 0.3s;
            align-items: stretch;
            border-color: #d9d9d9;
            border-width: 1px;
            border-radius: var(--dl-radius-radius-radius4);
            flex-direction: column;
            list-style-type: none;
            background-color: var(--dl-color-gray-white);
            list-style-position: inside;
          }
          .navbar-dropdown05 {
            cursor: pointer;
            display: inline-block;
            position: relative;
            border-radius: var(--dl-radius-radius-radius2);
          }
          .navbar-dropdown06 {
            cursor: pointer;
            display: inline-block;
            position: relative;
            border-radius: var(--dl-radius-radius-radius2);
          }
          .navbar-dropdown-toggle06 {
            fill: #595959;
            color: #595959;
            width: 100%;
            display: inline-flex;
            transition: 0.3s;
            align-items: center;
            padding-top: var(--dl-space-space-halfunit);
            padding-left: var(--dl-space-space-unit);
            border-radius: var(--dl-radius-radius-radius4);
            padding-right: var(--dl-space-space-unit);
            padding-bottom: var(--dl-space-space-halfunit);
          }
          .navbar-dropdown-toggle06:hover {
            fill: #fff;
            color: #fff;
            background-color: #595959;
          }
          .navbar-text07 {
            width: 100%;
            cursor: pointer;
            display: flex;
            font-size: 14px;
            font-style: normal;
            font-weight: 500;
          }
          .navbar-dropdown07 {
            cursor: pointer;
            display: inline-block;
            position: relative;
            border-radius: var(--dl-radius-radius-radius2);
          }
          .navbar-dropdown-toggle07 {
            fill: #595959;
            color: #595959;
            width: 100%;
            display: inline-flex;
            transition: 0.3s;
            align-items: center;
            padding-top: var(--dl-space-space-halfunit);
            padding-left: var(--dl-space-space-unit);
            border-radius: var(--dl-radius-radius-radius4);
            padding-right: var(--dl-space-space-unit);
            padding-bottom: var(--dl-space-space-halfunit);
          }
          .navbar-dropdown-toggle07:hover {
            fill: #fff;
            color: #fff;
            background-color: #595959;
          }
          .navbar-text08 {
            width: 100%;
            cursor: pointer;
            display: flex;
            font-size: 14px;
            font-style: normal;
            font-weight: 500;
          }
          .navbar-dropdown08 {
            cursor: pointer;
            display: inline-block;
            position: relative;
            border-radius: var(--dl-radius-radius-radius2);
          }
          .navbar-dropdown-toggle08 {
            fill: #595959;
            color: #595959;
            width: 100%;
            display: inline-flex;
            transition: 0.3s;
            align-items: center;
            padding-top: var(--dl-space-space-halfunit);
            padding-left: var(--dl-space-space-unit);
            border-radius: var(--dl-radius-radius-radius4);
            padding-right: var(--dl-space-space-unit);
            padding-bottom: var(--dl-space-space-halfunit);
          }
          .navbar-dropdown-toggle08:hover {
            fill: #fff;
            color: #fff;
            background-color: #595959;
          }
          .navbar-text09 {
            width: 100%;
            cursor: pointer;
            display: flex;
            font-size: 14px;
            font-style: normal;
            font-weight: 500;
          }
          .navbar-dropdown09 {
            cursor: pointer;
            display: inline-block;
            position: relative;
            border-radius: var(--dl-radius-radius-radius2);
          }
          .navbar-dropdown-toggle09 {
            fill: #595959;
            color: #595959;
            width: 100%;
            display: inline-flex;
            transition: 0.3s;
            align-items: center;
            padding-top: var(--dl-space-space-halfunit);
            padding-left: var(--dl-space-space-unit);
            border-radius: var(--dl-radius-radius-radius4);
            padding-right: var(--dl-space-space-unit);
            padding-bottom: var(--dl-space-space-halfunit);
          }
          .navbar-dropdown-toggle09:hover {
            fill: #fff;
            color: #fff;
            background-color: #595959;
          }
          .navbar-text10 {
            width: 100%;
            cursor: pointer;
            display: flex;
            font-size: 14px;
            font-style: normal;
            font-weight: 500;
          }
          .navbar-burger-menu {
            display: none;
            align-items: center;
            justify-content: center;
          }
          .navbar-icon {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .navbar-mobile-menu {
            top: 0px;
            left: 0px;
            width: 100%;
            height: 100vh;
            display: none;
            padding: 32px;
            z-index: 100;
            position: fixed;
            flex-direction: column;
            justify-content: space-between;
            background-color: #fff;
          }
          .navbar-nav1 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .navbar-container2 {
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-threeunits);
            justify-content: space-between;
          }
          .navbar-logo {
            color: rgb(255, 255, 255);
            font-size: 32px;
            font-style: normal;
            font-weight: 600;
          }
          .navbar-menu-close {
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .navbar-icon02 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .navbar-nav2 {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .navbar-text11 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .navbar-text12 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .navbar-text13 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .navbar-text14 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .navbar-text15 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .navbar-text16 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .navbar-container3 {
            flex: 0 0 auto;
            width: auto;
            display: flex;
            margin-top: var(--dl-space-space-unit);
            align-items: center;
            flex-direction: row;
          }
          .navbar-login {
            margin-right: var(--dl-space-space-twounits);
          }
          .navbar-icon-group {
            display: flex;
          }
          .navbar-icon04 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            margin-right: var(--dl-space-space-twounits);
          }
          .navbar-icon06 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            margin-right: var(--dl-space-space-twounits);
          }
          .navbar-icon08 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }

          @media (max-width: 991px) {
            .navbar-navbar {
              width: 100%;
            }
            .navbar-desktop-menu {
              display: none;
            }
            .navbar-burger-menu {
              display: flex;
            }
            .navbar-button {
              display: flex;
              padding: var(--dl-space-space-unit);
              flex-direction: row;
            }
            .navbar-logo {
              color: #000000;
            }
          }
          @media (max-width: 767px) {
            .navbar-navbar {
              width: 697px;
              margin-right: 0px;
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
          }
          @media (max-width: 479px) {
            .navbar-navbar {
              width: 100%;
              padding: var(--dl-space-space-unit);
            }
            .navbar-pasted-image {
              width: 78px;
              height: 51px;
            }
            .navbar-container1 {
              display: none;
            }
            .navbar-mobile-menu {
              padding: 16px;
            }
          }
        `}
      </style>
    </>
  );
}

Navbar.defaultProps = {
  pastedImage_src: "/playground_assets/pastedimage-8ml4-200h.png",
  pastedImage_alt: "pastedImage",
  image_src: "/playground_assets/211818_search_icon.svg",
  image_alt: "image",
  Input_placeholder: "請輸入關鍵字",
  text: "創作文章",
  Logo: "Character",
  text1: "About",
  text2: "Features",
  text3: "Features",
  text4: "Pricing",
  text5: "Team",
  text6: "Blog",
  Login: "Login",
  Register: "Register",
  image_src1: "https://ih1.redbubble.net/image.3114059041.7813/st,small,845x845-pad,1000x1000,f8f8f8.jpg",
  image_alt1: "image",
  text7: "BT21_RJ012525",
  image_src2: "/playground_assets/pastedimage-95s-200h.png",
  image_alt2: "image",
  text8: "登入",
  text9: "我的個人主頁",
  text10: "我的錢包",
  text11: "管理後台",
  text12: "登出",
  text13: "我的個人主頁",
  text14: "我的錢包",
  text15: "管理後台",
  text16: "登出",
  rootClassName: "",
};

Navbar.propTypes = {
  pastedImage_src: PropTypes.string,
  pastedImage_alt: PropTypes.string,
  image_src: PropTypes.string,
  image_alt: PropTypes.string,
  Input_placeholder: PropTypes.string,
  text: PropTypes.string,
  Logo: PropTypes.string,
  text1: PropTypes.string,
  text2: PropTypes.string,
  text3: PropTypes.string,
  text4: PropTypes.string,
  text5: PropTypes.string,
  text6: PropTypes.string,
  Login: PropTypes.string,
  Register: PropTypes.string,
  image_src1: PropTypes.string,
  image_alt1: PropTypes.string,
  text7: PropTypes.string,
  image_src2: PropTypes.string,
  image_alt2: PropTypes.string,
  text8: PropTypes.string,
  text9: PropTypes.string,
  text10: PropTypes.string,
  text11: PropTypes.string,
  text12: PropTypes.string,
  text13: PropTypes.string,
  text14: PropTypes.string,
  text15: PropTypes.string,
  text16: PropTypes.string,
  rootClassName: PropTypes.string,
};

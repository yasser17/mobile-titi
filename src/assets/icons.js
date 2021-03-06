import React from 'react';
import Svg, { Path, G, Circle } from 'react-native-svg';

export const Plus = (props) => {
    return (
        <Svg
            xmlns="http://www.w3.org/2000/svg"
            width={40}
            height={40}
            viewBox="0 0 24 24"
            fill="none"
            stroke="#4c4c4c"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="prefix__feather prefix__feather-plus"
            {...props}>
            <Path d="M12 5v14M5 12h14" />
        </Svg>
    );
};

export const Menu = (props) => {
    return (
        <Svg
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            stroke="#fff"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="prefix__feather prefix__feather-menu"
            {...props}>
            <Path d="M3 12h18M3 6h18M3 18h18" />
        </Svg>
    );
};

export const MarketIcon = (props) => {
    return (
        <Svg
            height={100}
            viewBox="0 -26 512 512"
            width={100}
            xmlns="http://www.w3.org/2000/svg"
            {...props}>
            <G className="prefix__nc-icon-wrapper">
                <Path
                    d="M482 9.668H30c-11.05 0-20 8.95-20 20v120c0 14.574 8.238 27.328 20.191 34.32l-.191.328v85.352h452v-85.352l-.191-.328C493.746 177.031 502 164.23 502 149.668v-120c0-11.05-8.95-20-20-20zm0 0M358 390h124v60H358zm0 0"
                    fill="#f2f2fc"
                />
                <Path d="M358 270h124v120H358zm0 0" fill="#63cef7" />
                <Path d="M153 230v220h205V230H153zm0 0" fill="#61729b" />
                <Path d="M30 390h123v60H30zm0 0" fill="#f2f2fc" />
                <Path d="M30 270h123v120H30zm0 0" fill="#63cef7" />
                <G fill="#ff5d5d">
                    <Path d="M338 10v140c0 22.078 18.918 40 41 40 22.09 0 41-17.91 41-40V10zm0 0M174 150c0 22.078 18.918 40 41 40 22.09 0 41-17.91 41-40V10h-82zm0 0M10 30v120c0 22.086 18.914 40 41 40 22.078 0 41-17.918 41-40V10H30c-11.05 0-20 8.95-20 20zm0 0" />
                </G>
                <Path d="M318 380c-5.52 0-11 4.48-11 10s5.48 10 11 10 10-4.48 10-10-4.48-10-10-10zm0 0" />
                <Path d="M20 189.504V450c0 5.523 4.477 10 10 10h452c5.523 0 10-4.477 10-10V189.523c12.2-9.226 20-23.507 20-39.523V30c0-16.543-13.457-30-30-30H30C13.457 0 0 13.457 0 30v120c0 15.418 7.543 30.063 20 39.504zM461 200c3.71 0 7.398-.414 11-1.215V260H368v-30c0-5.523-4.477-10-10-10H153c-5.523 0-10 4.477-10 10v30H40v-61.215A50.78 50.78 0 0051 200c16.25 0 31.281-7.668 41-20.473C101.684 192.29 116.695 200 133 200c16.273 0 31.309-7.695 41.004-20.469C183.704 192.312 198.723 200 215 200c16.273 0 31.309-7.695 41.004-20.469C265.704 192.312 280.723 200 297 200c16.273 0 31.309-7.695 41.004-20.469C347.704 192.312 362.723 200 379 200c16.336 0 31.348-7.746 41-20.465C429.676 192.281 444.7 200 461 200zM40 280h103v100H40zm123-40h83v200h-83zm103 0h82v200h-82zm102 40h104v100H368zm42-130c0 16.262-14.195 30-31 30-16.422 0-31-13.316-31-30v-30h62zm-82 0c0 16.262-14.195 30-31 30-16.422 0-31-13.316-31-30v-30h62zm-62-50V20h62v80zm-20 0h-62V20h62zm0 20v30c0 16.262-14.195 30-31 30-16.422 0-31-13.316-31-30v-30zm-82 30c0 16.262-14.195 30-31 30-16.422 0-31-13.316-31-30v-30h62zm-82 0c0 16.637-14.531 30-31 30-16.691 0-31-13.598-31-30v-30h62zM40 400h103v40H40zm328 40v-40h104v40zm93-260c-16.805 0-31-13.738-31-30v-30h62v30c0 16.629-14.508 30-31 30zm21-160c5.516 0 10 4.484 10 10v70h-62V20zm-72 80h-62V20h62zM164 20v80h-62V20zM30 20h52v80H20V30c0-5.516 4.484-10 10-10zm0 0" />
                <Path d="M318 300c-5.523 0-10 4.477-10 10v40c0 5.523 4.477 10 10 10s10-4.477 10-10v-40c0-5.523-4.477-10-10-10zm0 0" />
            </G>
        </Svg>
    );
};

export const SearchIcon = (props) => {
    return (
        <Svg
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            viewBox="0 0 24 24"
            className="prefix__feather prefix__feather-search"
            {...props}>
            <G
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth={2}
                fill="none"
                stroke="#111"
                className="prefix__nc-icon-wrapper">
                <Circle cx={11} cy={11} r={8} />
                <Path d="M21 21l-4.35-4.35" />
            </G>
        </Svg>
    );
};

export const HomeIcon = (props) => {
    return (
        <Svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 48 48"
            width={props.size}
            height={props.size}
            {...props}>
            <G
                className="prefix__nc-icon-wrapper"
                strokeLinecap="square"
                strokeWidth={2}
                fill="none"
                stroke={props.color}
                strokeMiterlimit={10}>
                <Path
                    data-cap="butt"
                    strokeLinecap="butt"
                    d="M8 18.5V44h12V34h8v10h12V18.5"
                />
                <Path
                    data-cap="butt"
                    data-color="color-2"
                    strokeLinecap="butt"
                    d="M8 18V6h6v7.1"
                />
                <Path data-color="color-2" d="M20 18h8v8h-8z" />
                <Path
                    data-cap="butt"
                    data-color="color-2"
                    strokeLinecap="butt"
                    d="M2 24L24 4l22 20"
                />
            </G>
        </Svg>
    );
};

export const MessageIcon = (props) => {
    return (
        <Svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 48 48"
            width={props.size}
            height={props.size}
            {...props}>
            <G
                className="prefix__nc-icon-wrapper"
                strokeLinecap="square"
                strokeWidth={2}
                fill="none"
                stroke={props.color}
                strokeMiterlimit={10}>
                <Path
                    data-cap="butt"
                    data-color="color-2"
                    strokeLinecap="butt"
                    d="M37.999 10H46v26h-8v8l-12-8h-5"
                />
                <Path d="M38 2H2v26h8v10l14-10h14z" />
            </G>
        </Svg>
    );
};

export const MoreIcon = (props) => {
    return (
        <Svg
            xmlns="http://www.w3.org/2000/svg"
            width={props.size}
            height={props.size}
            viewBox="0 0 24 24"
            className="prefix__feather prefix__feather-more-horizontal"
            {...props}>
            <G
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth={2}
                fill="none"
                stroke={props.color}
                className="prefix__nc-icon-wrapper">
                <Circle cx={12} cy={12} r={1} />
                <Circle cx={19} cy={12} r={1} />
                <Circle cx={5} cy={12} r={1} />
            </G>
        </Svg>
    );
};

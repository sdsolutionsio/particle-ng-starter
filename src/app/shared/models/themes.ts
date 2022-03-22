import {Theme} from '@sdsolutions/particle-ng';

export const THEMES: Array<Theme> = [
  {
    themeId: 1,
    isDefault: true,
    name: 'Default',
    menuColor: '#3f6570',
    navColor: '#1f5a69',
    footerColor: '#4d4d4d',
    bodyColor: '#d9d9d9',
    pageContainerColor: '#FEFEFE',
    dialogHeaderColor: '#43555e',
    dialogBodyColor: '#FEFEFE',
    pushContainerColor: '#FEFEFE',
    overlayStyle: 'border:1px solid rgba(0,0,0,0.1);background-color:#EFEFEF;color:#222222;',
    overlayStyleAlt1: 'border:1px solid rgba(150,150,150,0.5);background-color:rgba(0,0,0,0.1);color:#111111;',
    overlayStyleAlt2: 'border:1px solid rgba(150,150,150,0.5);background-color:rgba(255,255,255,0.1);color:#111111;',
    bgRed: '#823841',
    bgOrange: '#946a15',
    bgYellow: '#7a7626',
    bgGreen: '#447d4c',
    bgBlue: '#317d99',
    bgPurple: '#7b507d',
    bgBrown: '#67523f',
    bgGrey: '#707070',
    extension: [
      {className: 'bg_red_alt', color: '#944646'},
      {className: 'bg_orange_alt', color: '#a1660d'},
      {className: 'bg_yellow_alt', color: '#7a7a0f'},
      {className: 'bg_green_alt', color: '#37852b'},
      {className: 'bg_blue_alt', color: '#0b799e'},
      {className: 'bg_purple_alt', color: '#8a4878'},
      {className: 'bg_brown_alt', color: '#6b6032'},
      {className: 'bg_grey_alt', color: '#616161'},
    ],
    fonts: [
      {name: 'Montserrat', isDefault: true}
    ]
  } as Theme,
  {
    themeId: 2,
    isDefault: false,
    name: 'Other',
    menuColor: '#230e26',
    navColor: '#2c0a38',
    footerColor: '#192752',
    bodyColor: '#151515',
    pageContainerColor: '#000000',
    dialogHeaderColor: '#2b4044',
    dialogBodyColor: '#2c2c2c',
    pushContainerColor: '#413f3f',
    overlayStyle: 'border:1px solid rgba(0,0,0,0.1);background-color:#EFEFEF;color:#222222;',
    overlayStyleAlt1: 'border:1px solid rgba(150,150,150,0.5);background-color:rgba(0,0,0,0.05);color:#FFFFFF;',
    overlayStyleAlt2: 'border:1px solid rgba(150,150,150,0.5);background-color:rgba(255,255,255,0.05);color:#FFFFFF;',
    bgRed: '#910f20',
    bgOrange: '#9f6f03',
    bgYellow: '#6e680d',
    bgGreen: '#1c962a',
    bgBlue: '#1a5d75',
    bgPurple: '#56185b',
    bgBrown: '#493c31',
    bgGrey: '#4b4848',
    extension: [
      {className: 'bg_red_alt', color: '#944646'},
      {className: 'bg_orange_alt', color: '#a1660d'},
      {className: 'bg_yellow_alt', color: '#7a7a0f'},
      {className: 'bg_green_alt', color: '#37852b'},
      {className: 'bg_blue_alt', color: '#0b799e'},
      {className: 'bg_purple_alt', color: '#8a4878'},
      {className: 'bg_brown_alt', color: '#6b6032'},
      {className: 'bg_grey_alt', color: '#616161'},
    ],
    fonts: [
      {name: 'Roboto', isDefault: true}
    ]
  } as Theme
];
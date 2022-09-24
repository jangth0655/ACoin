import { createGlobalStyle, DefaultTheme } from "styled-components";

export const darkTheme: DefaultTheme = {
  color: {
    bg: "rgb(24 24 27)",
    textColor: {
      xs: "rgb(161 161 170)", //400
      sm: "rgb(113 113 122)", // 500
      md: "rgb(250 250 250)", // 50
      lg: "white",
    },
    activeColor: {
      xs: "rgb(94 234 212)",
      sm: "rgb(45 212 191)",
      md: "rgb(20 184 166)",
      lg: "rgb(13 148 136)",
      xl: "rgb(15 118 110)",
    },
  },
  textSize: {
    xs: "0.75rem",
    sm: "0.875rem",
    md: "1rem",
    lg: "1.125rem",
    xl: "1.25rem",
    xxl: "1.5rem",
    xxxl: "1.875rem",
  },
  borderRadius: {
    sm: "0.125rem",
    md: "0.375rem",
    lg: "0.5rem",
    xl: "0.75rem",
  },
  shadow: {
    sm: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
    md: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
    lg: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
    xl: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
  },
  maxWidth: {
    sm: "36rem",
    md: "42rem",
    lg: "48rem",
    xl: "56rem",
  },
  mp: {
    xs: "0.25rem",
    sm: "0.5rem",
    md: "1rem",
    lg: "1.5rem",
    xl: "2rem",
    xxl: "2.5rem",
    xxxl: "3rem",
    xxxxl: "3.5rem",
  },
  transition: {
    sm: "all 150ms cubic-bezier(0.4, 0, 0.2, 1)",
    md: "all 180ms cubic-bezier(0.4, 0, 0.2, 1)",
    lg: "all 200ms cubic-bezier(0.4, 0, 0.2, 1)",
  },
  responsive: {
    sm: "640px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
  },
};

export const lightTheme: DefaultTheme = {
  color: {
    bg: "rgb(244 244 245)",
    textColor: {
      xs: "rgb(161 161 170)", //400
      sm: "rgb(113 113 122)", // 500
      md: "rgb(39 39 42)", // 800
      lg: "rgb(24 24 27)", // 900
    },
    activeColor: {
      xs: "rgb(147 197 253)", //300
      sm: "rgb(96 165 250)", //400
      md: "rgb(59 130 246)", //500
      lg: "rgb(37 99 235)", // 600
      xl: "rgb(29 78 216)", // 700
    },
  },
  textSize: {
    xs: "0.75rem",
    sm: "0.875rem",
    md: "1rem",
    lg: "1.125rem",
    xl: "1.25rem",
    xxl: "1.5rem",
    xxxl: "1.875rem",
  },

  borderRadius: {
    sm: "0.125rem",
    md: "0.375rem",
    lg: "0.5rem",
    xl: "0.75rem",
  },
  shadow: {
    sm: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
    md: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
    lg: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
    xl: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
  },
  maxWidth: {
    sm: "36rem",
    md: "42rem",
    lg: "48rem",
    xl: "56rem",
  },
  mp: {
    xs: "0.25rem",
    sm: "0.5rem",
    md: "1rem",
    lg: "1.5rem",
    xl: "2rem",
    xxl: "2.5rem",
    xxxl: "3rem",
    xxxxl: "3.5rem",
  },
  transition: {
    sm: "all 150ms cubic-bezier(0.4, 0, 0.2, 1)",
    md: "all 180ms cubic-bezier(0.4, 0, 0.2, 1)",
    lg: "all 200ms cubic-bezier(0.4, 0, 0.2, 1)",
  },
  responsive: {
    sm: "640px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
  },
};

export const GlobalStyle = createGlobalStyle`
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
* { 
	box-sizing: border-box;
}
body {
	line-height: 1.2;
	font-family: 'Source Sans Pro', sans-serif;
  background-color: ${(props) => props.theme.color.bg};
}
a { 
	text-decoration: none;
  color: inherit;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
`;

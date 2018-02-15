import { injectGlobal } from 'styled-components';

injectGlobal`
@import url('https://fonts.googleapis.com/css?family=Roboto+Condensed');

body {
    font-family: 'Roboto Condensed', sans-serif;
    margin: 0;
}
`;

export * from './CarouselContainer';
export * from './Footer';
export * from './Header';
export * from './Wrapper';

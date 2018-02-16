import styled from 'styled-components';
import * as utils from '../utils';

const { media } = utils;

const Wrapper = styled.div`
    margin: 0 auto;
    width: 90%;

    ${media.tablet`
        margin: 0;
        width: 85%;
    `}
`;

export { Wrapper };
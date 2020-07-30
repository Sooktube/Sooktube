import styled from 'styled-components';
import ReactPlayer from "react-player";

export const PlayerWrapper = styled.div`
    position: relative;
    padding-top: 56.25% /* Player ratio: 100 / (1280 / 720) */
`;

export const StyledReactPlayer = styled(ReactPlayer)`
    position: absolute;
    top: 0;
    left: 0;
`;





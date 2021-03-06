import React from 'react';
import * as S from './style';

function VideoPlayer({url, controls}){
    return (
        <S.PlayerWrapper>
            <S.StyledReactPlayer
                controls={controls ? controls : true}
                url={url ? url : '/'}
                width='100%'
                height='100%'
            />
        </S.PlayerWrapper>
    );
}

export default VideoPlayer;
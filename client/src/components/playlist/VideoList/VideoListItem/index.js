import React from 'react';
import * as S from "./style";
import {history} from "../../../../helpers";
import RecommendVideo from "../../RecommendVideo";
import {playlistService} from "../../../../services/playlist.service"
import {useSelector} from "react-redux";


function VideoListItem({inVideoList, checkplaylist, videoID, url, title, username, date, recommended, disrecommended, recCount, disrecCount, listUsername, listID, playlist, isPublic}){
    const currentUsername = useSelector(state => state.authentication.username);

    function handleClick() {
        history.push(`/@${username}/video/${videoID}`);
    }

    function DeleteClick(){
        playlistService.deleteVideoInPlaylist(username,listID, videoID)
        .then(()=>{
            window.location.replace(`/playlist/${listID}`);
        })
    }

    return(
        <S.VideoWrapper>
            <S.Video src={url} onClick={handleClick}/>
            <S.VideoInfo>
                <S.VideoTitle>
                    {title}
                    <S.InVideoList checkplaylist={checkplaylist} count={recCount + disrecCount}/>
                </S.VideoTitle>
                <S.VideoDetail>
                    <div> {username} </div>
                    <div> {date} </div>
                    {playlist === 1 && listUsername === currentUsername &&
                        <S.DeleteButton onClick={() => {
                         if(window.confirm('비디오을 이 재생목록에서 삭제하시겠습니까?')) DeleteClick()}}/>}
                </S.VideoDetail>
            </S.VideoInfo>
            <S.VideoLike>
                {isPublic === 1 && <RecommendVideo videoID={videoID}
                                                   inVideoList={checkplaylist ? inVideoList : 1}
                                                   username={username}
                                                   recommended={recommended}
                                                   recCount={recCount}
                                                   disrecommended={disrecommended}
                                                   disrecCount={disrecCount}/>}
            </S.VideoLike>
        </S.VideoWrapper>
    );
}

export default VideoListItem;
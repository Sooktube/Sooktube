package com.SOOKTUBE.dao;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import com.SOOKTUBE.model.VideoListDTO;

public interface VideoListDAO {
	
	VideoListDTO[] getVideoList() throws Exception;
	VideoListDTO[] getVideoListbyID(int listID) throws Exception;
	
	VideoListDTO getListbyID(int listID) throws Exception;
	VideoListDTO getVideoListbyVideoID(@Param("videoID") int videoID, @Param("listID") int listID) throws Exception;
	
	
	List<String> getFileNamebylistID(int listID) throws Exception;
	List<String> getFileNamebylistIDGTEQ5(int listID) throws Exception;
	List<String> getFileNamebylistIDbetween0and5(int listID) throws Exception;
	
	List<String> getFileNamebylistName(String listName);
	
	//insert new videoList
	int newList(VideoListDTO list) throws Exception;
	int newListInfo(VideoListDTO list) throws Exception;
	
	//search
	VideoListDTO[] searchListbyTitle(String listName) throws Exception;
	
	//like&dislike
	int editLike(VideoListDTO list) throws Exception;
	int editDislike(VideoListDTO list) throws Exception;
	
	
	//delete video
	int deleteVideoFromlist(@Param("videoID") int videoID, @Param("listID") int listID) throws Exception;

}

package com.SOOKTUBE.dao;

import org.apache.ibatis.annotations.Param;

import com.SOOKTUBE.model.ListCommentDTO;

public interface ListCommentDAO {
	
	//insert
	int commentList(ListCommentDTO comment) throws Exception;
	
	//update 
	int editListComment(ListCommentDTO comment) throws Exception;
	
	//select comment
	ListCommentDTO getComments(@Param("commentID") int commentID, @Param("listID") int listID, @Param("username") String username) throws Exception;
	ListCommentDTO[] getCommentsByListID(int listID) throws Exception;
	
	
	//delete comment
	int deleteListComment(@Param("commentID") int commentID, @Param("listID") int listID, @Param("username") String username) throws Exception;

}

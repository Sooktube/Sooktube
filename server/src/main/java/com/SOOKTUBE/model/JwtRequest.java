package com.SOOKTUBE.model;

import java.io.Serializable;

//This class is required for storing the username and password we recieve from the client.
public class JwtRequest implements Serializable {

	private static final long serialVersionUID = 5926468583005150707L;
	
	private String username;
	private String password;
	private String userID;
	private String profilepic;
	private String picpath;
	
	//need default constructor for JSON Parsing
	public JwtRequest()
	{
		
	}

	public JwtRequest(String userID, String username, String password, String profilepic, String picpath) {
		this.setUserID(userID);
		this.setUsername(username);
		this.setPassword(password);
		this.setProfilepic(profilepic);
		this.setPicpath(picpath);
	}

	public String getUsername() {
		return this.username;
	}

	public void setUsername(String username) {
		this.username = username;
	}
	
	public String getUserID() {
		return userID;
	}

	public void setUserID(String userID) {
		this.userID = userID;
	}

	public String getPassword() {
		return this.password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getProfilepic() {
		return profilepic;
	}

	public void setProfilepic(String profilepic) {
		this.profilepic = profilepic;
	}


	public String getPicpath() {
		return picpath;
	}

	public void setPicpath(String picpath) {
		this.picpath = picpath;
	}
	 
}

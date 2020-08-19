import styled from 'styled-components';
import {MAIN} from "../../style/Main";
import {RiChatUploadLine,BsThreeDotsVertical} from "react-icons/all";

export const CommentBox = styled.div`
    width:100%;
    margin-top: 1rem;
    overflow: auto;
    border-radius: 15px;
    height: 25rem;
    background:#ffffff;
    display:block;
    padding-top:1%;
    padding-bottom:2.5%;
`;

export const CommentContainer= styled.div`
    width:100%;
    display: flex;
    position:relative;
    flex-direction:row;
    margin-top:1em;
    margin-bottom:1em;
    text-align:left;
    vertical-align:top;
    padding:1vh;
`;

export const CommentTitle = styled.div`
    position:static;
    font-size:2.6vh;
    font-weight:bold;
    margin-top:1.4em;
    margin-left:1em;
    margin-bottom:1em;
    
`;

export const Photo = styled.img`
    width:5vh;
    height:5vh;
    border-radius:2.5vh;
    margin-left:1rem;
`;

export const TextBox = styled.div`
    margin-left:1.5em;
    width:90%;
`;

export const EditInput = styled.input`
    font-size:2.5vh;
    padding-bottom: 0.3em;
    width: 75%;
    margin-left: 1em;
    border-top-style: hidden;
    border-right-style: hidden;
    border-left-style: hidden;
    border-bottom: 2px solid ${MAIN.BORDER_COLOR};
    &:focus {
      outline: none;
      transition: border-color 0.5s ease;  
      border-bottom: 3px solid ${MAIN.BASE_COLOR};
    }
`;

export const SaveButton = styled(RiChatUploadLine)`
    width: 5vw;
    height: 5vh;
    padding-top: 0;
    text-align: center;
    border-radius: 50%;
    color: #868e96;
    &:hover {
      cursor:pointer;
      color:${MAIN.BASE_COLOR};
    }
`;

export const Username = styled.div`
    font-weight:500;
    font-size:2.2vh;
    margin-bottom:0.5em;
    color:gray;
`;

export const Text = styled.div`
    font-size:2.5vh;
`;

export const AddCommentWrapper = styled.div`
    height: 3rem;
    display: flex;
    color: darkgray;
    &:focus-within {
      color: ${MAIN.BASE_COLOR};
    }
`;
export const UserProfile = styled.img`
    width:5vh;
    height:5vh;
    margin-left:1rem;
    margin-top: 0.2em;
    border-radius:2.5vh;
`;


export const TextInput = styled.input`
    font-size:2.5vh;
    padding-bottom: 0.3em;
    width: 70%;
    margin-left: 1em;
    border-top-style: hidden;
    border-right-style: hidden;
    border-left-style: hidden;
    border-bottom: 2px solid ${MAIN.BORDER_COLOR};
    &:focus {
      outline: none;
      transition: border-color 0.5s ease;  
      border-bottom: 3px solid ${MAIN.BASE_COLOR};
    }
`;

export const SubmitButton = styled(RiChatUploadLine)`
    width: 5vw;
    height: 5vh;
    padding-top: 0;
    text-align: center;
    border-radius: 50%;
    &:hover {
	  cursor:pointer;
    }
`;

export const DotIcon = styled(BsThreeDotsVertical)`
    width: 4vw;
    height: 4vh;
    float:right;
    color: #a9a9a9;
    &:hover {
	    cursor:pointer;
        color:#868e96;
    }
`;

export const CreateDropdownContent = styled.div`
    position: absolute;
    margin-top: 2.2em;
    right: 2em;
    z-index: 200;
    border-radius: 15px;
    box-shadow: -0.05px -0.05px 10px rgba(0,0,0,0.2) ;
`;

export const EditButton = styled.button`
    padding: 1em 2em 1em 2em;
    font-size: 1.8vh;
    font-weight:400;
    color:#495057;
    background-color:white;
    text-decoration: none;
    display: block;
    border:none;
    &:hover {
        text-decoration: none;
        background-color: #dee2e6;
    }
`;
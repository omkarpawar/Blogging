import { PostList as PostListData } from "../Store/Post-List-Store";
import { useContext, useEffect,useState } from "react";
import WelcomeMessage from "./WelcomeMessage";
import Post from "./Post";
import LoadingSpinner from "./LoadingSpinner";


const PostList=()=>{

  const {postList,fetching}=useContext(PostListData)

  return(
    <div>
      {fetching && <LoadingSpinner/>}
      {!fetching && postList.length===0 && <WelcomeMessage/>}
      {!fetching && postList.map((post,index)=><Post key={index} post={post}/>)}
    </div>
  )
}
export default PostList;
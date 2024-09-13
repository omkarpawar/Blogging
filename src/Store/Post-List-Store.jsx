import { createContext, useReducer,useState,useEffect } from "react";

export const PostList = createContext({
  postList:[],
  addPost:()=>{},
  deletePost:()=>{},
  fetching:false,
})

const postListReducer=(currList,action)=>{
  let newList=currList;
  if(action.type==="DELETE_POST"){
    newList=currList.filter((post)=>post.id !== action.payload.postId)
  }else if(action.type === 'ADD_POST'){
    newList=[action.payload.post,...currList]
  }else if(action.type==='ADD_INITIAL_POSTS'){
    newList=action.payload.posts;
  }
  return newList;
  
}

const PostListProvider=({children})=>{

  const [postList,dispatchPostlist]=useReducer(postListReducer,posts)
  const [fetching,setFetching]=useState(false)

  const addPost=(post)=>{
    console.log(post)
    dispatchPostlist({
      type:'ADD_POST',
      payload:{
        post,
      },
    })   
  }
  const deletePost=(postId)=>{
    console.log(postId)
    dispatchPostlist({
      type:'DELETE_POST',
      payload:{
        postId,
      },
    })
  }

  const addInitialPosts=(posts)=>{
    console.log(posts)
    dispatchPostlist({
      type:'ADD_INITIAL_POSTS',
      payload:{
        posts,
      },
    })
  }
  

  
  useEffect(()=>{
      setFetching(true)
    fetch('https://dummyjson.com/posts')
    .then(res => res.json())
    .then(data=>{
      addInitialPosts(data.posts)
      setFetching(false)
    });
  },[])

  return <PostList.Provider value={{postList,addPost,fetching,deletePost}}>{children}</PostList.Provider>
}

const posts=[]

export default PostListProvider;
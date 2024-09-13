import { useContext, useRef } from "react";
import { PostList } from "../Store/Post-List-Store";


const CreatePost=()=>{
   
  const {addPost}=useContext(PostList)

  const postIdElement=useRef()
  const postTitleElement=useRef()
  const postBodyElement=useRef()
  const reactionsElement=useRef()
  const tagsElement=useRef()

  const formSubmitHandler=(event)=>{
    event.preventDefault();

    const postId= postIdElement.current.value;
    const postTitle=postTitleElement.current.value;
    const postBody=postBodyElement.current.value;
    const reactions=reactionsElement.current.value;
    const tags=tagsElement.current.value.split(" ");

    fetch('https://dummyjson.com/posts/add', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        userId:postId,
        title:postTitle,
        body:postBody,
        reactions:reactions,
        tags:tags,
        
      })
    })
    .then(res => res.json())
    .then(data=>addPost(data));

    
  }

  return(
    <div>
      <form className="form" onSubmit={formSubmitHandler}>


        <div class="mb-3">
          <label htmlFor="postID" class="form-label">Post ID</label>
          <input type="number" ref={postIdElement} class="form-control" id="postID" aria-describedby="emailHelp"/>
        </div>

        <div class="mb-3">
          <label htmlFor="postTitle" class="form-label">Post Title</label>
          <input type="text" ref={postTitleElement} class="form-control" id="postTitle" aria-describedby="emailHelp"/>
        </div>

        <div class="mb-3">
          <label htmlFor="postBody" class="form-label">Post Body</label>
          <textarea rows="4" ref={postBodyElement} type="text" class="form-control" id="postBody" aria-describedby="emailHelp"/>
        </div>

        <div class="mb-3">
          <label htmlFor="reactions" class="form-label">Reactions</label>
          <input type="number" ref={reactionsElement} class="form-control" id="reactions" aria-describedby="emailHelp"/>
        </div>

        
        <div class="mb-3">
          <label htmlFor="tags" class="form-label">tags</label>
          <input type="text" ref={tagsElement} class="form-control" id="tags" aria-describedby="emailHelp"/>
        </div>

        
        
        <button type="submit" class="btn btn-primary">Post</button>
      </form>
    </div>
  )
}
export default CreatePost;


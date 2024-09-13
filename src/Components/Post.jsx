import { useContext } from "react";
import { PostList } from "../Store/Post-List-Store";
import { MdDelete } from "react-icons/md";

const Post=({post})=>{

  const {deletePost}=useContext(PostList)
  
  return(
    <div>
      <div class="card post" style={{width: "32rem"}}>
        
        <div class="card-body">
          <h5 class="card-title">{post.title}
          <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" onClick={()=>{deletePost(post.id)}}>
          <MdDelete />
            <span class="visually-hidden">unread messages</span>
          </span>
          </h5>
          <p class="card-text">{post.body}</p>
          {post.tags.map((tag)=><span class="badge text-bg-primary tags">{tag}</span>)}

          <div class="alert alert-success reactions" role="alert">
            This Post was Liked by {post.reactions.likes} people
          </div>
          
          
        </div>
      </div>

    </div>
  )
}
export default Post;
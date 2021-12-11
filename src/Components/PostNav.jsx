import { Link } from "react-router-dom";


function PostNav({showLikePost,showAllPost}){
    return(
        <div id = "row-button" className="d-flex row justify-content-center ">
              <Link to="/likedpost" className="col col-md-3"><div  id= 'like'type="button"  className=" btn btn-primary col col-md-3 " onClick = {showLikePost}>Show Liked Post</div></Link>
               
               <Link to="/postall" className="col col-md-3"><div id='show'type="button"  className=" btn btn-primary col col-md-3 " onClick = {showAllPost}>Show All Post</div></Link>
           
           
        </div>
    )
}

export default PostNav;
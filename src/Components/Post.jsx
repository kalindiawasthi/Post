import PostNav from './PostNav'
const Loading = require('react-loading-animation');
function Post({list,loading,onReady,likePost,showLikePost,like,showAllPost}){


  
    return(
       <div className="container-fluid">
           <PostNav showLikePost = {showLikePost} showAllPost = {showAllPost}/>
        <div id = "row" className="d-flex row justify-content-center ">
            
 {list.map((i,index) => {
            
           
             return(
                
            <div key = {index} id = 'card'className="card col-xs-12 col-md-3"  >   
            
            <img id={i.url} className="card-img-top img-fluid  "src={i.url} alt="Post"  onLoad={ (event) => {onReady(event)} }/>
            {i.ready ? <div className="card-header text-muted text-wrap">{i.caption} </div> : 
            <div className="card-header text-muted text-wrap">{i.ready} </div>}
           <button type="button" id={i.url} className="btn btn-primary" onClick = {(event) => {likePost(event)}}>Like</button>
            
            </div>
            
            )} )}
            
        
       </div>
        {loading && <Loading />}
        
        </div>
        
    )
}


export default Post;


// list.map((i,index) => {
            
//     if (i.like){
//      return(
        
//     <div key = {index} id = 'card'className="card col-xs-12 col-md-3"  >   
    
//     <img id={i.url} className="card-img-top img-fluid  "src={i.url} alt="Post"  onLoad={ (event) => {onReady(event)} }/>
//     {i.ready ? <div className="card-header text-muted text-wrap">{i.caption} </div> : 
//     <div className="card-header text-muted text-wrap">{i.ready} </div>}
//    <button type="button" id={i.url} className="btn btn-primary" onClick = {(event) => {likePost(event)}}>Like</button>
    
//     </div>
    
//     )} else return null} 
    
// )
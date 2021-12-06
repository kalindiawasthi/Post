
const Loading = require('react-loading-animation');

function Post({list,loading,onReady}){


  
    return(
       <div className="container-fluid">
        <div className="d-flex row justify-content-center ">
        {list.map((i,index) => {
            
           
             return(
                
            <div key = {index} id = 'card'className="card col-xs-12 col-md-3"  >   
            
            <img id={i.url} className="card-img-top img-fluid  "src={i.url} alt="Post"  onLoad={ (event) => {onReady(event)} }/>
            {i.ready ? <div className="card-header text-muted text-wrap">{i.caption} </div> : 
            <div className="card-header text-muted text-wrap">{i.ready} </div>}
           
            
            </div>
            
            )} 
            
        )}
       </div>
        {loading && <Loading />}
        </div>
        
    )
}


export default Post;
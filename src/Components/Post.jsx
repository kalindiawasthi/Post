
const Loading = require('react-loading-animation');

function Post({list,loading}){



    return(
       <div className="container-fluid">
        <div className="d-flex row justify-content-center ">
        {list.map((i,index) => {
             return(
                
            <div key = {index} className="card text-wrap  mb-4 mr-4 col-xs-12 col-md-3 border border-dark rounded shadow p-3 mb-5 bg-white rounded"  >   
            
            <img className="card-img-top img-fluid  "src={i.url} alt="Post" />
            <div className="card-header text-muted text-wrap ">
            {i.caption}
            </div>
            </div>
            
            )
        })}
       </div>
        {loading && <Loading />}
        </div>
        
    )
}


export default Post;
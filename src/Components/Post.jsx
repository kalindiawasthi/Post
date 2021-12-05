const Loading = require('react-loading-animation');

function Post({list,loading}){

    return(
       <div>
        <div className="d-felx row justify-content-center">
        {list.map((i,index) => {
            return(
            <div key = {index} className="card mb-4" style={{width: '70%'}} >   
                <div className="card-body bg-light border-light">
                    <span className="card-text"><b>Caption:</b>{i.caption}</span>
                </div>
                <img className="card-img-top img-fluid" src={i.url} alt="Post"/>
            </div>)
        })}
       
        
        </div>
        {loading && <Loading />}
        </div>
        
    )
}


export default Post;
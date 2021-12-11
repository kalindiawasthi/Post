import Post from './Post';

import { useState ,useEffect} from 'react';
import { BrowserRouter,
    Routes,
    Route } from "react-router-dom";
    import LikedPost from './LikedPost';  

function Body(){
    const [postList,setPostList]= useState([])
    const [loading,setLoading] = useState(false)
    const [scroll,setScroll] = useState(true)
    const [like,setLike] = useState(false)
   
    function changeStatus (event){
       // console.log(event.target.id)
        setPostList(postList.map((i) => {
             return i.url === event.target.id?  {...i,ready: true} : {...i}
            
        }))
        //console.log(postList)
    }
    function addLike(event){
        console.log(event.target.id)
        setPostList(postList.map((i) => {
            return i.url === event.target.id?  {...i,like: true} : {...i}
           
       }))
       console.log(postList)
    }
    function showLikePosts(){
        setLike(true)
        
    }
    function showAll(){
        setLike(false)
        
    }
    useEffect(()=>{

        const data = localStorage.getItem('data')
        
        if(data){
            setPostList(JSON.parse(data))
         }
        
        },[])
        
        useEffect(()=>{
        
          localStorage.setItem('data',JSON.stringify(postList))
        
        })
    useEffect(() => {
        if (scroll && !like){
        const onScroll = function () {
           if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
               console.log('You have reached bottom of page')
               setLoading( l => !l)
           }
        }
        window.addEventListener('scroll', onScroll)
        return () => window.removeEventListener('scroll', onScroll)
     }})


     useEffect(() => {
        setScroll(false)
        
        Promise.all([fetch("https://api.thecatapi.com/v1/images/search?limit=5").then(response => response.json())
        ,fetch("https://catfact.ninja/facts?limit=5&max_length=140").then(response => response.json())])
        //fetch("https://dog.ceo/api/breeds/image/random/5")
        .then(data => { data[0].map((i,index) => {
            
            return setPostList(mi => [...mi,{url : i.url,
                caption : data[1].data[index].fact,
                ready : false,
            like : false}]) 
        })
      
            setScroll(true)
                })
                  
                
               
                       
      },[loading])


    return(
        <div >
        
        <BrowserRouter>
  <Routes>
  <Route path="/" element={<Post list = {postList}   loading = {loading}  onReady= {changeStatus} likePost = {addLike} showLikePost = {showLikePosts} like={like} showAllPost={showAll}/>} /> 
  <Route path="/postall" element={<Post list = {postList}   loading = {loading}  onReady= {changeStatus} likePost = {addLike} showLikePost = {showLikePosts} like={like} showAllPost={showAll}/>} /> 
  <Route path="/likedpost" element={<LikedPost list = {postList}   loading = {loading}  onReady= {changeStatus} likePost = {addLike} showLikePost = {showLikePosts} like={like} showAllPost={showAll} />} /> 
  </Routes>
  </BrowserRouter>      
        </div>
        
    )
}




export default Body;
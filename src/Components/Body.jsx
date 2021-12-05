import { useState ,useEffect} from 'react';
import Post from './Post'


function Body(){
    const [postList,setPostList]= useState([])
    const [loading,setLoading] = useState(false)
    const [scroll,setScroll] = useState(true)

    function addPost (){
        return(
            null
        )
    }
    useEffect(() => {
        if (scroll){
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
            return setPostList(mi => [...mi,{url : i.url,caption:data[1].data[index].fact}]) 
        })
            setScroll(true)
                })
        //https://dog.ceo/api/breeds/image/random/5
        //https://api.thecatapi.com/v1/images/search?limit=5
        // fetch("https://catfact.ninja/facts?limit=5&max_length=140")
        // .then(response => response.json())
        // .then(data => {data.data.map(i => {
        //     return setPostList(li => [...li,{caption :i.fact}]);
        //     })
            
        //     })                
                
               
                       
      },[loading])


    return(
        <div >
                <Post list = {postList} onAdd = {addPost}  loading = {loading} />
                
        </div>
        
    )
}




export default Body;
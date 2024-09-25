import PostCard from "./PostCard";
import { useState, useEffect } from "react";
import axios from "axios";
import LoadingList from "./LoadingList";
import Error from "./Error";


function PostList() {

    const[post, setPosts]= useState([]);
    const[isLoading, setIsLoading] = useState(false);
    const[isError,setIsError] = useState(false);

    useEffect(() => {
        async function fetchPosts(){
          try{
              setIsLoading(true);
              const response = await axios.get('https://a7393ee24ec84c0a.mokky.dev/post');
              // console.log(response.data);
              setPosts(response.data); //json
            } catch(error){
              setIsError(true);
              console.log(error);
            } finally{
              setIsLoading(false);
            }
          
        }
        fetchPosts();
    },[] );

   if(isError){
    return<Error/>;
   }


    return(
        <div class="categories">
          {isLoading ? (<LoadingList/>) : (
            <>
             {post.map((post) => (
              <PostCard key={post.id} post={post}/>
             ))}            
            
            </>
          )}
        </div>
    );
}

export default PostList;
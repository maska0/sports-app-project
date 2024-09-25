
import { useParams } from "react-router-dom";
import PostList from "../components/PostList";
import { useState, useEffect } from "react";
import axios from "axios";
import PostCard from "../components/PostCard";
import LoadingList from "../components/LoadingList";
import Error from "../components/Error"; 

function CategoryPage(){


    const {id} = useParams();
    const[post, setPosts]= useState([]);
    const [category, setCategory] = useState({});
    const[isLoading, setIsLoading] = useState(false);
    const[isError, setIsError] = useState(false);

    useEffect(() => {
        async function fetchCategory() {
            try {
                const response = await axios.get(`https://a7393ee24ec84c0a.mokky.dev/category/${id}`);
                console.log(response.data);
                setCategory(response.data); //json
            } catch(e) {
                console.log(e);

            }finally{
                setIsLoading(false);
            }
        }
        async function fetchPosts(){
            try{
                const response = await axios.get('https://a7393ee24ec84c0a.mokky.dev/post');
                console.log(response.data);
                setPosts(response.data); //json
              } catch(error){
                  setIsError(true);
                console.log(error);
              }finally{
                  setIsLoading(false);
              }
            
          }
          fetchPosts();
        fetchCategory()
    }, [id]);

    return(
    <section class="mobile-block">
        <div class="mobile-block_header is-secondary">
         <strong>{category.name}</strong>
        </div>
        <div class="categories">
        {isLoading ? (<LoadingList/>) : (
            <>
              {post.map((post) => {
                  return post.category === category.name?(
                    <PostCard key={post.id} post={post}/>
                  ) : null
               })}    
             </>
          )}
        </div>
    </section>
    );
}

export default CategoryPage;
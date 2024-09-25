import { useEffect, useState } from "react";
import backIcon from "../assets/css/imag/back-button.svg";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import LoadingDetailList from "../components/LoadingDetailList";
import Error from "../components/Error";

function ListPage(){
 
    const{id} = useParams();
    const[post, setPost] = useState({});
    const[isLoading, setIsLoading] = useState(false);
    const[isError, setIsError] = useState(false);
     
    useEffect(()=> {
        async function fetchPost() {
            try{
                setIsLoading(true);
              const response = await axios.get(`https://a7393ee24ec84c0a.mokky.dev/post/${id}`);
              setPost(response.data);
            } catch (error){
                setIsError(true);
                console.log(error);
            }finally{
                setIsLoading(false);
              }
            
        }
        fetchPost();
    },[id]);
   
   
    if(isError){
        return<Error/>;
       }
    

    return(
 
        <section class="mobile-block">
        <Link to="/category1/" class="back-button">
           <div class="container">
                <img src={backIcon} alt="back-button"/>
                <strong>Назад</strong>
           </div>
        </Link>
         {isLoading ? (<LoadingDetailList/>) : (
            <div class="container">
                <div class="list-block">
                    <h1 class="list-card__title">
                       <i>{post.title}</i>
                    </h1>
                    <div class="imag-block"> 
                      <img src={post.imageC} alt={post.title} class="list-card__image"/>
                    </div>
                     <h2 class="list-card__date">{post.date}</h2>
                     <span class="list-card__country">{post.country} </span>
                     <h3 class="list-card__info">{post.info}</h3>
                    <p class="description">
                        <i>{post.description}</i>
                    </p>
                </div>
            </div>

         )}
    </section>
    );
}

export default ListPage;
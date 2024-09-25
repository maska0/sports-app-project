import { useEffect, useState } from "react";
import backlist from "../assets/css/imag/backlist.png"
import { Link } from "react-router-dom";
import LoadingRow from "../components/LoadingRow";
import axios from "axios";
import Error from "../components/Error";


function HomePage(){
 
    const[categories, setHome ]= useState([]);
    const[isLoading, setIsLoading] = useState(false);
    const[isError, setIsError] = useState(false);


    useEffect(()=>{
      async function ferchHome() {
        try{
          setIsLoading(true);
          const response = await axios.get(`https://a7393ee24ec84c0a.mokky.dev/category`);
          setHome(response.data);
        } catch(e){
          setIsError(true);
          console.log(e);
        }finally{
          setIsLoading(false);
        }
        
      }
      ferchHome();
  }, []);

  
  if(isError){
    return<Error/>;
   }
    
    return(
    <section class="mobile-block">
        <div class="mobile-block_header is-warning">
          <strong>Категории</strong>
        </div>
        {isLoading ? (<LoadingRow/>):(
          <div class="container">
            <div class="category-row">
            <Link to="/category1/"class="category-item">
                 <img src={backlist} alt= "back-button" class="category-item__img"/>
                 <span class="category-item__title">Все фильмы</span>
               </Link>
              {categories.map((category)=>(
               <Link to={`/category/${category.id}`} class="category-item">
                 <img src={category.imageUrl} alt={category.name} class="category-item__img"/>
                 <span class="category-item__title">{category.name}</span>
               </Link>

              ))}

            </div>
          </div>
        )}
   </section>
    );
}

export default HomePage;
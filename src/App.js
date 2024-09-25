import "./assets/css/s.css";
import Header from "./components/Header";
import CategoryPage from "./pages/CategoryPage";
import ListPage from "./pages/ListPage";
import HomePage from "./pages/HomePage";
import{Routes, Route} from "react-router-dom";
import Category1Page from "./pages/Category1Page";


function App() {
  return (
   <div>
    <Header/>
    <main>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/post/:id" element={<ListPage/>}/>
        <Route path="/category/:id" element={<CategoryPage/>}/>
        <Route path="/category1/" element={<Category1Page/>}/>
      </Routes>
    </main>
   </div>
  );
}

export default App;

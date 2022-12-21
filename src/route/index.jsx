import Counter from "components/Counter";
import HomePage from "pages/Home";
import AboutPage from "pages/About";
import { Route, Routes} from "react-router-dom";
import Users from "components/Users";
// import Service from "pages/Service";
const WebsiteRouting=()=>{
    return(
        <>
        <Routes>
    <Route path="/" element={<HomePage/>} />
      <Route path="/counter" element={<Counter />}/>
      <Route path="/users" element={<Users/>}/>
      <Route path="/about" element={<AboutPage />}/>
    </Routes>
        </>
    )
}
export default WebsiteRouting;
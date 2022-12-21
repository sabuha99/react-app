
import Header from "components/Header";
import Footer from "components/Footer";
import Navbar from "components/Navbar";

const PageContainer=({children})=>{
    return(
        <>
        <Header/>
        <Navbar/>
                <main>{children}
        </main>
        <Footer/>
        </>
    )
}
export default PageContainer;
import banner from "../../imagens/banner.png";
import "./Banner.css"


function Banner (){
    return (
        <header className="banner">
            <img src={banner} alt="baner" />
        </header>
    )
}

export default Banner 
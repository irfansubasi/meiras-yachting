import '../styles/Header.css';
import aboutHeader from '../assets/about-header.jpg';
import rentHeader from '../assets/rent-header.jpg';
export default function Header({page}) {

    if(page === "home"){
        return(
            <header className="home-header">
                <div className="slogan container">
                    <h1 className='span-head'>Mavi Denizlerdeki</h1>
                    <h1>Maceranız Bizimle Başlıyor</h1>
                </div>
            </header>
        );
    }else{

        let styleType = {
            height: "70vh",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
        };

        if(page === "about"){
            styleType = { ...styleType, backgroundImage: "url('../assets/about-header.jpg')" };
        }else if(page === "rent"){
            styleType = { ...styleType, backgroundImage: "url('../assets/rent-header.jpg')" };
        }else{
            styleType = { ...styleType, backgroundImage: "url('../assets/services-header.jpg')" };
        }

        return(
            <header className='header' style={styleType}>
            </header>
        );
    }
    
}

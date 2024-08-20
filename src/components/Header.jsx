import '../styles/Header.css';
export default function Header({page}) {

    if(page === "home"){
        return(
            <header className="home-header">
                <div className="slogan container">
                    <h1>Mavi Denizlerdeki Maceranız<br/>Bizimle Başlıyor</h1>
                </div>
            </header>
        );
    }else{

        let styleType = {
            height: "60vh",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
        };

        if(page === "about"){
            styleType = { ...styleType, backgroundImage: "url('../src/assets/about-header.jpg')" };
        }else if(page === "rent"){
            styleType = { ...styleType, backgroundImage: "url('../src/assets/rent-header.jpg')" };
        }else{
            styleType = { ...styleType, backgroundImage: "url('../src/assets/services-header.jpg')" };
        }

        return(
            <header className='header' style={styleType}>
            </header>
        );
    }
    
}

import '../styles/Header.css';
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
            position: "relative",
            height: "55vh",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
        };

        if(page === "about"){
            styleType = { ...styleType, backgroundPosition: "bottom",backgroundImage: "url('../assets/about-header.jpg')" };
        }else if(page === "rent"){
            styleType = { ...styleType, backgroundImage: "url('../assets/rent-header.jpg')" };
        }else if(page === "services"){
            styleType = { ...styleType, backgroundImage: "url('../assets/services-header.jpg')" };
        }

        return(
            <header className='header' style={styleType}>
            </header>
        );
    }
    
}

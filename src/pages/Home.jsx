import '../assets/css/home.css';

export default function Home() {
    return (
        <div className="container">
            <img src="../public/img/logo.webp" alt="Logo du portfolio" />
            <div className="hero">
                <div className="hero_head">
                    <h1>salut monde !</h1>
                    <img className="globe_emoji" src="./img/icons/globe.gif" alt="Earth globe in 3D rotating on itself" />
                </div>
                <p className="anim_p">moi c'est ramzi, actuellement étudiant en informatique au <br></br>Conservatoire National des Arts et Métiers à Paris.</p>
            </div>
            
        </div>
    );
}
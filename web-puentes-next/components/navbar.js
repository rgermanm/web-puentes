import Link from "next/link";
import Image from "next/image";
import logoBsAs from './../public/Assets/logos/gob_prov.png'
import logoBsAsInverse from './../public/Assets/logos/gob_prov_inverse.png'


export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg ">

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <Link className="nav-item nav-link active" style={{marginLeft:"50px"}}href="#">INICIO </Link>
                    <Link className="nav-item nav-link" href="#">EL PROGRAMA</Link>
                    <Link className="nav-item nav-link" href="#">OFERTA ACADEMICA</Link>
                    <Link className="nav-item nav-link disabled" href="#">PREGUNTAS FRECUENTES</Link>
                    <Link className="nav-item nav-link disabled" href="#">GALERIA</Link>
                </div>
            </div>
            <a className="navbar-brand" href="#"><Image className="nav-logo" src={logoBsAsInverse}></Image></a>
            <div className="gradientOverlay"></div>
        </nav>
    )
}

import Link from "next/link";
import Image from "next/image";
import logoBsAs from './../public/Assets/logos/gob_prov.png'
import logoBsAsInverse from './../public/Assets/logos/gob_prov_inverse.png'


export default function Navbar() {
    return (
        <nav class="navbar navbar-expand-lg ">
            
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                    <Link class="nav-item nav-link active" href="#">INICIO </Link>
                    <Link class="nav-item nav-link" href="#">EL PROGRAMA</Link>
                    <Link class="nav-item nav-link" href="#">OFERTA ACADEMICA</Link>
                    <Link class="nav-item nav-link disabled" href="#">PREGUNTAS FRECUENTES</Link>
                    <Link class="nav-item nav-link disabled" href="#">GALERIA</Link>
                </div>
            </div>
            <a class="navbar-brand" href="#"><Image className="nav-logo" src={logoBsAsInverse}></Image></a>
        </nav>
    )
}

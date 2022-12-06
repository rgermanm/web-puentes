import Link from "next/link";
import Image from "next/image";
import logoBsAs from './../public/Assets/logos/gob_prov.png'
import logoBsAsInverse from './../public/Assets/logos/gob_prov_inverse.png'
import {Link as LinkScroll} from "react-scroll"

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg ">

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    
                    
                    <Link  className="nav-item nav-link" style={{marginLeft:"50px"}}href="#">
                    INICIO

                        </Link>
                    <Link className="nav-item nav-link" href="" legacyBehavior passHref scroll ={false}  >
                     <LinkScroll className="nav-item nav-link"  to="Programa" spy={true} smooth={true} duration = {500}> EL PROGRAMA</LinkScroll> 
                        </Link>
                    <Link className="nav-item nav-link" href="" legacyBehavior passHref scroll ={false} >
                    <LinkScroll className="nav-item nav-link"  to="Programa" spy={true} smooth={true} duration = {500} >  OFERTA ACADEMICA </LinkScroll>
                        
                        </Link>
                    <Link className="nav-item nav-link " href=""legacyBehavior passHref scroll ={false}  > 
                    <LinkScroll className="nav-item nav-link"  to="Programa" spy={true} smooth={true} duration = {500} >PREGUNTAS FRECUENTES</LinkScroll>
                    </Link>
                    <Link className="nav-item nav-link " href="" legacyBehavior passHref scroll ={false}>
                    <LinkScroll className="nav-item nav-link"  to="Galeria" spy={true} smooth={true} duration = {500} >  GALERIA </LinkScroll>
                        </Link>
                </div>
            </div>
            <a className="navbar-brand" href="#"><Image className="nav-logo" src={logoBsAsInverse}></Image></a>
            <div className="gradientOverlay"></div>
        </nav>
    )
}

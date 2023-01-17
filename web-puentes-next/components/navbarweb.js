import Link from "next/link";
import Image from "next/image";
import logoBsAs from './../public/Assets/logos/gob_prov.png'
import logoBsAsInverse from './../public/Assets/logos/gob_prov_inverse.png'
import { Link as LinkScroll } from "react-scroll"
import { useEffect,useState } from "react";

export default function NavbarWeb() {
    
   /* 
   scroll bg color 
   const[bgColor,setBgColor]=useState("#FFFFFF")
   window.addEventListener('scroll', () => {
        let y = 1 + (window.scrollY || window.pageYOffset) / 150
        y = y < 1 ? 1 : y // ensure y is always >= 1 (due to Safari's elastic scroll)
        console.log(y)
        if(y>1){
            setBgColor("green")
        }
        else{
            setBgColor("white")
        }
    })*/
    return (
        <nav className="navbar navbar-expand-lg d-none d-lg-flex">
            
          
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">


                    <Link className="nav-item nav-link" style={{ marginLeft: "50px" }} href="/">
                        INICIO

                    </Link>
                    <Link className="nav-item nav-link" href="/programa" legacyBehavior passHref scroll={false}  >
                        <LinkScroll className="nav-item nav-link" spy={true} smooth={true} duration={500}> EL PROGRAMA</LinkScroll>
                    </Link>
                    <Link className="nav-item nav-link" href="" legacyBehavior passHref scroll={false} >
                        <LinkScroll className="nav-item nav-link" to="Programa" spy={true} smooth={true} duration={500} >  OFERTA ACADEMICA </LinkScroll>

                    </Link>
                    <Link  className="nav-item nav-link " href="/preguntas-frecuentes" legacyBehavior passHref scroll={false}  >
                        <LinkScroll className="nav-item nav-link"  spy={true} smooth={true} duration={500} >PREGUNTAS FRECUENTES</LinkScroll>
                    </Link>
                    <Link className="nav-item nav-link " href="" legacyBehavior passHref scroll={false}>
                        <LinkScroll className="nav-item nav-link" to="Galeria" spy={true} smooth={true} duration={500} >  GALERIA </LinkScroll>
                    </Link>
                </div>
            </div>
            <a className="navbar-brand" href="#"><Image className="nav-logo" src={logoBsAsInverse}></Image></a>
            <div className="gradientOverlay"></div>
        </nav>
    )
}

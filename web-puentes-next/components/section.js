import Link from "next/link";
import Image from "next/image";
import logoBsAs from './../public/Assets/logos/gob_prov.png'
import logoBsAsInverse from './../public/Assets/logos/gob_prov_inverse.png'


export default function Navbar({ background }) {
    return (
        <div className="section" style={{
            backgroundImage: `url("${background.src}")`, 
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
        }}>

        </div>
    )
}

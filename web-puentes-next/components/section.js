import Link from "next/link";
import Image from "next/image";
import logoBsAs from './../public/Assets/logos/gob_prov.png'
import logoBsAsInverse from './../public/Assets/logos/gob_prov_inverse.png'


export default function Section({ background, gradientCode, id,children }) {
    return (
        <div id =  {id}
        className="sectionContainer" style={{ background: gradientCode ? gradientCode.background : "" }}>
            <div className="section" style={background?{
                backgroundImage: `url("${background.src}")`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',

            }:{}}>

            {children}
            </div>
        </div>
    )
}

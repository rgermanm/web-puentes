

export default function SectionGaleria({ background, gradientCode, id,children,customStyles }) {
    return (
        <div id =  {id}
        className="sectionGaleriaContainer" style={{...{ background: gradientCode ? gradientCode.background : "" },...customStyles}}>
            <div className="sectionGaleria" style={background?{
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

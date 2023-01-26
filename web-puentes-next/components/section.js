

export const Section=({ background, gradientCode = "", id, children, customStyles }) =>{

    const gradientCodes = {
        "programa": {
            background: "linear-gradient(76deg, rgba(255,115,54,1) 0%, rgba(255,32,210,1) 100%)"
        },
        "galeria": {
        background: ""
        },
        "universidades": {
            background: " linear-gradient(40deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 100%);"
        },
        "footer": {
            background: " linear-gradient(40deg, rgba(220,25,138,1) 0%, rgba(0,172,192,1) 100%);"
        }

    }
    return (
        <div id={id}
            className="sectionContainer" style={{ ...{ background: gradientCode != "" ? gradientCodes[gradientCode].background : "" }, ...customStyles }}>
            <div className="section" style={background ? {
                backgroundImage: `url("${background.src}")`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',

            } : {}}>
                {children}
            </div>
        </div>
    )
}


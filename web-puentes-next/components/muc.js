
import { useEffect, useState } from "react";
import municipios from "./municipios.json";
export default function MUC() {

    const [muc, setMuc] = useState([
        {
            label: "MUNICIPIOS",
            selectedBgColor: "#1facbe",
            selected: true,
        },
        {
            label: "UNIVERSIDADES",
            selectedBgColor: "#ed1581",
            selected: false
        },
        {
            label: "CARRERAS",
            selectedBgColor: "#1facbe",
            selected: false
        },
    ])
    const selectOption = (index) => {
        let aux = [...muc];
        for (let i = 0; i < muc.length; i++) {
            aux[i].selected = false;
        }
        aux[index].selected = true;

        setMuc(aux);
    }

    const other=()=>{
        let x=[...municipios];
        for(let i=0;i<municipios.length;i++){
            x[i].id=i+1
        }
        console.log(JSON.stringify(x));
    }
    useEffect(()=>other(),[])

    return (
        <div className="muc-container">
            <div>
                <div className="row">
                    {muc.map((o, i) =>
                        <div onClick={() => selectOption(i)}
                            style={{
                                backgroundColor: o.selected ? o.selectedBgColor : "white",
                                borderColor: o.selectedBgColor,
                            }}
                            className="muc-button col-2">
                            <p
                                style={{ color: o.selected ? "white" : o.selectedBgColor, }}
                            >{o.label}</p></div>
                    )}



                </div>
            </div>
            <div className="muc-list">
                <div className="row">
                    {municipios.map((m) =>
                        <div className="col-4 muc-item" ><p>{m.name}</p></div>
                    )
                    }
                </div>
            </div>
        </div>
    )
}

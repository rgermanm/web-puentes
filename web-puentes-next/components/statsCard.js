import Image from "next/image";
import { useEffect, useState } from "react";
import CountUp from "react-countup";

export default function StatsCard({ ilustracion, fontColor, stat, label ,bigger}) {
  return (
    <div className="stats-card">
            <div className="d-none d-sm-block ">

        <Image className="stats-illustration"  src={ilustracion}></Image>
      </div>
      <div className="d-block d-sm-none ">

<Image className="stats-illustration" style={{width:bigger?193:60}} src={ilustracion}></Image>
</div>
      <div className="stats-number-container">
        <div>
          <CountUp
            enableScrollSpy={true}
            start={1}
            duration={3}
            style={{ color: fontColor }}
            className="stats-number"
            end={stat}
          />
        </div>
        <div
          style={{ backgroundColor: fontColor,width:"50%" }}
          className="stats-divider"
        ></div>

        <div style={{ color: fontColor }} className="stats-label">
          {label}
        </div>
      </div>
    </div>
  );
}

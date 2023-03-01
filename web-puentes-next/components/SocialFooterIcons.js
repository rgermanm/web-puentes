import React from "react";
import FB from "../public/Assets/fb.png";
import TW from "../public/Assets/tw.png";
import IN from "../public/Assets/in.png";
import YT from "../public/Assets/yt.png";
import Image from "next/image";

export default function SocialFooterIcons() {
  return (
    <div style={{ display:"flex",flexDirection: "row" }}>
      <div
        style={{ cursor: "pointer" }}
        onClick={() =>
          window.open(
            "https://www.youtube.com/@BAProvincia",
            "_blank"
          )
        }
      >
        <Image
          className=" "
          style={{ objectFit: "contain", width: 30, height: 30 }}
          src={YT}
        ></Image>
      </div>
      <div
        style={{ cursor: "pointer" }}
        onClick={() =>
          window.open(
            "https://www.facebook.com/ConsejoUniPBA",
            "_blank"
          )
        }
      >
      <Image
        className=" "
        style={{ objectFit: "contain", width: 30, height: 30 }}
        src={FB}
      ></Image>
      </div>

      <div
        style={{ cursor: "pointer" }}
        onClick={() =>
          window.open(
            "https://www.instagram.com/consejouniversitariopba/",
            "_blank"
          )
        }
      >
        <Image
          className=" "
          style={{ objectFit: "contain", width: 30, height: 30 }}
          src={IN}
        ></Image>
      </div>
      <div
        style={{ cursor: "pointer" }}
        onClick={() =>
          window.open(
            "https://twitter.com/ConsejoUniPBA",
            "_blank"
          )
        }
      >
      <Image
        className=" "
        style={{ objectFit: "contain", width: 30, height: 30 }}
        src={TW}
      ></Image>
      </div>

    </div>
  );
}

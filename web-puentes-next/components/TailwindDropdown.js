/* This example requires Tailwind CSS v2.0+ */
import React, { Fragment } from "react";
import { ChevronDownIcon } from "@heroicons/react/solid";
import {
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example({ items, color,text,filter }) {
  const [isSelected,setIsSelected] = React.useState("")
  return (
    <Menu>
      <MenuButton
        px={4}
        py={2}
        transition="all 0.2s"
        style={{
          backgroundColor: "white",
          borderColor: color,
          borderWidth: 2,
          minHeight: 45,
          width: "100%",
          borderRadius: 0,
          //add shadow
          boxShadow: "0px 0px 0px 0px rgba(0,0,0,0.0)",
          WebkitBoxShadow: "0px 0px 0px 0px rgba(0,0,0,0.0)",
          MozBoxShadow: "0px 0px 0px 0px rgba(0,0,0,0.0)",
          transition: "all 0.2s",
          padding: 0,
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
          flexDirection: "row",
        }}
      >
        <div
          style={{
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
            flexDirection: "row",
          }}
        >
          <p style={{ color: color, "font-family": "EncodeSans-Bold" }}>
           {isSelected || text}
          </p>{" "}
          <ChevronDownIcon
            style={{ color: color }}
            width={30}
          ></ChevronDownIcon>
        </div>
      </MenuButton>
      <MenuList
        style={{
          borderRadius: 0,
          backgroundColor: color,
          maxHeight: "35vh",
          overflow: "scroll",
          padding: 0,
   
        }}
      >
        {items.map((item) => (
          <>
            <MenuItem
              style={{
                backgroundColor: color,
                color: "white",
                "font-family": "EncodeSans-Bold",
                zIndex: 99,
                fontSize: 10,
                maxWidth: "90%",
                textOverflow: "ellipsis",
           
             
              }}
              onClick={() => {
                setIsSelected(item.name)
                filter(item.name,text)
              }}
            >
              {item.name}
            </MenuItem>
            <MenuDivider style={{ padding: 0, margin: 0 }} />
          </>
        ))}
      </MenuList>
    </Menu>
  );
}

import React from "react";

const Delay = ({ d, children,height=0 }) => {
    const [Timer, setTimer] = React.useState(d || 500);
    const [CanSHow, setCanSHow] = React.useState(false);
    React.useEffect(() => {
      setTimeout(() => {
        setCanSHow(true);
      }, Timer);
      return () => {};
    }, []);
    if(CanSHow){
      return <div>{CanSHow && children}</div>;
    }else{
         return <div style={{minHeight:height}}></div>;
    }
   
  };

  export default Delay
  
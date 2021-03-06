import { useState } from "react";
import "./Counter.css";

export function Addcolor() {
  const [color, setColor] = useState("orange");
  const styles = {
    background: color,
    fontSize: "30px",
    width:"310px",
    marginLeft:"6 px"
  };
  const INITIAL_COLOR_LIST = ["orange","yellow","teal"];
  const [colorList, setColorlist] = useState(INITIAL_COLOR_LIST);

  const color_box_style = {
    padding:"30px"
  }

  return (
    <>
    <div styles={color_box_style}>
      <input
        onChange={(e) => setColor(e.target.value)}
        style={styles}
        placeholder="Enter a color" />

      <button onClick={() => setColorlist([...colorList,color])}>Add color</button>

      {colorList.map(clr =>  <Colorbox color={clr}/>  )}
     
    </div>

    </>
  );
}

function Colorbox({color}){
  const styless ={
    height:"30px",
    width:"300px",
    background:color,
    alignitems:"center",
    margin:"5px",
    padding:"10px",
  }
  return(
    <div className="colorbox_div" style={styless}>{color}</div>
  )
}

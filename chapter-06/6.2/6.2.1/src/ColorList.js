import React from "react";
import Color from "./Color";

export default function ColorList({colors = []}) {
  //colorsの中身が何もないならメッセージを表示
  if(!colors.length) return <div>No Color Listed.</div>
  
  return (
    //JSXで表記
    <div>
      {
        colors.map(color => <Color key={color.id} {...color} />)
      }
    </div>
  );
}



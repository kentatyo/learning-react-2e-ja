import React, { useState } from "react";
import colorData from "./color-data.json";
import ColorList from "./ColorList.js";

export default function App(){
  //colorsはuseStateフックにより取得したステート値。デストラクチャリングで必要なもののみ取り出している。
  const [colors] = useState(colorData);

  //colorsプロパティとして、渡している
  return <ColorList colors={colors} />;
}
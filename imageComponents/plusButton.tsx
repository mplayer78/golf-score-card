import * as React from "react";
import Svg, { Circle, Path } from "react-native-svg";
import { Text } from "react-native";

function PlusButton(props) {
  return (
    <Svg width={57} height={57} viewBox="0 0 57 57" fill="none" {...props}>
      <Circle cx={28.5} cy={28.5} r={28.5} fill="#C4C4C4" />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M34 10H23v12H10v11h13v14h11V33h13V22H34V10z"
        fill="#fff"
      />
    </Svg>
  );
}

export default PlusButton;

import React from "react"
import Svg, { Path } from "react-native-svg"

export const Plus = (props) => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={40}
      height={40}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="prefix__feather prefix__feather-plus"
      {...props}
    >
      <Path d="M12 5v14M5 12h14" />
    </Svg>
  )
}

import React from "react"

const Mail = ({ color }) => {
  return (
    <svg width="27" height="23" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M24.3 0H2.7C1.215 0 0.0135 1.29375 0.0135 2.875L0 20.125C0 21.7063 1.215 23 2.7 23H24.3C25.785 23 27 21.7063 27 20.125V2.875C27 1.29375 25.785 0 24.3 0ZM24.3 5.75L13.5 12.9375L2.7 5.75V2.875L13.5 10.0625L24.3 2.875V5.75Z"
        fill={color}
      />
    </svg>
  )
}

export default Mail

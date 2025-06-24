import React from "react"

interface CustomTreemapNodeProps {
  x: number
  y: number
  width: number
  height: number
  depth: number
  name: string
  index: number
  value: number
  payload: {
    name: string
    value: number
    color?: string
  }
}

const CustomTreemapNode: React.FC<CustomTreemapNodeProps> = ({
  x,
  y,
  width,
  height,
  depth,
  name,
  payload,
}) => {
  if (depth === 0) return null

  const fillColor = payload?.color ?? "#10B981"

  return (
    <g>
      <rect
        x={x}
        y={y}
        width={width}
        height={height}
        style={{
          fill: fillColor,
          stroke: "#fff",
          strokeWidth: 2,
          strokeOpacity: 1,
        }}
      />
      {width > 60 && height > 40 && (
        <>
          <text
            x={x + width / 2}
            y={y + height / 2 - 10}
            textAnchor="middle"
            fill="#fff"
            fontSize="14"
            fontWeight="bold"
            pointerEvents="none"
          >
            {name}
          </text>
          <text
            x={x + width / 2}
            y={y + height / 2 + 10}
            textAnchor="middle"
            fill="#fff"
            fontSize="12"
            pointerEvents="none"
          >
         {typeof payload?.value === "number"
  ? `${(payload.value / 1000).toFixed(0)} MWh`
  : ""}
          </text>
        </>
      )}
    </g>
  )
}

export default CustomTreemapNode

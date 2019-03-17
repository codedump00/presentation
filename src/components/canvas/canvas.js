

import React from 'react';
import Konva from 'konva';
import { Stage, Layer, Star, Text } from 'react-konva';

function Canvas(props) {
  const handleDragStart = e => {
    // e.target.setAttrs({})
  }

  const handleDragEnd = e => {
    e.target.to({
      duration: 0.5,
      easing: Konva.Easings.ElasticEaseOut,
    })
  }

  return (
    <Stage width={window.innerWidth} height={window.innerHeight}>
      <Layer>
        <Text text="Try to drag a star" />
          <Star
            key={0}
            x={550} //{Math.random() * window.innerWidth}
            y={250} //{Math.random() * window.innerHeight}
            numPoints={8}
            innerRadius={100}
            outerRadius={140}
            fill="#89b717"
            draggable
            onDragStart={handleDragStart}
            onDragEnd={handleDragEnd}
          />
      </Layer>
    </Stage>
  )
}

export default Canvas

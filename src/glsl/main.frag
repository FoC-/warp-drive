#version 300 es
precision highp float;

in vec4 v_positionWithOffset;

out vec4 outColor;

void main() {
  // convert from clipsapce (-1 <-> +1) to color space (0 -> 1).
  vec4 color = v_positionWithOffset * 0.5f + 0.5f;
  outColor = color;
}
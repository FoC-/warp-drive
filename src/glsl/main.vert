#version 300 es
precision highp float;

in vec4 a_position;

uniform vec4 u_offset;

out vec4 v_positionWithOffset;

void main() {
  gl_Position = a_position + u_offset;
  v_positionWithOffset = a_position + u_offset;
}
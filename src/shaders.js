const compileShader = (gl, src, type) => {
    const shader = gl.createShader(type);
    gl.shaderSource(shader, src);
    gl.compileShader(shader);
    if (gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        return shader;
    }

    console.error(gl.getShaderInfoLog(shader));
    return null;
}

export const compileVertex = (gl, src) => compileShader(gl, src, gl.VERTEX_SHADER);
export const compileFragment = (gl, src) => compileShader(gl, src, gl.FRAGMENT_SHADER);

export const createProgram = (gl, vertexSrc, fragmentSrc) => {
    const program = gl.createProgram();

    const compiledVertex = compileVertex(gl, vertexSrc)
    gl.attachShader(program, compiledVertex);

    const compiledFragment = compileFragment(gl, fragmentSrc)
    gl.attachShader(program, compiledFragment);

    gl.linkProgram(program);

    if (gl.getProgramParameter(program, gl.LINK_STATUS)) {
        gl.useProgram(program);
        return program;
    }

    console.error(gl.getProgramInfoLog(program));
    return null;
}

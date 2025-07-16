"use client";
import { useEffect, useRef } from 'react';
import styles from './Hero.module.css';
import Orb from './Orb';

function SplashCursor() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl = canvas.getContext('webgl2') || canvas.getContext('webgl');
    if (!gl) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      gl.viewport(0, 0, canvas.width, canvas.height);
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Simple vertex shader
    const vertexShader = gl.createShader(gl.VERTEX_SHADER);
    if (!vertexShader) return;
    
    gl.shaderSource(vertexShader, `
      attribute vec2 position;
      varying vec2 uv;
      void main() {
        uv = position * 0.5 + 0.5;
        gl_Position = vec4(position, 0.0, 1.0);
      }
    `);
    gl.compileShader(vertexShader);

    // Simple fragment shader for fluid effect
    const fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
    if (!fragmentShader) return;
    
    gl.shaderSource(fragmentShader, `
      precision highp float;
      varying vec2 uv;
      uniform float time;
      uniform vec2 mouse;
      uniform float mouseDown;
      
      void main() {
        vec2 p = uv - mouse;
        float dist = length(p);
        float angle = atan(p.y, p.x);
        
        // Create fluid-like effect
        float fluid = sin(dist * 20.0 - time * 2.0) * 0.5 + 0.5;
        fluid *= exp(-dist * 3.0) * mouseDown;
        
        // Add some curl
        float curl = sin(angle * 3.0 + time) * 0.1;
        
        // Combine effects
        vec3 color = vec3(0.1, 0.2, 0.8) * fluid + vec3(0.8, 0.1, 0.3) * curl;
        
        gl_FragColor = vec4(color, fluid * 0.3);
      }
    `);
    gl.compileShader(fragmentShader);

    // Create program
    const program = gl.createProgram();
    if (!program) return;
    
    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);
    gl.useProgram(program);

    // Create buffer
    const buffer = gl.createBuffer();
    if (!buffer) return;
    
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]), gl.STATIC_DRAW);

    // Get attributes and uniforms
    const positionLocation = gl.getAttribLocation(program, 'position');
    const timeLocation = gl.getUniformLocation(program, 'time');
    const mouseLocation = gl.getUniformLocation(program, 'mouse');
    const mouseDownLocation = gl.getUniformLocation(program, 'mouseDown');

    gl.enableVertexAttribArray(positionLocation);
    gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);

    // Mouse tracking
    let mouse = [0.5, 0.5];
    let mouseDown = 0;

    const updateMouse = (e: MouseEvent | TouchEvent) => {
      const rect = canvas.getBoundingClientRect();
      const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
      const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;
      mouse[0] = (clientX - rect.left) / rect.width;
      mouse[1] = 1.0 - (clientY - rect.top) / rect.height;
    };

    const handleMouseDown = (e: MouseEvent | TouchEvent) => {
      mouseDown = 1;
      updateMouse(e);
    };

    const handleMouseMove = (e: MouseEvent | TouchEvent) => {
      updateMouse(e);
    };

    const handleMouseUp = () => {
      mouseDown = 0;
    };

    canvas.addEventListener('mousedown', handleMouseDown);
    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseup', handleMouseUp);
    canvas.addEventListener('touchstart', handleMouseDown);
    canvas.addEventListener('touchmove', handleMouseMove);
    canvas.addEventListener('touchend', handleMouseUp);

    // Render loop
    let startTime = Date.now();
    const render = () => {
      const time = (Date.now() - startTime) * 0.001;
      
      if (timeLocation) gl.uniform1f(timeLocation, time);
      if (mouseLocation) gl.uniform2f(mouseLocation, mouse[0], mouse[1]);
      if (mouseDownLocation) gl.uniform1f(mouseDownLocation, mouseDown);
      
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
      requestAnimationFrame(render);
    };
    render();

    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      canvas.removeEventListener('mousedown', handleMouseDown);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseup', handleMouseUp);
      canvas.removeEventListener('touchstart', handleMouseDown);
      canvas.removeEventListener('touchmove', handleMouseMove);
      canvas.removeEventListener('touchend', handleMouseUp);
      
      // Cleanup WebGL resources
      gl.deleteShader(vertexShader);
      gl.deleteShader(fragmentShader);
      gl.deleteProgram(program);
      gl.deleteBuffer(buffer);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      style={{ 
        position: 'absolute', 
        top: 0, 
        left: 0, 
        width: '100%', 
        height: '100%', 
        zIndex: 0, 
        pointerEvents: 'none',
        opacity: 0.6
      }} 
    />
  );
}

export default function Hero() {
  return (
    <section className={styles.hero}>
      <SplashCursor />
      <Orb hoverIntensity={0.5} rotateOnHover={true} hue={0} forceHoverState={false} />
      <div className={styles.container} style={{ position: 'relative', overflow: 'hidden' }}>
        <div className={styles.content} style={{ position: 'relative', zIndex: 1 }}>
          <h1 className={styles.title}>
            Digital udvikling <span className={styles.highlight}>redefineret</span>
          </h1>
          <p className={styles.subtitle}>
            Vi skaber professionelle hjemmesider og digitale løsninger der driver din virksomhed fremad. Ren design, kraftfuld teknologi, exceptionelle resultater.
          </p>
          <div className={styles.actions}>
            <button className={styles.primaryButton}>
              Start projekt
            </button>
            <button className={styles.secondaryButton}>
              Se portfolio
            </button>
          </div>
        </div>
      </div>
    </section>
  );
} 
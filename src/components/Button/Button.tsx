import React from 'react';

interface ButtonProps {
  label: string
}

const Button = (props: ButtonProps) => {
  return <button>{props.label}</button>
}

export default Button 
//npm i rollup-plugin-dts 
//@rollup/plugin-typescript 
//@rollup/plugin-commonjs 
//@rollup/plugin-node-resolve 
//rollup --save-dev
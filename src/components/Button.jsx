import React from "react";

const Button = ({ styles }) => (
  <a  href="#contact "type="button" className={`py-4 text-center px-6 cursor-pointer font-poppins font-medium text-[18px] text-white bg-old-gradient rounded-[10px] outline-none ${styles}`}>
    Comece sua jornada de sucesso agora!
  </a>
);

export default Button;

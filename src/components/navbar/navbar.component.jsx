import React from "react";
import { Button } from "../UI/button.styles";
// import {} from './navbar.styles';

const Navbar = () => {
  return (
    <div>
      <Button
        blue
        href="https://en.wikipedia.org/wiki/COVID-19"
        target="_blank"
      >
        Download
      </Button>
    </div>
  );
};

export default Navbar;

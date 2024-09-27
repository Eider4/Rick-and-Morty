import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../sections/header/Header";

export const MainPage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Header />
      <img
        className="w-56"
        onClick={() => navigate("/pages/1")}
        src="https://cdn11.bigcommerce.com/s-pssykari/images/stencil/1640x1080/products/3856/84439/rick-morty-dabpadz__38603.1567811827.png?c=2&imbypass=on"
        alt="rick and morty"
      />
    </div>
  );
};

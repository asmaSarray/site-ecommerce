import React from "react";
import { GiCompass, GiDiamondHard, GiStabbedNote } from "react-icons/gi";
export const links = [
  {
    id: 1,
    text: "home",
    url: "/",
  },
  {
    id: 2,
    text: "About",
    url: "/about",
  },
  {
    id: 3,
    text: "Products",
    url: "/products",
  },
];

export const services = [
  {
    id: 1,
    icon: <GiCompass />,
    title: "mission",
    text: "Le client lui-même, le client pourra poursuivre l'adipiscing de l'entreprise. Les plaisirs, ceux En tolérant les corrompus, en les rejetant, ils ne connaissent pas la volonté des choses, mais d'où ils ne viennent jamais.",
  },
  {
    id: 2,
    icon: <GiDiamondHard />,
    title: "vision",
    text: "Le client lui-même, le client pourra poursuivre l'adipiscing de l'entreprise. Les plaisirs, ceux En tolérant les corrompus, en les rejetant, ils ne connaissent pas la volonté des choses, mais d'où ils ne viennent jamais.",
  },
  {
    id: 3,
    icon: <GiStabbedNote />,
    title: "history",
    text: "Le client lui-même, le client pourra poursuivre l'adipiscing de l'entreprise. Les plaisirs, ceux En tolérant les corrompus, en les rejetant, ils ne connaissent pas la volonté des choses, mais d'où ils ne viennent jamais.",
  },
];

export const products_url = "https://course-api.com/react-store-products";

export const single_product_url = `https://course-api.com/react-store-single-product?id=`;

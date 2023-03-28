import heroimage from "../assets/heroimage.png";
import airbnb from "../assets/airbnb.png";
import bank from "../assets/bank.png";
import gpt3 from "../assets/gpt3.png";
import hotel from "../assets/hotel.png";
import imdb from "../assets/imdb.png";
import lpweb from "../assets/lpweb.png";
import nft from "../assets/nft.png";
import restaurant from "../assets/restaurant.png";
import travigo from "../assets/travigo.png";
import { AiOutlineHtml5 } from "react-icons/ai";
import { FaCss3Alt, FaReact } from "react-icons/fa";
import { DiJavascript, DiResponsive, DiMysql } from "react-icons/di";
import { SiTailwindcss } from "react-icons/si";
import { RiFlutterFill } from "react-icons/ri";
import { TbBrandReactNative } from "react-icons/tb";

export const hero = {
  title: "Olá, me chamo",
  name: "Thiago Pereira",
  description: "E eu sou um",
  job: "Desenvolvedor Frontend.",
  img: heroimage,
};

export const aboutMe = {
  title1: "Um pouco sobre mim",
  description1: `Sou um profissional de desenvolvimento Front-end em busca de mudança de carreira. Especializado em 
    criação de websites, landing pages e web apps responsivos com Reactjs. Sou apaixonado com o que faço e procuro sempre 
    aprender em cada projeto que desenvolvo.`,
  title2: "Resumo da minha experiência",
  description2: `Realizei trabalhos desenvolvendo landing pages, webapps e websites pessoais e profissionais.
    Meus projetos são feitos com Reactjs e geralmente também com Tailwindcss, sempre utilizando as melhores bibliotecas de componentes que melhor se encaixam a cada projeto.`,
};

export const skills = [
  {
    icon: DiResponsive,
    title: "Responsive Design",
    progress: "90",
  },
  {
    icon: AiOutlineHtml5,
    title: "HTML",
    progress: "85",
  },
  {
    icon: FaCss3Alt,
    title: "CSS",
    progress: "85",
  },
  {
    icon: SiTailwindcss,
    title: "Tailwindcss",
    progress: "80",
  },
  {
    icon: FaReact,
    title: "ReactJS",
    progress: "70",
  },
  {
    icon: DiJavascript,
    title: "Javascript",
    progress: "70",
  },
  {
    icon: DiMysql,
    title: "MySQL",
    progress: "50",
  },
  {
    icon: TbBrandReactNative,
    title: "React Native",
    progress: "20",
  },
  {
    icon: RiFlutterFill,
    title: "Flutter",
    progress: "20",
  },
];

export const portfolioCard = [
  { img: travigo, title: "Travigo Landing Page", liveLink: "#" },
  { img: restaurant, title: "Geritch Restaurant", liveLink: "#" },
  { img: airbnb, title: "Airbnb Clone", liveLink: "#" },
  { img: bank, title: "Bank", liveLink: "#" },
  { img: gpt3, title: "GPT3 A.I.", liveLink: "#" },
  { img: hotel, title: "Beach Hotel", liveLink: "#" },
  { img: imdb, title: "Geritch Restaurant", liveLink: "#" },
  { img: lpweb, title: "Geritch Restaurant", liveLink: "#" },
  { img: nft, title: "Geritch Restaurant", liveLink: "#" },
];

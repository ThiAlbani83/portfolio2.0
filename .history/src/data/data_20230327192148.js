import heroimage from "../assets/heroimage.png";
import { AiOutlineHtml5 } from "react-icons/ai";
import { FaCss3Alt, FaReact } from "react-icons/fa";
import { DiJavascript, DiResponsive } from "react-icons/di";
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
    icon: DiResponsive,
    title: "Responsive Design",
    progress: "90",
  },
  {
    icon: FaReact,
    title: "ReactJS",
    progress: "70",
  },
  {
    icon: TbBrandReactNative,
    title: "React Native",
    progress: "20",
  },
  {
    icon: DiJavascript,
    title: "Javascript",
    progress: "70",
  },
  {
    icon: SiTailwindcss,
    title: "Tailwindcss",
    progress: "80",
  },
  {
    icon: RiFlutterFill,
    title: "Flutter",
    progress: "20",
  },
];

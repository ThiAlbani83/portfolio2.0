import heroimage from '../assets/heroimage.png'
import {AiOutlineHtml5} from 'react-icons/ai'
import {FaCss3Alt, FaReact} from 'react-icons/fa'

export const hero = {
    title: 'Olá, me chamo',
    name: 'Thiago Pereira',
    description: 'E eu sou um',
    job:'Desenvolvedor Frontend.',
    img: heroimage
}

export const aboutMe = {
    title1: 'Um pouco sobre mim',
    description1: `Sou um profissional de desenvolvimento Front-end em busca de mudança de carreira. Especializado em 
    criação de websites, landing pages e web apps responsivos com Reactjs. Sou apaixonado com o que faço e procuro sempre 
    aprender em cada projeto que desenvolvo.`,
    title2: 'Resumo da minha experiência',
    description2: `Realizei trabalhos desenvolvendo landing pages, webapps e websites pessoais e profissionais.
    Meus projetos são feitos com Reactjs e geralmente também com Tailwindcss, sempre utilizando as melhores bibliotecas de componentes que melhor se encaixam a cada projeto.`
}

export const skills = [

    {
        icon: AiOutlineHtml5,
        title: 'HTML',
        progress: '90%'
    },
    {
        icon: FaCss3Alt,
        title: 'CSS',
        progress: '90%'
    },
    {
        icon: FaReact,
        title: 'ReactJS',
        progress: '70%'
    },
    {
        icon: AiOutlineHtml5,
        title: 'HTML',
        progress: '90%'
    },
    

]
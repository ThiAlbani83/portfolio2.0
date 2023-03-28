import React, { useRef, useState } from 'react'
import { AiOutlineWhatsApp, AiOutlineInstagram, AiOutlineLinkedin } from 'react-icons/ai'
import { useForm } from 'react-hook-form'
import emailjs from '@emailjs/browser';

export default function Footer() {

    const [emailStatus, setEmailStatus] = useState("");
    const form = useRef();

    const { register, handleSubmit } = useForm();

    const onSubmit = (e, setEmailStatus) => {
        e && e.preventDefault();
        emailjs.sendForm("service_amn6lhs", "template_hbe8p25", form.current, "qZ4BQZloPNpAm-Vlt")
            .then(
                (result) => {
                    console.log(result.text);
                    setEmailStatus("E-mail enviado com sucesso!");
                },
                (error) => {
                    console.log(error.text);
                    setEmailStatus("Erro ao enviar e-mail. Verifique se todos os campos estão preenchidos corretamente.");
                }
            );
    };

    return (
        <div className='w-full bg-black/20'>
            <div className='flex flex-col w-full max-w-[1440px] px-10 py-5 mt-5 lg:justify-between mx-auto items-center gap-5 justify-center'>
                <div className='flex flex-col gap-4'>
                    <div>
                        <h1 className='font-semibold text-sm'>THIALBANIDEV</h1>
                    </div>
                    <div className='flex gap-3 items-center justify-center'>
                        <a href='http://wa.me/+5548999159736' target="_blank"><AiOutlineWhatsApp className='text-2xl hover:text-cyan-500' /></a>
                        <a href="https://www.instagram.com/thiago.albani/"><AiOutlineInstagram className='text-2xl hover:text-cyan-500' /></a>
                        <a href="https://www.linkedin.com/in/thiago-albani/"><AiOutlineLinkedin className='text-2xl hover:text-cyan-500' /></a>
                    </div>
                </div>
                <div>
                    <form className='flex flex-col gap-3 text-black' onSubmit={handleSubmit(onSubmit)}>
                        <input className='text-lg rounded-xl focus:ring-cyan-500 focus:ring-2' placeholder='Seu e-mail' type="email" id="email" {...register("email")} />
                        <textarea className='text-lg rounded-xl focus:ring-cyan-500 focus:ring-2' placeholder='Sua mensagem' id="message" rows="3" {...register("message")} />
                        <button
                            className='bg-cyan-500 rounded-xl text py-1'
                            type="submit">Enviar</button>
                    </form>
                </div>
                <div>
                    <ul className='flex gap-6 lg:flex-row items-center'>
                        <a href="#home"><li className='text-sm'>Home</li></a>
                        <a href="#about"><li className='text-sm'>Sobre</li></a>
                        <a href="#skills"><li className='text-sm'>Habilidades</li></a>
                        <a href="#portfolio"><li className='text-sm'>Portfolio</li></a>
                        <a href="contact"><li className='text-sm'>Contato</li></a>
                    </ul>
                </div>
            </div>
        </div>
    )
}
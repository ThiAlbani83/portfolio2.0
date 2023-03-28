import React, { useRef, useState } from 'react'
import { AiOutlineWhatsApp, AiOutlineInstagram } from 'react-icons/ai'
import { useForm } from 'react-hook-form'

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
                        <a href=""><AiOutlineWhatsApp className='text-xl hover:text-cyan-500' /></a>
                        <a href=""><AiOutlineInstagram className='text-xl hover:text-cyan-500' /></a>
                    </div>
                </div>
                <div>
                    <form className='flex flex-col gap-3 text-black' onSubmit={handleSubmit(onSubmit)}>
                        <input placeholder='Seu e-mail' type="email" id="email" {...register("email")} />
                        <textarea placeholder='Sua mensagem' id="message" rows="3" {...register("message")} />
                        <button 
                        className='bg-cyan-500 rounded-xl text'
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
//como colocar um formulário simples com e-mail e mensagem, com validação de campos?
import React from 'react'
import { AiOutlineWhatsApp, AiOutlineInstagram } from 'react-icons/ai'
import { useForm } from 'react-hook-form'

export default function Footer() {

    const { register, handleSubmit } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <div className='w-full bg-black/20 relative'>
            <div className='flex w-full max-w-[1440px] px-10 py-5 mt-5 justify-between mx-auto items-center'>
                <div className='flex flex-col gap-4'>
                    <div>
                        <h1 className='font-semibold text-sm'>THIALBANIDEV</h1>
                    </div>
                    <div className='flex gap-3'>
                        <a href=""><AiOutlineWhatsApp className='text-xl hover:text-cyan-500' /></a>
                        <a href=""><AiOutlineInstagram className='text-xl hover:text-cyan-500' /></a>
                    </div>
                </div>
                <div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <label htmlFor="email">E-mail:</label>
                        <input type="email" id="email" {...register("email")} />

                        <label htmlFor="message">Mensagem:</label>
                        <textarea id="message" rows="5" {...register("message")} />

                        <button type="submit">Enviar</button>
                    </form>
                </div>
                <div>
                    <ul className='flex flex-col gap-3 lg:flex-row'>
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
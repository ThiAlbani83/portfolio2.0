import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup'
import { AiOutlineWhatsApp, AiOutlineInstagram } from 'react-icons/ai'

const SignupSchema = Yup.object().shape({
    nome: Yup.string()
        .min(2, 'Muito Curto!')
        .max(100, 'Muito Longo!')
        .required('Preenchimento Obrigatório'),
    email: Yup.string().email('E-mail Inválido').required('Preenchimento Obrigatório'),
    mensagem: Yup.string()
        .min(2, 'Muito Curto!')
        .max(1000, 'Muito Longo!')
        .required('Preenchimento Obrigatório'),
});

export default function Footer() {

    const [emailStatus, setEmailStatus] = useState("");
    const form = useRef();

    const sendEmail = (e, setEmailStatus) => {
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
                    <Formik
                        initialValues={{ nome: "", email: "", mensagem: "" }}
                        validationSchema={SignupSchema}
                        onSubmit={(values, { setSubmitting, resetForm }) => {
                            sendEmail(null, setEmailStatus);
                            console.log(values);
                            setSubmitting(false);
                            setEmailStatus("");
                            resetForm();
                        }}
                    >
                        {({ errors, touched, isValid }) => (
                            <Form
                                ref={form}
                                className='flex flex-col w-full items-center justify-center gap-5 mb-[150px]'>
                                <div className='flex flex-col w-full md:px-40 lg:px-[650px] px-4'>
                                    <Field
                                        name='nome'
                                        className='px-6 py-2 rounded-lg font-montserrat text-[18px] border-[2px] border-gray-300 outline-black'
                                        placeholder='Seu Nome' type='text' />
                                    {errors.nome && touched.nome ? (
                                        <div className='text-red-500 text-[12px]'>
                                            {errors.nome}
                                        </div>
                                    ) : null}
                                </div>
                                <div className='flex flex-col  w-full lg:px-[650px] md:px-40 px-4'>
                                    <Field
                                        name='email'
                                        className='px-6 py-2 rounded-lg font-montserrat text-[18px] border-[2px] border-gray-300 outline-black'
                                        placeholder='Seu E-mail' type='text' />
                                    {errors.email && touched.email ? (
                                        <div className='text-red-500 text-[12px]'>
                                            {errors.email}
                                        </div>
                                    ) : null}

                                </div>
                                <div className='flex flex-col w-full lg:px-[650px] md:px-40 px-4'>
                                    <Field
                                        name='mensagem'
                                        as='textarea'
                                        rows='10' className='px-6 py-2 rounded-lg font-montserrat text-[18px] border-[2px] border-gray-300 outline-black'
                                        placeholder='Sua Mensagem...' />
                                    {errors.mensagem && touched.mensagem ? (
                                        <div className='text-red-500 text-[12px]'>
                                            {errors.mensagem}
                                        </div>
                                    ) : null}
                                </div>
                                <div>
                                    <button
                                        type='submit'
                                        disabled={!isValid}
                                        className='flex w-fit px-20 border-none outline-none text-white bg-[#30424d] py-3 rounded-xl active:scale-95 cursor-pointer'
                                    >Enviar
                                    </button>
                                    {isValid && <div className='flex text-green-600 text-[12px] items-center'>{emailStatus}</div>}
                                </div>
                            </Form>
                        )}
                    </Formik>
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
        </div >
    )
}
import React, { useState } from 'react'
import Modal from 'react-modal'
import ButtonBread from '../UI/ButtonBread'
import { validateInputString } from '../../helpers/validateInputString'
import PreregistrationPigs from '../../assets/images/modals/preRegistration/preregistrationPigs.jpg'

interface PreRegistrationModalProps {
  isOpen: boolean;
  closeModal: () => void;
}

export default function PreRegistrationModal({ isOpen, closeModal }: PreRegistrationModalProps) {
  const [email, setEmail] = useState('')
  const [username, setUsername] = useState('')

  const handleChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => setEmail(event.target.value)
  const handleChangeUsername = (event: React.ChangeEvent<HTMLInputElement>) => setUsername(event.target.value)

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!validateInputString(username) || !validateInputString(email)) {
      alert('Invalid input, please check how you entered your data')
      return
    }
    console.log('Form submitted')
    console.log({ username, email })
    setUsername('')
    setEmail('')
    closeModal()
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      shouldCloseOnOverlayClick={true}
      className='flex justify-center items-center mt-[60px] sm:mt-[80px] lg:mt-[115px] xl:mt-[90px] '
      overlayClassName="fixed inset-0 z-20 bg-black-80  flex justify-center items-center"
    >
      <div className='mx-auto xs:w-[370px] sm:w-[415px] xl:w-[532px] flex flex-col justify-between items-center bg-white rounded-2xl py-[30px] lg:py-[25px] xl:py-[40px] px-[30px] lg:px-[25px] xl:px-[35px] relative'>
        <button
          className='absolute top-0 right-0 p-2'
          onClick={closeModal}
        >
          <svg
            className='w-6 h-6 lg:w-8 lg:h-8'
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <img
          src={PreregistrationPigs}
          alt="Hamsters"
          className='w-[320px] xl:w-[400px]  h-[185px] xl:h-[220px]  rounded-2xl hide-on-small-height'
        />
        <div className='mt-[15px] md:mt-[20px] xl:mt-[25px]'>
          <h4 className='text-xl lg:text-2xl font-medium text-center'>
            Укажите ваш e-mail
          </h4>
          <p className='font-light text-base xl:text-lg text-gray-600 text-center mt-[20px] md:mt-[15px] xl:mt-[10px] mb-[15px] xl:mb-[20px]  xl:w-full'>
            Мы пришлем вам приглашения, как только наша социальная сеть для домашних животных будет готова
          </p>
        </div>
        <form onSubmit={handleSubmit} className='w-full flex flex-col'>
          <div className='w-full  lg:h-[50px] bg-bread rounded-2xl p-1 mb-[15px]'>
            <input
              type="email"
              placeholder='E-mail'
              className='w-full h-full bg-clip-border focus:ring-4 rounded-xl py-3 lg:py-4 px-4 lg:px-5'
              value={email}
              onChange={handleChangeEmail}
            />
          </div>
          <div className='w-full lg:h-[50px] bg-bread rounded-2xl p-1 mb-[25px]'>
            <input
              type="text"
              placeholder='Логин (необязательно)'
              className='w-full h-full bg-clip-border focus:ring-4 rounded-xl py-3 lg:py-5 px-4 lg:px-6'
              value={username}
              onChange={handleChangeUsername}
            />
          </div>
          <ButtonBread
            name='Отправить'
            type='submit'
            className='font-sans font-bold text-lg w-full h-[44px] lg:h-[42px] xl:h-[50px] rounded-2xl bg-bread mt-0'
          />
        </form>
      </div>
    </Modal>
  )
}

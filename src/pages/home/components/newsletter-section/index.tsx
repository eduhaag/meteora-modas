import { ChangeEvent, useState } from 'react'
import { Button } from '../../../../components/button/styles'
import { NewsLetterModal } from '../../../../components/newsletter-modal'
import { NewsLetterBox, NewsLetterContainer, NewsLetterForm } from './styles'

export function NewsLetterSection() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [emailField, setEmailField] = useState('')

  const handleSubmit = (e: any) => {
    e.preventDefault()
    setEmailField('')
    setIsModalOpen(true)
  }

  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEmailField(event.target.value)
  }

  return (
    <NewsLetterContainer>
      <NewsLetterBox>
        <p>
          Quer receber nossas novidades, promoções exclusivas e 10% OFF na
          primeira compra? <strong>Cadastre-se!</strong>
        </p>
        <NewsLetterForm onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Digite seu email"
            onChange={handleEmailChange}
            value={emailField}
          />
          <Button type="submit">Enviar</Button>
        </NewsLetterForm>
      </NewsLetterBox>
      <NewsLetterModal
        isModalOpen={isModalOpen}
        closeModal={() => {
          setIsModalOpen(!isModalOpen)
        }}
      />
    </NewsLetterContainer>
  )
}

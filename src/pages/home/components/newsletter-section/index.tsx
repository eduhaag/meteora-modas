import { ChangeEvent, FormEvent, useState } from 'react'
import { Button } from '../../../../components/button/styles'
import { NewsLetterModal } from '../../../../components/newsletter-modal'
import { NewsLetterBox, NewsLetterContainer, NewsLetterForm } from './styles'
import { api } from '../../../../lib/axios'

export function NewsLetterSection() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [emailField, setEmailField] = useState('')

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    api
      .post('/consumers', { email: emailField })
      .then(() => {
        setEmailField('')
        setIsModalOpen(true)
      })
      .catch((error) => {
        console.log(error)
        alert(
          'Não foi possível assinar a newsletter agora. Tente novamente mais tarde.',
        )
      })
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
            required
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

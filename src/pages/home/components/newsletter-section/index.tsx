import { Button } from '../../../../components/button'
import { NewsLetterBox, NewsLetterContainer } from './styles'

export function NewsLetterSection() {
  return (
    <NewsLetterContainer>
      <NewsLetterBox>
        <p>
          Quer receber nossas novidades, promoções exclusivas e 10% OFF na
          primeira compra? <strong>Cadastre-se!</strong>
        </p>
        <div className="newsletter-form">
          <input type="email" placeholder="Digite seu email" />
          <Button>Enviar</Button>
        </div>
      </NewsLetterBox>
    </NewsLetterContainer>
  )
}

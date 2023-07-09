import ReactModal from 'react-modal'
import {
  CloseButton,
  ContentContainer,
  ModalHeader,
  OptionsGroup,
  ProductInfo,
  ProductInfoContainer,
} from './styles'
import { Product } from '../../data/products'

import CheckCircle from '../../assets/site/check-circle.svg'
import CloseIcon from '../../assets/site/close-icon.svg'
import { CustomRadio } from '../custom-radio'
import { Button } from '../button/styles'
import { getDeviceType } from '../../utils/get-device-type'

interface ModalProps {
  product: Product
  isModalOpen: boolean
  closeModal: () => void
}

export function ProductModal({ isModalOpen, closeModal, product }: ModalProps) {
  const device = getDeviceType()

  const modalStyle = {
    overlay: {
      background: 'rgba(0, 0, 0, 0.5)',
      zIndex: 3,
    },
    content: {
      padding: 0,
      border: 0,
      inset: '50% 0 -16.25rem 50%',
      width: device === 'desktop' ? '700px ' : '350px',
      height: '600px',
      transform: 'translate(-50%, -50%)',
      margin: 0,
    },
  }

  const handleModalClose = () => {
    closeModal()
  }

  ReactModal.setAppElement('#root')

  return (
    <ReactModal
      isOpen={isModalOpen}
      style={modalStyle}
      shouldCloseOnEsc={true}
      shouldCloseOnOverlayClick={true}
      onRequestClose={handleModalClose}
    >
      <ModalHeader>
        <div>
          <img src={CheckCircle} alt="Icone de check" />
          Confira detalhes sobre o produto
        </div>
        <CloseButton onClick={handleModalClose}>
          <img src={CloseIcon} alt="Icone em forma de X" />
        </CloseButton>
      </ModalHeader>
      <ContentContainer>
        <img src={product.image} alt="Imagem do produto" />
        <ProductInfoContainer>
          <ProductInfo>
            <h3>{product.title}</h3>
            <p>{product.description}</p>
            <hr />
            <strong>{product.price}</strong>
            {product.partner && (
              <small>Vendido e entregue por {product.partner}</small>
            )}
          </ProductInfo>
          <form>
            {product.colors && product.colors.length > 0 && (
              <OptionsGroup>
                <strong>Cores</strong>
                <fieldset>
                  {product.colors.map((color) => (
                    <CustomRadio
                      key={color.name}
                      color={color.hex}
                      name="color"
                      value={color.name}
                    />
                  ))}
                </fieldset>
              </OptionsGroup>
            )}
            {product.sizes && product.sizes.length > 0 && (
              <OptionsGroup>
                <strong>Tamanho</strong>
                <fieldset>
                  {product.sizes.map((size) => (
                    <CustomRadio key={size} name="size" value={size} />
                  ))}
                </fieldset>
              </OptionsGroup>
            )}
            <Button>Adicionar à sacola</Button>
          </form>
        </ProductInfoContainer>
      </ContentContainer>
    </ReactModal>
  )
}

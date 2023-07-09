import ReactModal from 'react-modal'
import { CloseButton, ContentContainer, ModalHeader } from './styles'

import CheckCircle from '../../assets/site/check-circle.svg'
import CloseIcon from '../../assets/site/close-icon.svg'
import { getDeviceType } from '../../utils/get-device-type'

interface ModalProps {
  isModalOpen: boolean
  closeModal: () => void
}

export function NewsLetterModal({ isModalOpen, closeModal }: ModalProps) {
  const device = getDeviceType()

  const modalStyle = {
    overlay: {
      background: 'rgba(0, 0, 0, 0.5)',
      zIndex: 3,
    },
    content: {
      padding: 0,
      border: 0,
      inset: '50% 0 0 50%',
      width: device === 'desktop' ? '700px ' : '350px',
      height: '159px',
      transform: 'translate(-50%, -170%)',
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
          E-mail cadastrado com sucesso!
        </div>
        <CloseButton onClick={handleModalClose}>
          <img src={CloseIcon} alt="Icone em forma de X" />
        </CloseButton>
      </ModalHeader>
      <ContentContainer>
        <p>Em breve você receberá novidades exclusivas da Meteora.</p>
      </ContentContainer>
    </ReactModal>
  )
}

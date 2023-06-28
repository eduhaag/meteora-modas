import { FacilitiesContainer, FacilityCard } from './styles'

import PixIcon from '../../../../assets/site/x-diamond.svg'
import ExchangeIcon from '../../../../assets/site/arrow-repeat.svg'
import SustainabilityIcon from '../../../../assets/site/substract.svg'

export function FacilitiesSection() {
  return (
    <FacilitiesContainer>
      <h2>Conheça todas as nossas facilidades</h2>
      <div className="facilities-list">
        <FacilityCard>
          <img src={PixIcon} alt="Icone do Pix" />
          <div className="facility-description">
            <h3>Pague pelo PIX</h3>
            <span>Ganhe 5% em pagamentos pelo pix</span>
          </div>
        </FacilityCard>
        <FacilityCard>
          <img src={ExchangeIcon} alt="Duas setas em torno de um circulo" />
          <div className="facility-description">
            <h3>Troca grátis</h3>
            <span>Fique livre para trocar em até 30 dias.</span>
          </div>
        </FacilityCard>
        <FacilityCard>
          <img src={SustainabilityIcon} alt="Icone de uma flor" />
          <div className="facility-description">
            <h3>Sustentabilidade</h3>
            <span>Moda responsável, que respeita o meio ambiente.</span>
          </div>
        </FacilityCard>
      </div>
    </FacilitiesContainer>
  )
}

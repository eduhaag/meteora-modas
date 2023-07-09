import { RadioContainer } from './styles'

interface ColorRadioProps {
  name: string
  value: string
  color?: string
}

export function CustomRadio({ value, name, color = '#fff' }: ColorRadioProps) {
  return (
    <RadioContainer color={color}>
      <label htmlFor={value}>
        <input type="radio" id={value} name={name} value={value} required />
        <div className="custom-radio">
          <span></span>
        </div>
        <span>{value}</span>
      </label>
    </RadioContainer>
  )
}

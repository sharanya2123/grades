// Style your elements here
import styled from 'styled-components'

export const GradientGeneratorContainer = styled.div`
  display: flex;
  justify-content: center;
  align-item: center;
  background-image: linear-gradient(${props => props.gradientValue});
  min-height: 100vh;
`

export const ResponsiveContainer = styled.div`
  display: flex;
  flex-diraction: column;
  justify-content: center;
  align-items: center;
  width: 90%;
  min-width: 550px;
  @media screen and (min-width: 768px) {
    width: 85%;
    max-width: 1118px;
  }
`

export const Heading = styled.h1`
  color: #fff;
  font-famliy: 'Roboto';
  font-weight: bold;
  text-align: 24px;
  font-sixe: 24px;
  @media screen and (min-width: 768px) {
    font-size: 32px;
  }
`

export const DirectionsDescription = styled.p`
  color: #fff;
  font-family: 'Roboto',
  font-weight: 500;
  font-size: 22px;
  line-height: 1.5;
`

export const GradientDirectionList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0px;
  @media srceen and (min-width: 768px) {
    width: 60%;
    max-width: 425px;
  }
`

export const ColorsPickersDescription = styled.p`
  color: #ededed;
  font-family: 'Roboto';
  font-weight: 500;
  font-size: 22px;
  line-height: 1.5;
`
export const ColorPickerContainer = styled.div`
  display: flex;
  justify-content: space-between;
  min-width: 320px;
`

export const ColorValue = styled.p`
  color: #fff;
  font-size: 18px;
  font-weight: 500;
`
export const CustomInputAndColorContainer = styled.div`
  display: flex;
  justify-content: space-between;
  min-width: 320px;
`
export const CustomInput = styled.input`
  width: 100px;
  height: 50px;
  background-color: transparent;
  border: none;
  border-radius: 10px;
  outline: none;
  cursor: pointer;
`

export const GenerateButton = styled.button`
  color: #1e293b;
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: 600;
  background-color: #00c9b7;
  min-width: 25px;
  border-radius: 6px;
  border: none;
  padding-left: 5px;
  padding-top: 12px;
  padding-bottom: 12px;
  padding-right: 24px;
  margin-right: 24px;
  margin-bottom: 12px;
  margin-left: 0px;
  margin-top: 25px;
  outline: none;
  cursor: pointer;
`

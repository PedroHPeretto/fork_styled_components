import styled from 'styled-components'
import { corPrincipal, corSecundaria } from '../../global'

export const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr auto;
  background-color: ${corSecundaria};
  padding: 32px;
  border-radius: 12px;
  margin-top: 40px;
`

export const BtnPesquisar = styled.button`
  background-color: ${corPrincipal};
  border: 1px solid ${corPrincipal};
  height: 40px;
  padding: 0 16px;
  font-size: 18px;
  color: ${corSecundaria};
  margin-left: 8px;
  cursor: pointer;
`

export const InputCampo = styled.input`
  padding: 0 16px;
  outline-color: ${corPrincipal};
`

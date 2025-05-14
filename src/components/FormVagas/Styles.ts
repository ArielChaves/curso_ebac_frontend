import styled from 'styled-components'

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const BtnPesquisar = styled.button`
  background-color: var(--cor-principal);
  border: none;
  padding: 10px 16px;
  font-size: 16px;
  color: white;
  cursor: pointer;
  border-radius: 4px;

  &:hover {
    background-color: darkblue;
  }
`

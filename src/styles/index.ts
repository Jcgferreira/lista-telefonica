import styled, { createGlobalStyle } from 'styled-components'
import variaveis from './variaveis'

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    list-style: none;
  }


`
export const Container = styled.div`
  display: grid;
  grid-template-columns: 224px auto;
  background-color: #ffe9ff;
`

export default GlobalStyles

export const MainContainer = styled.main`
  padding: 0 40px;
  height: 100vh;
  overflow-y: scroll;
`
export const Titulo = styled.h2`
  font-weight: bold;
  font-size: 18px;
  display: block;
  margin-top: 40px;
  margin-bottom: 40px;
`
export const Input = styled.input`
  border-radius: 8px;
  padding: 8px;
  background-color: #fff;
  font-weight: bold;
  color: #666666;
  border-color: #666666;
  width: 100%;
`
export const Button = styled.button`
  font-weight: bold;
  font-size: 12px;
  color: #fff;
  padding: 8px 12px;
  border: none;
  cursor: pointer;
  background-color: ${variaveis.buttonP};
  border-radius: 8px;
  margin-right: 8px;
`

export const GreenButton = styled(Button)`
  background-color: ${variaveis.verde1};
`

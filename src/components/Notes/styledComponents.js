// Style your elements here
import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Heading = styled.h1`
  color: #4c63b6;
  font-family: 'Bree Serif';
  font-size: 40px;
`
export const InnerContainer = styled.form`
  width: 70%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: center;
  border: none;
  box-shadow: 1px 1px 6px 4px #aab8c8;
  padding: 14px;
  border-radius: 3px;
`
export const Input = styled.input`
  width: 50%;
  height: 45px;
  margin-bottom: 14px;
  padding-left: 10px;
  font-family: 'Roboto';
  border: none;
  outline: none;
`
export const TextArea = styled.textarea`
  margin-bottom: 14px;
  padding-left: 10px;
  font-family: 'Roboto';
  border: none;
  outline: none;
  padding: 8px;
`

export const Button = styled.button`
  width: 100px;
  height: 40px;
  font-family: 'Roboto';
  border: none;
  outline: none;
  background-color: #4c63b6;
  border-radius: 12px;
  color: white;
  align-self: flex-end;
  margin-right: 20px;
  cursor: pointer;
`
export const UnOrderedList = styled.ul`
  width: 70%;
  display: flex;
  flex-wrap: wrap;
  padding: 0px;
  margin-top: 12px;
`
export const EmptyImg = styled.img`
  width: 150px;
  margin-top: 40px;
`
export const EmptyHead = styled.h1`
  color: #1e293b;
  font-family: 'Roboto';
  font-size: 30px;
`
export const EmptyPara = styled.p`
  color: #475569;
  font-family: 'Roboto';
`
export const EmptyContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

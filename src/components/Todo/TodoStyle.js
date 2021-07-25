import styled, { keyframes } from 'styled-components'

const pulse = keyframes`
  from {
    transform: scale(1.2);
  }

  to {
    transform: scale(1);
  }
`

export const ListItem = styled.li`
  animation: ${(props) => props.importance && pulse} 2s linear infinite;
  min-width: 50%;

  min-height: 2rem;
`

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: relative;
`

export const Icon = styled.span`
  cursor: ${(props) => props.isEditing && 'pointer'};
  margin-left: 0.5rem;
  position: ${(props) => props.delete && 'absolute'};
  right: 15px;
`

export const Input = styled.input`
  width: 50%;
  padding: 0.5rem;
  border-radius: 7px;
  border: 1px solid black;
`
export const Button = styled.button`
  width: 10%;
  cursor: pointer;
  padding: 0.5rem;
  background-color: salmon;
  color: white;
  border: 1px solid black;
  border-radius: 7px;

  &:hover {
    color: salmon;
    background-color: white;
  }
`

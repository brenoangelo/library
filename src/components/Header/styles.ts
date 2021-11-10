import styled from 'styled-components'

export const Container = styled.header`
  background: var(--dark);
  padding: 2rem 0.5rem 15rem;
`

export const Content = styled.div`
  max-width: 1200px;
  margin: 0 auto;

  display: flex;
  justify-content: space-between;

  span{
    color: var(--yellow);
    font-size: 3rem;
  }

  button {
    background: var(--yellow);
    color: var(--dark-blue);
    height: 3rem;
    padding: 0 1.5rem;
    border-radius: 0.5rem;
    border: 0;
    font-size: 1.3rem;
    
    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.80);
      
    }
  }
`
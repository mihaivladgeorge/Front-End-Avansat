import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    height: 50px;
    background-color: #F2CD5C;
    color: #400E32;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
`;

const Announcement = () => {
  return (
      <Container>
          Transportul este gratuit toată săptămâna!
      </Container>
  )
}

export default Announcement;
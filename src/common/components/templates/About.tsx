import React from 'react'
import styled from 'styled-components'

const AboutContainer = styled.div`
  margin-top: 125px;
  color: white;
  text-align: center;
  margin-left: 25%;
  margin-right: 2rem;
`

export const About = () => {
  return (
    <AboutContainer>
      <h1>About</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos error modi reprehenderit autem totam doloremque aspernatur, quasi excepturi eveniet unde quisquam consectetur nostrum ducimus et laboriosam dicta! Sunt facilis animi accusantium eligendi quos, labore quaerat et vitae reprehenderit eveniet unde quisquam ut impedit. Debitis nostrum eius, esse laboriosam ducimus rem? Vel nobis iure dolorum asperiores, reprehenderit necessitatibus cumque dignissimos inventore porro deserunt officiis molestias quibusdam?</p>
    </AboutContainer>
  )
}

import React from 'react'
import styled from 'styled-components'

function Section() {
  return (
    <Wrap>
        <ItemText>
            <h1>TempData</h1>
            <p>SubTempData</p>
        </ItemText>

    </Wrap>
  )
}

export default Section
const Wrap = styled.div`
    width: 100vw;
    height: 100vh;
    background-size: cover;
    background-postion: center;
    backround-repeat: no-repeat;
    background-image: url('https://i.scdn.co/image/ab67616d0000b27317a254f4b79067b7f026ae4f');


`
const ItemText = styled.div`
    padding-top: 10vh;
    text-align: center;

`
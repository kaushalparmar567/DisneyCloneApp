import React from 'react'
import styled from 'styled-components'
import ImgSlider from './ImgSlider'

function Detail() {
    return (
       <Container>
             <Background>
                 <img src="/images/login-background.jpg" />
             </Background>
             <ImageTitle>
                 <img src="/images/viewers-pixar.png"></img>
             </ImageTitle>
             <Controls>
                   <PlayButton>
                          <img src="/images/play-icon-black.png"></img>
                          <span>PLAY</span> 
                   </PlayButton>
                   <TrailerButton>
                   <img src="/images/play-icon-white.png"></img>
                          <span>TRAILER</span>
                   </TrailerButton>
                   <AddButton>
                        <span>+</span>  
                   </AddButton>
                   <GroupWatchButton>
                        <img src="/images/group-icon.png" ></img>                    
                   </GroupWatchButton> 
             </Controls>
             <SubTitle>
                 2018 * 7m * Family, Fantasy, Kids, Animation
             </SubTitle>
             <Description>
             An ageing Chinese mom gets another chance at motherhood when one of her dumplings springs to life as a lively, giggly dumpling boy.
             </Description>
       </Container>
    )
}

export default Detail

const Container = styled.div`
min-height: calc(100vh - 70px);
padding: 0 calc(3.5vw + 5px);
position: relative;

`

const Background = styled.div`
position: fixed;
top:0;
left:0;
bottom: 0;
right: 0;
z-index: -1;
opcaity: 0.8;

img {
    width: 100%;
    min-width: 200px;
    height: 100%;
    min-height: 170px;
    object-fit: cover;
}

`

const ImageTitle = styled.div`
height: 30vh;
width: 35vw;

img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

`

const Controls = styled.div`
display: flex;
align-items: center;

`

const PlayButton = styled.button`
border-radius: 4px;
padding: 0px 24px;
margin-right: 22px;
font-size: 15px;
display: flex;
align-items: center;
height: 56px;
background: rgb (249, 249, 249);
border: none;
letter-spacing: 1.8px;
cursor: pointer; 

    &:hover {
    background: rgb(198, 198, 198);
    }

`

const TrailerButton = styled(PlayButton)`
background: rgba(0,0,0,0.3);
border: 1px solid rgb(249,249,249);
color: rgb(249, 249, 249);

`


const AddButton = styled.button`
width: 44px;
height: 44px;
margin-right: 16px;
display: flex;
align-items: center;
justify-content: center;
border-radius: 50%;
border: 2px solid white:
background-color: rgba(0,0,0,0.6);
cursor: pointer; 
span {
    font-size: 30px;
    color: white;
}
`


const GroupWatchButton = styled(AddButton)`
   background: rgb(0, 0, 0);
`
const SubTitle = styled.div`
   color: rgb(249,249,249);
   font-size: 15px;
   min-height: 20px;
   margin-top: 26px;
`

const Description = styled.div` 
   line-height: 1.4;
   font-size: 20px;
   margin-top: 16px;
   color: rgb(249, 249, 249);
`
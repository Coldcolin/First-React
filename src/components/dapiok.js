import React from 'react'
import styled from 'styled-components'
import Logo from './images/landing-logo.png'
import Cold from './images/mainshot.png'
import Image2 from './images/design-section.png'
import Image3 from './images/preview-section.png'
import Image4 from './images/track-section.png'

const dapiok = () => {
    return (
        <Container>
            <Header>
                <FirstHeader>
                    <Icon src={Logo} alt=""/>
                    <Dapi>Dapi</Dapi>
                    <Change>Change Log</Change>
                    <Pricing>Pricing</Pricing>
                    <Contact>Contact</Contact>
                </FirstHeader>
                <SecondHeader>
                    <Login>Login</Login>
                    <SignUp>Sign Up</SignUp>
                </SecondHeader>
            </Header>
            <Stages>
                <Heading>
                    <Untop><Design>Design,</Design> <Preview> Preview </Preview>  <Track> and Track </Track></Untop>
                    <Under>the API with the Team</Under>
                    </Heading>
                <Paragraph>Dapi helps streamline API integration for the dev team. OpenAPI, sequence diagram,<br></br>
                API document site and mock server. It aims for faster integration and better tracking.</Paragraph>
                <Clicker>Try free Now</Clicker>
            </Stages>
            <Stages2>
                <Screen src={Cold} alt=''/>
            </Stages2>
            <Stages3>
                <Line></Line>
                <Des>Design</Des>
                <Talk>More than just editing an openAPI doc, you can define the model relationship, <br></br> draw sequence diagram to understand better the logic behind each API.</Talk>
                <Case src= {Image2} alt=''/>
            </Stages3>
            <Stages4>
                <Line></Line>
                <Des2>Preview</Des2>
                <Talk>Deploy a password-protected API doc site and mock API server whenever you want.<br></br>Let others in the team to do the integration and review before the API is ready</Talk>
                <Case src= {Image3} alt=''/>
            </Stages4>
            <Stages5>
                <Line></Line>
                <Des3>Track</Des3>
                <Talk>Follow the updates and always keeping everybody aligned on the latest API.<br></br>Review the API designing before the performance issue happens.</Talk>
                <Case src= {Image4} alt=''/>
            </Stages5>
            <Stages6>
                <Dest>Ready to Work on your API?</Dest>
                <Talk>Dapi keeps everyone in the dev team aligned. Backend, Frontend<br></br>and PM, collaborative working in one platform</Talk>
                <Free>Try FREE Now</Free>
            </Stages6>
            <Stages7>
                <Isee src={Cold} alt=''/>
                <Bottoms>
                    <Gits>GitHub</Gits>
                    <Dots>.</Dots>
                    <Gits>Twitter</Gits>
                    <Dots>.</Dots>
                    <Gits>Changelog</Gits>
                    <Dots>.</Dots>
                    <Gits>Pricing</Gits>
                    <Dots>.</Dots>
                    <Gits>Contact</Gits>
                    <Dots>.</Dots>
                    <Gits>Private Privacy</Gits>
                </Bottoms>
            </Stages7>
        </Container>
    )
}

export default dapiok


const Container = styled.div`   
    width: 100%;
    // height: 100vh;
    background-color: #060606;
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: -apple-system, BlinkMacSystemFont, Roboto, "Hiragino Sans GB", Simsun, Arial, sans-self;
`
const Header = styled.div`
    width: 70%;
    height: 100px;
    display: flex;
    justify-content: space-between;
    border: 1px solid black;
    border-radius: 0px 0px 30px 30px;
    position: fixed;
    backdrop-filter: blur(10px);
`
const Stages = styled.div`
    width: 100%;
    height: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 200px;
    text-align: center;
`
const Heading =styled.div`
    font-size: 60px;
    font-weight: 700;

`
const Untop = styled.div`
    display: Flex;
`
const Under = styled.div``
const Design = styled.div`
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
    background-color: #fff;
    background-repeat: no-repeat;
    background-size: 100%;
    background-position: -30rem 0;
    background-image: linear-gradient(45deg,#5b76d4,#f774b9 50%, #fff 75%, #fff);
   -webkit-animation: rainbow-text-animation 5s ease forwards;
   -webkit-animation-iteration-count: infinite;

    
    @keyframes rainbow-text-animation{
        0%{background-position:-30rem 0;background-size:157%}
        30%{background-position:0 0;background-size:200%}
        70%{background-position:30 0;background-size:100%}
        // 100%{background-position:30rem 0;background-size:100%}
    }
`
const Preview = styled.div`
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
    background-color: #fff;
    background-repeat: no-repeat;
    background-size: 100%;
    background-position: -30rem 0;
    background-image: linear-gradient(45deg,#5bd4ad,#7b74f7);
    -webkit-animation: rainbow-text-animation 5s ease forwards;
    -webkit-animation-iteration-count: infinite;
    -webkit-animation-delay: 5s;


    @keyframes rainbow-text-animation{
        0%{background-position:-30rem 0;background-size:157%}
        20%{background-position:0 0;background-size:200%}
        70%{background-position:0 0;background-size:200%}
        100%{background-position:30rem 0;background-size:100%}}
`
const Track = styled.div`
    margin-left: 10px;
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
    background-color: #fff;
    background-repeat: no-repeat;
    background-size: 100%;
    background-position: -30rem 0;
    background-image: linear-gradient(45deg,#ffa117,#ff5656);
    -webkit-animation: rainbow-text-animation 5s ease forwards;
    -webkit-animation-iteration-count: infinite;
    -webkit-animation-delay: 10s;

    
    @keyframes rainbow-text-animation{
        0%{background-position:-30rem 0;background-size:157%}
        20%{background-position:0 0;background-size:200%}
        70%{background-position:0 0;background-size:200%}
        100%{background-position:30rem 0;background-size:100%}
    }
`

const Paragraph = styled.div`
    font-size: 20px;
    font-weight: 400;
    color:#8792a2;
    margin-top: 50px;

`
const Clicker = styled.button`
    width: 300px;
    height: 50px;
    margin-top: 50px;
    background: #060606;
    text-decoration: none;
    color: white;
    border-color: rgba(59,130,246,0.5);
    border-radius: 10px;
    box-shadow: 0 0 25px rgb(91 118 212 / 55%);
    transition: all 0.2s ease-in-out;
    font-size: 18px;
    font-weight: 100px;

    :hover{
        cursor: pointer;
        box-shadow: 0 2px 30px 0 rgb(91 118 212/ 55%), 0 10px 75px 0 rgb(91 118 212/ 55%);
        transistion: 2s,
    }
`

const Stages2 = styled.div`
    width: 100%;
    height: 700px;
    display: flex;
    justify-content: center;
    align-items: center;

`
const Screen = styled.img`
    margin-top: -200px;
    width: 1000px;
    height: 600px;
    background-color: white;
    border-radius: 10px;
    box-shadow: 0 0 35px rgb(91 118 212 / 55%);
`
const Stages3 = styled.div`
    width: 100%;
    height: 1000px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
`
const Line = styled.div`
    width: 0.7px;
    height: 100px;
    background-color: #8792a2;
`
const Des = styled.div`
    font-size: 60px;
    font-weight: 700;
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
    background-color: #fff;
    background-repeat: no-repeat;
    background-size: 100%;
    background-image: linear-gradient(45deg,#5b76d4,#f774b9);
`
const Des3 = styled.div`
    font-size: 60px;
    font-weight: 700;
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
    background-color: #fff;
    background-repeat: no-repeat;
    background-size: 100%;
    background-image: linear-gradient(45deg,#ffa117,#ff5656);
`
const Des2 = styled.div`
    font-size: 60px;
    font-weight: 700;
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
    background-color: #fff;
    background-repeat: no-repeat;
    background-size: 100%;
    background-image: linear-gradient(45deg,#5bd4ad,#7b74f7)
`
const Talk = styled.div`
    font-size: 20px;
    font-weight: 400;
    color:#8792a2;
    Text-align: center;
`
const Case = styled.img`
    width: 1000px;
    height: 600px;
    border-radius: 10px;
    margin-top: 100px;
`
const Stages4 = styled.div`
    width: 100%;
    height: 1000px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
`
const Stages5 = styled.div`
    width: 100%;
    height: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 200px;
    text-align: center;
`
const Stages6 = styled.div`
    width: 100%;
    height: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    Justify-content: center;
    text-align: center;
    justify-content: space-around;
    margin-top: 600px;
`
const Stages7 = styled.div`
    width: 100%;
    height: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
`
const FirstHeader = styled.div`
    display: flex;
    align-items: center;
    width: 450px;
    font-size: 16px;
    line-height: 1.625;
    justify-content: space-around;
`
const SecondHeader = styled.div`
    display: flex;
    align-items: center;
    width: 200px;
    font-size: 16px;
    line-height: 1.625;
    justify-content: space-around; 
`
const Icon = styled.img`
    width: 50px;
    height: 50px;
    colour: black;
    border-radius: 50%;
    object-fit: cover;
`
const Dapi = styled.div`
    cursor: pointer;
`
const Change = styled.div`
    cursor: pointer;
`
const Pricing = styled.div`
    cursor: pointer;
`
const Contact = styled.div`
    cursor: pointer;  
`
const Login = styled.div`
    color: #5084E1;
    cursor: pointer;
`
const SignUp = styled.div`
    width: 100px;
    height: 30px;
    background-color: #5084E1;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px; 
    cursor: pointer;
`
const Free = styled.div`
    width: 200px;
    height: 60px;
    background-color: #5084E1;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px; 
    cursor: pointer;
    margin-top: 50px;

    :hover{
    width: 220px;
    height: 70px;
    }
`
const Dest = styled.div`
    font-size: 60px;
    font-weight: 700;
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
    background-color: #fff;
    background-repeat: no-repeat;
    background-size: 100%;
`
const Isee = styled.img`
    width: 50px;
    height: 50px;
    margin-bottom: 30px;
    border-radius: 50%;
    object-fit: cover;
`
const Bottoms = styled.div`
    width: 50%;
    display: flex;
    justify-content: space-around;
    margin-bottom: 50px;
`
const Gits = styled.div`
    color:#8792a2;
    font-size: 16px;
    line-height: 1.625;
    font-family: -apple-system, BlinkMacSystemFont, Roboto, "Hiragino Sans GB", Simsun, Arial, sans-self;
`
const Dots = styled.div`
    color:#8792a2;
`
    
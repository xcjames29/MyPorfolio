import styled from "styled-components";
import myPict from "../static/images/myPict.png"
const AboutContainer = styled.div`
    width: 100vw;
    height: 90vh;
    background-color: #313131;
    padding: 5vh 5vw;
    display: flex;
`

const Divider = styled.div`
    height: 100%;
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px 50px;
    flex-wrap: wrap;
    flex-direction: column;
`;


const Heading = styled.h1`
    color: #5697d4;
    font-size: 4vw;
    align-self: flex-start;
`;
const Heading2 = styled.h2`
    color: #c0c0c0;
    font-size: 2vw;
`;

const Text = styled.p`
    color: #c0c0c0;
    font-size: 1.5vw;
`;

const ImageContainer=styled.div`
    background-color: white;
    border-radius: 50%;
    width: 30vw;
`;

const Image = styled.img`
    width: 100%;
    border-radius: 50%;
`;

export default function About(){
    return(
        <AboutContainer>
            <Divider>
                <Heading>about me</Heading>
                <Heading2>
                    My name is Clark James Evangelista. 
                    <br />
                    I am a Fullstack web developer from Ibaraki, Japan.
                    <br />
                    <br />
                </Heading2>
                <Text>
                    I Enjoy taking complex problems and turning them into simple and 
                    beautiful interface designs. I also love the logic and structure
                    of coding and always strive to write elegant and efficient code.
                    <br /> <br />
                    When I'm not coding, you'll find me exploring  beautiful places or playing strategy games with friends.
                </Text>
            </Divider>
            <Divider>
                <ImageContainer>
                    <Image src={myPict} />
                </ImageContainer>
            </Divider>
        </AboutContainer>
    )
}
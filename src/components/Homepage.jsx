import styled from "styled-components"
import myResume from "../static/resume/ClarkResume.pdf"
import myPict from "../static/images/sample.png"
const HomepageContainer = styled.div`
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
`;

const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
`;

const NameSpan = styled.span`
    color: #5697d4;
`;

const Heading = styled.h1`
    color: white;
    font-weight:bold;
`;

const Text = styled.p`
    color: #c0c0c0;
`;

const Wrapper = styled.div`
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
`;

const LearnMore = styled.a`
    color: white;
    border-radius: 20px;
    padding: 5px 20px;
    background-color: #5697d4;
    border: 0;
    font-size: 18px;
    width: fit-content;
    font-weight: bold;
    margin-top: 5px;
    align-self: center;
    text-decoration: none;
    &:hover{
        background-color: white;
        color: #5697d4;
    }
`;

const Image = styled.img`
    max-width: 500px;
    width: 80%;
`;


export default function HomePage() {


    return (
        <HomepageContainer>
            <Divider>
                <Image src={myPict} />
            </Divider>
            <Divider>
            <TextContainer>
                    <Heading>Hi, I'm <NameSpan>Clark</NameSpan>!</Heading>
                    <Text>I am a Fullstack Web Developer currently based in Ibaraki, Japan.</Text>
                    <Wrapper>
                        <LearnMore href="/about">Learn More </LearnMore>
                        <LearnMore href={myResume} download> Get My Resume</LearnMore>
                        <LearnMore href="/contact">Contact Me </LearnMore>
                    </Wrapper>
                </TextContainer>
            </Divider>
        </HomepageContainer>
    )
}
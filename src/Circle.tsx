import styled from "styled-components";
interface ContainerProps {
    bgColor: string;
    borderColor: string;
}

const Container = styled.div<ContainerProps>`
    width: 200px;
    height: 200px;
    justify-content: center;
    align-items: center;
    display: flex;
    background-color: ${(props) => props.bgColor};
    border-radius: 100px;
    border: 5px solid ${(props) => props.borderColor};
`;
interface CircleProps {
    bgColor: string;
    // ? ==  optional
    borderColor?: string;
    text?: string;
}
function Circle({bgColor, borderColor, text = "default text"}: CircleProps) {
    return (
        <Container
            bgColor={bgColor}
            // ?? == default value
            borderColor={borderColor ?? bgColor}
        >
            {text}
        </Container>
    );
}

export default Circle;

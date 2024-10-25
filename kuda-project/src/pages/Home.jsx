import styled from "styled-components"
import Image from "../assets/Screenshott.png"
import { IoLogoApple } from "react-icons/io5";
import Googleplay from "../assets/icons8googleplay.png"

const Home =()=>{
    return(
        <Container>
            <Wrapper>
                <TextBox>
                    <h1>The money app for Africans.</h1>
                    <p>Make free transfers, enjoy cashless payment options and earn interest on your savings with Kuda.</p>
                    <Buttons>
                        <button className="btn1">
                        <IoLogoApple size={34} />
                            <div className="text1">
                                <h5>Download on the</h5>
                                <h4>App Store</h4>
                            </div>
                        </button>
                        <button className="btn2">
                            <img src={Googleplay} alt="" />
                            <div className="text2">
                                <h5>GET IT ON</h5>
                                <h4>Google Play</h4>
                            </div>
                        </button>
                    </Buttons>
                </TextBox>
                <ImageBox>
                    <img src={Image} alt="" />

                </ImageBox>
            </Wrapper>
        </Container>
    )
}
export default Home

const Container = styled.div`
border: 1px solid blue;
width: 100%;
height: 100vh;
`
const Wrapper = styled.div`
border: 1px solid red;
display: flex;
justify-content: space-between;
`
const TextBox = styled.div`
border: 1px solid green;
height: auto;
h1{
    padding-left: 50%;
    width: 50%;
}
`
const Buttons = styled.div`
display: flex;
gap: 50px;
margin-left: 50px;
.btn1{
    display: flex;
    height: 70px;
    width: 180px;
    background-color: black;
    border: none;
    color: white;

.text1{
    line-height: 0;
h5{
    font-size: 10px;
}
h4{
    font-size: 18px;
}

}
}
.btn2{
    display: flex;
    height: 70px;
    width: 180px;
    background-color: black;
    border: none;
    color: white;
 img{
    width: 50px;
    height: 50px;
    padding-top: 10px;
}
.text2{
    line-height: 0;
h5{
    font-size: 10px;
}
h4{
    font-size: 18px;
}

}
}
`
const ImageBox = styled.div``
import { MdArrowDropDown } from "react-icons/md";
import styled from "styled-components";
import { Link } from "react-router-dom";
const Header = () => {
    return(
        <Container>
            <LogoNav>
                <Logo>
                    <img src="" alt="" />
                </Logo>
                <Navigations>
                    <Link to= "/">
                    <nav>
                        <span>Personal</span>
                        <MdArrowDropDown size={20}/>
                    </nav>
                    </Link>

                    <Link to="/business">
                    <nav>
                        <span>Business</span>
                        <MdArrowDropDown size={20}/>
                    </nav>
                    </Link>

                    <Link to="company">
                    <nav>
                        <span>Company</span>
                        <MdArrowDropDown size={20}/>
                    </nav>
                    </Link>

                    <nav>
                        <span>Help</span>
                        <MdArrowDropDown size={20}/>
                    </nav>
                </Navigations>
            </LogoNav>
            <Button>
                <SignBtn>Sign In</SignBtn>
                <JoinBtn>Join Kuda</JoinBtn>
                <ConBtn>
                    <img src="./log.png" alt="" />
                </ConBtn>
            </Button>
        </Container>
    )
}

export default Header

const Container = styled.div`
height: 70px;
/* background-color: aqua; */
display: flex;
justify-content: space-between;
align-items: center;
box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`
const LogoNav = styled.div`
display: flex;
align-items: center;
`
const Logo = styled.div`
margin:0px 80px 0px 60px;
img{
    width: 40px;
}
`
const Navigations = styled.div`
display: flex;
nav{
    display: flex;
    align-items: center;
    color: #5e025e;
    margin: 0px 15px;
    span{
        margin-right: 10px;
        font-size: 13px;
        font-weight: 600;
    }
}
`
const Button = styled.div`
display: flex;
align-items: center;
`
const SignBtn = styled.div`
background-color: transparent;
border: none;
outline: none;
font-weight: 600;
color: #5e025e;
`
const JoinBtn = styled.div`
width: 150px;
height: 45px;
border-radius: 10px;
outline: none;
border: none;
color: white;
background-color: #5e025e;
font-weight: 700;
`
const ConBtn = styled.div`
background-color: #8f578f;
outline: none;
border: none;
height: 40px;
width: 40px;
border-radius: 50%;
/* display: flex;
justify-content: center;
align-items: center; */
margin-right: 50%;
img{
    width: 30px;
}`


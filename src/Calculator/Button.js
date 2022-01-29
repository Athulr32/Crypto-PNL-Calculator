import styled from 'styled-components'

const Button = styled.button`

@media(min-width:300px){
    background-color:red;
    width:35%;
    height:40px;
    border:none;
    font-size:15px;
    border-radius: 10px;
    color:white;
    padding:0;
}

@media (min-width:720px) {
    background-color:red;
    width:30%;
    height:40px;
    border:none;
    font-size:30px;
    border-radius: 10px;
    color:white;
    padding:0;
    cursor:pointer;
}

`

export default Button;
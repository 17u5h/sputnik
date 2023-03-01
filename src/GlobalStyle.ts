import styled, {createGlobalStyle} from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    //font-size: 16px;

    :before {
      box-sizing: border-box;
    }

    :after {
      box-sizing: border-box;
    }
  }

  body {
    font-family: 'Roboto', sans-serif;
  }

  a, a:visited {
    text-decoration: none;
    font-family: 'Roboto', sans-serif;
    cursor: pointer;
  }
`

export const theme = {
	global: {
		font: {
			family: "Roboto",
			size: "18px",
			height: "20px",
		}
	}
}

export const CloseModal = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
`
export const IconContainer = styled.div`
  cursor: pointer;
`
export const Modal = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  width: 240px;
  height: 400px;
  border-radius: 10px;
  background-color: #fff;
`
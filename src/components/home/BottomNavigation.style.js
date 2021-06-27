import styled, { keyframes } from "styled-components";

const bounce = keyframes`
	0% {
		transform: translate(0px, 0px); 
	}
	40% {
		transform: translate(0px, -12px);
	}
	80% {
		transform: translate(0px, 2px); 
	}
	100% {
		transform: translate(0px, 0px); 
	} 
}
`;
export const Wrapper = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Nav = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  overflow: hidden;
  border-radius: 10px 10px 0 0;
  background-color: rgba(255, 255, 255, 0.6);
  box-shadow: inset rgba(255, 255, 255, 0.6) 0 1px 1px;
  min-width: 500px;
  border-radius: 5px;

  min-height: 110px;
  height: 100%;
  z-index: 1;
  transition: all 0.8s ease;
  transform: translate(0%, 80%);
  opacity: 0;
  &:hover {
    transition: all 0.8s ease;
    transform: translate(0%, 0%);
    opacity: 1;
  }
`;

export const Icon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  padding: 5px;
  border-radius: 5px;
  font-size: 30px;
  margin: 0 4px;
  color: #000;


  width: 64px;
  height: 64px;
  -webkit-box-reflect: below 2px -webkit-gradient(linear, left top, left bottom, from(transparent), color-stop(0.7, transparent), to(rgba(255, 255, 255, 0.5)));
  -webkit-transition: all 0.3s;
  -webkit-transform-origin: 50% 100%;

  
  &:hover {
    -webkit-transform: scale(1.3);
    margin: 0 1em;
    cursor: pointer;
  }
  }
`;

export const IconBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content:center;
  flex-wrap: wrap;
  background-color: #fff;
  padding: 5px;
  border-radius: 5px;
  font-size: 30px;
  margin: 0 4px;
  color: #000;

  width: 64px;
  height: 64px;

  -webkit-box-reflect: below 2px -webkit-gradient(linear, left top, left bottom, from(transparent), color-stop(0.7, transparent), to(rgba(255, 255, 255, 0.5)));
  -webkit-transition: all 0.3s;
  -webkit-transform-origin: 50% 100%;

  
  &:hover {
  animation: ${bounce} 1s linear infinite;
    margin: 0 .5em;
    cursor: pointer;


  }
  }
`;

export const ModalWrapper = styled.div`
  width: 500px;
  height: 200px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(${(props) => props.transform || 0}%, -50%);
  z-index: 2;
  border-radius: 5px;
  background-color: rgba(255, 255, 255, 0.4);
  box-shadow: inset rgba(255, 255, 255, 0.4) 0 1px 1px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  flex-wrap: wrap;

  transition: all 0.8s ease;
  &:hover {
    transition: all 0.8s ease;
  }
`;

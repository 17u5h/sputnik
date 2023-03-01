import styled from "styled-components";

export const ModalContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  width: 600px;
  max-height: 600px;
  padding: 20px 40px;
  margin-top: 100px;
  border-radius: 10px;
  background-color: #fff;
`
export const ModalDeletePostContainer = styled(ModalContainer)`
  gap: 20px;
  flex-direction: row;
  width: 460px;
  padding-top: 40px;
`
export const ViewTitle = styled.div`
  font-weight: 500;
  font-size: 24px;
`
export const ViewBody = styled.div`
  font-size: 20px;
`
export const EditTitle = styled.textarea`
  width: 90%;
  height: 100px;
  font-weight: 500;
  font-size: 24px;
`
export const EditBody = styled.textarea`
  width: 90%;
  height: 400px;
  font-size: 20px;
`
export const DeleteButton = styled.button`
  height: 60px;
  padding: 0 40px;
  border: none;
  border-radius: 12px;
  background-color: #cc1639;
  color: #fff;
  font-size: 20px;

  &:hover {
    background-color: #a4122e;
  }

  &:active {
    background-color: #7e0e23;
  }
`
export const CancelButton = styled(DeleteButton)`
  background-color: #cecece;

  &:hover {
    background-color: #a1a1a1;
  }

  &:active {
    background-color: #757575;
  }
`
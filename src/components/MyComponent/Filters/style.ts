import styled from "styled-components";

export const FiltersContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`
export const AdditionalFiltersContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  width: 240px;
  height: 400px;
	margin-top: 100px;
  border-radius: 10px;
  background-color: #fff;
`
export const SearchContainer = styled.div`
  display: flex;
	align-items: center;
  gap: 20px;
`
export const Input = styled.input`
  width: 800px;
  height: 60px;
  border: 1px solid #7e86b4;
  border-radius: 12px;
  padding-left: 20px;
  font-size: 20px;
  outline: none;
	
  &:hover, &:focus {
    box-shadow: 0 0 0 3px #666d93;
  }
`
export const SmallInput = styled(Input)`
  width: 200px;
  height: 60px;
  border: 2px solid #7e86b4;
  border-radius: 6px;
  padding: 4px 10px;

  &:hover, &:focus {
    box-shadow: 0 0 0 2px #666d93;
  }
`

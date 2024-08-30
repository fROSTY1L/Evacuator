import styled from 'styled-components';
import { color } from '../../variables/theme';

const PaginationContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 2.3vw);
  align-items: center;
  justify-content: center;
  align-content: center;
  margin-top: 20px;
  gap: 1vw;
  height: 100%;
  
`;

const PaginationItemConcept = `
  height: 2.3vw;
    font-size: clamp(0.1vw, 1vw, 2.4vw);
    background: ${color.white};
    color: ${color.primary};
    border: 1px solid ${color.primary};
    cursor: pointer;
    border-radius: .4vw;
    font-weight: 700;
`

const PaginationNext = styled.button`
    ${PaginationItemConcept}
    &:disabled {
      cursor: not-allowed;
      display: none; 
    }
`
const PaginationItem = styled.button`
    ${PaginationItemConcept}
    &:disabled {
      cursor: not-allowed;
      background: ${color.primary};
      color: ${color.white}; 
    }
`;


export {PaginationContainer, PaginationItem, PaginationNext }
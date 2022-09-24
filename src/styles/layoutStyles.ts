import styled from "styled-components";


export const GridLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 5fr;
  grid-template-rows: 12vh 88vh;
  grid-template-areas: "a h" "a m";
  overflow: hidden;
`;

export const Section = styled.section`
  background: red;
  grid-area: m;
  overflow-y: auto;
`;
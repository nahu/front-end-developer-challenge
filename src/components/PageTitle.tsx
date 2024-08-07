import styled from 'styled-components';
import { bgTitle } from '@/constants';

const PageTitle = styled.div`
  margin-top: 20px;
  margin-bottom: 40px;
  margin-left: 10px;
  margin-right: 10px;
  padding-top: 8px;
  padding-bottom: 8px;
  text-align: center;
  font-size: 26px;
  font-weight: 400;
  color: white;
  background-color: ${bgTitle};
  opacity: 0.8;
  font-family: 'Open Sans', sans-serif;
`;

export default PageTitle;

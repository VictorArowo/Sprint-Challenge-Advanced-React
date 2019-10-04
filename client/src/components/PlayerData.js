import React from 'react';
import styled from 'styled-components';
import GetCode from '../helpers/GetCode';

const Div = styled.div`
  margin: 20px;
  width: 150px;
  height: 150px;
  padding: 20px;
  text-align: center;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
`;

const PlayerData = ({ data }) => {
  return (
    <Div>
      <div className="f32">
        <div className={`flag ${GetCode(data.country)}`}></div>
      </div>
      <h2>{data.name}</h2>
      <div>Number of Searches: {data.searches}</div>
    </Div>
  );
};

export default PlayerData;

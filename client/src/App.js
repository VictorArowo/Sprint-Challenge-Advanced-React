import React, { Component } from 'react';
import './App.css';
import PlayerData from './components/PlayerData';
import styled from 'styled-components';
import withHooks from './HOC/withHooks';

const Div = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: 50px;
`;

const Img = styled.img`
  height: 200px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  h1 {
    margin-right: 400px;
    font-size: 50px;
  }
`;

class App extends Component {
  render() {
    const data = this.props.data;
    return (
      data && (
        <>
          <Header>
            <Img src="img/lgoo.svg" />
            <h1>2019 Women's World Cup Insight</h1>
          </Header>
          <Div>
            {data.map(item => (
              <PlayerData key={item.id} data={item} />
            ))}
          </Div>
        </>
      )
    );
  }
}

export default withHooks(App);

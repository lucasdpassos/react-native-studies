import React from "react";
import { View, Text } from "react-native";
import styled from 'styled-components/native'

const Background = styled.SafeAreaView` 
  background-color:black;
  width:100%;
  height:100%;
`

const BgH1 = styled.Text`
  color: azure;
  font-size:20px;
  margin: 0 auto;

`

const Page = () => {
  return (

    <Background>
      <BgH1>Pegar uma borracha de apagar bits</BgH1>
    </Background>
  );
};

export default Page;
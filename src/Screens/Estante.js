import React, { Component } from 'react';
import { View, FlatList, Text } from 'react-native';
import DatabaseBiblioteca from '../Database/DatabaseBiblioteca';
import ListaLivros from '../Components/ListaLivros';
import { Divider } from 'react-native-paper';

export default class Estante extends Component {

  constructor(props) {
    super(props);
    this.state = {
      dadosBanco: [],
    };
    navigation = this.props.navigation;
    this.Listar();
  }

  Listar = () => {
    const banco = new DatabaseBiblioteca();
    banco.Listar().then(
      dadosBanco => {
        this.setState({ dadosBanco: dadosBanco });
      }
    );
  }

  render() {
    return (
      <View>
        <Text style={{margin: 10, marginLeft: 20}}>Clique no título dos livros para mais detalhes.</Text>
        <Divider/>
        <FlatList
          data={this.state.dadosBanco}
          renderItem={({ item }) => ListaLivros({ item, navigation })}
          key={({ item }) => item.Id}
          horizontal={false}
        />
      </View>
    );
  }
}

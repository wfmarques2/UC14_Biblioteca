import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import Livro from '../Models/Livro';
import DatabaseBiblioteca from '../Database/DatabaseBiblioteca';
import { TextInput, Button, Divider } from 'react-native-paper';
import { launchImageLibrary } from 'react-native-image-picker';

export default class Cadastro extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Titulo: '',
      Autor: '',
      Ano: '',
      Descricao: '',
      Imagem: '',
    };
  }

  Cadastrar = (Titulo, Autor, Ano, Descricao, Imagem, Status) => {
    const novoLivro = new Livro(Titulo, Autor, Ano, Descricao, Imagem, Status);
    const banco = new DatabaseBiblioteca();
    banco.Adicionar(novoLivro);
  };

  pickImage = async () => {
    const image = await launchImageLibrary({ mediaType: 'photo' });
    console.log(image.assets);
    this.setState({ Imagem: image.assets[0].uri });
  };

  render() {
    return (
      <ScrollView>
        <View style={style.container}>
          <Text style={{ margin: 5 }}>
            Preencha o formulário com os dados do livro:
          </Text>
          <Divider />
          <TextInput
            label="Título"
            onChangeText={(valorDigitado) => {
              this.setState({ Titulo: valorDigitado });
            }}
            mode="outlined"
            style={style.input}
            activeOutlineColor="#F3717F"
            outlineColor="#E7E7E7"
          />
          <TextInput
            label="Autor"
            onChangeText={(valorDigitado) => {
              this.setState({ Autor: valorDigitado });
            }}
            mode="outlined"
            style={style.input}
            activeOutlineColor="#F3717F"
            outlineColor="#E7E7E7"
          />
          <TextInput
            label="Ano"
            onChangeText={(valorDigitado) => {
              this.setState({ Ano: valorDigitado });
            }}
            mode="outlined"
            style={style.input}
            activeOutlineColor="#F3717F"
            outlineColor="#E7E7E7"
          />
          <TextInput
            label="Descrição"
            onChangeText={(valorDigitado) => {
              this.setState({ Descricao: valorDigitado });
            }}
            mode="outlined"
            style={style.input}
            activeOutlineColor="#F3717F"
            outlineColor="#E7E7E7"
          />
          <Text style={{margin: 5, marginTop: 0}}>Digite a url ou escolha uma imagem da galeria</Text>
          <View style={{ alignItems: 'center' }}>
            
            <Image style={style.imagem} source={{ uri: this.state.Imagem }} />
          </View>
          <TextInput
            label="Imagem da Capa"
            onChangeText={(valorDigitado) => {
              this.setState({ Imagem: valorDigitado });
            }}
            mode="outlined"
            style={style.input}
            activeOutlineColor="#F3717F"
            outlineColor="#E7E7E7"
            placeholder="Digite a url da imagem"
          />
          <Button
            style={style.button}
            icon="file-image-plus-outline"
            mode="contained"
            onPress={() => this.pickImage()}
          >
            Adicionar Imagem
          </Button>
          <Button
            style={style.button}
            icon="content-save"
            mode="contained"
            onPress={() =>
              this.Cadastrar(
                this.state.Titulo,
                this.state.Autor,
                this.state.Ano,
                this.state.Descricao,
                this.state.Imagem,
                'Pendente'
              )
            }
          >
            Salvar
          </Button>
        </View>
      </ScrollView>
    );
  }
}

const style = StyleSheet.create({
  container: {
    margin: 10,
    justifyContent: 'center',
    flex: 1,
  },

  input: {
    backgroundColor: '#E7E7E7',
    marginVertical: 5,
    height: 40,
  },

  button: {
    backgroundColor: '#F3717F',
    marginTop: 5,
  },
  imagem: {
    width: 120,
    height: 200,
    borderRadius: 5,
    backgroundColor: 'gray',
  },
});

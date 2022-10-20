import React from 'react'
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons'
import DatabaseBiblioteca from '../Database/DatabaseBiblioteca'
import { Divider, Surface, Button } from 'react-native-paper'

export default function Detalhes({ route }) {

    const { data } = route.params;

    MarcarComoLido = (id) => {
        const banco = new DatabaseBiblioteca();
        banco.Concluir(id);
    }

    getIcon = () => {
         
        if (data.Status == "Pendente") {
            return <Text style={{ textAlign: "center", fontSize: 20, color: "#FF8000" }}><Icon2 name="dots-horizontal-circle-outline" size={18} />  {data.Status} </Text>
        }
        else {
            return <Text style={{ textAlign: "center", fontSize: 18, color: "#058105" }}><Icon name="check" size={20} />  {data.Status} </Text>
        }
    }



    Excluir = (id) => {
        const banco = new DatabaseBiblioteca();
        banco.Excluir(id);
    }

    return (

        <ScrollView>
            <Surface style={style.surface} elevation={4}>
                <View style={style.tituloContainer}>

                    <Text style={style.titulo}>{data.Titulo}</Text>
                    {getIcon()}

                </View>

                <Divider style={{height: 2}}/>

                <View >
                    <View style={{ alignItems: "center", marginHorizontal:5 }}>

                        <Image style={style.imagem} source={{ uri: data.Imagem }} />
                        <Text style={style.author}>{data.Autor}</Text>
                        <Text style={{ margin: 5, color: "#345d73" }}>Ano de Lançamento: {data.Ano}</Text>
                        <Text style={style.description}>{data.Descricao}</Text>
                        
                    </View>
                    <Divider style={{height: 2}}/>
                    <View style={style.buttons}>

                        <Button style={{ margin: 5 }} mode="text" color="#F3717F" compact={true} onPress={() => { MarcarComoLido(data.Id)} } >
                            Marcar Como Lido
                        </Button>
                        <Button style={{margin: 5 }}  mode="text" color="#F3717F" compact={true} onPress={() => { Excluir(data.Id) }}>
                            Excluir
                        </Button>

                    </View>

                </View>
            </Surface>
        </ScrollView>
    )
}

const style = StyleSheet.create({
    
  tituloContainer: {
    margin: 5,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  titulo: {
    fontSize: 18,
    marginLeft: 5,
    color: '#345d73',
    fontWeight: 'bold',
  },

  description: {
    margin: 10,
    textAlign: 'justify',
  },

  imagem: {
    width: 120,
    height: 200,
    margin: 10,
    borderRadius: 5,
  },

  author: {
    margin: 5,
    color: '#345d73',
    fontWeight: 'bold',
    fontSize: 16,
  },

  buttons: {
    flex: 1,
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    marginHorizontal: 5,
  },

  surface: {
    padding: 8,
    margin: 10,
  },
});
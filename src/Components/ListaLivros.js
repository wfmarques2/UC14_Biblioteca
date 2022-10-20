import React from 'react'
import { StyleSheet, ScrollView } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { List, Divider } from 'react-native-paper'

export default function ListaLivros({ item, navigation }) {
	return (
		<ScrollView>
			<List.Item
				title={item.Titulo}
				description={item.Autor}
				left={(props) => (
					<Icon {...props} name='book' size={30} style={{ color: '#F3717F', margin: 10 }} />
				)}
				onPress={() => navigation.navigate('Detalhes', { data: item })}
				style={{ color: '#325C80' }}
			/>
			<Divider />
		</ScrollView>
	)
}

const style = StyleSheet.create({
	dados: {
		width: 200,
		height: 20,
		marginBottom: 5,
	},
	texto: {
		fontSize: 14,
	},
})

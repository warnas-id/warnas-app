//
//  SyaratCaraDeskripsiPoin
//  UI-Warnas
//
//  Created by Supernova.
//  Copyright © 2018 Supernova. All rights reserved.
//

import React from "react"
import { strings } from "./../Locales/i18n"
import { ScrollView, StyleSheet, Text, View } from "react-native"


export default class SyaratCaraDeskripsiPoin extends React.Component {

	static navigationOptions = ({ navigation }) => {
	
		const { params = {} } = navigation.state
		return {
				header: null,
				headerLeft: null,
				headerRight: null,
			}
	}

	constructor(props) {
		super(props)
	}

	componentDidMount() {
	
	}

	render() {
	
		return <View
				style={styles.viewView}>
				<ScrollView
					style={styles.viewScrollView}>
					<View
						style={styles.backgroundView}/>
					<View
						pointerEvents="box-none"
						style={{
							position: "absolute",
							left: 22,
							right: 23,
							top: 10,
							bottom: 18,
						}}>
						<View
							style={styles.topPageIndicatorView}/>
						<Text
							style={styles.syaratDanKetentuanText}>{strings("SyaratCaraDeskripsiPoin.syaratDanKetentuanText")}</Text>
						<Text
							style={styles.loremIpsumIsSiText}>{strings("SyaratCaraDeskripsiPoin.loremIpsumIsSiText")}</Text>
					</View>
				</ScrollView>
			</View>
	}
}

const styles = StyleSheet.create({
	viewView: {
		backgroundColor: "white",
		flex: 1,
	},
	viewScrollView: {
		backgroundColor: "transparent",
		shadowColor: "rgba(0, 0, 0, 0.15)",
		shadowRadius: 5,
		shadowOpacity: 1,
		flex: 1,
		marginTop: 95,
	},
	backgroundView: {
		backgroundColor: "white",
		borderRadius: 10,
		shadowColor: "rgba(0, 0, 0, 0.15)",
		shadowRadius: 5,
		shadowOpacity: 1,
		position: "absolute",
		left: 0,
		right: 0,
		top: 0,
		height: 720,
	},
	topPageIndicatorView: {
		backgroundColor: "rgb(225, 225, 225)",
		borderRadius: 2,
		alignSelf: "center",
		width: 49,
		height: 4,
	},
	syaratDanKetentuanText: {
		color: "black",
		fontFamily: "Poppins-Bold",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "left",
		backgroundColor: "transparent",
		alignSelf: "flex-start",
		marginTop: 26,
	},
	loremIpsumIsSiText: {
		backgroundColor: "transparent",
		color: "black",
		fontFamily: "Poppins-Regular",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		lineHeight: 15,
		paddingTop: 2,
		flex: 1,
		marginTop: 10,
	},
})

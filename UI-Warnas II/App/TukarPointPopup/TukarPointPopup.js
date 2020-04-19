//
//  TukarPointPopup
//  UI-Warnas
//
//  Created by Supernova.
//  Copyright © 2018 Supernova. All rights reserved.
//

import React from "react"
import { strings } from "./../Locales/i18n"
import { Image, StyleSheet, Text, View } from "react-native"


export default class TukarPointPopup extends React.Component {

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
				<View
					style={styles.menuUpView}>
					<View
						style={styles.backgroundView}/>
					<View
						pointerEvents="box-none"
						style={{
							position: "absolute",
							left: 22,
							right: 38,
							top: 13,
							bottom: 32,
						}}>
						<View
							style={styles.topPageIndicatorView}/>
						<Text
							style={styles.tukarPoinSayaText}>{strings("TukarPointPopup.tukarPoinSayaText")}</Text>
						<View
							pointerEvents="box-none"
							style={{
								height: 35,
								marginLeft: 10,
								marginTop: 32,
								flexDirection: "row",
								alignItems: "flex-start",
							}}>
							<View
								style={styles.group69View}>
								<Image
									source={require("./../../assets/images/gopay-3.png")}
									style={styles.gopayImage}/>
							</View>
							<Text
								style={styles.textText}>{strings("TukarPointPopup.textText")}</Text>
							<View
								style={{
									flex: 1,
								}}/>
							<Text
								style={styles.rp7000Text}>{strings("TukarPointPopup.rp7000Text")}</Text>
						</View>
						<View
							style={styles.line25View}/>
						<View
							pointerEvents="box-none"
							style={{
								height: 35,
								marginLeft: 11,
								marginTop: 14,
								flexDirection: "row",
								alignItems: "flex-start",
							}}>
							<View
								style={styles.group68View}>
								<Image
									source={require("./../../assets/images/ovo-3.png")}
									style={styles.ovoImage}/>
							</View>
							<Text
								style={styles.textTwoText}>{strings("TukarPointPopup.textTwoText")}</Text>
							<View
								style={{
									flex: 1,
								}}/>
							<Text
								style={styles.rp7000TwoText}>{strings("TukarPointPopup.rp7000TwoText")}</Text>
						</View>
						<View
							style={{
								flex: 1,
							}}/>
						<View
							style={styles.line26View}/>
					</View>
				</View>
			</View>
	}
}

const styles = StyleSheet.create({
	viewView: {
		backgroundColor: "white",
		flex: 1,
		justifyContent: "flex-end",
	},
	menuUpView: {
		backgroundColor: "transparent",
		shadowColor: "rgba(0, 0, 0, 0.15)",
		shadowRadius: 5,
		shadowOpacity: 1,
		height: 243,
		marginRight: 1,
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
		height: 243,
	},
	topPageIndicatorView: {
		backgroundColor: "rgb(225, 225, 225)",
		borderRadius: 2,
		alignSelf: "center",
		width: 49,
		height: 4,
	},
	tukarPoinSayaText: {
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
	group69View: {
		backgroundColor: "rgb(4, 158, 194)",
		borderRadius: 5,
		width: 78,
		height: 35,
		justifyContent: "center",
	},
	gopayImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: null,
		height: 12,
		marginLeft: 13,
		marginRight: 11,
	},
	textText: {
		color: "black",
		fontFamily: "Poppins-Regular",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		marginLeft: 15,
		marginTop: 10,
	},
	rp7000Text: {
		color: "black",
		fontFamily: "Poppins-Bold",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "left",
		backgroundColor: "transparent",
		marginTop: 10,
	},
	line25View: {
		backgroundColor: "rgb(112, 112, 112)",
		height: 1,
		marginLeft: 103,
		marginRight: 1,
		marginTop: 15,
	},
	group68View: {
		backgroundColor: "rgb(76, 52, 148)",
		borderRadius: 5,
		width: 78,
		height: 35,
		justifyContent: "center",
	},
	ovoImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: null,
		height: 13,
		marginLeft: 19,
		marginRight: 20,
	},
	textTwoText: {
		backgroundColor: "transparent",
		color: "black",
		fontFamily: "Poppins-Regular",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		marginLeft: 14,
		marginTop: 11,
	},
	rp7000TwoText: {
		color: "black",
		fontFamily: "Poppins-Bold",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "left",
		backgroundColor: "transparent",
		marginTop: 11,
	},
	line26View: {
		backgroundColor: "rgb(112, 112, 112)",
		height: 1,
		marginLeft: 103,
		marginRight: 1,
	},
})

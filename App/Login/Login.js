//
//  Login
//  warnasmobile
//
//  Created by Supernova.
//  Copyright © 2018 Supernova. All rights reserved.
//

import React from "react"
import { strings } from "./../Locales/i18n"
import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native"


export default class Login extends React.Component {

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

	onGroup2Pressed = () => {
	
	}

	onViewTwoPressed = () => {
	
		const { navigate } = this.props.navigation
		
		navigate("Home")
	}

	onViewPressed = () => {
	
		const { navigate } = this.props.navigation
		
		navigate("SignUp")
	}

	onLupaPasswordPressed = () => {
	
	}

	onViewThreePressed = () => {
	
	}

	render() {
	
		return <View
				style={styles.viewView}>
				<ScrollView
					style={styles.viewScrollView}>
					<TouchableOpacity
						onPress={this.onViewThreePressed}
						style={styles.backButton}>
						<Image
							source={require("./../../assets/images/group-35.png")}
							style={styles.backButtonImage}/>
					</TouchableOpacity>
					<Text
						style={styles.selamatDatangSilaText}>{strings("Login.selamatDatangSilaText")}</Text>
					<View
						style={styles.viewTwoView}>
						<TouchableOpacity
							onPress={this.onGroup2Pressed}
							style={styles.group2Button}>
							<Text
								style={styles.group2ButtonText}>{strings("Login.group2Button")}</Text>
						</TouchableOpacity>
					</View>
					<Text
						style={styles.atauText}>{strings("Login.atauText")}</Text>
					<Text
						style={styles.alamatEmailNomorText}>{strings("Login.alamatEmailNomorText")}</Text>
					<TextInput
						autoCorrect={false}
						placeholder="Munawirbangsawan@gmail.com"
						style={styles.munawirbangsawanGmaTextInput}/>
					<View
						style={styles.line1View}/>
					<Text
						style={styles.passwordText}>{strings("Login.passwordText")}</Text>
					<TextInput
						autoCorrect={false}
						placeholder="***********"
						secureTextEntry={true}
						style={styles.textInputTextInput}/>
					<View
						style={styles.line2View}/>
					<View
						pointerEvents="box-none"
						style={{
							alignSelf: "stretch",
							height: 18,
							marginLeft: 3,
							marginTop: 25,
							flexDirection: "row",
							alignItems: "flex-start",
						}}>
						<View
							style={styles.rectangle4View}/>
						<Text
							style={styles.ingatSayaText}>{strings("Login.ingatSayaText")}</Text>
						<View
							style={{
								flex: 1,
							}}/>
						<TouchableOpacity
							onPress={this.onLupaPasswordPressed}
							style={styles.lupaPasswordButton}>
							<Text
								style={styles.lupaPasswordButtonText}>{strings("Login.lupaPasswordButton")}</Text>
						</TouchableOpacity>
					</View>
					<View
						pointerEvents="box-none"
						style={{
							alignSelf: "stretch",
							height: 30,
							marginLeft: 1,
							marginRight: 79,
							marginTop: 29,
							flexDirection: "row",
							alignItems: "flex-start",
						}}>
						<TouchableOpacity
							onPress={this.onViewTwoPressed}
							style={styles.viewButton}>
							<Text
								style={styles.viewButtonText}>{strings("Login.viewButton")}</Text>
						</TouchableOpacity>
						<View
							style={{
								flex: 1,
							}}/>
						<TouchableOpacity
							onPress={this.onViewPressed}
							style={styles.viewTwoButton}>
							<Text
								style={styles.viewTwoButtonText}>{strings("Login.viewTwoButton")}</Text>
						</TouchableOpacity>
					</View>
					<Text
						style={styles.denganMasukAndaTText}>{strings("Login.denganMasukAndaTText")}</Text>
				</ScrollView>
				<View
					pointerEvents="box-none"
					style={{
						position: "absolute",
						left: 43,
						right: 43,
						top: 303,
						height: 204,
					}}>
					<View
						style={styles.viewFourView}/>
					<View
						style={styles.viewFiveView}/>
					<View
						style={styles.viewThreeView}/>
				</View>
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
		position: "absolute",
		alignSelf: "center",
		width: 290,
		top: 25,
		height: 555,
		alignItems: "flex-start",
	},
	backButton: {
		backgroundColor: "transparent",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		padding: 0,
		width: 25,
		height: 25,
	},
	backButtonText: {
		color: "black",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
	},
	backButtonImage: {
		resizeMode: "contain",
	},
	selamatDatangSilaText: {
		backgroundColor: "transparent",
		color: "black",
		fontFamily: "Poppins-Regular",
		fontSize: 17,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		lineHeight: 25,
		alignSelf: "stretch",
		marginLeft: 1,
		marginRight: 2,
		marginTop: 52,
	},
	viewTwoView: {
		backgroundColor: "transparent",
		alignSelf: "stretch",
		height: 31,
		marginRight: 3,
		marginTop: 41,
		justifyContent: "center",
		alignItems: "flex-end",
	},
	group2Button: {
		backgroundColor: "white",
		borderRadius: 5,
		borderWidth: 1,
		borderColor: "rgb(37, 37, 37)",
		borderStyle: "solid",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		padding: 0,
		width: 140,
		height: 31,
		marginRight: 147,
	},
	group2ButtonText: {
		color: "rgb(26, 26, 26)",
		fontFamily: "Poppins-Regular",
		fontSize: 9,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
	},
	group2ButtonImage: {
		resizeMode: "contain",
		marginRight: 10,
	},
	atauText: {
		backgroundColor: "transparent",
		color: "rgb(26, 26, 26)",
		fontFamily: "Poppins-Regular",
		fontSize: 10,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		marginLeft: 2,
		marginTop: 32,
	},
	alamatEmailNomorText: {
		backgroundColor: "transparent",
		color: "rgb(175, 175, 175)",
		fontFamily: "Poppins-Regular",
		fontSize: 8,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		marginLeft: 2,
		marginTop: 27,
	},
	munawirbangsawanGmaTextInput: {
		backgroundColor: "transparent",
		padding: 0,
		color: "rgb(44, 44, 44)",
		fontFamily: "Poppins-Regular",
		fontSize: 13,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		width: 250,
		height: 23,
		marginLeft: 2,
		marginTop: 3,
	},
	line1View: {
		backgroundColor: "rgb(145, 145, 145)",
		alignSelf: "stretch",
		height: 1,
		marginLeft: 2,
		marginRight: 1,
		marginTop: 3,
	},
	passwordText: {
		color: "rgb(175, 175, 175)",
		fontFamily: "Poppins-Regular",
		fontSize: 8,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		marginLeft: 2,
		marginTop: 19,
	},
	textInputTextInput: {
		backgroundColor: "transparent",
		padding: 0,
		color: "rgb(44, 44, 44)",
		fontFamily: "Poppins-Regular",
		fontSize: 15,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		width: 81,
		height: 23,
		marginLeft: 2,
		marginTop: 4,
	},
	line2View: {
		backgroundColor: "rgb(145, 145, 145)",
		alignSelf: "stretch",
		height: 1,
		marginLeft: 2,
		marginRight: 1,
	},
	rectangle4View: {
		backgroundColor: "white",
		borderRadius: 5,
		borderWidth: 1,
		borderColor: "rgb(112, 112, 112)",
		borderStyle: "solid",
		width: 15,
		height: 15,
	},
	ingatSayaText: {
		color: "black",
		fontFamily: "Poppins-Regular",
		fontSize: 10,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		marginLeft: 9,
		marginTop: 1,
	},
	lupaPasswordButton: {
		backgroundColor: "transparent",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		padding: 0,
		width: 81,
		height: 17,
		marginTop: 1,
	},
	lupaPasswordButtonText: {
		color: "black",
		fontFamily: "Poppins-Regular",
		fontSize: 10,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
	},
	lupaPasswordButtonImage: {
		resizeMode: "contain",
		marginRight: 10,
	},
	viewButton: {
		backgroundColor: "rgb(243, 113, 33)",
		borderRadius: 5,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		padding: 0,
		width: 99,
		height: 30,
	},
	viewButtonText: {
		color: "white",
		fontFamily: "Poppins-Regular",
		fontSize: 10,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
	},
	viewButtonImage: {
		resizeMode: "contain",
		marginRight: 10,
	},
	viewTwoButton: {
		backgroundColor: "rgb(41, 190, 52)",
		borderRadius: 5,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		padding: 0,
		width: 99,
		height: 30,
	},
	viewTwoButtonText: {
		color: "white",
		fontFamily: "Poppins-Regular",
		fontSize: 10,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
	},
	viewTwoButtonImage: {
		resizeMode: "contain",
		marginRight: 10,
	},
	denganMasukAndaTText: {
		color: "rgb(26, 26, 26)",
		fontFamily: "Poppins-Regular",
		fontSize: 10,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		lineHeight: 15,
		backgroundColor: "transparent",
		marginLeft: 3,
		marginTop: 40,
	},
	viewFourView: {
		backgroundColor: "transparent",
		height: 42,
		marginRight: 2,
	},
	viewFiveView: {
		backgroundColor: "transparent",
		height: 42,
		marginLeft: 2,
		marginTop: 21,
	},
	viewThreeView: {
		backgroundColor: "transparent",
		width: 210,
		height: 30,
		marginTop: 70,
	},
})

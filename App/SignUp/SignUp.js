//
//  SignUp
//  warnasmobile
//
//  Created by Supernova.
//  Copyright © 2018 Supernova. All rights reserved.
//

import React from "react"
import { strings } from "./../Locales/i18n"
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native"


export default class SignUp extends React.Component {

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

	onViewPressed = () => {
	
	}

	onGroup35Pressed = () => {
	
		const { navigate } = this.props.navigation
		
		navigate("Login")
		this.props.navigation.goBack()
	}

	render() {
	
		return <View
				style={styles.viewView}>
				<View
					style={styles.viewTwoView}>
					<TouchableOpacity
						onPress={this.onGroup35Pressed}
						style={styles.backButton}>
						<Image
							source={require("./../../assets/images/group-35.png")}
							style={styles.backButtonImage}/>
					</TouchableOpacity>
					<Text
						style={styles.selamatDatangSilaText}>{strings("SignUp.selamatDatangSilaText")}</Text>
					<View
						style={styles.repeatGrid1View}>
						<View
							style={styles.viewFourView}>
							<Text
								style={styles.namaLengkapText}>{strings("SignUp.namaLengkapText")}</Text>
							<TextInput
								autoCorrect={false}
								placeholder="Munawir Bangsawan"
								style={styles.munawirBangsawanTextInput}/>
							<View
								style={{
									flex: 1,
								}}/>
							<View
								style={styles.line1View}/>
						</View>
						<View
							style={styles.viewFiveView}>
							<Text
								style={styles.alamatEmailText}>{strings("SignUp.alamatEmailText")}</Text>
							<TextInput
								autoCorrect={false}
								placeholder="Munawirbangsawan@gmail.com"
								style={styles.munawirbangsawanGmaTextInput}/>
							<View
								style={{
									flex: 1,
								}}/>
							<View
								style={styles.line1TwoView}/>
						</View>
						<View
							style={styles.viewSixView}>
							<Text
								style={styles.passwordText}>{strings("SignUp.passwordText")}</Text>
							<TextInput
								autoCorrect={false}
								placeholder="************"
								secureTextEntry={true}
								style={styles.textInputTextInput}/>
							<View
								style={{
									flex: 1,
								}}/>
							<View
								style={styles.line1ThreeView}/>
						</View>
						<View
							style={{
								flex: 1,
							}}/>
						<View
							style={styles.viewSevenView}>
							<Text
								style={styles.ulangiPasswordText}>{strings("SignUp.ulangiPasswordText")}</Text>
							<TextInput
								autoCorrect={false}
								placeholder="************"
								secureTextEntry={true}
								style={styles.textInputTwoTextInput}/>
							<View
								style={{
									flex: 1,
								}}/>
							<View
								style={styles.line1FourView}/>
						</View>
					</View>
					<Text
						style={styles.denganMasukAndaTText}>{strings("SignUp.denganMasukAndaTText")}</Text>
					<TouchableOpacity
						onPress={this.onViewPressed}
						style={styles.viewButton}>
						<Text
							style={styles.viewButtonText}>{strings("SignUp.viewButton")}</Text>
					</TouchableOpacity>
					<View
						style={styles.viewThreeView}>
						<TouchableOpacity
							onPress={this.onGroup2Pressed}
							style={styles.group2Button}>
							<Text
								style={styles.group2ButtonText}>{strings("SignUp.group2Button")}</Text>
						</TouchableOpacity>
					</View>
				</View>
			</View>
	}
}

const styles = StyleSheet.create({
	viewView: {
		backgroundColor: "white",
		flex: 1,
		alignItems: "center",
	},
	viewTwoView: {
		backgroundColor: "transparent",
		width: 289,
		height: 600,
		marginTop: 25,
		alignItems: "flex-start",
	},
	backButtonImage: {
		resizeMode: "contain",
	},
	backButtonText: {
		color: "black",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
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
	selamatDatangSilaText: {
		color: "black",
		fontFamily: "Poppins-Regular",
		fontSize: 17,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		lineHeight: 30,
		backgroundColor: "transparent",
		marginTop: 56,
	},
	repeatGrid1View: {
		backgroundColor: "transparent",
		alignSelf: "stretch",
		height: 228,
		marginLeft: 2,
		marginTop: 25,
	},
	viewFourView: {
		backgroundColor: "transparent",
		height: 42,
		alignItems: "flex-start",
	},
	namaLengkapText: {
		color: "rgb(175, 175, 175)",
		fontFamily: "Poppins-Regular",
		fontSize: 8,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
	},
	munawirBangsawanTextInput: {
		backgroundColor: "transparent",
		padding: 0,
		color: "rgb(26, 26, 26)",
		fontFamily: "Poppins-Regular",
		fontSize: 13,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		width: 157,
		height: 23,
		marginTop: 3,
	},
	line1View: {
		backgroundColor: "rgb(145, 145, 145)",
		alignSelf: "stretch",
		height: 1,
	},
	viewFiveView: {
		backgroundColor: "transparent",
		height: 42,
		marginTop: 20,
		alignItems: "flex-start",
	},
	alamatEmailText: {
		backgroundColor: "transparent",
		color: "rgb(175, 175, 175)",
		fontFamily: "Poppins-Regular",
		fontSize: 8,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
	},
	munawirbangsawanGmaTextInput: {
		color: "rgb(26, 26, 26)",
		fontFamily: "Poppins-Regular",
		fontSize: 13,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		padding: 0,
		width: 250,
		height: 23,
		marginTop: 3,
	},
	line1TwoView: {
		backgroundColor: "rgb(145, 145, 145)",
		alignSelf: "stretch",
		height: 1,
	},
	viewSixView: {
		backgroundColor: "transparent",
		height: 42,
		marginTop: 20,
		alignItems: "flex-start",
	},
	passwordText: {
		color: "rgb(175, 175, 175)",
		fontFamily: "Poppins-Regular",
		fontSize: 8,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
	},
	textInputTextInput: {
		color: "rgb(26, 26, 26)",
		fontFamily: "Poppins-Regular",
		fontSize: 13,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		padding: 0,
		width: 88,
		height: 23,
		marginTop: 4,
	},
	line1ThreeView: {
		backgroundColor: "rgb(145, 145, 145)",
		alignSelf: "stretch",
		height: 1,
	},
	viewSevenView: {
		backgroundColor: "transparent",
		height: 42,
		alignItems: "flex-start",
	},
	ulangiPasswordText: {
		backgroundColor: "transparent",
		color: "rgb(175, 175, 175)",
		fontFamily: "Poppins-Regular",
		fontSize: 8,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
	},
	textInputTwoTextInput: {
		color: "rgb(26, 26, 26)",
		fontFamily: "Poppins-Regular",
		fontSize: 13,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		padding: 0,
		width: 88,
		height: 23,
		marginTop: 4,
	},
	line1FourView: {
		backgroundColor: "rgb(145, 145, 145)",
		alignSelf: "stretch",
		height: 1,
	},
	denganMasukAndaTText: {
		backgroundColor: "transparent",
		color: "rgb(26, 26, 26)",
		fontFamily: "Poppins-Regular",
		fontSize: 10,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		lineHeight: 15,
		marginLeft: 3,
		marginTop: 25,
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
	viewButton: {
		backgroundColor: "rgb(41, 190, 52)",
		borderRadius: 5,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		padding: 0,
		width: 99,
		height: 30,
		marginLeft: 2,
		marginTop: 22,
	},
	viewThreeView: {
		backgroundColor: "transparent",
		alignSelf: "center",
		width: 286,
		height: 30,
		marginTop: 62,
		justifyContent: "flex-end",
		alignItems: "flex-end",
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
		width: 139,
		height: 30,
		marginRight: 28,
		marginBottom: 92,
	},
})

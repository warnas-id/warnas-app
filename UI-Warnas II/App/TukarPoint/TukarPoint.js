//
//  TukarPoint
//  UI-Warnas
//
//  Created by Supernova.
//  Copyright © 2018 Supernova. All rights reserved.
//

import React from "react"
import { strings } from "./../Locales/i18n"
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native"


export default class TukarPoint extends React.Component {

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

	onTukarPointPressed = () => {
	
		const { navigate } = this.props.navigation
		
		navigate("TukarPointPopup")
	}

	render() {
	
		return <View
				style={styles.viewView}>
				<View
					pointerEvents="box-none"
					style={{
						height: 432,
					}}>
					<View
						style={styles.rectangle29View}/>
					<View
						style={styles.rectangle113View}/>
					<View
						pointerEvents="box-none"
						style={{
							position: "absolute",
							left: 18,
							width: 211,
							top: 213,
							height: 132,
							alignItems: "flex-start",
						}}>
						<Image
							source={require("./../../assets/images/group-95.png")}
							style={styles.group95Image}/>
						<Text
							style={styles.textText}>{strings("TukarPoint.textText")}</Text>
					</View>
					<Text
						style={styles.poinSayaText}>{strings("TukarPoint.poinSayaText")}</Text>
				</View>
				<ScrollView
					style={styles.repeatGrid9ScrollView}>
					<View
						style={styles.group66View}>
						<View
							pointerEvents="box-none"
							style={{
								height: 62,
								marginRight: 17,
								flexDirection: "row",
								alignItems: "flex-start",
							}}>
							<View
								style={styles.rectangle114View}/>
							<View
								pointerEvents="box-none"
								style={{
									flex: 1,
									height: 61,
									marginLeft: 19,
									marginTop: 1,
									alignItems: "flex-start",
								}}>
								<Text
									style={styles.syaratDanKetentuanText}>{strings("TukarPoint.syaratDanKetentuanText")}</Text>
								<View
									pointerEvents="box-none"
									style={{
										alignSelf: "stretch",
										height: 35,
										marginTop: 7,
										flexDirection: "row",
										alignItems: "flex-start",
									}}>
									<Text
										style={styles.poinHanyaBiasDText}>{strings("TukarPoint.poinHanyaBiasDText")}</Text>
									<Image
										source={require("./../../assets/images/group-65.png")}
										style={styles.group65Image}/>
								</View>
							</View>
						</View>
						<View
							style={{
								flex: 1,
							}}/>
						<View
							style={styles.line24View}/>
					</View>
					<View
						style={styles.group66TwoView}>
						<View
							pointerEvents="box-none"
							style={{
								height: 62,
								marginRight: 17,
								flexDirection: "row",
								alignItems: "flex-start",
							}}>
							<View
								style={styles.rectangle114TwoView}/>
							<View
								pointerEvents="box-none"
								style={{
									flex: 1,
									height: 61,
									marginLeft: 19,
									marginTop: 1,
									alignItems: "flex-start",
								}}>
								<Text
									style={styles.caraPemakaianPoinText}>{strings("TukarPoint.caraPemakaianPoinText")}</Text>
								<View
									pointerEvents="box-none"
									style={{
										alignSelf: "stretch",
										height: 35,
										marginTop: 7,
										flexDirection: "row",
										alignItems: "flex-start",
									}}>
									<Text
										style={styles.poinHanyaBiasDTwoText}>{strings("TukarPoint.poinHanyaBiasDTwoText")}</Text>
									<Image
										source={require("./../../assets/images/group-65.png")}
										style={styles.group65TwoImage}/>
								</View>
							</View>
						</View>
						<View
							style={{
								flex: 1,
							}}/>
						<View
							style={styles.line24TwoView}/>
					</View>
					<View
						style={styles.group66ThreeView}>
						<View
							pointerEvents="box-none"
							style={{
								height: 62,
								marginRight: 17,
								flexDirection: "row",
								alignItems: "flex-start",
							}}>
							<View
								style={styles.rectangle114ThreeView}/>
							<View
								pointerEvents="box-none"
								style={{
									flex: 1,
									height: 61,
									marginLeft: 19,
									marginTop: 1,
								}}>
								<Text
									style={styles.deskripsiPoinText}>{strings("TukarPoint.deskripsiPoinText")}</Text>
								<View
									pointerEvents="box-none"
									style={{
										height: 35,
										marginTop: 7,
										flexDirection: "row",
										alignItems: "flex-start",
									}}>
									<Text
										style={styles.poinHanyaBiasDThreeText}>{strings("TukarPoint.poinHanyaBiasDThreeText")}</Text>
									<Image
										source={require("./../../assets/images/group-65.png")}
										style={styles.group65ThreeImage}/>
								</View>
							</View>
						</View>
						<View
							style={{
								flex: 1,
							}}/>
						<View
							style={styles.line24ThreeView}/>
					</View>
				</ScrollView>
				<TouchableOpacity
					onPress={this.onTukarPointPressed}
					style={styles.tukarPointButton}>
					<Text
						style={styles.tukarPointButtonText}>{strings("TukarPoint.tukarPointButton")}</Text>
				</TouchableOpacity>
			</View>
	}
}

const styles = StyleSheet.create({
	viewView: {
		backgroundColor: "white",
		flex: 1,
	},
	rectangle29View: {
		backgroundColor: "rgb(245, 245, 245)",
		position: "absolute",
		left: 0,
		right: 0,
		top: 0,
		height: 432,
	},
	rectangle113View: {
		backgroundColor: "rgb(180, 17, 17)",
		position: "absolute",
		left: 0,
		right: 0,
		top: 186,
		height: 234,
	},
	group95Image: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 35,
		height: 35,
	},
	textText: {
		color: "white",
		fontFamily: "Poppins-Bold",
		fontSize: 32,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "left",
		backgroundColor: "transparent",
		alignSelf: "center",
		marginTop: 48,
	},
	poinSayaText: {
		color: "white",
		fontFamily: "Poppins-Regular",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		backgroundColor: "transparent",
		position: "absolute",
		alignSelf: "center",
		top: 340,
	},
	repeatGrid9ScrollView: {
		backgroundColor: "transparent",
		flex: 1,
		marginLeft: 31,
		marginTop: 3,
		marginBottom: 23,
	},
	group66View: {
		backgroundColor: "transparent",
		height: 80,
		marginTop: 37,
	},
	rectangle114View: {
		backgroundColor: "rgb(223, 223, 223)",
		borderRadius: 5,
		width: 37,
		height: 37,
	},
	syaratDanKetentuanText: {
		backgroundColor: "transparent",
		color: "black",
		fontFamily: "Poppins-Bold",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "left",
		marginLeft: 1,
	},
	poinHanyaBiasDText: {
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
		marginRight: 36,
	},
	group65Image: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 7,
		height: 11,
		marginTop: 4,
	},
	line24View: {
		backgroundColor: "rgb(112, 112, 112)",
		height: 1,
		marginLeft: 56,
	},
	group66TwoView: {
		backgroundColor: "transparent",
		height: 80,
		marginTop: 27,
	},
	rectangle114TwoView: {
		backgroundColor: "rgb(223, 223, 223)",
		borderRadius: 5,
		width: 37,
		height: 37,
	},
	caraPemakaianPoinText: {
		color: "black",
		fontFamily: "Poppins-Bold",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "left",
		backgroundColor: "transparent",
		marginLeft: 1,
	},
	poinHanyaBiasDTwoText: {
		color: "black",
		fontFamily: "Poppins-Regular",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		lineHeight: 15,
		paddingTop: 2,
		backgroundColor: "transparent",
		flex: 1,
		marginRight: 36,
	},
	group65TwoImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 7,
		height: 11,
		marginTop: 4,
	},
	line24TwoView: {
		backgroundColor: "rgb(112, 112, 112)",
		height: 1,
		marginLeft: 56,
	},
	group66ThreeView: {
		backgroundColor: "transparent",
		flex: 1,
		marginTop: 27,
		marginBottom: 149,
	},
	rectangle114ThreeView: {
		backgroundColor: "rgb(223, 223, 223)",
		borderRadius: 5,
		width: 37,
		height: 37,
	},
	deskripsiPoinText: {
		backgroundColor: "transparent",
		color: "black",
		fontFamily: "Poppins-Bold",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "left",
		marginLeft: 1,
		marginRight: 187,
	},
	poinHanyaBiasDThreeText: {
		color: "black",
		fontFamily: "Poppins-Regular",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		lineHeight: 15,
		paddingTop: 2,
		backgroundColor: "transparent",
		flex: 1,
		marginRight: 36,
	},
	group65ThreeImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 7,
		height: 11,
		marginTop: 4,
	},
	line24ThreeView: {
		backgroundColor: "rgb(112, 112, 112)",
		height: 1,
		marginLeft: 56,
	},
	tukarPointButton: {
		backgroundColor: "rgb(235, 103, 29)",
		borderRadius: 8,
		shadowColor: "rgba(0, 0, 0, 0.15)",
		shadowRadius: 5,
		shadowOpacity: 1,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		padding: 0,
		height: 35,
		marginLeft: 21,
		marginRight: 20,
		marginBottom: 31,
	},
	tukarPointButtonText: {
		color: "white",
		fontFamily: "Poppins-Regular",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
	},
	tukarPointButtonImage: {
		resizeMode: "contain",
		marginRight: 10,
	},
})

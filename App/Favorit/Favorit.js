//
//  Favorit
//  warnasmobile
//
//  Created by Supernova.
//  Copyright © 2018 Supernova. All rights reserved.
//

import React from "react"
import { strings } from "./../Locales/i18n"
import { Image, ScrollView, StyleSheet, Text, View } from "react-native"


export default class Favorit extends React.Component {

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
					style={styles.tabView}>
					<View
						style={styles.rectangle21View}/>
					<View
						pointerEvents="box-none"
						style={{
							position: "absolute",
							left: 22,
							width: 101,
							top: 16,
							height: 26,
							flexDirection: "row",
							alignItems: "flex-start",
						}}>
						<Image
							source={require("./../../assets/images/union-1.png")}
							style={styles.union1Image}/>
						<Text
							style={styles.yangDekatAjaText}>{strings("Favorit.yangDekatAjaText")}</Text>
					</View>
				</View>
				<ScrollView
					style={styles.viewScrollView}>
					<View
						style={styles.group64View}>
						<View
							style={styles.group15View}>
							<Image
								source={require("./../../assets/images/mask-group-2-7.png")}
								style={styles.maskGroup2Image}/>
							<View
								style={{
									flex: 1,
								}}/>
							<View
								pointerEvents="box-none"
								style={{
									alignSelf: "flex-start",
									width: 131,
									height: 71,
									marginTop: 11,
									alignItems: "flex-end",
								}}>
								<Text
									style={styles.disukaiHaizDan38Text}>{strings("Favorit.disukaiHaizDan38Text")}</Text>
								<Text
									style={styles.sotoBetawiAnnaText}>{strings("Favorit.sotoBetawiAnnaText")}</Text>
								<Text
									style={styles.rp20000Rp23Text}>{strings("Favorit.rp20000Rp23Text")}</Text>
								<View
									pointerEvents="box-none"
									style={{
										width: 131,
										height: 18,
										marginTop: 3,
										flexDirection: "row",
										justifyContent: "flex-end",
										alignItems: "flex-start",
									}}>
									<Text
										style={styles.kmText}>{strings("Favorit.kmText")}</Text>
									<Text
										style={styles.minText}>{strings("Favorit.minText")}</Text>
									<View
										pointerEvents="box-none"
										style={{
											width: 49,
											height: 18,
										}}>
										<View
											style={styles.rectangle10View}/>
										<Text
											style={styles.bukaText}>{strings("Favorit.bukaText")}</Text>
									</View>
								</View>
							</View>
						</View>
						<View
							style={{
								flex: 1,
							}}/>
						<Image
							source={require("./../../assets/images/heart-1-3.png")}
							style={styles.heart1Image}/>
					</View>
					<View
						style={styles.group64TwoView}>
						<View
							style={styles.group15TwoView}>
							<Image
								source={require("./../../assets/images/mask-group-2-7.png")}
								style={styles.maskGroup2TwoImage}/>
							<View
								style={{
									flex: 1,
								}}/>
							<View
								pointerEvents="box-none"
								style={{
									alignSelf: "flex-start",
									width: 131,
									height: 71,
									marginTop: 11,
									alignItems: "flex-end",
								}}>
								<Text
									style={styles.disukaiHaizDan38TwoText}>{strings("Favorit.disukaiHaizDan38TwoText")}</Text>
								<Text
									style={styles.sotoBetawiAnnaTwoText}>{strings("Favorit.sotoBetawiAnnaTwoText")}</Text>
								<Text
									style={styles.rp20000Rp23TwoText}>{strings("Favorit.rp20000Rp23TwoText")}</Text>
								<View
									pointerEvents="box-none"
									style={{
										width: 131,
										height: 18,
										marginTop: 3,
										flexDirection: "row",
										justifyContent: "flex-end",
										alignItems: "flex-start",
									}}>
									<Text
										style={styles.kmTwoText}>{strings("Favorit.kmTwoText")}</Text>
									<Text
										style={styles.minTwoText}>{strings("Favorit.minTwoText")}</Text>
									<View
										pointerEvents="box-none"
										style={{
											width: 49,
											height: 18,
										}}>
										<View
											style={styles.rectangle10TwoView}/>
										<Text
											style={styles.bukaTwoText}>{strings("Favorit.bukaTwoText")}</Text>
									</View>
								</View>
							</View>
						</View>
						<View
							style={{
								flex: 1,
							}}/>
						<Image
							source={require("./../../assets/images/heart-1-3.png")}
							style={styles.heart1TwoImage}/>
					</View>
					<View
						style={styles.group64ThreeView}>
						<View
							style={styles.group15ThreeView}>
							<Image
								source={require("./../../assets/images/mask-group-2-7.png")}
								style={styles.maskGroup2ThreeImage}/>
							<View
								style={{
									flex: 1,
								}}/>
							<View
								pointerEvents="box-none"
								style={{
									alignSelf: "flex-start",
									width: 131,
									height: 71,
									marginTop: 11,
									alignItems: "flex-end",
								}}>
								<Text
									style={styles.disukaiHaizDan38ThreeText}>{strings("Favorit.disukaiHaizDan38ThreeText")}</Text>
								<Text
									style={styles.sotoBetawiAnnaThreeText}>{strings("Favorit.sotoBetawiAnnaThreeText")}</Text>
								<Text
									style={styles.rp20000Rp23ThreeText}>{strings("Favorit.rp20000Rp23ThreeText")}</Text>
								<View
									pointerEvents="box-none"
									style={{
										width: 131,
										height: 18,
										marginTop: 3,
										flexDirection: "row",
										justifyContent: "flex-end",
										alignItems: "flex-start",
									}}>
									<Text
										style={styles.kmThreeText}>{strings("Favorit.kmThreeText")}</Text>
									<Text
										style={styles.minThreeText}>{strings("Favorit.minThreeText")}</Text>
									<View
										pointerEvents="box-none"
										style={{
											width: 49,
											height: 18,
										}}>
										<View
											style={styles.rectangle10ThreeView}/>
										<Text
											style={styles.bukaThreeText}>{strings("Favorit.bukaThreeText")}</Text>
									</View>
								</View>
							</View>
						</View>
						<View
							style={{
								flex: 1,
							}}/>
						<Image
							source={require("./../../assets/images/heart-1-3.png")}
							style={styles.heart1ThreeImage}/>
					</View>
					<View
						style={styles.group64FourView}>
						<View
							style={styles.group15FourView}>
							<Image
								source={require("./../../assets/images/mask-group-2-7.png")}
								style={styles.maskGroup2FourImage}/>
							<View
								style={{
									flex: 1,
								}}/>
							<View
								pointerEvents="box-none"
								style={{
									alignSelf: "flex-start",
									width: 131,
									height: 71,
									marginTop: 11,
									alignItems: "flex-end",
								}}>
								<Text
									style={styles.disukaiHaizDan38FourText}>{strings("Favorit.disukaiHaizDan38FourText")}</Text>
								<Text
									style={styles.sotoBetawiAnnaFourText}>{strings("Favorit.sotoBetawiAnnaFourText")}</Text>
								<Text
									style={styles.rp20000Rp23FourText}>{strings("Favorit.rp20000Rp23FourText")}</Text>
								<View
									pointerEvents="box-none"
									style={{
										width: 131,
										height: 18,
										marginTop: 3,
										flexDirection: "row",
										justifyContent: "flex-end",
										alignItems: "flex-start",
									}}>
									<Text
										style={styles.kmFourText}>{strings("Favorit.kmFourText")}</Text>
									<Text
										style={styles.minFourText}>{strings("Favorit.minFourText")}</Text>
									<View
										pointerEvents="box-none"
										style={{
											width: 49,
											height: 18,
										}}>
										<View
											style={styles.rectangle10FourView}/>
										<Text
											style={styles.bukaFourText}>{strings("Favorit.bukaFourText")}</Text>
									</View>
								</View>
							</View>
						</View>
						<View
							style={{
								flex: 1,
							}}/>
						<Image
							source={require("./../../assets/images/heart-1-3.png")}
							style={styles.heart1FourImage}/>
					</View>
					<View
						style={{
							flex: 1,
						}}/>
					<View
						style={styles.group64FiveView}>
						<View
							style={styles.group15FiveView}>
							<Image
								source={require("./../../assets/images/mask-group-2-7.png")}
								style={styles.maskGroup2FiveImage}/>
							<View
								style={{
									flex: 1,
								}}/>
							<View
								pointerEvents="box-none"
								style={{
									width: 131,
									height: 71,
									marginTop: 11,
									alignItems: "flex-end",
								}}>
								<Text
									style={styles.disukaiHaizDan38FiveText}>{strings("Favorit.disukaiHaizDan38FiveText")}</Text>
								<Text
									style={styles.sotoBetawiAnnaFiveText}>{strings("Favorit.sotoBetawiAnnaFiveText")}</Text>
								<Text
									style={styles.rp20000Rp23FiveText}>{strings("Favorit.rp20000Rp23FiveText")}</Text>
								<View
									pointerEvents="box-none"
									style={{
										width: 131,
										height: 18,
										marginTop: 3,
										flexDirection: "row",
										justifyContent: "flex-end",
										alignItems: "flex-start",
									}}>
									<Text
										style={styles.kmFiveText}>{strings("Favorit.kmFiveText")}</Text>
									<Text
										style={styles.minFiveText}>{strings("Favorit.minFiveText")}</Text>
									<View
										pointerEvents="box-none"
										style={{
											width: 49,
											height: 18,
										}}>
										<View
											style={styles.rectangle10FiveView}/>
										<Text
											style={styles.bukaFiveText}>{strings("Favorit.bukaFiveText")}</Text>
									</View>
								</View>
							</View>
						</View>
						<View
							style={{
								flex: 1,
							}}/>
						<Image
							source={require("./../../assets/images/heart-1-3.png")}
							style={styles.heart1FiveImage}/>
					</View>
					<View
						style={styles.group64SixView}>
						<View
							style={styles.group15SixView}>
							<Image
								source={require("./../../assets/images/mask-group-2-7.png")}
								style={styles.maskGroup2SixImage}/>
							<View
								style={{
									flex: 1,
								}}/>
							<View
								pointerEvents="box-none"
								style={{
									width: 131,
									height: 71,
									marginTop: 11,
									alignItems: "flex-end",
								}}>
								<Text
									style={styles.disukaiHaizDan38SixText}>{strings("Favorit.disukaiHaizDan38SixText")}</Text>
								<Text
									style={styles.sotoBetawiAnnaSixText}>{strings("Favorit.sotoBetawiAnnaSixText")}</Text>
								<Text
									style={styles.rp20000Rp23SixText}>{strings("Favorit.rp20000Rp23SixText")}</Text>
								<View
									pointerEvents="box-none"
									style={{
										width: 131,
										height: 18,
										marginTop: 3,
										flexDirection: "row",
										justifyContent: "flex-end",
										alignItems: "flex-start",
									}}>
									<Text
										style={styles.kmSixText}>{strings("Favorit.kmSixText")}</Text>
									<Text
										style={styles.minSixText}>{strings("Favorit.minSixText")}</Text>
									<View
										pointerEvents="box-none"
										style={{
											width: 49,
											height: 18,
										}}>
										<View
											style={styles.rectangle10SixView}/>
										<Text
											style={styles.bukaSixText}>{strings("Favorit.bukaSixText")}</Text>
									</View>
								</View>
							</View>
						</View>
						<View
							style={{
								flex: 1,
							}}/>
						<Image
							source={require("./../../assets/images/heart-1-3.png")}
							style={styles.heart1SixImage}/>
					</View>
				</ScrollView>
			</View>
	}
}

const styles = StyleSheet.create({
	viewView: {
		backgroundColor: "rgb(245, 245, 245)",
		flex: 1,
	},
	tabView: {
		backgroundColor: "transparent",
		shadowColor: "rgba(0, 0, 0, 0.15)",
		shadowRadius: 5,
		shadowOpacity: 1,
		height: 53,
	},
	rectangle21View: {
		backgroundColor: "white",
		position: "absolute",
		left: 0,
		right: 0,
		top: 0,
		height: 53,
	},
	union1Image: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 23,
		height: 13,
		marginTop: 4,
	},
	yangDekatAjaText: {
		color: "black",
		fontFamily: "Poppins-Regular",
		fontSize: 17,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		marginLeft: 20,
	},
	viewScrollView: {
		backgroundColor: "transparent",
		flex: 1,
	},
	group64View: {
		backgroundColor: "white",
		height: 122,
		flexDirection: "row",
		alignItems: "flex-start",
	},
	group15View: {
		backgroundColor: "transparent",
		width: 245,
		height: 102,
		marginLeft: 19,
		marginTop: 13,
		flexDirection: "row",
		alignItems: "center",
	},
	maskGroup2Image: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 102,
		height: 102,
	},
	disukaiHaizDan38Text: {
		backgroundColor: "transparent",
		color: "black",
		fontFamily: "Poppins-Regular",
		fontSize: 9,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		marginRight: 7,
	},
	sotoBetawiAnnaText: {
		backgroundColor: "transparent",
		color: "black",
		fontFamily: "Poppins-Regular",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		marginRight: 26,
		marginTop: 1,
	},
	rp20000Rp23Text: {
		backgroundColor: "transparent",
		color: "black",
		fontFamily: "Poppins-Regular",
		fontSize: 9,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		marginRight: 30,
		marginTop: 4,
	},
	kmText: {
		backgroundColor: "transparent",
		color: "black",
		fontFamily: "Poppins-Regular",
		fontSize: 9,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		marginRight: 7,
		marginTop: 3,
	},
	minText: {
		backgroundColor: "transparent",
		color: "black",
		fontFamily: "Poppins-Regular",
		fontSize: 9,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		marginRight: 9,
		marginTop: 3,
	},
	rectangle10View: {
		backgroundColor: "rgb(36, 181, 70)",
		borderRadius: 5,
		position: "absolute",
		right: 0,
		width: 49,
		top: 0,
		height: 18,
	},
	bukaText: {
		backgroundColor: "transparent",
		color: "white",
		fontFamily: "Poppins-Regular",
		fontSize: 9,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		position: "absolute",
		right: 14,
		top: 3,
	},
	heart1Image: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 25,
		height: 25,
		marginRight: 30,
		marginTop: 20,
	},
	group64TwoView: {
		backgroundColor: "white",
		height: 122,
		marginTop: 7,
		flexDirection: "row",
		alignItems: "flex-start",
	},
	group15TwoView: {
		backgroundColor: "transparent",
		width: 245,
		height: 102,
		marginLeft: 19,
		marginTop: 13,
		flexDirection: "row",
		alignItems: "center",
	},
	maskGroup2TwoImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 102,
		height: 102,
	},
	disukaiHaizDan38TwoText: {
		backgroundColor: "transparent",
		color: "black",
		fontFamily: "Poppins-Regular",
		fontSize: 9,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		marginRight: 7,
	},
	sotoBetawiAnnaTwoText: {
		backgroundColor: "transparent",
		color: "black",
		fontFamily: "Poppins-Regular",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		marginRight: 26,
		marginTop: 1,
	},
	rp20000Rp23TwoText: {
		backgroundColor: "transparent",
		color: "black",
		fontFamily: "Poppins-Regular",
		fontSize: 9,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		marginRight: 30,
		marginTop: 4,
	},
	kmTwoText: {
		backgroundColor: "transparent",
		color: "black",
		fontFamily: "Poppins-Regular",
		fontSize: 9,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		marginRight: 7,
		marginTop: 3,
	},
	minTwoText: {
		backgroundColor: "transparent",
		color: "black",
		fontFamily: "Poppins-Regular",
		fontSize: 9,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		marginRight: 9,
		marginTop: 3,
	},
	rectangle10TwoView: {
		backgroundColor: "rgb(36, 181, 70)",
		borderRadius: 5,
		position: "absolute",
		right: 0,
		width: 49,
		top: 0,
		height: 18,
	},
	bukaTwoText: {
		backgroundColor: "transparent",
		color: "white",
		fontFamily: "Poppins-Regular",
		fontSize: 9,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		position: "absolute",
		right: 14,
		top: 3,
	},
	heart1TwoImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 25,
		height: 25,
		marginRight: 30,
		marginTop: 20,
	},
	group64ThreeView: {
		backgroundColor: "white",
		height: 122,
		marginTop: 7,
		flexDirection: "row",
		alignItems: "flex-start",
	},
	group15ThreeView: {
		backgroundColor: "transparent",
		width: 245,
		height: 102,
		marginLeft: 19,
		marginTop: 13,
		flexDirection: "row",
		alignItems: "center",
	},
	maskGroup2ThreeImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 102,
		height: 102,
	},
	disukaiHaizDan38ThreeText: {
		backgroundColor: "transparent",
		color: "black",
		fontFamily: "Poppins-Regular",
		fontSize: 9,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		marginRight: 7,
	},
	sotoBetawiAnnaThreeText: {
		backgroundColor: "transparent",
		color: "black",
		fontFamily: "Poppins-Regular",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		marginRight: 26,
		marginTop: 1,
	},
	rp20000Rp23ThreeText: {
		backgroundColor: "transparent",
		color: "black",
		fontFamily: "Poppins-Regular",
		fontSize: 9,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		marginRight: 30,
		marginTop: 4,
	},
	kmThreeText: {
		backgroundColor: "transparent",
		color: "black",
		fontFamily: "Poppins-Regular",
		fontSize: 9,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		marginRight: 7,
		marginTop: 3,
	},
	minThreeText: {
		backgroundColor: "transparent",
		color: "black",
		fontFamily: "Poppins-Regular",
		fontSize: 9,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		marginRight: 9,
		marginTop: 3,
	},
	rectangle10ThreeView: {
		backgroundColor: "rgb(36, 181, 70)",
		borderRadius: 5,
		position: "absolute",
		right: 0,
		width: 49,
		top: 0,
		height: 18,
	},
	bukaThreeText: {
		backgroundColor: "transparent",
		color: "white",
		fontFamily: "Poppins-Regular",
		fontSize: 9,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		position: "absolute",
		right: 14,
		top: 3,
	},
	heart1ThreeImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 25,
		height: 25,
		marginRight: 30,
		marginTop: 20,
	},
	group64FourView: {
		backgroundColor: "white",
		height: 122,
		marginTop: 7,
		flexDirection: "row",
		alignItems: "flex-start",
	},
	group15FourView: {
		backgroundColor: "transparent",
		width: 245,
		height: 102,
		marginLeft: 19,
		marginTop: 13,
		flexDirection: "row",
		alignItems: "center",
	},
	maskGroup2FourImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 102,
		height: 102,
	},
	disukaiHaizDan38FourText: {
		color: "black",
		fontFamily: "Poppins-Regular",
		fontSize: 9,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		marginRight: 7,
	},
	sotoBetawiAnnaFourText: {
		color: "black",
		fontFamily: "Poppins-Regular",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		marginRight: 26,
		marginTop: 1,
	},
	rp20000Rp23FourText: {
		color: "black",
		fontFamily: "Poppins-Regular",
		fontSize: 9,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		marginRight: 30,
		marginTop: 4,
	},
	kmFourText: {
		color: "black",
		fontFamily: "Poppins-Regular",
		fontSize: 9,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		marginRight: 7,
		marginTop: 3,
	},
	minFourText: {
		backgroundColor: "transparent",
		color: "black",
		fontFamily: "Poppins-Regular",
		fontSize: 9,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		marginRight: 9,
		marginTop: 3,
	},
	rectangle10FourView: {
		backgroundColor: "rgb(36, 181, 70)",
		borderRadius: 5,
		position: "absolute",
		right: 0,
		width: 49,
		top: 0,
		height: 18,
	},
	bukaFourText: {
		backgroundColor: "transparent",
		color: "white",
		fontFamily: "Poppins-Regular",
		fontSize: 9,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		position: "absolute",
		right: 14,
		top: 3,
	},
	heart1FourImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 25,
		height: 25,
		marginRight: 30,
		marginTop: 20,
	},
	group64FiveView: {
		backgroundColor: "white",
		height: 122,
		marginBottom: 7,
		flexDirection: "row",
		alignItems: "flex-start",
	},
	group15FiveView: {
		backgroundColor: "transparent",
		width: 245,
		height: 102,
		marginLeft: 19,
		marginTop: 13,
		flexDirection: "row",
		alignItems: "flex-start",
	},
	maskGroup2FiveImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		alignSelf: "center",
		width: 102,
		height: 102,
	},
	disukaiHaizDan38FiveText: {
		color: "black",
		fontFamily: "Poppins-Regular",
		fontSize: 9,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		marginRight: 7,
	},
	sotoBetawiAnnaFiveText: {
		color: "black",
		fontFamily: "Poppins-Regular",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		marginRight: 26,
		marginTop: 1,
	},
	rp20000Rp23FiveText: {
		color: "black",
		fontFamily: "Poppins-Regular",
		fontSize: 9,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		marginRight: 30,
		marginTop: 4,
	},
	kmFiveText: {
		backgroundColor: "transparent",
		color: "black",
		fontFamily: "Poppins-Regular",
		fontSize: 9,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		marginRight: 7,
		marginTop: 3,
	},
	minFiveText: {
		color: "black",
		fontFamily: "Poppins-Regular",
		fontSize: 9,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		marginRight: 9,
		marginTop: 3,
	},
	rectangle10FiveView: {
		backgroundColor: "rgb(36, 181, 70)",
		borderRadius: 5,
		position: "absolute",
		right: 0,
		width: 49,
		top: 0,
		height: 18,
	},
	bukaFiveText: {
		color: "white",
		fontFamily: "Poppins-Regular",
		fontSize: 9,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		position: "absolute",
		right: 14,
		top: 3,
	},
	heart1FiveImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 25,
		height: 25,
		marginRight: 30,
		marginTop: 20,
	},
	group64SixView: {
		backgroundColor: "white",
		height: 122,
		flexDirection: "row",
		alignItems: "flex-start",
	},
	group15SixView: {
		backgroundColor: "transparent",
		width: 245,
		height: 102,
		marginLeft: 19,
		marginTop: 13,
		flexDirection: "row",
		alignItems: "flex-start",
	},
	maskGroup2SixImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		alignSelf: "center",
		width: 102,
		height: 102,
	},
	disukaiHaizDan38SixText: {
		color: "black",
		fontFamily: "Poppins-Regular",
		fontSize: 9,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		marginRight: 7,
	},
	sotoBetawiAnnaSixText: {
		color: "black",
		fontFamily: "Poppins-Regular",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		marginRight: 26,
		marginTop: 1,
	},
	rp20000Rp23SixText: {
		color: "black",
		fontFamily: "Poppins-Regular",
		fontSize: 9,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		marginRight: 30,
		marginTop: 4,
	},
	kmSixText: {
		backgroundColor: "transparent",
		color: "black",
		fontFamily: "Poppins-Regular",
		fontSize: 9,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		marginRight: 7,
		marginTop: 3,
	},
	minSixText: {
		color: "black",
		fontFamily: "Poppins-Regular",
		fontSize: 9,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		marginRight: 9,
		marginTop: 3,
	},
	rectangle10SixView: {
		backgroundColor: "rgb(36, 181, 70)",
		borderRadius: 5,
		position: "absolute",
		right: 0,
		width: 49,
		top: 0,
		height: 18,
	},
	bukaSixText: {
		color: "white",
		fontFamily: "Poppins-Regular",
		fontSize: 9,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		position: "absolute",
		right: 14,
		top: 3,
	},
	heart1SixImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 25,
		height: 25,
		marginRight: 30,
		marginTop: 20,
	},
})

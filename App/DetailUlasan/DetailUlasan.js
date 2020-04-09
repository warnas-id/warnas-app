//
//  DetailUlasan
//  warnasmobile
//
//  Created by Supernova.
//  Copyright © 2018 Supernova. All rights reserved.
//

import React from "react"
import { strings } from "./../Locales/i18n"
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native"


export default class DetailUlasan extends React.Component {

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

	onSharePressed = () => {
	
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
							right: 18,
							top: 13,
							height: 29,
							flexDirection: "row",
							alignItems: "flex-start",
						}}>
						<Image
							source={require("./../../assets/images/union-1.png")}
							style={styles.union1Image}/>
						<Text
							style={styles.ulasanTwoText}>{strings("DetailUlasan.ulasanTwoText")}</Text>
						<View
							style={{
								flex: 1,
							}}/>
						<TouchableOpacity
							onPress={this.onSharePressed}
							style={styles.shareButton}>
							<Image
								source={require("./../../assets/images/redo.png")}
								style={styles.shareButtonImage}/>
						</TouchableOpacity>
					</View>
				</View>
				<ScrollView
					style={styles.viewScrollView}>
					<View
						style={styles.viewThreeView}>
						<View
							style={styles.backgroundView}/>
						<View
							pointerEvents="box-none"
							style={{
								position: "absolute",
								left: 23,
								right: 24,
								top: 30,
								bottom: 11,
							}}>
							<View
								style={styles.viewFourView}>
								<Image
									source={require("./../../assets/images/image-9.png")}
									style={styles.imageImage}/>
								<View
									pointerEvents="box-none"
									style={{
										width: 60,
										height: 36,
										marginLeft: 13,
										marginTop: 8,
									}}>
									<Text
										style={styles.ulasanText}>{strings("DetailUlasan.ulasanText")}</Text>
									<Text
										style={styles.munawirBangsawanText}>{strings("DetailUlasan.munawirBangsawanText")}</Text>
								</View>
								<View
									style={{
										flex: 1,
									}}/>
								<Text
									style={styles.hariLaluText}>{strings("DetailUlasan.hariLaluText")}</Text>
							</View>
							<Text
								style={styles.loremIpsumIsSimplText}>{strings("DetailUlasan.loremIpsumIsSimplText")}</Text>
						</View>
					</View>
					<View
						style={styles.viewTwoView}>
						<Image
							source={require("./../../assets/images/mask-group-8.png")}
							style={styles.maskGroup8Image}/>
						<View
							pointerEvents="box-none"
							style={{
								height: 756,
								marginRight: 147,
								marginTop: 6,
							}}>
							<Image
								source={require("./../../assets/images/mask-group-9.png")}
								style={styles.maskGroup9Image}/>
							<Image
								source={require("./../../assets/images/mask-group-10.png")}
								style={styles.maskGroup10Image}/>
						</View>
						<Image
							source={require("./../../assets/images/mask-group-11.png")}
							style={styles.maskGroup11Image}/>
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
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 23,
		height: 13,
		marginTop: 7,
	},
	ulasanTwoText: {
		color: "black",
		fontFamily: "Poppins-Regular",
		fontSize: 17,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		marginLeft: 20,
		marginTop: 3,
	},
	shareButtonImage: {
		resizeMode: "contain",
	},
	shareButton: {
		backgroundColor: "transparent",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		padding: 0,
		width: 25,
		height: 25,
	},
	shareButtonText: {
		color: "black",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
	},
	viewScrollView: {
		backgroundColor: "transparent",
		flex: 1,
		marginBottom: 6,
	},
	viewThreeView: {
		backgroundColor: "transparent",
		height: 266,
		marginLeft: 181,
		marginRight: 152,
	},
	backgroundView: {
		backgroundColor: "white",
		position: "absolute",
		left: 0,
		right: 0,
		top: 0,
		height: 266,
	},
	viewFourView: {
		backgroundColor: "transparent",
		height: 52,
		marginLeft: 1,
		flexDirection: "row",
		alignItems: "flex-start",
	},
	imageImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		borderRadius: 5,
		width: 50,
		height: 52,
	},
	ulasanText: {
		color: "black",
		fontFamily: "Poppins-Regular",
		fontSize: 10,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		position: "absolute",
		left: 1,
		top: 19,
	},
	munawirBangsawanText: {
		color: "black",
		fontFamily: "Poppins-Regular",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		position: "absolute",
		left: 0,
		top: 0,
	},
	hariLaluText: {
		color: "black",
		fontFamily: "Poppins-Regular",
		fontSize: 10,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		marginTop: 11,
	},
	loremIpsumIsSimplText: {
		color: "black",
		fontFamily: "Poppins-Regular",
		fontSize: 10,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		lineHeight: 18,
		backgroundColor: "transparent",
		flex: 1,
		marginRight: 2,
		marginTop: 20,
	},
	viewTwoView: {
		backgroundColor: "transparent",
		flex: 1,
		alignSelf: "center",
		width: 708,
		marginTop: 12,
	},
	maskGroup8Image: {
		backgroundColor: "transparent",
		resizeMode: "stretch",
		flex: 1,
		width: null,
		marginLeft: 19,
		marginRight: 124,
		marginBottom: 6,
	},
	maskGroup9Image: {
		resizeMode: "cover",
		backgroundColor: "transparent",
		position: "absolute",
		left: 181,
		right: 5,
		top: 0,
		height: 499,
	},
	maskGroup10Image: {
		resizeMode: "cover",
		backgroundColor: "transparent",
		position: "absolute",
		left: 0,
		right: 0,
		top: 381,
		height: 375,
	},
	maskGroup11Image: {
		resizeMode: "cover",
		backgroundColor: "transparent",
		width: null,
		height: 372,
		marginLeft: 46,
	},
})

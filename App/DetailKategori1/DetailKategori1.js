//
//  DetailKategori1
//  warnasmobile
//
//  Created by Supernova.
//  Copyright © 2018 Supernova. All rights reserved.
//

import React from "react"
import { strings } from "./../Locales/i18n"
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native"


export default class DetailKategori1 extends React.Component {

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

	onUrutkanPressed = () => {
	
	}

	onViewPressed = () => {
	
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
							width: 172,
							top: 16,
							height: 26,
							flexDirection: "row",
							alignItems: "flex-start",
						}}>
						<Image
							source={require("./../../assets/images/union-1.png")}
							style={styles.union1Image}/>
						<Text
							style={styles.yangDekatAjaText}>{strings("DetailKategori1.yangDekatAjaText")}</Text>
					</View>
				</View>
				<View
					pointerEvents="box-none"
					style={{
						flex: 1,
					}}>
					<ScrollView
						style={styles.group65ScrollView}>
						<View
							pointerEvents="box-none"
							style={{
								position: "absolute",
								left: 0,
								right: 0,
								top: 0,
								bottom: 0,
							}}>
							<View
								style={styles.viewTwoView}>
								<View
									style={styles.group15View}>
									<Image
										source={require("./../../assets/images/mask-group-2-5.png")}
										style={styles.maskGroup2Image}/>
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
											style={styles.disukaiHaizDan38Text}>{strings("DetailKategori1.disukaiHaizDan38Text")}</Text>
										<Text
											style={styles.sotoBetawiAnnaText}>{strings("DetailKategori1.sotoBetawiAnnaText")}</Text>
										<Text
											style={styles.rp20000Rp23Text}>{strings("DetailKategori1.rp20000Rp23Text")}</Text>
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
												style={styles.kmText}>{strings("DetailKategori1.kmText")}</Text>
											<Text
												style={styles.minText}>{strings("DetailKategori1.minText")}</Text>
											<View
												pointerEvents="box-none"
												style={{
													width: 49,
													height: 18,
												}}>
												<View
													style={styles.rectangle10View}/>
												<Text
													style={styles.bukaText}>{strings("DetailKategori1.bukaText")}</Text>
											</View>
										</View>
									</View>
								</View>
							</View>
							<View
								style={styles.viewThreeView}>
								<View
									style={styles.group52View}>
									<Image
										source={require("./../../assets/images/mask-group-2-5.png")}
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
											style={styles.disukaiHaizDan38TwoText}>{strings("DetailKategori1.disukaiHaizDan38TwoText")}</Text>
										<Text
											style={styles.sotoBetawiAnnaTwoText}>{strings("DetailKategori1.sotoBetawiAnnaTwoText")}</Text>
										<Text
											style={styles.rp20000Rp23TwoText}>{strings("DetailKategori1.rp20000Rp23TwoText")}</Text>
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
												style={styles.kmTwoText}>{strings("DetailKategori1.kmTwoText")}</Text>
											<Text
												style={styles.minTwoText}>{strings("DetailKategori1.minTwoText")}</Text>
											<View
												pointerEvents="box-none"
												style={{
													width: 49,
													height: 18,
												}}>
												<View
													style={styles.rectangle10TwoView}/>
												<Text
													style={styles.bukaTwoText}>{strings("DetailKategori1.bukaTwoText")}</Text>
											</View>
										</View>
									</View>
								</View>
							</View>
							<View
								style={styles.viewFourView}>
								<View
									style={styles.group53View}>
									<Image
										source={require("./../../assets/images/mask-group-2-5.png")}
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
											style={styles.disukaiHaizDan38ThreeText}>{strings("DetailKategori1.disukaiHaizDan38ThreeText")}</Text>
										<Text
											style={styles.sotoBetawiAnnaThreeText}>{strings("DetailKategori1.sotoBetawiAnnaThreeText")}</Text>
										<Text
											style={styles.rp20000Rp23ThreeText}>{strings("DetailKategori1.rp20000Rp23ThreeText")}</Text>
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
												style={styles.kmThreeText}>{strings("DetailKategori1.kmThreeText")}</Text>
											<Text
												style={styles.minThreeText}>{strings("DetailKategori1.minThreeText")}</Text>
											<View
												pointerEvents="box-none"
												style={{
													width: 49,
													height: 18,
												}}>
												<View
													style={styles.rectangle10ThreeView}/>
												<Text
													style={styles.bukaThreeText}>{strings("DetailKategori1.bukaThreeText")}</Text>
											</View>
										</View>
									</View>
								</View>
							</View>
							<View
								style={styles.viewSevenView}>
								<View
									style={styles.group55View}>
									<Image
										source={require("./../../assets/images/mask-group-2-5.png")}
										style={styles.maskGroup2SixImage}/>
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
											style={styles.disukaiHaizDan38SixText}>{strings("DetailKategori1.disukaiHaizDan38SixText")}</Text>
										<Text
											style={styles.sotoBetawiAnnaSixText}>{strings("DetailKategori1.sotoBetawiAnnaSixText")}</Text>
										<Text
											style={styles.rp20000Rp23SixText}>{strings("DetailKategori1.rp20000Rp23SixText")}</Text>
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
												style={styles.kmSixText}>{strings("DetailKategori1.kmSixText")}</Text>
											<Text
												style={styles.minSixText}>{strings("DetailKategori1.minSixText")}</Text>
											<View
												pointerEvents="box-none"
												style={{
													width: 49,
													height: 18,
												}}>
												<View
													style={styles.rectangle10SixView}/>
												<Text
													style={styles.bukaSixText}>{strings("DetailKategori1.bukaSixText")}</Text>
											</View>
										</View>
									</View>
								</View>
							</View>
							<View
								style={{
									flex: 1,
								}}/>
							<View
								style={styles.viewSixView}>
								<View
									style={styles.group56View}>
									<Image
										source={require("./../../assets/images/mask-group-2-5.png")}
										style={styles.maskGroup2FiveImage}/>
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
											style={styles.disukaiHaizDan38FiveText}>{strings("DetailKategori1.disukaiHaizDan38FiveText")}</Text>
										<Text
											style={styles.sotoBetawiAnnaFiveText}>{strings("DetailKategori1.sotoBetawiAnnaFiveText")}</Text>
										<Text
											style={styles.rp20000Rp23FiveText}>{strings("DetailKategori1.rp20000Rp23FiveText")}</Text>
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
												style={styles.kmFiveText}>{strings("DetailKategori1.kmFiveText")}</Text>
											<Text
												style={styles.minFiveText}>{strings("DetailKategori1.minFiveText")}</Text>
											<View
												pointerEvents="box-none"
												style={{
													width: 49,
													height: 18,
												}}>
												<View
													style={styles.rectangle10FiveView}/>
												<Text
													style={styles.bukaFiveText}>{strings("DetailKategori1.bukaFiveText")}</Text>
											</View>
										</View>
									</View>
								</View>
							</View>
							<View
								style={styles.viewEightView}>
								<View
									style={styles.group57View}>
									<Image
										source={require("./../../assets/images/mask-group-2-5.png")}
										style={styles.maskGroup2SevenImage}/>
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
											style={styles.disukaiHaizDan38SevenText}>{strings("DetailKategori1.disukaiHaizDan38SevenText")}</Text>
										<Text
											style={styles.sotoBetawiAnnaSevenText}>{strings("DetailKategori1.sotoBetawiAnnaSevenText")}</Text>
										<Text
											style={styles.rp20000Rp23SevenText}>{strings("DetailKategori1.rp20000Rp23SevenText")}</Text>
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
												style={styles.kmSevenText}>{strings("DetailKategori1.kmSevenText")}</Text>
											<Text
												style={styles.minSevenText}>{strings("DetailKategori1.minSevenText")}</Text>
											<View
												pointerEvents="box-none"
												style={{
													width: 49,
													height: 18,
												}}>
												<View
													style={styles.rectangle10SevenView}/>
												<Text
													style={styles.bukaSevenText}>{strings("DetailKategori1.bukaSevenText")}</Text>
											</View>
										</View>
									</View>
								</View>
							</View>
						</View>
						<View
							pointerEvents="box-none"
							style={{
								position: "absolute",
								left: 0,
								right: 0,
								top: 0,
								bottom: 0,
								justifyContent: "center",
							}}>
							<View
								style={styles.viewFiveView}>
								<View
									style={styles.group54View}>
									<Image
										source={require("./../../assets/images/mask-group-2-5.png")}
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
											style={styles.disukaiHaizDan38FourText}>{strings("DetailKategori1.disukaiHaizDan38FourText")}</Text>
										<Text
											style={styles.sotoBetawiAnnaFourText}>{strings("DetailKategori1.sotoBetawiAnnaFourText")}</Text>
										<Text
											style={styles.rp20000Rp23FourText}>{strings("DetailKategori1.rp20000Rp23FourText")}</Text>
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
												style={styles.kmFourText}>{strings("DetailKategori1.kmFourText")}</Text>
											<Text
												style={styles.minFourText}>{strings("DetailKategori1.minFourText")}</Text>
											<View
												pointerEvents="box-none"
												style={{
													width: 49,
													height: 18,
												}}>
												<View
													style={styles.rectangle10FourView}/>
												<Text
													style={styles.bukaFourText}>{strings("DetailKategori1.bukaFourText")}</Text>
											</View>
										</View>
									</View>
								</View>
							</View>
						</View>
					</ScrollView>
					<View
						style={styles.floatingButtonView}>
						<View
							pointerEvents="box-none"
							style={{
								position: "absolute",
								left: 0,
								right: 0,
								bottom: 0,
								height: 42,
							}}>
							<View
								style={styles.backgroundView}/>
							<View
								pointerEvents="box-none"
								style={{
									position: "absolute",
									left: 0,
									right: 1,
									bottom: 0,
									height: 42,
									flexDirection: "row",
									alignItems: "flex-end",
								}}>
								<TouchableOpacity
									onPress={this.onUrutkanPressed}
									style={styles.urutkanButton}>
									<Image
										source={require("./../../assets/images/sort.png")}
										style={styles.urutkanButtonImage}/>
									<Text
										style={styles.urutkanButtonText}>{strings("DetailKategori1.urutkanButton")}</Text>
								</TouchableOpacity>
								<View
									style={{
										flex: 1,
									}}/>
								<TouchableOpacity
									onPress={this.onViewPressed}
									style={styles.viewButton}>
									<Image
										source={require("./../../assets/images/filter.png")}
										style={styles.viewButtonImage}/>
									<Text
										style={styles.viewButtonText}>{strings("DetailKategori1.viewButton")}</Text>
								</TouchableOpacity>
							</View>
						</View>
						<View
							style={styles.line14View}/>
					</View>
				</View>
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
		marginTop: 4,
	},
	yangDekatAjaText: {
		backgroundColor: "transparent",
		color: "black",
		fontFamily: "Poppins-Regular",
		fontSize: 17,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		marginLeft: 20,
	},
	group65ScrollView: {
		backgroundColor: "transparent",
		position: "absolute",
		left: 0,
		right: 0,
		top: 0,
		bottom: 0,
	},
	viewTwoView: {
		backgroundColor: "white",
		height: 122,
		alignItems: "flex-start",
	},
	group15View: {
		backgroundColor: "transparent",
		width: 245,
		height: 102,
		marginLeft: 19,
		marginTop: 13,
		flexDirection: "row",
		alignItems: "flex-start",
	},
	maskGroup2Image: {
		backgroundColor: "transparent",
		resizeMode: "center",
		alignSelf: "center",
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
	viewThreeView: {
		backgroundColor: "white",
		height: 122,
		marginTop: 7,
		alignItems: "flex-start",
	},
	group52View: {
		backgroundColor: "transparent",
		width: 245,
		height: 102,
		marginLeft: 19,
		marginTop: 13,
		flexDirection: "row",
		alignItems: "center",
	},
	maskGroup2TwoImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
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
	viewFourView: {
		backgroundColor: "white",
		height: 122,
		marginTop: 7,
		alignItems: "flex-start",
	},
	group53View: {
		backgroundColor: "transparent",
		width: 245,
		height: 102,
		marginLeft: 19,
		marginTop: 13,
		flexDirection: "row",
		alignItems: "center",
	},
	maskGroup2ThreeImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
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
	viewSevenView: {
		backgroundColor: "white",
		height: 122,
		marginTop: 136,
		alignItems: "flex-start",
	},
	group55View: {
		backgroundColor: "transparent",
		width: 245,
		height: 102,
		marginLeft: 19,
		marginTop: 13,
		flexDirection: "row",
		alignItems: "center",
	},
	maskGroup2SixImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 102,
		height: 102,
	},
	disukaiHaizDan38SixText: {
		backgroundColor: "transparent",
		color: "black",
		fontFamily: "Poppins-Regular",
		fontSize: 9,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		marginRight: 7,
	},
	sotoBetawiAnnaSixText: {
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
	rp20000Rp23SixText: {
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
	viewSixView: {
		backgroundColor: "white",
		height: 122,
		marginBottom: 7,
		alignItems: "flex-start",
	},
	group56View: {
		backgroundColor: "transparent",
		width: 245,
		height: 102,
		marginLeft: 19,
		marginTop: 13,
		flexDirection: "row",
		alignItems: "center",
	},
	maskGroup2FiveImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 102,
		height: 102,
	},
	disukaiHaizDan38FiveText: {
		backgroundColor: "transparent",
		color: "black",
		fontFamily: "Poppins-Regular",
		fontSize: 9,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		marginRight: 7,
	},
	sotoBetawiAnnaFiveText: {
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
	rp20000Rp23FiveText: {
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
	viewEightView: {
		backgroundColor: "white",
		height: 122,
		alignItems: "flex-start",
	},
	group57View: {
		backgroundColor: "transparent",
		width: 245,
		height: 102,
		marginLeft: 19,
		marginTop: 13,
		flexDirection: "row",
		alignItems: "center",
	},
	maskGroup2SevenImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 102,
		height: 102,
	},
	disukaiHaizDan38SevenText: {
		backgroundColor: "transparent",
		color: "black",
		fontFamily: "Poppins-Regular",
		fontSize: 9,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		marginRight: 7,
	},
	sotoBetawiAnnaSevenText: {
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
	rp20000Rp23SevenText: {
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
	kmSevenText: {
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
	minSevenText: {
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
	rectangle10SevenView: {
		backgroundColor: "rgb(36, 181, 70)",
		borderRadius: 5,
		position: "absolute",
		right: 0,
		width: 49,
		top: 0,
		height: 18,
	},
	bukaSevenText: {
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
	viewFiveView: {
		backgroundColor: "white",
		height: 122,
		alignItems: "flex-start",
	},
	group54View: {
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
		backgroundColor: "transparent",
		color: "black",
		fontFamily: "Poppins-Regular",
		fontSize: 9,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		marginRight: 7,
	},
	sotoBetawiAnnaFourText: {
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
	floatingButtonView: {
		backgroundColor: "transparent",
		shadowColor: "rgba(0, 0, 0, 0.15)",
		shadowRadius: 5,
		shadowOpacity: 1,
		position: "absolute",
		alignSelf: "center",
		width: 156,
		bottom: 175,
		height: 42,
	},
	backgroundView: {
		backgroundColor: "rgb(243, 113, 33)",
		borderRadius: 5,
		shadowColor: "rgba(0, 0, 0, 0.16)",
		shadowRadius: 6,
		shadowOpacity: 1,
		position: "absolute",
		alignSelf: "center",
		width: 156,
		bottom: 0,
		height: 42,
	},
	urutkanButtonText: {
		color: "white",
		fontFamily: "Poppins-Regular",
		fontSize: 10,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
	},
	urutkanButton: {
		backgroundColor: "transparent",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		padding: 0,
		width: 78,
		height: 42,
	},
	urutkanButtonImage: {
		resizeMode: "contain",
		marginRight: 10,
	},
	viewButton: {
		backgroundColor: "transparent",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		padding: 0,
		width: 78,
		height: 42,
	},
	viewButtonText: {
		color: "white",
		fontFamily: "Poppins-Regular",
		fontSize: 10,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
	},
	viewButtonImage: {
		resizeMode: "contain",
		marginRight: 10,
	},
	line14View: {
		backgroundColor: "rgb(217, 97, 24)",
		position: "absolute",
		alignSelf: "center",
		width: 1,
		bottom: 1,
		height: 40,
	},
})

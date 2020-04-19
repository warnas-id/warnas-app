//
//  NavigationBar
//  UI-Warnas
//
//  Created by Supernova.
//  Copyright © 2018 Supernova. All rights reserved.
//

import React from "react"
import { strings } from "./../Locales/i18n"
import { StyleSheet, Text, View } from "react-native"


export default class NavigationBar extends React.Component {

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
					style={styles.group59View}>
					<View
						style={styles.repeatGrid5View}>
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
								pointerEvents="box-none"
								style={{
									height: 52,
									flexDirection: "row",
									alignItems: "center",
								}}>
								<View
									style={styles.viewTwoView}>
									<View
										style={styles.rectangle20View}/>
									<View
										style={{
											flex: 1,
										}}/>
									<Text
										style={styles.berandaText}>{strings("NavigationBar.berandaText")}</Text>
								</View>
								<View
									style={styles.viewThreeView}>
									<View
										style={styles.rectangle20TwoView}/>
									<View
										style={{
											flex: 1,
										}}/>
									<Text
										style={styles.ulasanText}>{strings("NavigationBar.ulasanText")}</Text>
								</View>
								<View
									style={{
										flex: 1,
									}}/>
								<View
									style={styles.viewFiveView}>
									<View
										style={styles.rectangle20FourView}/>
									<View
										style={{
											flex: 1,
										}}/>
									<Text
										style={styles.warungText}>{strings("NavigationBar.warungText")}</Text>
								</View>
								<View
									style={styles.viewSixView}>
									<View
										style={styles.rectangle20FiveView}/>
									<View
										style={{
											flex: 1,
										}}/>
									<Text
										style={styles.profilText}>{strings("NavigationBar.profilText")}</Text>
								</View>
							</View>
						</View>
						<View
							pointerEvents="box-none"
							style={{
								position: "absolute",
								alignSelf: "center",
								top: 0,
								bottom: 0,
								justifyContent: "center",
							}}>
							<View
								style={styles.viewFourView}>
								<View
									style={styles.rectangle20ThreeView}/>
								<View
									style={{
										flex: 1,
									}}/>
								<Text
									style={styles.favoritText}>{strings("NavigationBar.favoritText")}</Text>
							</View>
						</View>
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
		alignItems: "center",
	},
	group59View: {
		backgroundColor: "white",
		width: 375,
		height: 71,
		justifyContent: "center",
		alignItems: "center",
	},
	repeatGrid5View: {
		backgroundColor: "transparent",
		width: 309,
		height: 52,
	},
	viewTwoView: {
		backgroundColor: "transparent",
		width: 39,
		height: 52,
	},
	rectangle20View: {
		backgroundColor: "rgb(219, 219, 219)",
		borderRadius: 11,
		height: 35,
		marginLeft: 2,
		marginRight: 2,
	},
	berandaText: {
		color: "rgb(20, 20, 20)",
		fontFamily: "Poppins-Regular",
		fontSize: 9,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		backgroundColor: "transparent",
	},
	viewThreeView: {
		backgroundColor: "transparent",
		width: 35,
		height: 52,
		marginLeft: 31,
	},
	rectangle20TwoView: {
		backgroundColor: "rgb(219, 219, 219)",
		borderRadius: 11,
		height: 35,
	},
	ulasanText: {
		color: "rgb(20, 20, 20)",
		fontFamily: "Poppins-Regular",
		fontSize: 9,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		backgroundColor: "transparent",
		marginLeft: 2,
		marginRight: 2,
	},
	viewFiveView: {
		backgroundColor: "transparent",
		width: 37,
		height: 52,
		marginRight: 32,
	},
	rectangle20FourView: {
		backgroundColor: "rgb(219, 219, 219)",
		borderRadius: 11,
		height: 35,
		marginLeft: 1,
		marginRight: 1,
	},
	warungText: {
		color: "rgb(20, 20, 20)",
		fontFamily: "Poppins-Regular",
		fontSize: 9,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		backgroundColor: "transparent",
	},
	viewSixView: {
		backgroundColor: "transparent",
		width: 35,
		height: 52,
	},
	rectangle20FiveView: {
		backgroundColor: "rgb(219, 219, 219)",
		borderRadius: 11,
		height: 35,
	},
	profilText: {
		backgroundColor: "transparent",
		color: "rgb(20, 20, 20)",
		fontFamily: "Poppins-Regular",
		fontSize: 9,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		marginLeft: 6,
		marginRight: 6,
	},
	viewFourView: {
		backgroundColor: "transparent",
		width: 35,
		height: 52,
	},
	rectangle20ThreeView: {
		backgroundColor: "rgb(219, 219, 219)",
		borderRadius: 11,
		height: 35,
	},
	favoritText: {
		color: "rgb(20, 20, 20)",
		fontFamily: "Poppins-Regular",
		fontSize: 9,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		backgroundColor: "transparent",
		marginLeft: 2,
		marginRight: 2,
	},
})

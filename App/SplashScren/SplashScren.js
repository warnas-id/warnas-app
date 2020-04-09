//
//  SplashScren
//  warnasmobile
//
//  Created by Supernova.
//  Copyright © 2018 Supernova. All rights reserved.
//

import React from "react"
import { strings } from "./../Locales/i18n"
import { Animated, Easing, Image, StyleSheet, View } from "react-native"


export default class SplashScren extends React.Component {

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
		this.state = {
			logoDarkshadImageTranslateY: new Animated.Value(-1),
			logoDarkshadImageOpacity: new Animated.Value(-1),
		}
	}

	componentDidMount() {
	
		this.startAnimationOne()
	}

	startAnimationOne() {
	
		// Set animation initial values to all animated properties
		this.state.logoDarkshadImageTranslateY.setValue(0)
		this.state.logoDarkshadImageOpacity.setValue(0)
		
		// Configure animation and trigger
		Animated.parallel([Animated.parallel([Animated.timing(this.state.logoDarkshadImageTranslateY, {
			duration: 1000,
			easing: Easing.bezier(0.64, 0.01, 1, 1),
			toValue: 1,
		}), Animated.timing(this.state.logoDarkshadImageOpacity, {
			duration: 1000,
			easing: Easing.bezier(0.42, 0, 0.58, 1),
			toValue: 1,
		})])]).start()
	}

	render() {
	
		return <View
				style={styles.viewView}>
				<Animated.View
					style={[{
						opacity: this.state.logoDarkshadImageOpacity.interpolate({
							inputRange: [-1, 0, 1],
							outputRange: [1, 0, 1],
						}),
						transform: [{
							translateY: this.state.logoDarkshadImageTranslateY.interpolate({
								inputRange: [-1, 0, 1],
								outputRange: [0.01, 60, 0],
							}),
						}],
					}, styles.logoDarkshadImageAnimated]}>
					<Image
						source={require("./../../assets/images/logo-darkshad.png")}
						style={styles.logoDarkshadImage}/>
				</Animated.View>
			</View>
	}
}

const styles = StyleSheet.create({
	viewView: {
		backgroundColor: "white",
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	logoDarkshadImage: {
		resizeMode: "cover",
		backgroundColor: "transparent",
		width: "100%",
		height: "100%",
	},
	logoDarkshadImageAnimated: {
		width: 196,
		height: 37,
	},
})

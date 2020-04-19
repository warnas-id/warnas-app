//
//  App.js
//  UI-Warnas
//
//  Created by Supernova.
//  Copyright © 2018 Supernova. All rights reserved.
//

import * as Font from "expo-font"
import I18n from "i18n-js"
import NavigationBar from "./App/NavigationBar/NavigationBar"
import React from "react"
import SyaratCaraDeskripsiPoin from "./App/SyaratCaraDeskripsiPoin/SyaratCaraDeskripsiPoin"
import TukarPoint from "./App/TukarPoint/TukarPoint"
import TukarPointPopup from "./App/TukarPointPopup/TukarPointPopup"
import { AppLoading, DangerZone } from "expo"
import { createAppContainer, createStackNavigator } from "react-navigation"

const PushRouteOne = createStackNavigator({
	TukarPoint: {
		screen: TukarPoint,
	},
}, {
	initialRouteName: "TukarPoint",
})

const PushRouteTwo = createStackNavigator({
	TukarPointPopup: {
		screen: TukarPointPopup,
	},
}, {
	initialRouteName: "TukarPointPopup",
})

const RootNavigator = createStackNavigator({
	PushRouteOne: {
		screen: PushRouteOne,
	},
	PushRouteTwo: {
		screen: PushRouteTwo,
	},
}, {
	mode: "modal",
	headerMode: "none",
	initialRouteName: "PushRouteOne",
})

const AppContainer = createAppContainer(RootNavigator)



export default class App extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			fontsReady: false,
		}
	}

	componentDidMount() {
	
		this.initProjectFonts()
	}

	async initProjectFonts() {
	
		await Font.loadAsync({
			"Poppins-Regular": require("./assets/fonts/PoppinsRegular.otf"),
			"Poppins-Bold": require("./assets/fonts/PoppinsBold.otf"),
		})
		this.setState({
			fontsReady: true,
		})
	}

	render() {
	
		if (!this.state.fontsReady) { return (<AppLoading />); }
		return <AppContainer/>
	}
}

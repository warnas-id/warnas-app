//
//  App.js
//  warnasmobile
//
//  Created by Supernova.
//  Copyright © 2018 Supernova. All rights reserved.
//

import DetailKategori1 from "./App/DetailKategori1/DetailKategori1"
import DetailUlasan from "./App/DetailUlasan/DetailUlasan"
import Favorit from "./App/Favorit/Favorit"
import Home from "./App/Home/Home"
import I18n from "i18n-js"
import Login from "./App/Login/Login"
import React from "react"
import Search from "./App/Search/Search"
import SignUp from "./App/SignUp/SignUp"
import SplashScren from "./App/SplashScren/SplashScren"
import { createAppContainer, createStackNavigator } from "react-navigation"

const PushRouteOne = createStackNavigator({
	SignUp: {
		screen: SignUp,
	},
	Login: {
		screen: Login,
	},
	Home: {
		screen: Home,
	},
}, {
	initialRouteName: "SignUp",
})

const RootNavigator = createStackNavigator({
	PushRouteOne: {
		screen: PushRouteOne,
	},
}, {
	mode: "modal",
	headerMode: "none",
	initialRouteName: "PushRouteOne",
})

const AppContainer = createAppContainer(RootNavigator)



export default class App extends React.Component {

	render() {
	
		return <AppContainer/>
	}
}

//
//  Search
//  warnasmobile
//
//  Created by Supernova.
//  Copyright © 2018 Supernova. All rights reserved.
//

import React from "react"
import { strings } from "./../Locales/i18n"
import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native"


export default class Search extends React.Component {

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

	onLihatSemuaPressed = () => {
	
	}

	onGroup23Pressed = () => {
	
	}

	onMieAyamPressed = () => {
	
	}

	onCapcayPressed = () => {
	
	}

	onSeafoodPressed = () => {
	
	}

	onIkanBakarPressed = () => {
	
	}

	onGroup26Pressed = () => {
	
	}

	render() {
	
		return <View
				style={styles.viewView}>
				<View
					pointerEvents="box-none"
					style={{
						height: 44,
						marginLeft: 24,
						marginRight: 23,
						marginTop: 19,
						flexDirection: "row",
						alignItems: "flex-start",
					}}>
					<View
						pointerEvents="box-none"
						style={{
							flex: 1,
							height: 44,
							marginRight: 18,
						}}>
						<View
							style={styles.rectangle5View}/>
						<View
							pointerEvents="box-none"
							style={{
								position: "absolute",
								left: 15,
								right: 53,
								top: 13,
								height: 19,
								flexDirection: "row",
								alignItems: "flex-start",
							}}>
							<Image
								source={require("./../../assets/images/pin-13.png")}
								style={styles.pinImage}/>
							<TextInput
								autoCorrect={false}
								placeholder="Pengen makan apa, Munawir?"
								style={styles.mauMakanApaHariITextInput}/>
						</View>
					</View>
					<Text
						style={styles.batalText}>{strings("Search.batalText")}</Text>
				</View>
				<ScrollView
					style={styles.viewScrollView}>
					<View
						pointerEvents="box-none"
						style={{
							height: 32,
							marginLeft: 25,
							marginRight: 22,
							marginTop: 82,
							flexDirection: "row",
							alignItems: "flex-start",
						}}>
						<Image
							source={require("./../../assets/images/like-3.png")}
							style={styles.likeImage}/>
						<View
							pointerEvents="box-none"
							style={{
								flex: 1,
								height: 32,
								marginLeft: 6,
							}}>
							<View
								pointerEvents="box-none"
								style={{
									height: 24,
									flexDirection: "row",
									alignItems: "flex-start",
								}}>
								<Text
									style={styles.kamiBantuPilihkanText}>{strings("Search.kamiBantuPilihkanText")}</Text>
								<View
									style={{
										flex: 1,
									}}/>
								<TouchableOpacity
									onPress={this.onLihatSemuaPressed}
									style={styles.lihatSemuaButton}>
									<Text
										style={styles.lihatSemuaButtonText}>{strings("Search.lihatSemuaButton")}</Text>
								</TouchableOpacity>
							</View>
							<Text
								style={styles.liatAjaDuluSiapaText}>{strings("Search.liatAjaDuluSiapaText")}</Text>
						</View>
					</View>
					<ScrollView
						horizontal={true}
						style={styles.listPalingDekatScrollView}>
						<View
							pointerEvents="box-none"
							style={{
								position: "absolute",
								left: 0,
								top: 0,
								bottom: 0,
								justifyContent: "center",
							}}>
							<View
								style={styles.group7View}>
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
										style={styles.rectangle6View}/>
								</View>
								<View
									pointerEvents="box-none"
									style={{
										position: "absolute",
										left: 0,
										right: 0,
										top: 0,
										bottom: 11,
										alignItems: "flex-start",
									}}>
									<Image
										source={require("./../../assets/images/image-4.png")}
										style={styles.imageImage}/>
									<Text
										style={styles.disukaiHaizDan38Text}>{strings("Search.disukaiHaizDan38Text")}</Text>
									<Text
										style={styles.sotoBetawiAnnaText}>{strings("Search.sotoBetawiAnnaText")}</Text>
									<View
										style={{
											flex: 1,
										}}/>
									<Text
										style={styles.rp20000Rp23Text}>{strings("Search.rp20000Rp23Text")}</Text>
									<View
										pointerEvents="box-none"
										style={{
											alignSelf: "stretch",
											height: 12,
											marginLeft: 19,
											marginRight: 30,
											flexDirection: "row",
											alignItems: "flex-end",
										}}>
										<Text
											style={styles.kmText}>{strings("Search.kmText")}</Text>
										<Text
											style={styles.minText}>{strings("Search.minText")}</Text>
										<View
											style={{
												flex: 1,
											}}/>
										<View
											style={styles.rectangle8View}/>
									</View>
								</View>
								<Text
									style={styles.bukaText}>{strings("Search.bukaText")}</Text>
							</View>
						</View>
						<View
							pointerEvents="box-none"
							style={{
								position: "absolute",
								left: 0,
								top: 0,
								bottom: 0,
								justifyContent: "center",
							}}>
							<View
								style={styles.group16View}>
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
										style={styles.rectangle6TwoView}/>
								</View>
								<View
									pointerEvents="box-none"
									style={{
										position: "absolute",
										left: 0,
										right: 0,
										top: 0,
										bottom: 11,
										alignItems: "flex-start",
									}}>
									<Image
										source={require("./../../assets/images/image-4.png")}
										style={styles.imageTwoImage}/>
									<Text
										style={styles.disukaiHaizDan38TwoText}>{strings("Search.disukaiHaizDan38TwoText")}</Text>
									<Text
										style={styles.sotoBetawiAnnaTwoText}>{strings("Search.sotoBetawiAnnaTwoText")}</Text>
									<View
										style={{
											flex: 1,
										}}/>
									<Text
										style={styles.rp20000Rp23TwoText}>{strings("Search.rp20000Rp23TwoText")}</Text>
									<View
										pointerEvents="box-none"
										style={{
											alignSelf: "stretch",
											height: 12,
											marginLeft: 19,
											marginRight: 30,
											flexDirection: "row",
											alignItems: "flex-end",
										}}>
										<Text
											style={styles.kmTwoText}>{strings("Search.kmTwoText")}</Text>
										<Text
											style={styles.minTwoText}>{strings("Search.minTwoText")}</Text>
										<View
											style={{
												flex: 1,
											}}/>
										<View
											style={styles.rectangle8TwoView}/>
									</View>
								</View>
								<Text
									style={styles.bukaTwoText}>{strings("Search.bukaTwoText")}</Text>
							</View>
						</View>
						<View
							pointerEvents="box-none"
							style={{
								position: "absolute",
								left: 0,
								top: 0,
								bottom: 0,
								justifyContent: "center",
							}}>
							<View
								style={styles.group17View}>
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
										style={styles.rectangle6ThreeView}/>
								</View>
								<View
									pointerEvents="box-none"
									style={{
										position: "absolute",
										left: 0,
										right: 0,
										top: 0,
										bottom: 11,
										alignItems: "flex-start",
									}}>
									<Image
										source={require("./../../assets/images/image-4.png")}
										style={styles.imageThreeImage}/>
									<Text
										style={styles.disukaiHaizDan38ThreeText}>{strings("Search.disukaiHaizDan38ThreeText")}</Text>
									<Text
										style={styles.sotoBetawiAnnaThreeText}>{strings("Search.sotoBetawiAnnaThreeText")}</Text>
									<View
										style={{
											flex: 1,
										}}/>
									<Text
										style={styles.rp20000Rp23ThreeText}>{strings("Search.rp20000Rp23ThreeText")}</Text>
									<View
										pointerEvents="box-none"
										style={{
											alignSelf: "stretch",
											height: 12,
											marginLeft: 19,
											marginRight: 30,
											flexDirection: "row",
											alignItems: "flex-end",
										}}>
										<Text
											style={styles.kmThreeText}>{strings("Search.kmThreeText")}</Text>
										<Text
											style={styles.minThreeText}>{strings("Search.minThreeText")}</Text>
										<View
											style={{
												flex: 1,
											}}/>
										<View
											style={styles.rectangle8ThreeView}/>
									</View>
								</View>
								<Text
									style={styles.bukaThreeText}>{strings("Search.bukaThreeText")}</Text>
							</View>
						</View>
						<View
							pointerEvents="box-none"
							style={{
								position: "absolute",
								right: 0,
								top: 0,
								bottom: 0,
								justifyContent: "center",
							}}>
							<View
								style={styles.group27View}>
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
										style={styles.rectangle6FourView}/>
								</View>
								<View
									pointerEvents="box-none"
									style={{
										position: "absolute",
										left: 0,
										right: 0,
										top: 0,
										bottom: 11,
										alignItems: "flex-start",
									}}>
									<Image
										source={require("./../../assets/images/image-4.png")}
										style={styles.imageFourImage}/>
									<Text
										style={styles.disukaiHaizDan38FourText}>{strings("Search.disukaiHaizDan38FourText")}</Text>
									<Text
										style={styles.sotoBetawiAnnaFourText}>{strings("Search.sotoBetawiAnnaFourText")}</Text>
									<View
										style={{
											flex: 1,
										}}/>
									<Text
										style={styles.rp20000Rp23FourText}>{strings("Search.rp20000Rp23FourText")}</Text>
									<View
										pointerEvents="box-none"
										style={{
											alignSelf: "stretch",
											height: 12,
											marginLeft: 19,
											marginRight: 30,
											flexDirection: "row",
											alignItems: "flex-end",
										}}>
										<Text
											style={styles.kmFourText}>{strings("Search.kmFourText")}</Text>
										<Text
											style={styles.minFourText}>{strings("Search.minFourText")}</Text>
										<View
											style={{
												flex: 1,
											}}/>
										<View
											style={styles.rectangle8FourView}/>
									</View>
								</View>
								<Text
									style={styles.bukaFourText}>{strings("Search.bukaFourText")}</Text>
							</View>
						</View>
						<View
							pointerEvents="box-none"
							style={{
								position: "absolute",
								right: 0,
								top: 0,
								bottom: 0,
								justifyContent: "center",
							}}>
							<View
								style={styles.group28View}>
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
										style={styles.rectangle6FiveView}/>
								</View>
								<View
									pointerEvents="box-none"
									style={{
										position: "absolute",
										left: 0,
										right: 0,
										top: 0,
										bottom: 11,
										alignItems: "flex-start",
									}}>
									<Image
										source={require("./../../assets/images/image-4.png")}
										style={styles.imageFiveImage}/>
									<Text
										style={styles.disukaiHaizDan38FiveText}>{strings("Search.disukaiHaizDan38FiveText")}</Text>
									<Text
										style={styles.sotoBetawiAnnaFiveText}>{strings("Search.sotoBetawiAnnaFiveText")}</Text>
									<View
										style={{
											flex: 1,
										}}/>
									<Text
										style={styles.rp20000Rp23FiveText}>{strings("Search.rp20000Rp23FiveText")}</Text>
									<View
										pointerEvents="box-none"
										style={{
											alignSelf: "stretch",
											height: 12,
											marginLeft: 19,
											marginRight: 30,
											flexDirection: "row",
											alignItems: "flex-end",
										}}>
										<Text
											style={styles.kmFiveText}>{strings("Search.kmFiveText")}</Text>
										<Text
											style={styles.minFiveText}>{strings("Search.minFiveText")}</Text>
										<View
											style={{
												flex: 1,
											}}/>
										<View
											style={styles.rectangle8FiveView}/>
									</View>
								</View>
								<Text
									style={styles.bukaFiveText}>{strings("Search.bukaFiveText")}</Text>
							</View>
						</View>
					</ScrollView>
					<View
						style={styles.line6View}/>
					<Text
						style={styles.yangSeringDicariText}>{strings("Search.yangSeringDicariText")}</Text>
					<View
						style={styles.palingSeringDicariView}>
						<View
							pointerEvents="box-none"
							style={{
								width: 102,
								height: 83,
								alignItems: "flex-start",
							}}>
							<TouchableOpacity
								onPress={this.onGroup23Pressed}
								style={styles.mieAyamButton}>
								<Text
									style={styles.mieAyamButtonText}>{strings("Search.mieAyamButton")}</Text>
							</TouchableOpacity>
							<TouchableOpacity
								onPress={this.onSeafoodPressed}
								style={styles.seafoodButton}>
								<Text
									style={styles.seafoodButtonText}>{strings("Search.seafoodButton")}</Text>
							</TouchableOpacity>
						</View>
						<View
							pointerEvents="box-none"
							style={{
								width: 102,
								height: 83,
								marginLeft: 11,
								alignItems: "flex-start",
							}}>
							<TouchableOpacity
								onPress={this.onMieAyamPressed}
								style={styles.capcayButton}>
								<Text
									style={styles.capcayButtonText}>{strings("Search.capcayButton")}</Text>
							</TouchableOpacity>
							<TouchableOpacity
								onPress={this.onIkanBakarPressed}
								style={styles.ikanBakarButton}>
								<Text
									style={styles.ikanBakarButtonText}>{strings("Search.ikanBakarButton")}</Text>
							</TouchableOpacity>
						</View>
						<View
							pointerEvents="box-none"
							style={{
								width: 102,
								height: 83,
								marginLeft: 10,
								alignItems: "flex-start",
							}}>
							<TouchableOpacity
								onPress={this.onCapcayPressed}
								style={styles.nasiGorengButton}>
								<Text
									style={styles.nasiGorengButtonText}>{strings("Search.nasiGorengButton")}</Text>
							</TouchableOpacity>
							<TouchableOpacity
								onPress={this.onGroup26Pressed}
								style={styles.sateButton}>
								<Text
									style={styles.sateButtonText}>{strings("Search.sateButton")}</Text>
							</TouchableOpacity>
						</View>
					</View>
					<View
						style={styles.line8View}/>
					<Text
						style={styles.pilihDariKategoriText}>{strings("Search.pilihDariKategoriText")}</Text>
					<View
						style={styles.kategoriView}>
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
								pointerEvents="box-none"
								style={{
									height: 105,
									flexDirection: "row",
									alignItems: "flex-start",
								}}>
								<View
									style={styles.ayamBebekView}>
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
											style={styles.rectangle1View}/>
									</View>
									<View
										pointerEvents="box-none"
										style={{
											position: "absolute",
											left: 13,
											right: 12,
											top: 0,
											bottom: 10,
										}}>
										<Image
											source={require("./../../assets/images/icon-ayam--bebek-5.png")}
											style={styles.iconAyamBebekImage}/>
										<View
											style={{
												flex: 1,
											}}/>
										<Text
											style={styles.ayamBebekText}>{strings("Search.ayamBebekText")}</Text>
									</View>
								</View>
								<View
									style={{
										flex: 1,
									}}/>
								<View
									style={styles.mieBaksoView}>
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
											style={styles.rectangle6SixView}/>
									</View>
									<View
										pointerEvents="box-none"
										style={{
											position: "absolute",
											left: 13,
											right: 12,
											top: 0,
											bottom: 7,
										}}>
										<Image
											source={require("./../../assets/images/icon-mie-baso-5.png")}
											style={styles.iconMieBasoImage}/>
										<View
											style={{
												flex: 1,
											}}/>
										<Text
											style={styles.mieBaksoText}>{strings("Search.mieBaksoText")}</Text>
									</View>
								</View>
							</View>
							<View
								pointerEvents="box-none"
								style={{
									height: 107,
									marginTop: 6,
									flexDirection: "row",
									alignItems: "flex-start",
								}}>
								<View
									style={styles.ikanDanSeafoodView}>
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
											style={styles.rectangle4View}/>
									</View>
									<View
										pointerEvents="box-none"
										style={{
											position: "absolute",
											left: 13,
											right: 12,
											top: 0,
											bottom: 10,
										}}>
										<Image
											source={require("./../../assets/images/icon-ikan--seafood-5.png")}
											style={styles.iconIkanSeafoodImage}/>
										<View
											style={{
												flex: 1,
											}}/>
										<Text
											style={styles.ikanSeafoodText}>{strings("Search.ikanSeafoodText")}</Text>
									</View>
								</View>
								<View
									style={{
										flex: 1,
									}}/>
								<View
									style={styles.menuRumahanView}>
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
											style={styles.rectangle6SevenView}/>
									</View>
									<View
										pointerEvents="box-none"
										style={{
											position: "absolute",
											left: 11,
											right: 10,
											top: 0,
											bottom: 10,
										}}>
										<Image
											source={require("./../../assets/images/icon-menu-rumahan-5.png")}
											style={styles.iconMenuRumahanImage}/>
										<View
											style={{
												flex: 1,
											}}/>
										<Text
											style={styles.menuRumahanText}>{strings("Search.menuRumahanText")}</Text>
									</View>
								</View>
							</View>
							<View
								pointerEvents="box-none"
								style={{
									height: 102,
									marginTop: 11,
									flexDirection: "row",
									alignItems: "flex-start",
								}}>
								<View
									style={styles.ragamSotoView}>
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
											style={styles.rectangle4TwoView}/>
									</View>
									<View
										pointerEvents="box-none"
										style={{
											position: "absolute",
											left: 13,
											right: 12,
											top: 0,
											bottom: 7,
										}}>
										<Image
											source={require("./../../assets/images/icon-ragam-soto-5.png")}
											style={styles.iconRagamSotoImage}/>
										<View
											style={{
												flex: 1,
											}}/>
										<Text
											style={styles.ragamSotoText}>{strings("Search.ragamSotoText")}</Text>
									</View>
								</View>
								<View
									style={{
										flex: 1,
									}}/>
								<View
									style={styles.buburAyamView}>
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
											style={styles.rectangle6EightView}/>
									</View>
									<View
										pointerEvents="box-none"
										style={{
											position: "absolute",
											left: 13,
											right: 12,
											top: 0,
											bottom: 7,
										}}>
										<Image
											source={require("./../../assets/images/icon-bubur-ayam-5.png")}
											style={styles.iconBuburAyamImage}/>
										<View
											style={{
												flex: 1,
											}}/>
										<Text
											style={styles.buburAyamText}>{strings("Search.buburAyamText")}</Text>
									</View>
								</View>
							</View>
							<View
								style={{
									flex: 1,
								}}/>
							<View
								pointerEvents="box-none"
								style={{
									height: 102,
									flexDirection: "row",
									alignItems: "flex-end",
								}}>
								<View
									style={styles.tradisionalView}>
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
											style={styles.rectangle4ThreeView}/>
									</View>
									<View
										pointerEvents="box-none"
										style={{
											position: "absolute",
											left: 13,
											right: 12,
											top: 0,
											bottom: 7,
											alignItems: "center",
										}}>
										<Image
											source={require("./../../assets/images/icon-tradisional-5.png")}
											style={styles.iconTradisionalImage}/>
										<View
											style={{
												flex: 1,
											}}/>
										<Text
											style={styles.tradisionalText}>{strings("Search.tradisionalText")}</Text>
									</View>
								</View>
								<View
									style={{
										flex: 1,
									}}/>
								<View
									style={styles.jajananView}>
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
											style={styles.rectangle6NineView}/>
									</View>
									<View
										pointerEvents="box-none"
										style={{
											position: "absolute",
											left: 13,
											right: 12,
											top: 0,
											bottom: 7,
											alignItems: "center",
										}}>
										<Image
											source={require("./../../assets/images/icon-jajanan-5.png")}
											style={styles.iconJajananImage}/>
										<View
											style={{
												flex: 1,
											}}/>
										<Text
											style={styles.jajananText}>{strings("Search.jajananText")}</Text>
									</View>
								</View>
							</View>
						</View>
						<View
							pointerEvents="box-none"
							style={{
								position: "absolute",
								alignSelf: "center",
								width: 103,
								top: 1,
								bottom: 0,
								alignItems: "center",
							}}>
							<View
								style={styles.sateDanDagingView}>
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
										style={styles.rectangle1TwoView}/>
								</View>
								<View
									pointerEvents="box-none"
									style={{
										position: "absolute",
										left: 13,
										right: 12,
										top: 0,
										bottom: 7,
									}}>
									<Image
										source={require("./../../assets/images/icon-sate--daging-5.png")}
										style={styles.iconSateDagingImage}/>
									<View
										style={{
											flex: 1,
										}}/>
									<Text
										style={styles.sateDagingText}>{strings("Search.sateDagingText")}</Text>
								</View>
							</View>
							<View
								style={styles.anekaNasiView}>
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
										style={styles.rectangle1ThreeView}/>
								</View>
								<View
									pointerEvents="box-none"
									style={{
										position: "absolute",
										left: 13,
										right: 12,
										top: 0,
										bottom: 7,
										alignItems: "center",
									}}>
									<Image
										source={require("./../../assets/images/icon-aneka-nasi-5.png")}
										style={styles.iconAnekaNasiImage}/>
									<View
										style={{
											flex: 1,
										}}/>
									<Text
										style={styles.anekaNasiText}>{strings("Search.anekaNasiText")}</Text>
								</View>
							</View>
							<View
								style={styles.angkringanView}>
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
										style={styles.rectangle1FourView}/>
								</View>
								<View
									pointerEvents="box-none"
									style={{
										position: "absolute",
										left: 13,
										right: 12,
										top: 0,
										bottom: 7,
									}}>
									<Image
										source={require("./../../assets/images/icon-angkringan-5.png")}
										style={styles.iconAngkringanImage}/>
									<View
										style={{
											flex: 1,
										}}/>
									<Text
										style={styles.angkringanText}>{strings("Search.angkringanText")}</Text>
								</View>
							</View>
							<View
								style={{
									flex: 1,
								}}/>
							<View
								style={styles.menuAsiaView}>
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
										style={styles.rectangle1FiveView}/>
								</View>
								<View
									pointerEvents="box-none"
									style={{
										position: "absolute",
										left: 13,
										right: 12,
										top: 0,
										bottom: 7,
									}}>
									<Image
										source={require("./../../assets/images/icon-menu-asia-5.png")}
										style={styles.iconMenuAsiaImage}/>
									<View
										style={{
											flex: 1,
										}}/>
									<Text
										style={styles.menuAsiaText}>{strings("Search.menuAsiaText")}</Text>
								</View>
							</View>
						</View>
					</View>
				</ScrollView>
			</View>
	}
}

const styles = StyleSheet.create({
	viewView: {
		backgroundColor: "white",
		flex: 1,
	},
	rectangle5View: {
		backgroundColor: "white",
		borderRadius: 5,
		borderWidth: 1,
		borderColor: "rgb(112, 112, 112)",
		borderStyle: "solid",
		position: "absolute",
		left: 0,
		right: 0,
		top: 0,
		height: 44,
	},
	pinImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 15,
		height: 15,
		marginTop: 2,
	},
	mauMakanApaHariITextInput: {
		color: "rgb(15, 15, 15)",
		fontFamily: "Poppins-Regular",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		padding: 0,
		flex: 1,
		height: 19,
		marginLeft: 14,
	},
	batalText: {
		color: "rgb(243, 113, 33)",
		fontFamily: "Poppins-Bold",
		fontSize: 10,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "left",
		backgroundColor: "transparent",
		flex: 1,
		marginLeft: 18,
		marginTop: 17,
	},
	viewScrollView: {
		backgroundColor: "transparent",
		flex: 1,
		marginRight: 1,
		marginTop: 27,
	},
	likeImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 29,
		height: 29,
		marginTop: 2,
	},
	kamiBantuPilihkanText: {
		color: "rgb(15, 15, 15)",
		fontFamily: "Poppins-Bold",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "left",
		backgroundColor: "transparent",
	},
	lihatSemuaButtonText: {
		color: "rgb(243, 113, 33)",
		fontFamily: "Poppins-Regular",
		fontSize: 9,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
	},
	lihatSemuaButton: {
		backgroundColor: "transparent",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		padding: 0,
		width: 56,
		height: 13,
		marginTop: 11,
	},
	lihatSemuaButtonImage: {
		resizeMode: "contain",
		marginRight: 10,
	},
	liatAjaDuluSiapaText: {
		color: "rgb(9, 9, 9)",
		fontFamily: "Poppins-Regular",
		fontSize: 9,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		alignSelf: "flex-start",
		marginLeft: 2,
	},
	listPalingDekatScrollView: {
		backgroundColor: "transparent",
		height: 212,
		marginLeft: 1,
		marginTop: 17,
	},
	group7View: {
		backgroundColor: "transparent",
		shadowColor: "rgba(0, 0, 0, 0.15)",
		shadowRadius: 5,
		shadowOpacity: 1,
		width: 144,
		height: 198,
	},
	rectangle6View: {
		backgroundColor: "white",
		borderRadius: 5,
		shadowColor: "rgba(0, 0, 0, 0.14)",
		shadowRadius: 5,
		shadowOpacity: 1,
		height: 198,
		marginLeft: 8,
		marginRight: 3,
	},
	imageImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		alignSelf: "stretch",
		width: null,
		height: 125,
	},
	disukaiHaizDan38Text: {
		color: "black",
		fontFamily: "Poppins-Regular",
		fontSize: 7,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		marginLeft: 19,
		marginTop: 5,
	},
	sotoBetawiAnnaText: {
		backgroundColor: "transparent",
		color: "black",
		fontFamily: "Poppins-Regular",
		fontSize: 9,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		marginLeft: 19,
	},
	rp20000Rp23Text: {
		backgroundColor: "transparent",
		color: "black",
		fontFamily: "Poppins-Regular",
		fontSize: 7,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		marginLeft: 19,
		marginBottom: 4,
	},
	kmText: {
		color: "black",
		fontFamily: "Poppins-Regular",
		fontSize: 7,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		marginBottom: 1,
	},
	minText: {
		color: "black",
		fontFamily: "Poppins-Regular",
		fontSize: 7,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		marginLeft: 6,
		marginBottom: 1,
	},
	rectangle8View: {
		backgroundColor: "rgb(36, 181, 70)",
		borderRadius: 5,
		width: 32,
		height: 12,
	},
	bukaText: {
		color: "white",
		fontFamily: "Poppins-Regular",
		fontSize: 7,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		position: "absolute",
		right: 36,
		bottom: 12,
	},
	group16View: {
		backgroundColor: "transparent",
		shadowColor: "rgba(0, 0, 0, 0.15)",
		shadowRadius: 5,
		shadowOpacity: 1,
		width: 144,
		height: 198,
	},
	rectangle6TwoView: {
		backgroundColor: "white",
		borderRadius: 5,
		shadowColor: "rgba(0, 0, 0, 0.14)",
		shadowRadius: 5,
		shadowOpacity: 1,
		height: 198,
		marginLeft: 8,
		marginRight: 3,
	},
	imageTwoImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		alignSelf: "stretch",
		width: null,
		height: 125,
	},
	disukaiHaizDan38TwoText: {
		color: "black",
		fontFamily: "Poppins-Regular",
		fontSize: 7,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		marginLeft: 19,
		marginTop: 5,
	},
	sotoBetawiAnnaTwoText: {
		color: "black",
		fontFamily: "Poppins-Regular",
		fontSize: 9,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		marginLeft: 19,
	},
	rp20000Rp23TwoText: {
		color: "black",
		fontFamily: "Poppins-Regular",
		fontSize: 7,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		marginLeft: 19,
		marginBottom: 4,
	},
	kmTwoText: {
		color: "black",
		fontFamily: "Poppins-Regular",
		fontSize: 7,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		marginBottom: 1,
	},
	minTwoText: {
		color: "black",
		fontFamily: "Poppins-Regular",
		fontSize: 7,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		marginLeft: 6,
		marginBottom: 1,
	},
	rectangle8TwoView: {
		backgroundColor: "rgb(36, 181, 70)",
		borderRadius: 5,
		width: 32,
		height: 12,
	},
	bukaTwoText: {
		backgroundColor: "transparent",
		color: "white",
		fontFamily: "Poppins-Regular",
		fontSize: 7,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		position: "absolute",
		right: 36,
		bottom: 12,
	},
	group17View: {
		backgroundColor: "transparent",
		shadowColor: "rgba(0, 0, 0, 0.15)",
		shadowRadius: 5,
		shadowOpacity: 1,
		width: 144,
		height: 198,
	},
	rectangle6ThreeView: {
		backgroundColor: "white",
		borderRadius: 5,
		shadowColor: "rgba(0, 0, 0, 0.14)",
		shadowRadius: 5,
		shadowOpacity: 1,
		height: 198,
		marginLeft: 8,
		marginRight: 3,
	},
	imageThreeImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		alignSelf: "stretch",
		width: null,
		height: 125,
	},
	disukaiHaizDan38ThreeText: {
		color: "black",
		fontFamily: "Poppins-Regular",
		fontSize: 7,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		marginLeft: 19,
		marginTop: 5,
	},
	sotoBetawiAnnaThreeText: {
		backgroundColor: "transparent",
		color: "black",
		fontFamily: "Poppins-Regular",
		fontSize: 9,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		marginLeft: 19,
	},
	rp20000Rp23ThreeText: {
		backgroundColor: "transparent",
		color: "black",
		fontFamily: "Poppins-Regular",
		fontSize: 7,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		marginLeft: 19,
		marginBottom: 4,
	},
	kmThreeText: {
		color: "black",
		fontFamily: "Poppins-Regular",
		fontSize: 7,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		marginBottom: 1,
	},
	minThreeText: {
		color: "black",
		fontFamily: "Poppins-Regular",
		fontSize: 7,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		marginLeft: 6,
		marginBottom: 1,
	},
	rectangle8ThreeView: {
		backgroundColor: "rgb(36, 181, 70)",
		borderRadius: 5,
		width: 32,
		height: 12,
	},
	bukaThreeText: {
		backgroundColor: "transparent",
		color: "white",
		fontFamily: "Poppins-Regular",
		fontSize: 7,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		position: "absolute",
		right: 36,
		bottom: 12,
	},
	group27View: {
		backgroundColor: "transparent",
		shadowColor: "rgba(0, 0, 0, 0.15)",
		shadowRadius: 5,
		shadowOpacity: 1,
		width: 144,
		height: 198,
		marginRight: 143,
	},
	rectangle6FourView: {
		backgroundColor: "white",
		borderRadius: 5,
		shadowColor: "rgba(0, 0, 0, 0.14)",
		shadowRadius: 5,
		shadowOpacity: 1,
		height: 198,
		marginLeft: 8,
		marginRight: 3,
	},
	imageFourImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		alignSelf: "stretch",
		width: null,
		height: 125,
	},
	disukaiHaizDan38FourText: {
		backgroundColor: "transparent",
		color: "black",
		fontFamily: "Poppins-Regular",
		fontSize: 7,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		marginLeft: 19,
		marginTop: 5,
	},
	sotoBetawiAnnaFourText: {
		backgroundColor: "transparent",
		color: "black",
		fontFamily: "Poppins-Regular",
		fontSize: 9,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		marginLeft: 19,
	},
	rp20000Rp23FourText: {
		backgroundColor: "transparent",
		color: "black",
		fontFamily: "Poppins-Regular",
		fontSize: 7,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		marginLeft: 19,
		marginBottom: 4,
	},
	kmFourText: {
		backgroundColor: "transparent",
		color: "black",
		fontFamily: "Poppins-Regular",
		fontSize: 7,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		marginBottom: 1,
	},
	minFourText: {
		backgroundColor: "transparent",
		color: "black",
		fontFamily: "Poppins-Regular",
		fontSize: 7,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		marginLeft: 6,
		marginBottom: 1,
	},
	rectangle8FourView: {
		backgroundColor: "rgb(36, 181, 70)",
		borderRadius: 5,
		width: 32,
		height: 12,
	},
	bukaFourText: {
		backgroundColor: "transparent",
		color: "white",
		fontFamily: "Poppins-Regular",
		fontSize: 7,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		position: "absolute",
		right: 36,
		bottom: 12,
	},
	group28View: {
		backgroundColor: "transparent",
		shadowColor: "rgba(0, 0, 0, 0.15)",
		shadowRadius: 5,
		shadowOpacity: 1,
		width: 144,
		height: 198,
	},
	rectangle6FiveView: {
		backgroundColor: "white",
		borderRadius: 5,
		shadowColor: "rgba(0, 0, 0, 0.14)",
		shadowRadius: 5,
		shadowOpacity: 1,
		height: 198,
		marginLeft: 8,
		marginRight: 3,
	},
	imageFiveImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		alignSelf: "stretch",
		width: null,
		height: 125,
	},
	disukaiHaizDan38FiveText: {
		backgroundColor: "transparent",
		color: "black",
		fontFamily: "Poppins-Regular",
		fontSize: 7,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		marginLeft: 19,
		marginTop: 5,
	},
	sotoBetawiAnnaFiveText: {
		backgroundColor: "transparent",
		color: "black",
		fontFamily: "Poppins-Regular",
		fontSize: 9,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		marginLeft: 19,
	},
	rp20000Rp23FiveText: {
		backgroundColor: "transparent",
		color: "black",
		fontFamily: "Poppins-Regular",
		fontSize: 7,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		marginLeft: 19,
		marginBottom: 4,
	},
	kmFiveText: {
		backgroundColor: "transparent",
		color: "black",
		fontFamily: "Poppins-Regular",
		fontSize: 7,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		marginBottom: 1,
	},
	minFiveText: {
		backgroundColor: "transparent",
		color: "black",
		fontFamily: "Poppins-Regular",
		fontSize: 7,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		marginLeft: 6,
		marginBottom: 1,
	},
	rectangle8FiveView: {
		backgroundColor: "rgb(36, 181, 70)",
		borderRadius: 5,
		width: 32,
		height: 12,
	},
	bukaFiveText: {
		color: "white",
		fontFamily: "Poppins-Regular",
		fontSize: 7,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		position: "absolute",
		right: 36,
		bottom: 12,
	},
	line6View: {
		backgroundColor: "rgb(210, 210, 210)",
		height: 1,
		marginLeft: 25,
		marginRight: 22,
		marginTop: 14,
	},
	yangSeringDicariText: {
		color: "rgb(15, 15, 15)",
		fontFamily: "Poppins-Bold",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "left",
		backgroundColor: "transparent",
		alignSelf: "flex-start",
		marginLeft: 25,
		marginTop: 20,
	},
	palingSeringDicariView: {
		backgroundColor: "transparent",
		height: 83,
		marginLeft: 26,
		marginRight: 22,
		marginTop: 17,
		flexDirection: "row",
		alignItems: "flex-start",
	},
	mieAyamButton: {
		backgroundColor: "white",
		borderRadius: 5,
		borderWidth: 1,
		borderColor: "rgb(207, 207, 207)",
		borderStyle: "solid",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		padding: 0,
		width: 102,
		height: 36,
	},
	mieAyamButtonImage: {
		resizeMode: "contain",
		marginRight: 10,
	},
	mieAyamButtonText: {
		color: "rgb(243, 113, 33)",
		fontFamily: "Poppins-Regular",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
	},
	seafoodButton: {
		backgroundColor: "white",
		borderRadius: 5,
		borderWidth: 1,
		borderColor: "rgb(207, 207, 207)",
		borderStyle: "solid",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		padding: 0,
		width: 102,
		height: 36,
		marginTop: 11,
	},
	seafoodButtonImage: {
		resizeMode: "contain",
		marginRight: 10,
	},
	seafoodButtonText: {
		color: "rgb(243, 113, 33)",
		fontFamily: "Poppins-Regular",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
	},
	capcayButtonText: {
		color: "rgb(243, 113, 33)",
		fontFamily: "Poppins-Regular",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
	},
	capcayButtonImage: {
		resizeMode: "contain",
		marginRight: 10,
	},
	capcayButton: {
		backgroundColor: "white",
		borderRadius: 5,
		borderWidth: 1,
		borderColor: "rgb(207, 207, 207)",
		borderStyle: "solid",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		padding: 0,
		width: 102,
		height: 36,
	},
	ikanBakarButton: {
		backgroundColor: "white",
		borderRadius: 5,
		borderWidth: 1,
		borderColor: "rgb(207, 207, 207)",
		borderStyle: "solid",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		padding: 0,
		width: 102,
		height: 36,
		marginTop: 11,
	},
	ikanBakarButtonImage: {
		resizeMode: "contain",
		marginRight: 10,
	},
	ikanBakarButtonText: {
		color: "rgb(243, 113, 33)",
		fontFamily: "Poppins-Regular",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
	},
	nasiGorengButton: {
		backgroundColor: "white",
		borderRadius: 5,
		borderWidth: 1,
		borderColor: "rgb(207, 207, 207)",
		borderStyle: "solid",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		padding: 0,
		width: 102,
		height: 36,
	},
	nasiGorengButtonText: {
		color: "rgb(243, 113, 33)",
		fontFamily: "Poppins-Regular",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
	},
	nasiGorengButtonImage: {
		resizeMode: "contain",
		marginRight: 10,
	},
	sateButtonText: {
		color: "rgb(243, 113, 33)",
		fontFamily: "Poppins-Regular",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
	},
	sateButtonImage: {
		resizeMode: "contain",
		marginRight: 10,
	},
	sateButton: {
		backgroundColor: "white",
		borderRadius: 5,
		borderWidth: 1,
		borderColor: "rgb(207, 207, 207)",
		borderStyle: "solid",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		padding: 0,
		width: 102,
		height: 36,
		marginTop: 11,
	},
	line8View: {
		backgroundColor: "rgb(210, 210, 210)",
		height: 1,
		marginLeft: 25,
		marginRight: 22,
		marginTop: 28,
	},
	pilihDariKategoriText: {
		color: "rgb(15, 15, 15)",
		fontFamily: "Poppins-Bold",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "left",
		backgroundColor: "transparent",
		alignSelf: "flex-start",
		marginLeft: 25,
		marginTop: 20,
	},
	kategoriView: {
		backgroundColor: "transparent",
		height: 444,
		marginLeft: 26,
		marginRight: 19,
		marginTop: 21,
	},
	ayamBebekView: {
		backgroundColor: "transparent",
		shadowColor: "rgba(0, 0, 0, 0.15)",
		shadowRadius: 5,
		shadowOpacity: 1,
		width: 102,
		height: 105,
	},
	rectangle1View: {
		backgroundColor: "white",
		borderRadius: 5,
		shadowColor: "rgba(0, 0, 0, 0.16)",
		shadowRadius: 6,
		shadowOpacity: 1,
		height: 102,
	},
	iconAyamBebekImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		shadowColor: "rgba(0, 0, 0, 0.16)",
		shadowRadius: 6,
		shadowOpacity: 1,
		width: null,
		height: 77,
	},
	ayamBebekText: {
		backgroundColor: "transparent",
		color: "rgb(19, 19, 19)",
		fontFamily: "Poppins-Regular",
		fontSize: 10,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		marginLeft: 1,
		marginRight: 1,
	},
	mieBaksoView: {
		backgroundColor: "transparent",
		shadowColor: "rgba(0, 0, 0, 0.15)",
		shadowRadius: 5,
		shadowOpacity: 1,
		width: 102,
		height: 102,
		marginTop: 1,
	},
	rectangle6SixView: {
		backgroundColor: "white",
		borderRadius: 5,
		shadowColor: "rgba(0, 0, 0, 0.16)",
		shadowRadius: 6,
		shadowOpacity: 1,
		height: 102,
	},
	iconMieBasoImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		shadowColor: "rgba(0, 0, 0, 0.16)",
		shadowRadius: 6,
		shadowOpacity: 1,
		width: null,
		height: 77,
	},
	mieBaksoText: {
		backgroundColor: "transparent",
		color: "rgb(19, 19, 19)",
		fontFamily: "Poppins-Regular",
		fontSize: 10,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		alignSelf: "center",
	},
	ikanDanSeafoodView: {
		backgroundColor: "transparent",
		shadowColor: "rgba(0, 0, 0, 0.15)",
		shadowRadius: 5,
		shadowOpacity: 1,
		width: 102,
		height: 105,
		marginTop: 2,
	},
	rectangle4View: {
		backgroundColor: "white",
		borderRadius: 5,
		shadowColor: "rgba(0, 0, 0, 0.16)",
		shadowRadius: 6,
		shadowOpacity: 1,
		height: 102,
	},
	iconIkanSeafoodImage: {
		backgroundColor: "transparent",
		shadowColor: "rgba(0, 0, 0, 0.16)",
		shadowRadius: 6,
		shadowOpacity: 1,
		resizeMode: "center",
		width: null,
		height: 77,
	},
	ikanSeafoodText: {
		backgroundColor: "transparent",
		color: "rgb(19, 19, 19)",
		fontFamily: "Poppins-Regular",
		fontSize: 10,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
	},
	menuRumahanView: {
		backgroundColor: "transparent",
		shadowColor: "rgba(0, 0, 0, 0.15)",
		shadowRadius: 5,
		shadowOpacity: 1,
		width: 102,
		height: 105,
	},
	rectangle6SevenView: {
		backgroundColor: "white",
		borderRadius: 5,
		shadowColor: "rgba(0, 0, 0, 0.16)",
		shadowRadius: 6,
		shadowOpacity: 1,
		height: 102,
	},
	iconMenuRumahanImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		shadowColor: "rgba(0, 0, 0, 0.16)",
		shadowRadius: 6,
		shadowOpacity: 1,
		width: null,
		height: 77,
		marginLeft: 2,
		marginRight: 2,
	},
	menuRumahanText: {
		backgroundColor: "transparent",
		color: "rgb(19, 19, 19)",
		fontFamily: "Poppins-Regular",
		fontSize: 10,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
	},
	ragamSotoView: {
		backgroundColor: "transparent",
		shadowColor: "rgba(0, 0, 0, 0.16)",
		shadowRadius: 6,
		shadowOpacity: 1,
		width: 102,
		height: 102,
	},
	rectangle4TwoView: {
		backgroundColor: "white",
		borderRadius: 5,
		shadowColor: "rgba(0, 0, 0, 0.16)",
		shadowRadius: 6,
		shadowOpacity: 1,
		height: 102,
	},
	iconRagamSotoImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		shadowColor: "rgba(0, 0, 0, 0.16)",
		shadowRadius: 6,
		shadowOpacity: 1,
		width: null,
		height: 77,
	},
	ragamSotoText: {
		backgroundColor: "transparent",
		color: "rgb(19, 19, 19)",
		fontFamily: "Poppins-Regular",
		fontSize: 10,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		marginLeft: 7,
		marginRight: 7,
	},
	buburAyamView: {
		backgroundColor: "transparent",
		shadowColor: "rgba(0, 0, 0, 0.16)",
		shadowRadius: 6,
		shadowOpacity: 1,
		width: 102,
		height: 102,
	},
	rectangle6EightView: {
		backgroundColor: "white",
		borderRadius: 5,
		shadowColor: "rgba(0, 0, 0, 0.16)",
		shadowRadius: 6,
		shadowOpacity: 1,
		height: 102,
	},
	iconBuburAyamImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		shadowColor: "rgba(0, 0, 0, 0.16)",
		shadowRadius: 6,
		shadowOpacity: 1,
		width: null,
		height: 77,
	},
	buburAyamText: {
		color: "rgb(19, 19, 19)",
		fontFamily: "Poppins-Regular",
		fontSize: 10,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		backgroundColor: "transparent",
		marginLeft: 7,
		marginRight: 7,
	},
	tradisionalView: {
		backgroundColor: "transparent",
		shadowColor: "rgba(0, 0, 0, 0.16)",
		shadowRadius: 6,
		shadowOpacity: 1,
		width: 102,
		height: 102,
	},
	rectangle4ThreeView: {
		backgroundColor: "white",
		borderRadius: 5,
		shadowColor: "rgba(0, 0, 0, 0.16)",
		shadowRadius: 6,
		shadowOpacity: 1,
		height: 102,
	},
	iconTradisionalImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		shadowColor: "rgba(0, 0, 0, 0.16)",
		shadowRadius: 6,
		shadowOpacity: 1,
		alignSelf: "stretch",
		width: null,
		height: 77,
	},
	tradisionalText: {
		color: "rgb(19, 19, 19)",
		fontFamily: "Poppins-Regular",
		fontSize: 10,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		backgroundColor: "transparent",
	},
	jajananView: {
		backgroundColor: "transparent",
		shadowColor: "rgba(0, 0, 0, 0.16)",
		shadowRadius: 6,
		shadowOpacity: 1,
		width: 102,
		height: 102,
	},
	rectangle6NineView: {
		backgroundColor: "white",
		borderRadius: 5,
		shadowColor: "rgba(0, 0, 0, 0.16)",
		shadowRadius: 6,
		shadowOpacity: 1,
		height: 102,
	},
	iconJajananImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		shadowColor: "rgba(0, 0, 0, 0.16)",
		shadowRadius: 6,
		shadowOpacity: 1,
		alignSelf: "stretch",
		width: null,
		height: 77,
	},
	jajananText: {
		backgroundColor: "transparent",
		color: "rgb(19, 19, 19)",
		fontFamily: "Poppins-Regular",
		fontSize: 10,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
	},
	sateDanDagingView: {
		backgroundColor: "transparent",
		shadowColor: "rgba(0, 0, 0, 0.15)",
		shadowRadius: 5,
		shadowOpacity: 1,
		width: 102,
		height: 102,
	},
	rectangle1TwoView: {
		backgroundColor: "white",
		borderRadius: 5,
		shadowColor: "rgba(0, 0, 0, 0.16)",
		shadowRadius: 6,
		shadowOpacity: 1,
		height: 102,
	},
	iconSateDagingImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		shadowColor: "rgba(0, 0, 0, 0.16)",
		shadowRadius: 6,
		shadowOpacity: 1,
		width: null,
		height: 77,
	},
	sateDagingText: {
		backgroundColor: "transparent",
		color: "rgb(19, 19, 19)",
		fontFamily: "Poppins-Regular",
		fontSize: 10,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		marginLeft: 2,
		marginRight: 2,
	},
	anekaNasiView: {
		backgroundColor: "transparent",
		shadowColor: "rgba(0, 0, 0, 0.16)",
		shadowRadius: 6,
		shadowOpacity: 1,
		width: 102,
		height: 102,
		marginTop: 10,
	},
	rectangle1ThreeView: {
		backgroundColor: "white",
		borderRadius: 5,
		shadowColor: "rgba(0, 0, 0, 0.16)",
		shadowRadius: 6,
		shadowOpacity: 1,
		height: 102,
	},
	iconAnekaNasiImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		shadowColor: "rgba(0, 0, 0, 0.16)",
		shadowRadius: 6,
		shadowOpacity: 1,
		alignSelf: "stretch",
		width: null,
		height: 77,
	},
	anekaNasiText: {
		backgroundColor: "transparent",
		color: "rgb(19, 19, 19)",
		fontFamily: "Poppins-Regular",
		fontSize: 10,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
	},
	angkringanView: {
		backgroundColor: "transparent",
		shadowColor: "rgba(0, 0, 0, 0.16)",
		shadowRadius: 6,
		shadowOpacity: 1,
		width: 102,
		height: 102,
		marginTop: 14,
	},
	rectangle1FourView: {
		backgroundColor: "white",
		borderRadius: 5,
		shadowColor: "rgba(0, 0, 0, 0.16)",
		shadowRadius: 6,
		shadowOpacity: 1,
		height: 102,
	},
	iconAngkringanImage: {
		backgroundColor: "transparent",
		shadowColor: "rgba(0, 0, 0, 0.16)",
		shadowRadius: 6,
		shadowOpacity: 1,
		resizeMode: "center",
		width: null,
		height: 77,
	},
	angkringanText: {
		backgroundColor: "transparent",
		color: "rgb(19, 19, 19)",
		fontFamily: "Poppins-Regular",
		fontSize: 10,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		alignSelf: "center",
	},
	menuAsiaView: {
		backgroundColor: "transparent",
		shadowColor: "rgba(0, 0, 0, 0.16)",
		shadowRadius: 6,
		shadowOpacity: 1,
		width: 102,
		height: 102,
	},
	rectangle1FiveView: {
		backgroundColor: "white",
		borderRadius: 5,
		shadowColor: "rgba(0, 0, 0, 0.16)",
		shadowRadius: 6,
		shadowOpacity: 1,
		height: 102,
		marginRight: 1,
	},
	iconMenuAsiaImage: {
		backgroundColor: "transparent",
		shadowColor: "rgba(0, 0, 0, 0.16)",
		shadowRadius: 6,
		shadowOpacity: 1,
		resizeMode: "center",
		width: null,
		height: 77,
	},
	menuAsiaText: {
		backgroundColor: "transparent",
		color: "rgb(19, 19, 19)",
		fontFamily: "Poppins-Regular",
		fontSize: 10,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		alignSelf: "center",
	},
})

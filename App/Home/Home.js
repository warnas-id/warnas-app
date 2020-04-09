//
//  Home
//  warnasmobile
//
//  Created by Supernova.
//  Copyright © 2018 Supernova. All rights reserved.
//

import React from "react"
import { strings } from "./../Locales/i18n"
import { Image, ScrollView, StyleSheet, Text, TextInput, View } from "react-native"


export default class Home extends React.Component {

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
				<ScrollView
					style={styles.viewScrollView}>
					<Image
						source={require("./../../assets/images/background-3.png")}
						style={styles.backgroundImage}/>
					<Image
						source={require("./../../assets/images/page-progress.png")}
						style={styles.pageProgressImage}/>
					<View
						style={styles.pointView}>
						<View
							pointerEvents="box-none"
							style={{
								position: "absolute",
								left: 0,
								right: 0,
								top: 0,
								height: 44,
							}}>
							<View
								style={styles.backgroundView}/>
							<View
								pointerEvents="box-none"
								style={{
									position: "absolute",
									left: 64,
									right: 43,
									top: 15,
									height: 19,
									flexDirection: "row",
									alignItems: "flex-start",
								}}>
								<Text
									style={styles.textText}>{strings("Home.textText")}</Text>
								<View
									style={{
										flex: 1,
									}}/>
								<Text
									style={styles.tukarPoinText}>{strings("Home.tukarPoinText")}</Text>
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
								style={styles.line22View}/>
						</View>
					</View>
					<View
						style={styles.titeDekatView}>
						<View
							pointerEvents="box-none"
							style={{
								flex: 1,
								marginRight: 56,
							}}>
							<Text
								style={styles.cariYangPalingDekText}>{strings("Home.cariYangPalingDekText")}</Text>
							<Text
								style={styles.kamiUdahSediainLoText}>{strings("Home.kamiUdahSediainLoText")}</Text>
						</View>
						<Text
							style={styles.lihatSemuaText}>{strings("Home.lihatSemuaText")}</Text>
					</View>
					<View
						style={{
							flex: 1,
						}}/>
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
										style={styles.disukaiHaizDan38Text}>{strings("Home.disukaiHaizDan38Text")}</Text>
									<Text
										style={styles.sotoBetawiAnnaText}>{strings("Home.sotoBetawiAnnaText")}</Text>
									<View
										style={{
											flex: 1,
										}}/>
									<Text
										style={styles.rp20000Rp23Text}>{strings("Home.rp20000Rp23Text")}</Text>
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
											style={styles.kmText}>{strings("Home.kmText")}</Text>
										<Text
											style={styles.minText}>{strings("Home.minText")}</Text>
										<View
											style={{
												flex: 1,
											}}/>
										<View
											style={styles.rectangle8View}/>
									</View>
								</View>
								<Text
									style={styles.bukaText}>{strings("Home.bukaText")}</Text>
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
										style={styles.disukaiHaizDan38TwoText}>{strings("Home.disukaiHaizDan38TwoText")}</Text>
									<Text
										style={styles.sotoBetawiAnnaTwoText}>{strings("Home.sotoBetawiAnnaTwoText")}</Text>
									<View
										style={{
											flex: 1,
										}}/>
									<Text
										style={styles.rp20000Rp23TwoText}>{strings("Home.rp20000Rp23TwoText")}</Text>
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
											style={styles.kmTwoText}>{strings("Home.kmTwoText")}</Text>
										<Text
											style={styles.minTwoText}>{strings("Home.minTwoText")}</Text>
										<View
											style={{
												flex: 1,
											}}/>
										<View
											style={styles.rectangle8TwoView}/>
									</View>
								</View>
								<Text
									style={styles.bukaTwoText}>{strings("Home.bukaTwoText")}</Text>
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
										style={styles.disukaiHaizDan38ThreeText}>{strings("Home.disukaiHaizDan38ThreeText")}</Text>
									<Text
										style={styles.sotoBetawiAnnaThreeText}>{strings("Home.sotoBetawiAnnaThreeText")}</Text>
									<View
										style={{
											flex: 1,
										}}/>
									<Text
										style={styles.rp20000Rp23ThreeText}>{strings("Home.rp20000Rp23ThreeText")}</Text>
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
											style={styles.kmThreeText}>{strings("Home.kmThreeText")}</Text>
										<Text
											style={styles.minThreeText}>{strings("Home.minThreeText")}</Text>
										<View
											style={{
												flex: 1,
											}}/>
										<View
											style={styles.rectangle8ThreeView}/>
									</View>
								</View>
								<Text
									style={styles.bukaThreeText}>{strings("Home.bukaThreeText")}</Text>
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
										style={styles.disukaiHaizDan38FourText}>{strings("Home.disukaiHaizDan38FourText")}</Text>
									<Text
										style={styles.sotoBetawiAnnaFourText}>{strings("Home.sotoBetawiAnnaFourText")}</Text>
									<View
										style={{
											flex: 1,
										}}/>
									<Text
										style={styles.rp20000Rp23FourText}>{strings("Home.rp20000Rp23FourText")}</Text>
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
											style={styles.kmFourText}>{strings("Home.kmFourText")}</Text>
										<Text
											style={styles.minFourText}>{strings("Home.minFourText")}</Text>
										<View
											style={{
												flex: 1,
											}}/>
										<View
											style={styles.rectangle8FourView}/>
									</View>
								</View>
								<Text
									style={styles.bukaFourText}>{strings("Home.bukaFourText")}</Text>
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
										style={styles.disukaiHaizDan38FiveText}>{strings("Home.disukaiHaizDan38FiveText")}</Text>
									<Text
										style={styles.sotoBetawiAnnaFiveText}>{strings("Home.sotoBetawiAnnaFiveText")}</Text>
									<View
										style={{
											flex: 1,
										}}/>
									<Text
										style={styles.rp20000Rp23FiveText}>{strings("Home.rp20000Rp23FiveText")}</Text>
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
											style={styles.kmFiveText}>{strings("Home.kmFiveText")}</Text>
										<Text
											style={styles.minFiveText}>{strings("Home.minFiveText")}</Text>
										<View
											style={{
												flex: 1,
											}}/>
										<View
											style={styles.rectangle8FiveView}/>
									</View>
								</View>
								<Text
									style={styles.bukaFiveText}>{strings("Home.bukaFiveText")}</Text>
							</View>
						</View>
					</ScrollView>
					<View
						style={styles.lineTerdekatView}/>
					<View
						style={styles.titlePopulerView}>
						<View
							pointerEvents="box-none"
							style={{
								alignSelf: "stretch",
								width: 157,
							}}>
							<Text
								style={styles.yangLagiPopulerText}>{strings("Home.yangLagiPopulerText")}</Text>
							<Text
								style={styles.kamiUdahSediainLoTwoText}>{strings("Home.kamiUdahSediainLoTwoText")}</Text>
						</View>
						<View
							style={{
								flex: 1,
							}}/>
						<Text
							style={styles.lihatSemuaTwoText}>{strings("Home.lihatSemuaTwoText")}</Text>
					</View>
					<ScrollView
						horizontal={true}
						style={styles.listPopulerScrollView}>
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
								style={styles.group7TwoView}>
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
										left: 0,
										right: 0,
										top: 0,
										bottom: 11,
										alignItems: "flex-start",
									}}>
									<Image
										source={require("./../../assets/images/image-4.png")}
										style={styles.imageSixImage}/>
									<Text
										style={styles.disukaiHaizDan38SixText}>{strings("Home.disukaiHaizDan38SixText")}</Text>
									<Text
										style={styles.sotoBetawiAnnaSixText}>{strings("Home.sotoBetawiAnnaSixText")}</Text>
									<View
										style={{
											flex: 1,
										}}/>
									<Text
										style={styles.rp20000Rp23SixText}>{strings("Home.rp20000Rp23SixText")}</Text>
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
											style={styles.kmSixText}>{strings("Home.kmSixText")}</Text>
										<Text
											style={styles.minSixText}>{strings("Home.minSixText")}</Text>
										<View
											style={{
												flex: 1,
											}}/>
										<View
											style={styles.rectangle8SixView}/>
									</View>
								</View>
								<Text
									style={styles.bukaSixText}>{strings("Home.bukaSixText")}</Text>
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
								style={styles.group16TwoView}>
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
										left: 0,
										right: 0,
										top: 0,
										bottom: 11,
										alignItems: "flex-start",
									}}>
									<Image
										source={require("./../../assets/images/image-4.png")}
										style={styles.imageSevenImage}/>
									<Text
										style={styles.disukaiHaizDan38SevenText}>{strings("Home.disukaiHaizDan38SevenText")}</Text>
									<Text
										style={styles.sotoBetawiAnnaSevenText}>{strings("Home.sotoBetawiAnnaSevenText")}</Text>
									<View
										style={{
											flex: 1,
										}}/>
									<Text
										style={styles.rp20000Rp23SevenText}>{strings("Home.rp20000Rp23SevenText")}</Text>
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
											style={styles.kmSevenText}>{strings("Home.kmSevenText")}</Text>
										<Text
											style={styles.minSevenText}>{strings("Home.minSevenText")}</Text>
										<View
											style={{
												flex: 1,
											}}/>
										<View
											style={styles.rectangle8SevenView}/>
									</View>
								</View>
								<Text
									style={styles.bukaSevenText}>{strings("Home.bukaSevenText")}</Text>
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
								style={styles.group17TwoView}>
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
										left: 0,
										right: 0,
										top: 0,
										bottom: 11,
										alignItems: "flex-start",
									}}>
									<Image
										source={require("./../../assets/images/image-4.png")}
										style={styles.imageEightImage}/>
									<Text
										style={styles.disukaiHaizDan38EightText}>{strings("Home.disukaiHaizDan38EightText")}</Text>
									<Text
										style={styles.sotoBetawiAnnaEightText}>{strings("Home.sotoBetawiAnnaEightText")}</Text>
									<View
										style={{
											flex: 1,
										}}/>
									<Text
										style={styles.rp20000Rp23EightText}>{strings("Home.rp20000Rp23EightText")}</Text>
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
											style={styles.kmEightText}>{strings("Home.kmEightText")}</Text>
										<Text
											style={styles.minEightText}>{strings("Home.minEightText")}</Text>
										<View
											style={{
												flex: 1,
											}}/>
										<View
											style={styles.rectangle8EightView}/>
									</View>
								</View>
								<Text
									style={styles.bukaEightText}>{strings("Home.bukaEightText")}</Text>
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
								style={styles.group27TwoView}>
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
										left: 0,
										right: 0,
										top: 0,
										bottom: 11,
										alignItems: "flex-start",
									}}>
									<Image
										source={require("./../../assets/images/image-4.png")}
										style={styles.imageNineImage}/>
									<Text
										style={styles.disukaiHaizDan38NineText}>{strings("Home.disukaiHaizDan38NineText")}</Text>
									<Text
										style={styles.sotoBetawiAnnaNineText}>{strings("Home.sotoBetawiAnnaNineText")}</Text>
									<View
										style={{
											flex: 1,
										}}/>
									<Text
										style={styles.rp20000Rp23NineText}>{strings("Home.rp20000Rp23NineText")}</Text>
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
											style={styles.kmNineText}>{strings("Home.kmNineText")}</Text>
										<Text
											style={styles.minNineText}>{strings("Home.minNineText")}</Text>
										<View
											style={{
												flex: 1,
											}}/>
										<View
											style={styles.rectangle8NineView}/>
									</View>
								</View>
								<Text
									style={styles.bukaNineText}>{strings("Home.bukaNineText")}</Text>
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
								style={styles.group28TwoView}>
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
										style={styles.rectangle6TenView}/>
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
										style={styles.imageTenImage}/>
									<Text
										style={styles.disukaiHaizDan38TenText}>{strings("Home.disukaiHaizDan38TenText")}</Text>
									<Text
										style={styles.sotoBetawiAnnaTenText}>{strings("Home.sotoBetawiAnnaTenText")}</Text>
									<View
										style={{
											flex: 1,
										}}/>
									<Text
										style={styles.rp20000Rp23TenText}>{strings("Home.rp20000Rp23TenText")}</Text>
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
											style={styles.kmTenText}>{strings("Home.kmTenText")}</Text>
										<Text
											style={styles.minTenText}>{strings("Home.minTenText")}</Text>
										<View
											style={{
												flex: 1,
											}}/>
										<View
											style={styles.rectangle8TenView}/>
									</View>
								</View>
								<Text
									style={styles.bukaTenText}>{strings("Home.bukaTenText")}</Text>
							</View>
						</View>
					</ScrollView>
					<View
						style={styles.linePopulerView}/>
					<View
						style={styles.titleTrendingView}>
						<View
							pointerEvents="box-none"
							style={{
								alignSelf: "stretch",
								width: 190,
							}}>
							<Text
								style={styles.banyakYangLagiTreText}>{strings("Home.banyakYangLagiTreText")}</Text>
							<Text
								style={styles.cobainDehRekomendaText}>{strings("Home.cobainDehRekomendaText")}</Text>
						</View>
						<View
							style={{
								flex: 1,
							}}/>
						<Text
							style={styles.lihatSemuaThreeText}>{strings("Home.lihatSemuaThreeText")}</Text>
					</View>
					<View
						style={styles.viewTwoView}>
						<View
							style={styles.rectangle19View}/>
						<View
							pointerEvents="box-none"
							style={{
								position: "absolute",
								left: 0,
								width: 245,
								top: 0,
								height: 102,
								flexDirection: "row",
								alignItems: "center",
							}}>
							<Image
								source={require("./../../assets/images/mask-group-2-3.png")}
								style={styles.maskGroup2Image}/>
							<View
								pointerEvents="box-none"
								style={{
									alignSelf: "flex-start",
									width: 131,
									height: 71,
									marginLeft: 12,
									marginTop: 11,
									alignItems: "flex-start",
								}}>
								<Text
									style={styles.disukaiHaizDan38ElevenText}>{strings("Home.disukaiHaizDan38ElevenText")}</Text>
								<Text
									style={styles.sotoBetawiAnnaElevenText}>{strings("Home.sotoBetawiAnnaElevenText")}</Text>
								<Text
									style={styles.rp20000Rp23ElevenText}>{strings("Home.rp20000Rp23ElevenText")}</Text>
								<View
									pointerEvents="box-none"
									style={{
										width: 131,
										height: 18,
										marginTop: 3,
										flexDirection: "row",
										alignItems: "flex-start",
									}}>
									<Text
										style={styles.kmElevenText}>{strings("Home.kmElevenText")}</Text>
									<Text
										style={styles.minElevenText}>{strings("Home.minElevenText")}</Text>
									<View
										style={styles.rectangle10View}/>
								</View>
							</View>
						</View>
						<Text
							style={styles.tutupText}>{strings("Home.tutupText")}</Text>
					</View>
					<View
						style={styles.viewThreeView}>
						<View
							style={styles.rectangle19TwoView}/>
						<View
							pointerEvents="box-none"
							style={{
								position: "absolute",
								left: 0,
								width: 245,
								top: 0,
								height: 102,
								flexDirection: "row",
								alignItems: "center",
							}}>
							<Image
								source={require("./../../assets/images/mask-group-2-3.png")}
								style={styles.maskGroup2TwoImage}/>
							<View
								pointerEvents="box-none"
								style={{
									alignSelf: "flex-start",
									width: 131,
									height: 71,
									marginLeft: 12,
									marginTop: 11,
									alignItems: "flex-start",
								}}>
								<Text
									style={styles.disukaiHaizDan38TwelveText}>{strings("Home.disukaiHaizDan38TwelveText")}</Text>
								<Text
									style={styles.sotoBetawiAnnaTwelveText}>{strings("Home.sotoBetawiAnnaTwelveText")}</Text>
								<Text
									style={styles.rp20000Rp23TwelveText}>{strings("Home.rp20000Rp23TwelveText")}</Text>
								<View
									pointerEvents="box-none"
									style={{
										width: 131,
										height: 18,
										marginTop: 3,
										flexDirection: "row",
										alignItems: "flex-start",
									}}>
									<Text
										style={styles.kmTwelveText}>{strings("Home.kmTwelveText")}</Text>
									<Text
										style={styles.minTwelveText}>{strings("Home.minTwelveText")}</Text>
									<View
										style={styles.rectangle10TwoView}/>
								</View>
							</View>
						</View>
						<Text
							style={styles.tutupTwoText}>{strings("Home.tutupTwoText")}</Text>
					</View>
					<View
						style={styles.viewFourView}>
						<View
							style={styles.rectangle19ThreeView}/>
						<View
							pointerEvents="box-none"
							style={{
								position: "absolute",
								left: 0,
								width: 245,
								top: 0,
								height: 102,
								flexDirection: "row",
								alignItems: "center",
							}}>
							<Image
								source={require("./../../assets/images/mask-group-2-3.png")}
								style={styles.maskGroup2ThreeImage}/>
							<View
								pointerEvents="box-none"
								style={{
									alignSelf: "flex-start",
									width: 131,
									height: 71,
									marginLeft: 12,
									marginTop: 11,
									alignItems: "flex-start",
								}}>
								<Text
									style={styles.disukaiHaizDan38ThirteenText}>{strings("Home.disukaiHaizDan38ThirteenText")}</Text>
								<Text
									style={styles.sotoBetawiAnnaThirteenText}>{strings("Home.sotoBetawiAnnaThirteenText")}</Text>
								<Text
									style={styles.rp20000Rp23ThirteenText}>{strings("Home.rp20000Rp23ThirteenText")}</Text>
								<View
									pointerEvents="box-none"
									style={{
										width: 131,
										height: 18,
										marginTop: 3,
										flexDirection: "row",
										alignItems: "flex-start",
									}}>
									<Text
										style={styles.kmThirteenText}>{strings("Home.kmThirteenText")}</Text>
									<Text
										style={styles.minThirteenText}>{strings("Home.minThirteenText")}</Text>
									<View
										style={styles.rectangle10ThreeView}/>
								</View>
							</View>
						</View>
						<Text
							style={styles.tutupThreeText}>{strings("Home.tutupThreeText")}</Text>
					</View>
					<View
						style={styles.viewFiveView}>
						<View
							style={styles.rectangle19FourView}/>
						<View
							pointerEvents="box-none"
							style={{
								position: "absolute",
								left: 0,
								width: 245,
								top: 0,
								height: 102,
								flexDirection: "row",
								alignItems: "center",
							}}>
							<Image
								source={require("./../../assets/images/mask-group-2-3.png")}
								style={styles.maskGroup2FourImage}/>
							<View
								pointerEvents="box-none"
								style={{
									alignSelf: "flex-start",
									width: 131,
									height: 71,
									marginLeft: 12,
									marginTop: 11,
									alignItems: "flex-start",
								}}>
								<Text
									style={styles.disukaiHaizDan38FourteenText}>{strings("Home.disukaiHaizDan38FourteenText")}</Text>
								<Text
									style={styles.sotoBetawiAnnaFourteenText}>{strings("Home.sotoBetawiAnnaFourteenText")}</Text>
								<Text
									style={styles.rp20000Rp23FourteenText}>{strings("Home.rp20000Rp23FourteenText")}</Text>
								<View
									pointerEvents="box-none"
									style={{
										width: 131,
										height: 18,
										marginTop: 3,
										flexDirection: "row",
										alignItems: "flex-start",
									}}>
									<Text
										style={styles.kmFourteenText}>{strings("Home.kmFourteenText")}</Text>
									<Text
										style={styles.minFourteenText}>{strings("Home.minFourteenText")}</Text>
									<View
										style={styles.rectangle10FourView}/>
								</View>
							</View>
						</View>
						<Text
							style={styles.tutupFourText}>{strings("Home.tutupFourText")}</Text>
					</View>
				</ScrollView>
				<View
					pointerEvents="box-none"
					style={{
						position: "absolute",
						left: 24,
						right: 24,
						top: 27,
						height: 84,
					}}>
					<View
						style={styles.titleView}>
						<Image
							source={require("./../../assets/images/pin-1-3.png")}
							style={styles.pin1Image}/>
						<View
							pointerEvents="box-none"
							style={{
								width: 159,
								height: 30,
								marginLeft: 9,
							}}>
							<Text
								style={styles.jalanREdangSoewaText}>{strings("Home.jalanREdangSoewaText")}</Text>
							<Text
								style={styles.lokasiKamuText}>{strings("Home.lokasiKamuText")}</Text>
						</View>
						<View
							style={{
								flex: 1,
							}}/>
						<Image
							source={require("./../../assets/images/notification-3.png")}
							style={styles.notificationImage}/>
					</View>
					<View
						style={styles.typeEntryView}>
						<Image
							source={require("./../../assets/images/pin-17.png")}
							style={styles.pinImage}/>
						<TextInput
							autoCorrect={false}
							placeholder="Pengen makan apa, Munawir?"
							style={styles.mauMakanApaHariITextInput}/>
					</View>
				</View>
			</View>
	}
}

const styles = StyleSheet.create({
	viewView: {
		backgroundColor: "white",
		flex: 1,
	},
	viewScrollView: {
		backgroundColor: "transparent",
		position: "absolute",
		left: 0,
		right: 0,
		top: 0,
		bottom: 3,
	},
	backgroundImage: {
		backgroundColor: "transparent",
		resizeMode: "cover",
		width: null,
		height: 275,
	},
	pageProgressImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		alignSelf: "flex-start",
		width: 29,
		height: 5,
		marginLeft: 24,
		marginTop: 7,
	},
	pointView: {
		backgroundColor: "white",
		shadowColor: "rgba(0, 0, 0, 0.15)",
		shadowRadius: 5,
		shadowOpacity: 1,
		alignSelf: "center",
		width: 326,
		height: 44,
		marginTop: 17,
	},
	backgroundView: {
		backgroundColor: "white",
		borderRadius: 5,
		position: "absolute",
		left: 0,
		width: 326,
		top: 0,
		height: 44,
	},
	textText: {
		backgroundColor: "transparent",
		color: "rgb(243, 113, 33)",
		fontFamily: "Poppins-Regular",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
	},
	tukarPoinText: {
		backgroundColor: "transparent",
		color: "rgb(15, 15, 15)",
		fontFamily: "Poppins-Regular",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
	},
	line22View: {
		backgroundColor: "rgb(236, 236, 236)",
		width: 1,
		height: 32,
	},
	titeDekatView: {
		backgroundColor: "transparent",
		height: 31,
		marginLeft: 25,
		marginRight: 22,
		marginTop: 27,
		flexDirection: "row",
	},
	cariYangPalingDekText: {
		color: "rgb(15, 15, 15)",
		fontFamily: "Poppins-Bold",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "left",
		backgroundColor: "transparent",
		position: "absolute",
		left: 0,
		top: 0,
	},
	kamiUdahSediainLoText: {
		backgroundColor: "transparent",
		color: "rgb(9, 9, 9)",
		fontFamily: "Poppins-Regular",
		fontSize: 9,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		position: "absolute",
		left: 0,
		right: 0,
		bottom: 0,
	},
	lihatSemuaText: {
		backgroundColor: "transparent",
		color: "rgb(243, 113, 33)",
		fontFamily: "Poppins-Regular",
		fontSize: 9,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		alignSelf: "center",
		marginRight: 1,
	},
	listPalingDekatScrollView: {
		backgroundColor: "transparent",
		height: 212,
		marginBottom: 18,
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
	sotoBetawiAnnaText: {
		color: "black",
		fontFamily: "Poppins-Regular",
		fontSize: 9,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		marginLeft: 19,
	},
	rp20000Rp23Text: {
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
	kmText: {
		backgroundColor: "transparent",
		color: "black",
		fontFamily: "Poppins-Regular",
		fontSize: 7,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		marginBottom: 1,
	},
	minText: {
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
	rectangle8View: {
		backgroundColor: "rgb(36, 181, 70)",
		borderRadius: 5,
		width: 32,
		height: 12,
	},
	bukaText: {
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
		backgroundColor: "transparent",
		color: "black",
		fontFamily: "Poppins-Regular",
		fontSize: 7,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
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
		backgroundColor: "transparent",
		color: "black",
		fontFamily: "Poppins-Regular",
		fontSize: 7,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		marginBottom: 1,
	},
	minThreeText: {
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
		backgroundColor: "transparent",
		resizeMode: "center",
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
		resizeMode: "center",
		backgroundColor: "transparent",
		alignSelf: "stretch",
		width: null,
		height: 125,
	},
	disukaiHaizDan38FiveText: {
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
	sotoBetawiAnnaFiveText: {
		color: "black",
		fontFamily: "Poppins-Regular",
		fontSize: 9,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		marginLeft: 19,
	},
	rp20000Rp23FiveText: {
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
	lineTerdekatView: {
		backgroundColor: "rgb(210, 210, 210)",
		height: 1,
		marginLeft: 25,
		marginRight: 22,
		marginTop: 18,
	},
	titlePopulerView: {
		backgroundColor: "transparent",
		height: 31,
		marginLeft: 25,
		marginRight: 22,
		marginTop: 21,
		flexDirection: "row",
		alignItems: "center",
	},
	yangLagiPopulerText: {
		backgroundColor: "transparent",
		color: "rgb(15, 15, 15)",
		fontFamily: "Poppins-Bold",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "left",
		position: "absolute",
		left: 0,
		top: 0,
	},
	kamiUdahSediainLoTwoText: {
		backgroundColor: "transparent",
		color: "rgb(9, 9, 9)",
		fontFamily: "Poppins-Regular",
		fontSize: 9,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		position: "absolute",
		left: 0,
		bottom: 0,
	},
	lihatSemuaTwoText: {
		backgroundColor: "transparent",
		color: "rgb(243, 113, 33)",
		fontFamily: "Poppins-Regular",
		fontSize: 9,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
	},
	listPopulerScrollView: {
		backgroundColor: "transparent",
		height: 210,
		marginTop: 19,
	},
	group7TwoView: {
		backgroundColor: "transparent",
		shadowColor: "rgba(0, 0, 0, 0.15)",
		shadowRadius: 5,
		shadowOpacity: 1,
		width: 144,
		height: 198,
	},
	rectangle6SixView: {
		backgroundColor: "white",
		borderRadius: 5,
		shadowColor: "rgba(0, 0, 0, 0.14)",
		shadowRadius: 5,
		shadowOpacity: 1,
		height: 198,
		marginLeft: 8,
		marginRight: 3,
	},
	imageSixImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		alignSelf: "stretch",
		width: null,
		height: 125,
	},
	disukaiHaizDan38SixText: {
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
	sotoBetawiAnnaSixText: {
		backgroundColor: "transparent",
		color: "black",
		fontFamily: "Poppins-Regular",
		fontSize: 9,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		marginLeft: 19,
	},
	rp20000Rp23SixText: {
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
	kmSixText: {
		backgroundColor: "transparent",
		color: "black",
		fontFamily: "Poppins-Regular",
		fontSize: 7,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		marginBottom: 1,
	},
	minSixText: {
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
	rectangle8SixView: {
		backgroundColor: "rgb(36, 181, 70)",
		borderRadius: 5,
		width: 32,
		height: 12,
	},
	bukaSixText: {
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
	group16TwoView: {
		backgroundColor: "transparent",
		shadowColor: "rgba(0, 0, 0, 0.15)",
		shadowRadius: 5,
		shadowOpacity: 1,
		width: 144,
		height: 198,
	},
	rectangle6SevenView: {
		backgroundColor: "white",
		borderRadius: 5,
		shadowColor: "rgba(0, 0, 0, 0.14)",
		shadowRadius: 5,
		shadowOpacity: 1,
		height: 198,
		marginLeft: 8,
		marginRight: 3,
	},
	imageSevenImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		alignSelf: "stretch",
		width: null,
		height: 125,
	},
	disukaiHaizDan38SevenText: {
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
	sotoBetawiAnnaSevenText: {
		backgroundColor: "transparent",
		color: "black",
		fontFamily: "Poppins-Regular",
		fontSize: 9,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		marginLeft: 19,
	},
	rp20000Rp23SevenText: {
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
	kmSevenText: {
		backgroundColor: "transparent",
		color: "black",
		fontFamily: "Poppins-Regular",
		fontSize: 7,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		marginBottom: 1,
	},
	minSevenText: {
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
	rectangle8SevenView: {
		backgroundColor: "rgb(36, 181, 70)",
		borderRadius: 5,
		width: 32,
		height: 12,
	},
	bukaSevenText: {
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
	group17TwoView: {
		backgroundColor: "transparent",
		shadowColor: "rgba(0, 0, 0, 0.15)",
		shadowRadius: 5,
		shadowOpacity: 1,
		width: 144,
		height: 198,
	},
	rectangle6EightView: {
		backgroundColor: "white",
		borderRadius: 5,
		shadowColor: "rgba(0, 0, 0, 0.14)",
		shadowRadius: 5,
		shadowOpacity: 1,
		height: 198,
		marginLeft: 8,
		marginRight: 3,
	},
	imageEightImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		alignSelf: "stretch",
		width: null,
		height: 125,
	},
	disukaiHaizDan38EightText: {
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
	sotoBetawiAnnaEightText: {
		backgroundColor: "transparent",
		color: "black",
		fontFamily: "Poppins-Regular",
		fontSize: 9,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		marginLeft: 19,
	},
	rp20000Rp23EightText: {
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
	kmEightText: {
		backgroundColor: "transparent",
		color: "black",
		fontFamily: "Poppins-Regular",
		fontSize: 7,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		marginBottom: 1,
	},
	minEightText: {
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
	rectangle8EightView: {
		backgroundColor: "rgb(36, 181, 70)",
		borderRadius: 5,
		width: 32,
		height: 12,
	},
	bukaEightText: {
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
	group27TwoView: {
		backgroundColor: "transparent",
		shadowColor: "rgba(0, 0, 0, 0.15)",
		shadowRadius: 5,
		shadowOpacity: 1,
		width: 144,
		height: 198,
		marginRight: 143,
	},
	rectangle6NineView: {
		backgroundColor: "white",
		borderRadius: 5,
		shadowColor: "rgba(0, 0, 0, 0.14)",
		shadowRadius: 5,
		shadowOpacity: 1,
		height: 198,
		marginLeft: 8,
		marginRight: 3,
	},
	imageNineImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		alignSelf: "stretch",
		width: null,
		height: 125,
	},
	disukaiHaizDan38NineText: {
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
	sotoBetawiAnnaNineText: {
		backgroundColor: "transparent",
		color: "black",
		fontFamily: "Poppins-Regular",
		fontSize: 9,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		marginLeft: 19,
	},
	rp20000Rp23NineText: {
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
	kmNineText: {
		backgroundColor: "transparent",
		color: "black",
		fontFamily: "Poppins-Regular",
		fontSize: 7,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		marginBottom: 1,
	},
	minNineText: {
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
	rectangle8NineView: {
		backgroundColor: "rgb(36, 181, 70)",
		borderRadius: 5,
		width: 32,
		height: 12,
	},
	bukaNineText: {
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
	group28TwoView: {
		backgroundColor: "transparent",
		shadowColor: "rgba(0, 0, 0, 0.15)",
		shadowRadius: 5,
		shadowOpacity: 1,
		width: 144,
		height: 198,
	},
	rectangle6TenView: {
		backgroundColor: "white",
		borderRadius: 5,
		shadowColor: "rgba(0, 0, 0, 0.14)",
		shadowRadius: 5,
		shadowOpacity: 1,
		height: 198,
		marginLeft: 8,
		marginRight: 3,
	},
	imageTenImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		alignSelf: "stretch",
		width: null,
		height: 125,
	},
	disukaiHaizDan38TenText: {
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
	sotoBetawiAnnaTenText: {
		backgroundColor: "transparent",
		color: "black",
		fontFamily: "Poppins-Regular",
		fontSize: 9,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		marginLeft: 19,
	},
	rp20000Rp23TenText: {
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
	kmTenText: {
		backgroundColor: "transparent",
		color: "black",
		fontFamily: "Poppins-Regular",
		fontSize: 7,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		marginBottom: 1,
	},
	minTenText: {
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
	rectangle8TenView: {
		backgroundColor: "rgb(36, 181, 70)",
		borderRadius: 5,
		width: 32,
		height: 12,
	},
	bukaTenText: {
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
	linePopulerView: {
		backgroundColor: "rgb(210, 210, 210)",
		height: 1,
		marginLeft: 25,
		marginRight: 22,
		marginTop: 23,
	},
	titleTrendingView: {
		backgroundColor: "transparent",
		height: 31,
		marginLeft: 25,
		marginRight: 22,
		marginTop: 24,
		flexDirection: "row",
		alignItems: "center",
	},
	banyakYangLagiTreText: {
		backgroundColor: "transparent",
		color: "rgb(15, 15, 15)",
		fontFamily: "Poppins-Bold",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "left",
		position: "absolute",
		left: 0,
		top: 0,
	},
	cobainDehRekomendaText: {
		backgroundColor: "transparent",
		color: "rgb(9, 9, 9)",
		fontFamily: "Poppins-Regular",
		fontSize: 9,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		position: "absolute",
		left: 0,
		bottom: 0,
	},
	lihatSemuaThreeText: {
		backgroundColor: "transparent",
		color: "rgb(243, 113, 33)",
		fontFamily: "Poppins-Regular",
		fontSize: 9,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
	},
	viewTwoView: {
		backgroundColor: "transparent",
		height: 102,
		marginLeft: 20,
		marginRight: 23,
		marginTop: 19,
	},
	rectangle19View: {
		backgroundColor: "white",
		borderRadius: 5,
		shadowColor: "rgba(0, 0, 0, 0.14)",
		shadowRadius: 5,
		shadowOpacity: 1,
		position: "absolute",
		left: 5,
		right: 0,
		top: 5,
		height: 87,
	},
	maskGroup2Image: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 102,
		height: 102,
	},
	disukaiHaizDan38ElevenText: {
		backgroundColor: "transparent",
		color: "black",
		fontFamily: "Poppins-Regular",
		fontSize: 9,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
	},
	sotoBetawiAnnaElevenText: {
		backgroundColor: "transparent",
		color: "black",
		fontFamily: "Poppins-Regular",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		marginTop: 1,
	},
	rp20000Rp23ElevenText: {
		color: "black",
		fontFamily: "Poppins-Regular",
		fontSize: 9,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		marginTop: 4,
	},
	kmElevenText: {
		color: "black",
		fontFamily: "Poppins-Regular",
		fontSize: 9,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		marginTop: 3,
	},
	minElevenText: {
		color: "black",
		fontFamily: "Poppins-Regular",
		fontSize: 9,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		marginLeft: 7,
		marginTop: 3,
	},
	rectangle10View: {
		backgroundColor: "rgba(148, 148, 148, 0.95)",
		borderRadius: 5,
		width: 49,
		height: 18,
		marginLeft: 9,
	},
	tutupText: {
		backgroundColor: "transparent",
		color: "white",
		fontFamily: "Poppins-Regular",
		fontSize: 9,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		position: "absolute",
		left: 207,
		top: 67,
	},
	viewThreeView: {
		backgroundColor: "transparent",
		height: 102,
		marginLeft: 20,
		marginRight: 23,
		marginTop: 7,
	},
	rectangle19TwoView: {
		backgroundColor: "white",
		borderRadius: 5,
		shadowColor: "rgba(0, 0, 0, 0.14)",
		shadowRadius: 5,
		shadowOpacity: 1,
		position: "absolute",
		left: 5,
		right: 0,
		top: 5,
		height: 87,
	},
	maskGroup2TwoImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 102,
		height: 102,
	},
	disukaiHaizDan38TwelveText: {
		backgroundColor: "transparent",
		color: "black",
		fontFamily: "Poppins-Regular",
		fontSize: 9,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
	},
	sotoBetawiAnnaTwelveText: {
		backgroundColor: "transparent",
		color: "black",
		fontFamily: "Poppins-Regular",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		marginTop: 1,
	},
	rp20000Rp23TwelveText: {
		backgroundColor: "transparent",
		color: "black",
		fontFamily: "Poppins-Regular",
		fontSize: 9,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		marginTop: 4,
	},
	kmTwelveText: {
		backgroundColor: "transparent",
		color: "black",
		fontFamily: "Poppins-Regular",
		fontSize: 9,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		marginTop: 3,
	},
	minTwelveText: {
		backgroundColor: "transparent",
		color: "black",
		fontFamily: "Poppins-Regular",
		fontSize: 9,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		marginLeft: 7,
		marginTop: 3,
	},
	rectangle10TwoView: {
		backgroundColor: "rgba(38, 181, 69, 0.95)",
		borderRadius: 5,
		width: 49,
		height: 18,
		marginLeft: 9,
	},
	tutupTwoText: {
		backgroundColor: "transparent",
		color: "white",
		fontFamily: "Poppins-Regular",
		fontSize: 9,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		position: "absolute",
		left: 210,
		top: 67,
	},
	viewFourView: {
		backgroundColor: "transparent",
		height: 102,
		marginLeft: 20,
		marginRight: 23,
		marginTop: 7,
	},
	rectangle19ThreeView: {
		backgroundColor: "white",
		borderRadius: 5,
		shadowColor: "rgba(0, 0, 0, 0.14)",
		shadowRadius: 5,
		shadowOpacity: 1,
		position: "absolute",
		left: 5,
		right: 0,
		top: 5,
		height: 87,
	},
	maskGroup2ThreeImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 102,
		height: 102,
	},
	disukaiHaizDan38ThirteenText: {
		backgroundColor: "transparent",
		color: "black",
		fontFamily: "Poppins-Regular",
		fontSize: 9,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
	},
	sotoBetawiAnnaThirteenText: {
		backgroundColor: "transparent",
		color: "black",
		fontFamily: "Poppins-Regular",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		marginTop: 1,
	},
	rp20000Rp23ThirteenText: {
		backgroundColor: "transparent",
		color: "black",
		fontFamily: "Poppins-Regular",
		fontSize: 9,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		marginTop: 4,
	},
	kmThirteenText: {
		backgroundColor: "transparent",
		color: "black",
		fontFamily: "Poppins-Regular",
		fontSize: 9,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		marginTop: 3,
	},
	minThirteenText: {
		color: "black",
		fontFamily: "Poppins-Regular",
		fontSize: 9,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		marginLeft: 7,
		marginTop: 3,
	},
	rectangle10ThreeView: {
		backgroundColor: "rgba(38, 181, 69, 0.95)",
		borderRadius: 5,
		width: 49,
		height: 18,
		marginLeft: 9,
	},
	tutupThreeText: {
		backgroundColor: "transparent",
		color: "white",
		fontFamily: "Poppins-Regular",
		fontSize: 9,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		position: "absolute",
		left: 210,
		top: 67,
	},
	viewFiveView: {
		backgroundColor: "transparent",
		height: 102,
		marginLeft: 20,
		marginRight: 23,
		marginTop: 7,
	},
	rectangle19FourView: {
		backgroundColor: "white",
		borderRadius: 5,
		shadowColor: "rgba(0, 0, 0, 0.14)",
		shadowRadius: 5,
		shadowOpacity: 1,
		position: "absolute",
		left: 5,
		right: 0,
		top: 5,
		height: 87,
	},
	maskGroup2FourImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 102,
		height: 102,
	},
	disukaiHaizDan38FourteenText: {
		color: "black",
		fontFamily: "Poppins-Regular",
		fontSize: 9,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
	},
	sotoBetawiAnnaFourteenText: {
		color: "black",
		fontFamily: "Poppins-Regular",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		marginTop: 1,
	},
	rp20000Rp23FourteenText: {
		backgroundColor: "transparent",
		color: "black",
		fontFamily: "Poppins-Regular",
		fontSize: 9,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		marginTop: 4,
	},
	kmFourteenText: {
		backgroundColor: "transparent",
		color: "black",
		fontFamily: "Poppins-Regular",
		fontSize: 9,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		marginTop: 3,
	},
	minFourteenText: {
		backgroundColor: "transparent",
		color: "black",
		fontFamily: "Poppins-Regular",
		fontSize: 9,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		marginLeft: 7,
		marginTop: 3,
	},
	rectangle10FourView: {
		backgroundColor: "rgba(38, 181, 69, 0.95)",
		borderRadius: 5,
		width: 49,
		height: 18,
		marginLeft: 9,
	},
	tutupFourText: {
		backgroundColor: "transparent",
		color: "white",
		fontFamily: "Poppins-Regular",
		fontSize: 9,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		position: "absolute",
		left: 210,
		top: 67,
	},
	titleView: {
		backgroundColor: "transparent",
		height: 30,
		marginLeft: 5,
		marginRight: 9,
		flexDirection: "row",
		alignItems: "flex-start",
	},
	pin1Image: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 18,
		height: 25,
	},
	jalanREdangSoewaText: {
		color: "white",
		fontFamily: "Poppins-Bold",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "left",
		backgroundColor: "transparent",
		position: "absolute",
		left: 0,
		top: 11,
	},
	lokasiKamuText: {
		color: "white",
		fontFamily: "Poppins-Regular",
		fontSize: 9,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		position: "absolute",
		left: 0,
		top: 0,
	},
	notificationImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 23,
		height: 25,
	},
	typeEntryView: {
		backgroundColor: "white",
		borderRadius: 5,
		height: 44,
		marginTop: 10,
		flexDirection: "row",
		alignItems: "flex-start",
	},
	pinImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		alignSelf: "center",
		width: 15,
		height: 15,
		marginLeft: 15,
	},
	mauMakanApaHariITextInput: {
		backgroundColor: "transparent",
		padding: 0,
		color: "rgb(15, 15, 15)",
		fontFamily: "Poppins-Regular",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		width: 206,
		height: 19,
		marginLeft: 14,
		marginTop: 15,
	},
})

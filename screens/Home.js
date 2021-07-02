import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    TouchableOpacity,
    Platform,
    StatusBar,
    ImageBackground,
    Image,
    Linking
} from "react-native";

export default class HomeScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <SafeAreaView style={styles.droidSafeArea} />
                <ImageBackground style={styles.backgroundImage} source={require('../assets/stars.gif')}>
                    
                    <TouchableOpacity style={styles.routeCard} onPress={() =>
                        this.props.navigation.navigate("Space Craft")
                    }>
                        <Text style={styles.routeText}>Space Crafts</Text>
                        <Image source={require("../assets/space_crafts.png")} style={styles.iconImage}></Image>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.routeCard} onPress={() =>
                        this.props.navigation.navigate("Star Map")
                    }>
                        <Text style={styles.routeText}>Star Map</Text>
                        <Image source={require("../assets/star_map.png")} style={styles.iconImage}></Image>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.routeCard} onPress={() =>
                        this.props.navigation.navigate("Daily Pictures")
                    }>
                        <Text style={styles.routeText}>Daily Pictures</Text>
                        <Image source={require("../assets/daily_pictures.png")} style={styles.iconImage}></Image>
                    </TouchableOpacity>

                    <TouchableOpacity 
                    style={{justifyContent: 'center', alignItems: 'center', marginTop: 50}}
                    onPress={() => Linking.openURL('https://youtu.be/EFO_bsg1sw8').catch(err => console.error("Couldn't load page", err))}
                    >
                        <View style={styles.iconContainer}>
                            <Image style={{width: 50, height: 50, borderRadius: 100}} source={require('../assets/playVideo.png')}></Image>
                        </View>
                    </TouchableOpacity>

                </ImageBackground>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
        marginTop: -40
    },
    droidSafeArea: {
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    },
    titleBar: {
        flex: 0.15,
        justifyContent: "center",
        alignItems: "center"
    },
    titleText: {
        fontSize: 40,
        fontWeight: "bold",
        color: "white"
    },
    image: {
        height: 180,
        width: 180,
        marginTop: 70
    },
    routeCard: {
        flex: 0.25,
        marginLeft: 50,
        marginRight: 50,
        marginTop: 50,
        borderRadius: 20,
        backgroundColor: 'white',
    },
    routeText: {
        fontSize: 35,
        fontWeight: "bold",
        color: "black",
        marginTop: 75,
        paddingLeft: 30,
    },
    iconImage: {
        position: "absolute",
        height: 80,
        width: 80,
        resizeMode: "contain",
        right: 20,
        top: 10
    }
})
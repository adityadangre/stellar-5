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
    Linking,
    ScrollView
} from "react-native";
import axios from "axios";

export default class HomeScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            apod: {}
        }
    }

    componentDidMount() {
        this.getAPOD();
        try {
            setInterval(async () => {
                this.getIssLocation()
            }, 5000);
        } catch (e) {
            console.log(e);
        }
    }
    
    getAPOD = () => {
        axios
            .get("https://api.nasa.gov/planetary/apod?api_key=A8aYjaZw4PaKKxPf8Xyf9trWGnMKggZeIfNQ3963")
            .then(response => {
                this.setState({ apod: response.data })
            })
            .catch(error => {
                alert(error.message)
            })
    }

    render() {
        return (
            <View style={styles.container}>
                <SafeAreaView style={styles.droidSafeArea} />
                <ImageBackground style={styles.backgroundImage} source={require('../assets/stars.gif')}>
                    <Text style={styles.titleText}>Astronomy picture of the day</Text>
                    <TouchableOpacity 
                    style={{justifyContent: 'center', alignItems: 'center'}}
                    onPress={() => Linking.openURL(this.state.apod.url).catch(err => console.error("Couldn't load page", err))}
                    >
                        <View style={styles.iconContainer}>
                            <Image style={{width: 50, height: 50, borderRadius: 100}} source={require('../assets/playVideo.png')}></Image>
                        </View>
                    </TouchableOpacity>
                    
                    <Text style={[styles.titleText, {color: '#F800F9', textAlign: 'left', fontSize: 30, paddingLeft: 10, marginBottom: 15, opacity: 1}]}>{this.state.apod.title}</Text>


                    <Text style={{color: 'white', fontSize: 15, paddingLeft: 10}}>{this.state.apod.explanation}</Text>
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
        marginTop: -30
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
        color: "white",
        textAlign: "center",
        marginTop: 15
    }
})
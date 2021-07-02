import axios from "axios";
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
    FlatList
} from "react-native";

export default class HomeScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            aircrafts: ''
        }
    }

    keyExtractor = (item, index) => index.toString();

    componentDidMount() {
        this.getData()
        try {
            setInterval(async () => {
                this.getData()
            }, 5000);
        } catch (e) {
            console.log(e);
        }
    }

    getData = () => {
        axios.get('https://ll.thespacedevs.com/2.0.0/config/spacecraft/?format=json')
            .then(response => {
                this.setState({aircrafts: response.data.results})
            })
            .catch(error => {
                console.log(error.message)
            })
    }

    renderItem = ({item}) => {
        if (Object.keys(this.state.aircrafts).length === 0) {
            return (
                <View
                    style={{
                        flex: 1,
                        justifyContent: "center",
                        alignItems: "center"
                    }}>
                    <Text>Loading...</Text>
                </View>
            )
        } else {
            return(
                <View style={{borderWidth: 1, justifyContent: 'center', alignItems: 'center', marginBottom: 10, elevation: 10}}>
                    <Image
                        source={{uri: item.agency.image_url}}
                        style={{width: '100%', height: 200, marginTop: 15, marginBottom: 15, marginRight: 10}}>
                    </Image>

                    <Text style={{fontWeight: 'bold', fontSize: 20, color: 'white'}}>{item.name}</Text>   
                    <Text style={{color: '#696969'}}>{item.agency.name}</Text>  
                    <Text style={{color: 'white', fontWeight: 'bold', fontSize: 15}}>DESCRIPTION</Text>
                    <Text style={{color: 'white', marginLeft: 10, marginRight: 10}}>{item.agency.description}</Text>           

                </View>
            )
        }
    }

    render() {
        return (
            <View style={styles.container}>
            <ImageBackground style={styles.backgroundImage} source={require('../assets/iss_bg.jpg')}>
                <View style={{flex: 0.25}}>
                <Text style={styles.titleText}>Space Crafts</Text>
                </View>
                <View style={{flex: 0.95}}>
                    <FlatList
                        keyExtractor={this.keyExtractor}
                        data={this.state.aircrafts}
                        renderItem={this.renderItem}
                    />
                </View>
                </ImageBackground>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'contain',
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
    titleText: {
        fontSize: 40,
        fontWeight: "bold",
        color: "white",
        textAlign: "center",
        marginTop: 15
    }
})
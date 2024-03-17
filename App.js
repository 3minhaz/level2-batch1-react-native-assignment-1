import { SafeAreaView, ScrollView, StyleSheet, Text, View ,Image} from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={{padding:20,backgroundColor:'#F6F8FF'}}>  
      <View style={styles.container}>
        <View style={styles.octContainer}>
        <View style={styles.octImg}>
        <Image source={require('./assets/assets/Oval.png')} />
        </View>
        <View>
          <Text style={styles.octTitle}>The Octocat</Text>
          <Text style={styles.octDetails}>@Octocat</Text>
          <Text>Join 25 Jan 2011</Text>
        </View>
      </View>
      <Text style={{lineHeight:25,marginTop: 30}}>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
      </Text>
      <View style={styles.detailsContainer}>
        <View style={styles.detailsContainerItem}>
          <Text>Repos</Text>
          <Text style={styles.detailsQuantity}>8</Text>
        </View>
        <View style={styles.detailsContainerItem}>
          <Text>Followers</Text>
          <Text style={styles.detailsQuantity}>3938</Text>
        </View>
        <View style={styles.detailsContainerItem}>
          <Text>Following</Text>
          <Text style={styles.detailsQuantity}>9</Text>
        </View>
      </View>
      <View style={{marginTop:30}}>
      <View style={styles.about}>
        <Image source={require('./assets/assets/003-pin.png')} />
        <Text style={styles.aboutText}>San Francisco</Text>
      </View>
      <View style={styles.about}>
        <Image source={require('./assets/assets/002-url.png')} />
        <Text style={styles.aboutText}>https://github.blog</Text>
      </View>
      <View style={styles.about}>
        <Image source={require('./assets/assets/004-twitter.png')} />
        <Text style={styles.aboutText}>Not Available</Text>
      </View>
      <View style={styles.about}>
        <Image source={require('./assets/assets/001-office-building.png')} />
        <Text style={styles.aboutText}>@github</Text>
      </View>
      </View>

      </View>
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    padding: 30,
    backgroundColor: 'white',
    borderRadius: 20,
  },
  octContainer:{
    flexDirection: 'row',
  },
  octImg:{
    marginRight: 40
  },
  octTitle:{
    fontWeight: 'bold',
    fontSize: 20
  },
  octDetails: {
    color:'#4494FF'
  },
  detailsContainer:{
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#F6F8FF',
    borderRadius: 10,
    padding:30
  },
  detailsContainerItem: {
    justifyContent:'center',
    alignItems:'center',
  },
  detailsQuantity:{
    marginTop: 20
  },
  about:{
    marginTop: 20,
    flexDirection:'row',
    justifyContent:'flex-start',
    alignItems:'center'
  },
  aboutImage:{
    height: 35,
    width: 25
  },
  aboutText:{
    marginLeft: 20
  }

});

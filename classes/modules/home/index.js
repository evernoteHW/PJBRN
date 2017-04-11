'use strict'
import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TabBarIOS,
  Image,
  SectionList
} from 'react-native';
import testdata from './home_test.json'

export default class Home extends Component {
  constructor(props) {
    super(props);
    // var ds = new FlatList.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
    this.state = {flatlistdata: [{key: 'a'}, {key: 'b'}]};
  }
  // 返回一个Item IOS叫做Cell
  _renderItem = ({item}) => {
    return(
         <View style={styles.itemComponent}>
               <Text>{item.key}</Text>
         </View>
    )
  }
  _headerComponent = ({item}) => {
    return(
         <View style={styles.headerComponent}>
               <Text>23232323232头部</Text>
         </View>
    )
  }
  _footerComponent = ({item}) => {
    return(
         <View style={styles.footerComponent}>
           <View style={{backgroundColor:'rgb(241,239,235)', flex: 4, height:1, marginLeft:10, marginRight:5}} />
           <Image source={require('../../resources/image/home/华兴银行存管icon.png')} />
           <Text> 资金由华兴银行存管</Text>
           <View style={{backgroundColor:'rgb(241,239,235)', flex: 4, height:1, marginLeft:5,marginRight:10}} />
         </View>
    )
  }
  _itemSeparatorComponent = ({item}) => {
    return( <View style={{backgroundColor:'#666666', height:1,width:'100%'}} /> )
  }
  _getItemLayout = (data: any, index: number) => {
    //  for (var i = 0; i < data.length; i++) {
    //    console.log('00000====' + data[i]['key']);
    //  }
    console.log('99999====',index);
    return {length: 200, offset: 200 * index, index}
  }
 componentDidMount(){
  //  for (var i = 0; i < testdata.length; i++) {
  //    console.log(testdata[i]);
  //  }
    // setInterval(() => {
    //     this.setState(flatlistdata  =>{
    //         console.log('..........');
    //         return [{key: 'a'}, {key: 'b'},{key: 'c'},{key: 'd'},{key: 'e'},{key: 'f'}]
    //       }
    //     );
    //   }, 1000);

 }
  render() {
    return (
      <View style={styles.container}>
        <FlatList style={styles.flatlist} data={this.state.flatlistdata}
          renderItem={this._renderItem}
          ListHeaderComponent={this._headerComponent}
          ListFooterComponent={this._footerComponent}
          ItemSeparatorComponent={this._itemSeparatorComponent}
          numColumns={1}
          getItemLayout={this._getItemLayout}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  flatlist: {
    width: '100%',
    height: '100%',
    backgroundColor: '#FFFFFF'
  },
  itemComponent:{
    flex: 1,
    // height: 60,
    backgroundColor: 'green'
  },
  headerComponent:{
    flexDirection:'row',
    width: '100%',
    height: 325,
    backgroundColor: 'orange'
  },
  footerComponent:{
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 90,
  },
});

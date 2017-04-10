'use strict'
import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  TabBarIOS
} from 'react-native';
import Home from '../modules/home'
import Finance from '../modules/finance'
import Mine from '../modules/mine'

export default class PJBRN extends Component {
  constructor(props) {
    super(props);
    this.state = { selectedTabItem: 0 };
  }

  render() {
    return (
      <View style={styles.container}>
            <TabBarIOS style={{width: '100%'} } tintColor='rgb(208, 15, 43)'
              transluent={false} barTintColor='white'>

                 <TabBarIOS.Item
                   icon={require('../resources/image/tabbar_index_default.png')}
                   selectedIcon={require('../resources/image/tabbar_index_selected.png')}
                   title="首页"
                   renderAsOriginal={true}
                   onPress={() => {this.setState({selectedTabItem:0})}}
                   selected={this.state.selectedTabItem == 0}>
                    <Home> </Home>
                 </TabBarIOS.Item>

                 <TabBarIOS.Item
                   icon={require('../resources/image/tabbar_list_default.png')}
                   selectedIcon={require('../resources/image/tabbar_list_selected.png')}
                   title='理财'
                   renderAsOriginal={true}
                   onPress={() => {this.setState({selectedTabItem:1})}}
                   selected={this.state.selectedTabItem == 1}>
                   <Finance> </Finance>
                 </TabBarIOS.Item>

                 <TabBarIOS.Item
                   icon={require('../resources/image/tabbar_mine_default.png')}
                   selectedIcon={require('../resources/image/tabbar_mine_selected.png')}
                   title='我的'
                   renderAsOriginal={true}
                   onPress={() => {this.setState({selectedTabItem:2})}}
                   selected={this.state.selectedTabItem == 2}>
                    <Mine></Mine>
                 </TabBarIOS.Item>

            </TabBarIOS>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

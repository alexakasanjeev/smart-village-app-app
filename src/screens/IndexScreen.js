import PropTypes from 'prop-types';
import React from 'react';
import { Button, Platform, StyleSheet, Text, View } from 'react-native';

import { colors, texts } from '../config';

// TODO: data coming later from API
const items = [
  {
    itemId: 1,
    otherParam: '1thing you want here'
  },
  {
    itemId: 2,
    otherParam: '2thing you want here'
  },
  {
    itemId: 3,
    otherParam: '3thing you want here'
  },
  {
    itemId: 4,
    otherParam: '4thing you want here'
  },
  {
    itemId: 5,
    otherParam: '5thing you want here'
  },
  {
    itemId: 6,
    otherParam: '6thing you want here'
  }
];

export default class IndexScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerLeft: (
        <Button
          title={texts.button.home}
          onPress={() => navigation.navigate('Home')}
          color={Platform.OS === 'ios' ? colors.lightestText : colors.primary}
        />
      )
    };
  };

  state = {
    stateItems: items
  };

  render() {
    const { stateItems } = this.state;
    const { navigation } = this.props;

    return (
      <View style={styles.container}>
        <Text>Index Screen</Text>
        {stateItems.map((item) => (
          <Button
            key={`bla${item.itemId}`}
            title={`Got to Detail #${item.itemId}`}
            // on press navigate to Detail route (DetailScreen) with the following params,
            // that we use in that screen
            onPress={() => navigation.navigate('Detail', item)}
            color={colors.primary}
          />
        ))}
        <Button
          title="Add element"
          onPress={() =>
            this.setState({
              stateItems: [
                ...stateItems,
                {
                  itemId: 7,
                  otherParam: '7thing you want here'
                }
              ]
            })
          }
          color={colors.secondary}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

IndexScreen.propTypes = {
  navigation: PropTypes.object.isRequired
};

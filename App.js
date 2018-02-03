import React from 'react';
import { StyleSheet, Text, View, Button, TouchableHighlight } from 'react-native';

export default class App extends React.Component {
  state = { question: 'Tap here for a question' }
  // fetchQuestion() {
  //   fetch('https://xkcd.com/1002/info.0.json')
  //     .then(response => response.json())
  //     .then(question => this.setState({ question: question.img }));
  //   this.setState({ question: '...' });
  // }

  // This works and displays the question
  fetchQuestion() {
    fetch('https://opentdb.com/api.php?amount=1&type=boolean')
      .then(response => response.json())
      .then(question => this.setState({ question: question.results[0]["question"].replace(/(&quot\;)/g,"\"") }));
    this.setState({ question: '...' });
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight onPress={()=> this.fetchQuestion()}>
          <Text>{this.state.question}</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import React, { Component } from 'react';

class TextButton extends Component {
	state = {};
	render() {
		return (
			<TouchableOpacity {...this.props}>
				<Text style={styles.textButton}>{this.props.text}</Text>
			</TouchableOpacity>
		);
	}
}

const styles = StyleSheet.create({
	textButton: {
		color: 'rgb(174,149,149)',
		textDecorationLine: 'underline',
		textDecorationStyle: 'solid',
		textDecorationColor: 'rgb(174,149,149)',
		fontSize: 17,
	},
});

export default TextButton;

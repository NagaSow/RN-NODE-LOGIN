import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

// import axios from 'axios';
// import validator from 'validator';

import axios from 'axios';
import validator from 'validator';

import Input from '../Components/Input/Input';
import CustomButton from '../Components/Button/Button';

class CreateAnAccount extends Component {
	state = {
		email: '',
		password: '',
		first_name: '',
		last_name: ''
	};
	handleEmailChange = email => this.setState({ email });
	handlePasswordChange = password => this.setState({ password });
	handlefirstnameChange = first_name => this.setState({ first_name });
	handlelastnameChange = last_name => this.setState({ last_name });
	handleRegister = () => {
		const { email, password, first_name, last_name } = this.state;
		if (validator.isEmail(email) && first_name.trim() && last_name.trim() && password.trim()) {
			axios
				.post('http://192.168.1.3:5000/users/register', {
					email,
					password,
					first_name,
					last_name
				})
				.then(response => {
					if (response.status == 201) {
						this.props.navigator.pop();
					}
				})
				.catch(() => {
					alert('You made an error!');
				});
		} else {
			alert('You made an error!');
		}
	};
	render() {
		return (
			<View style={styles.container}>
				<View style={styles.signUpForm}>
					<Input
						placeholder="firstname"
						value={this.state.first_name}
						onChangeText={this.handlefirstnameChange}
					/>
					<Input
						placeholder="Lastname"
						value={this.state.last_name}
						onChangeText={this.handlelastnameChange}
					/>
					<Input
						placeholder="Email"
						value={this.state.email}
						onChangeText={this.handleEmailChange}
					/>

					<Input
						placeholder="Password"
						value={this.state.password}
						onChangeText={this.handlePasswordChange}
						secureTextEntry
					/>
				</View>
				<CustomButton text="Sign Up" onPress={this.handleRegister} />
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
	},
	signUpForm: {
		height: 225,
		justifyContent: 'space-around',
	},
});

export default CreateAnAccount;

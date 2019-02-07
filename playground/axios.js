const axios = require('axios');

let data = {
	email: 'example@example.com',
	username: 'user1',
	password: '123456',
};

// axios
// 	.post('http://localhost:3000/user/register', data)
// 	.then(response => {
// 		console.log(response.status);
// 	})
// 	.catch(err => {
// 		console.log(
// 			'User already exists or the email/username is not in the right format'
// 		);
// 	});

// axios
// 	.post('http://localhost:3000/user/login', data)
// 	.then(response => {
// 		console.log(response.headers['x-auth']);
// 	})
// 	.catch(err => {
// 		console.log('Wrong username or password');
// 	});

axios
	.get('http://localhost:3000/private/private', {
		headers: {
			'x-auth':
				'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1YjFkN2RhZTZlZTg1ZDE3ZDg0MDE3MGEiLCJpYXQiOjE1Mjg2NTkzODd9.8pTCmVa-Q9iLSbE7UcuHFnhKODXdNefJboeTsQXHJYs',
		},
	})
	.then(response => {
		console.log(response.data);
	})
	.catch(err => {
		console.log('err');
	});

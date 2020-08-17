Write a React web app that does the following:

- Allows a user to enter a login and password;
- Calls the mock API to get a token;
- If login is succesful, redirects user to the profile page.

Mock API:

```
POST https://5f3a65b02300b100169a8b40.mockapi.io/sample/v1/token

{
  username: 'username',
  password: 'password'
}
```

It returns a 4xx error code or a response like this:

```
{
  token: 'random-number'
}
```

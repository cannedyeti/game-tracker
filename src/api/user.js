import { Auth } from 'aws-amplify';

export async function getUserGroups() {
  return await Auth.currentAuthenticatedUser().then(
    (data) => data.signInUserSession.accessToken.payload['cognito:groups']
  );
}

const baseUrl = "http://localhost:3000/api/v1";

export const userApiUrls = {
  signIn: `${baseUrl}/signin`,
  signOut: `${baseUrl}/signout`,
  signUp: `${baseUrl}/signup`,
  deleteUser: (username) => `${baseUrl}/${username}`,
  updateUser: (username) => `${baseUrl}/update/${username}`,
  getUser: (username) => `${baseUrl}/get/${username}`,
};

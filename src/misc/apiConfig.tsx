const baseUrl = "http://localhost:3000/api/v1";

export const userApiUrls = {
  signIn: `${baseUrl}/signin`,
  signOut: `${baseUrl}/signout`,
  signUp: `${baseUrl}/signup`,
  deleteUser: (username: string) => `${baseUrl}/${username}`,
  updateUser: (username: string) => `${baseUrl}/update/${username}`,
  getUser: (username: string) => `${baseUrl}/get/${username}`,
};

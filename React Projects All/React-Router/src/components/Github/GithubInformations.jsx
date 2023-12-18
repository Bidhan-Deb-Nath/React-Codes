/** @format */

export const GithubInformations = async () => {
  const response = await fetch("https://api.github.com/users/Bidhan-Deb-Nath");
  return response.json();
};

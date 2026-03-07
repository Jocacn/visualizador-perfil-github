const BASE_URL = 'https://api.github.com';

export async function fetchGithubUser(userName) {
  const safeUserName = encodeURIComponent(userName);
  const response = await fetch(`${BASE_URL}/users/${safeUserName}`);

  if (!response.ok) {
    throw new Error('USER_NOT_FOUND');
  }
  return await response.json();
}

export async function fetchGithubUserRepos(userName) {
  const safeUserName = encodeURIComponent(userName);
  const response = await fetch(`${BASE_URL}/users/${safeUserName}/repos?per_page=10&sort=created`);
  if (!response.ok) {
    throw new Error('Repositórios do usuário não encontrados');
  }
  return await response.json();
}
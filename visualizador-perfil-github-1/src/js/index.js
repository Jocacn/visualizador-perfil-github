import { fetchGithubUser, fetchGithubUserRepos } from './githubApi.js';
import { clearProfile, renderLoading, renderProfile } from './profileView.js';

const inputSearch = document.getElementById('input-search');
const btnSearch = document.getElementById('btn-search');
const profileResults = document.querySelector('.profile-results');

async function handleSearch() {
    const userName = inputSearch.value.trim();

    if (!userName) {
        alert('Por favor, digite um nome de usuário do GitHub.');
        clearProfile(profileResults);
        return;
    }

    renderLoading(profileResults);

    try {
        const userData = await fetchGithubUser(userName);
        const userRepos = await fetchGithubUserRepos(userName);
        console.log(userRepos);
        renderProfile(profileResults, userData, userRepos);
    } catch (error) {
        console.error('Erro ao buscar o perfil do usuário:', error);

        if (error.message === 'USER_NOT_FOUND') {
            alert('Usuário não encontrado. Por favor, verifique o nome de usuário e tente novamente.');
            clearProfile(profileResults);
            return;
        }

        alert('Ocorreu um erro ao buscar o perfil do usuário. Por favor, tente novamente mais tarde.');
        clearProfile(profileResults);
    }
}

btnSearch.addEventListener('click', handleSearch);
export function renderLoading(container) {
  container.innerHTML = '<p class="loading">Carregando...</p>';
}

export function clearProfile(container) {
  container.innerHTML = '';
}

export function renderProfile(container, userData) {
  const displayName = userData.name || userData.login;
  const bio = userData.bio || 'Não possui bio cadastrada 😢.';

  container.innerHTML = `
    <div class="profile-card">
      <img src="${userData.avatar_url}" alt="Avatar de ${displayName}" class="profile-avatar">
      <div class="profile-info">
        <h2>${displayName}</h2>
        <p>${bio}</p>
      </div>
    </div>

    <div class="profile-counters">
      <div class="followers">
        <h4>👥Seguidores</h4>
        <span>${userData.followers}</span>
      </div>
      <div class="following">
        <h4>👥Seguindo</h4>
        <span>${userData.following}</span>
      </div>
    </div>
  `;
}

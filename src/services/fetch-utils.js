import { client, checkError } from './client';

export async function getUser() {
  return client.auth.session;
}

export async function signUp(email, password) {
  const response = await client.auth.signUp({ email, password });

  return response.user;
}

export async function signIn(email, password) {
  const response = await client.auth.signIn({ email, password });

  return response.user;
}

export async function logout() {
  await client.auth.signOut();
    
  return window.location.hfref = '../';
}

export async function getWatchlistItems() {
  const response = await client
    .from('watchlist')
    .select()
    .order('id');
    
  return checkError(response);
}

export async function searchMovies(query) {
  const response = await fetch(`/.netlify/functions/movie-endpoint?searchQuery=${query}`);

  const json = await response.json();

  return json.data.results;
}
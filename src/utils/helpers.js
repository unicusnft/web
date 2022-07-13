const LOCAL_STORAGE_CURRENT_USER = 'unicus-current-user'

export const sleep = (ms) => {
  return new Promise(resolve => setTimeout(resolve, ms))
}

export const LocalStorageGetCurrentUser = () => {
  return JSON.parse(localStorage.getItem(LOCAL_STORAGE_CURRENT_USER));
}

export const LocalStorageSeCurrentUser = (user) => {
  localStorage.setItem(LOCAL_STORAGE_CURRENT_USER, JSON.stringify(user));
}

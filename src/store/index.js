import Store from './Store.js'

export const store = new Store();

window.__STATE__ = store.state;


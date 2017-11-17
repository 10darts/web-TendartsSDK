import { DEVICE, LAST_ACCESS } from '../configuration';

function createStore() {
  let currentState = {
    device: typeof localStorage !== 'undefined' ? localStorage.getItem(DEVICE) : null,
    token: null,
    publicKey: null,
    autosubscribe: false,
    debug: false,
    lastAccess: null,
  };

  return {
    setState(state) {
      currentState = { ...currentState, ...state };
    },
    getState() {
      return currentState;
    },
    get debug() { return currentState.debug; },
    set token(token) {
      if (!token) { throw new Error('Token is required'); }
      currentState.token = token;
    },
    get token() { return currentState.token; },
    set publicKey(publicKey) {
      if (!publicKey) { throw new Error('Public key is required'); }
      currentState.publicKey = publicKey;
    },
    get publicKey() { return currentState.publicKey; },
    set device(device) {
      currentState.device = device;
      localStorage.setItem(DEVICE, device);
    },
    get device() { return currentState.device; },
    set lastAccess(lastAccess) {
      currentState.lastAccess = lastAccess;
      localStorage.setItem(LAST_ACCESS, lastAccess);
    },
    get lastAccess() { return currentState.lastAccess; },
  };
}

const store = createStore();
export default store;
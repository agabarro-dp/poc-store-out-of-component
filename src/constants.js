// import { store } from 'vuex'
import store from './store'

// eslint-disable-next-line
console.log('store', store.state.enabled)

export const property = store.state.enabled

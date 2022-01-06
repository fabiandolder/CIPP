import { combineReducers } from '@reduxjs/toolkit'

// features
import appReducer, { appSlice } from './features/app'
import authReducer, { authSlice } from './features/auth'
import { modalSlice } from './features/modal'
import { toastsSlice } from './features/toasts'
import { switcherSlice } from './features/switcher'

// apis
import { appApi } from './api/app'
import { authApi } from './api/auth'
import { datatableApi } from './api/datatable'
import { devicesApi } from './api/devices'
import { domainsApi } from './api/domains'
import { groupsApi } from './api/groups'
import { licensesApi } from './api/licenses'
import { mailboxApi } from './api/mailbox'
import { oneDriveApi } from './api/oneDrive'
import { reportsApi } from './api/reports'
import { securityApi } from './api/security'
import { tenantsApi } from './api/tenants'
import { usersApi } from './api/users'

// actions
import { RESET_STATE_ACTION_TYPE } from './actions/resetState'
import { RESET_AUTH_ACTION_TYPE } from './actions/resetAuth'

export const root = {
  // slices
  [appSlice.name]: appReducer,
  [authSlice.name]: authReducer,
  [modalSlice.name]: modalSlice.reducer,
  [switcherSlice.name]: switcherSlice.reducer,
  [toastsSlice.name]: toastsSlice.reducer,

  // apis
  [appApi.reducerPath]: appApi.reducer,
  [authApi.reducerPath]: authApi.reducer,
  [datatableApi.reducerPath]: datatableApi.reducer,
  [devicesApi.reducerPath]: devicesApi.reducer,
  [domainsApi.reducerPath]: domainsApi.reducer,
  [groupsApi.reducerPath]: groupsApi.reducer,
  [licensesApi.reducerPath]: licensesApi.reducer,
  [mailboxApi.reducerPath]: mailboxApi.reducer,
  [oneDriveApi.reducerPath]: oneDriveApi.reducer,
  [reportsApi.reducerPath]: reportsApi.reducer,
  [securityApi.reducerPath]: securityApi.reducer,
  [tenantsApi.reducerPath]: tenantsApi.reducer,
  [usersApi.reducerPath]: usersApi.reducer,
}

export const apiMiddleware = [
  appApi.middleware,
  authApi.middleware,
  datatableApi.middleware,
  devicesApi.middleware,
  domainsApi.middleware,
  groupsApi.middleware,
  licensesApi.middleware,
  mailboxApi.middleware,
  oneDriveApi.middleware,
  reportsApi.middleware,
  securityApi.middleware,
  tenantsApi.middleware,
  usersApi.middleware,
]

const combinedReducer = combineReducers(root)

// global reducer
export const rootReducer = (state = {}, action = {}) => {
  switch (action.type) {
    case RESET_STATE_ACTION_TYPE:
      state = {}
      break
    case RESET_AUTH_ACTION_TYPE:
      state = { ...state, auth: {} }
      break
    default:
      break
  }

  // noinspection JSCheckFunctionSignatures
  return combinedReducer(state, action)
}

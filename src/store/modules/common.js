import * as types from '../mutation-types'

/**
 *  公共通用配置
 */
const state = {
    accountMsg :''
}

const actions = {
    // 用户的登录信息
    accountMsg({commit},settings){
        commit(types.ACCOUNT_MSG,settings)
    },
}

const getters = {
    accountMsg :state => state,
}

const mutations = {
    // 用户信息
    [types.ACCOUNT_MSG](state ,settings){
        state = settings
    }
}

export default {
    state,
    actions,
    getters,
    mutations
}
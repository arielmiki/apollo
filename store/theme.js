export const state = () => ({
  isDark: false
})

export const mutations = {
  toggle(state) {
    state.isDark = !state.isDark
  }
}

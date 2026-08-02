import { defineStore, acceptHMRUpdate } from 'pinia'

export const useUsersStore = defineStore('Users', {
  state: () => ({
    users: [],
    currentUser: null,
  }),

  actions: {
    saveUser(email, password, fname = '', lname = '') {
      const normalizedEmail = email.trim().toLowerCase()
      const user = {
        email: normalizedEmail,
        password,
        fname,
        lname,
      }

      const existingUser = this.users.find((account) => account.email === normalizedEmail)

      if (existingUser) {
        existingUser.password = password
        existingUser.fname = fname
        existingUser.lname = lname
        this.currentUser = existingUser
        return
      }

      this.users.push(user)
      this.currentUser = user
    },

    clearCurrentUser() {
      this.currentUser = null
    },
  },
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useUsersStore, import.meta.hot))
}

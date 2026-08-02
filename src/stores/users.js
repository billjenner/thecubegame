import { defineStore, acceptHMRUpdate } from 'pinia'
import { supabase } from '../lib/supabase'

export const useUsersStore = defineStore('Users', {
  state: () => ({
    users: [],
    currentUser: null,
    answers: [],
    error: null,
  }),

  actions: {
    async saveUser(email, password, fname = '', lname = '') {
      this.error = null

      if (!supabase) {
        this.error = 'Supabase client is not configured.'
        return null
      }

      const normalizedEmail = email.trim().toLowerCase()
      const user = {
        email: normalizedEmail,
        password,
        fname,
        lname,
      }

      const { data, error } = await supabase
        .from('users')
        .upsert(user, { onConflict: 'email' })
        .select()
        .single()

      if (error) {
        this.error = error.message
        return null
      }

      this.users = this.users.filter((account) => account.email !== normalizedEmail)
      this.users.push(data)
      this.currentUser = data
      return data
    },

    async loadUsers() {
      this.error = null

      if (!supabase) {
        this.error = 'Supabase client is not configured.'
        return []
      }

      const { data, error } = await supabase.from('users').select('*').order('created_at', {
        ascending: false,
      })

      if (error) {
        this.error = error.message
        return []
      }

      this.users = data || []
      return this.users
    },

    async saveAnswers(answers) {
      this.error = null

      if (!supabase) {
        this.error = 'Supabase client is not configured.'
        return null
      }

      if (!this.currentUser?.email) {
        this.error = 'No current user is available.'
        return null
      }

      const currentTime = new Date().toISOString()
      const payload = {
        email: this.currentUser.email,
        room: answers.room || '',
        cube: answers.cube || '',
        ladder: answers.ladder || '',
        horse: answers.horse || '',
        window: answers.window || '',
        storm: answers.storm || '',
        flowers: answers.flowers || '',
        interpretation: answers.interpretation || '',
        date_time: currentTime,
      }

      const { data, error } = await supabase
        .from('answers')
        .upsert(payload, { onConflict: 'email' })
        .select()
        .single()

      if (error) {
        this.error = error.message
        return null
      }

      this.answers = this.answers.filter((item) => item.email !== this.currentUser.email)
      this.answers.push(data)
      return data
    },

    async finishAnswers(answers) {
      this.error = null

      if (!supabase) {
        this.error = 'Supabase client is not configured.'
        return null
      }

      if (!this.currentUser?.email) {
        this.error = 'No current user is available.'
        return null
      }

      const currentTime = new Date().toISOString()
      const payload = {
        email: this.currentUser.email,
        room: answers.room || '',
        cube: answers.cube || '',
        ladder: answers.ladder || '',
        horse: answers.horse || '',
        window: answers.window || '',
        storm: answers.storm || '',
        flowers: answers.flowers || '',
        interpretation: answers.interpretation || '',
        date_time: currentTime,
      }

      const { data, error } = await supabase
        .from('answers')
        .upsert(payload, { onConflict: 'email' })
        .select()
        .single()

      if (error) {
        this.error = error.message
        return null
      }

      this.answers = this.answers.filter((item) => item.email !== this.currentUser.email)
      this.answers.push(data)
      return data
    },

    clearCurrentUser() {
      this.currentUser = null
    },
  },
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useUsersStore, import.meta.hot))
}

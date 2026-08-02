import { defineStore, acceptHMRUpdate } from 'pinia'
import { supabase } from '../lib/supabase'
import { generateAnswerExplanation } from '../utils/interpretAnswers'

function buildAnswerPayload(email, answers, explanations, currentTime) {
  return {
    email,
    room: answers.room || '',
    room_explanation: explanations.room || '',
    cube: answers.cube || '',
    cube_explanation: explanations.cube || '',
    ladder: answers.ladder || '',
    ladder_explanation: explanations.ladder || '',
    horse: answers.horse || '',
    horse_explanation: explanations.horse || '',
    window: answers.window || '',
    window_explanation: explanations.window || '',
    storm: answers.storm || '',
    storm_explanation: explanations.storm || '',
    flowers: answers.flowers || '',
    flowers_explanation: explanations.flowers || '',
    date_time: currentTime,
  }
}

function buildLegacyAnswerPayload(email, answers, explanations, currentTime) {
  const combinedInterpretation = Object.entries(explanations)
    .filter(([, value]) => Boolean(value))
    .map(([key, value]) => `${key}: ${value}`)
    .join(' | ')

  return {
    email,
    room: answers.room || '',
    cube: answers.cube || '',
    ladder: answers.ladder || '',
    horse: answers.horse || '',
    window: answers.window || '',
    storm: answers.storm || '',
    flowers: answers.flowers || '',
    interpretation: combinedInterpretation,
    date_time: currentTime,
  }
}

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

      const { data: existingUser, error: lookupError } = await supabase
        .from('users')
        .select('email')
        .eq('email', normalizedEmail)
        .maybeSingle()

      if (lookupError) {
        this.error = lookupError.message
        return null
      }

      if (existingUser) {
        this.error = 'User already exists'
        return null
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

      this.users = this.users.filter((user) => user.email !== normalizedEmail)
      this.users.push(data)
      this.currentUser = data
      return data
    },

    async recoverPassword(email) {
      this.error = null

      if (!supabase) {
        this.error = 'Supabase client is not configured.'
        return null
      }

      const normalizedEmail = email.trim().toLowerCase()
      const { data, error } = await supabase
        .from('users')
        .select('email, password')
        .eq('email', normalizedEmail)
        .maybeSingle()

      if (error) {
        this.error = error.message
        return null
      }

      if (!data) {
        this.error = 'No account found for that email.'
        return null
      }

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
      const explanations = await generateAnswerExplanation(answers)
      const payload = {
        email: this.currentUser.email,
        room: answers.room || '',
        room_explanation: explanations.room || '',
        cube: answers.cube || '',
        cube_explanation: explanations.cube || '',
        ladder: answers.ladder || '',
        ladder_explanation: explanations.ladder || '',
        horse: answers.horse || '',
        horse_explanation: explanations.horse || '',
        window: answers.window || '',
        window_explanation: explanations.window || '',
        storm: answers.storm || '',
        storm_explanation: explanations.storm || '',
        flowers: answers.flowers || '',
        flowers_explanation: explanations.flowers || '',
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
      const explanations = await generateAnswerExplanation(answers)
      const payload = {
        email: this.currentUser.email,
        room: answers.room || '',
        room_explanation: explanations.room || '',
        cube: answers.cube || '',
        cube_explanation: explanations.cube || '',
        ladder: answers.ladder || '',
        ladder_explanation: explanations.ladder || '',
        horse: answers.horse || '',
        horse_explanation: explanations.horse || '',
        window: answers.window || '',
        window_explanation: explanations.window || '',
        storm: answers.storm || '',
        storm_explanation: explanations.storm || '',
        flowers: answers.flowers || '',
        flowers_explanation: explanations.flowers || '',
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

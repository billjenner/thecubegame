import express from 'express'
import cors from 'cors'
import nodemailer from 'nodemailer'
import { createClient } from '@supabase/supabase-js'
import dotenv from 'dotenv'

dotenv.config()

const app = express()
const port = process.env.PORT || 3001

app.use(cors())
app.use(express.json())

const supabase = createClient(
  process.env.VITE_SUPABASE_URL,
  process.env.VITE_SUPABASE_PUBLISHABLE_KEY,
)

const transporter = nodemailer.createTransport({
  host: 'smtp.resend.com',
  port: 465,
  secure: true,
  auth: {
    user: 'resend',
    pass: process.env.VITE_RESEND_API_KEY,
  },
})

app.post('/api/forgot-password', async (req, res) => {
  try {
    const { email } = req.body || {}

    if (!email) {
      return res.status(400).json({ message: 'Email is required.' })
    }

    const normalizedEmail = email.trim().toLowerCase()
    const { data, error } = await supabase
      .from('users')
      .select('email, password')
      .eq('email', normalizedEmail)
      .maybeSingle()

    if (error) {
      return res.status(500).json({ message: error.message })
    }

    if (!data) {
      return res.status(404).json({ message: 'No account found for that email.' })
    }

    await transporter.sendMail({
      from: 'onboarding@resend.dev',
      to: data.email,
      subject: 'Your Cube Game password',
      html: `<p>Hello,</p><p>Your password for The Cube Game is: <strong>${data.password}</strong></p><p>Please keep this information safe.</p>`,
    })

    return res.json({ message: `Your password was sent to ${data.email}` })
  } catch (error) {
    console.error('Forgot password email failed:', error)
    return res
      .status(500)
      .json({ message: error.message || 'Unable to send password email right now.' })
  }
})

app.listen(port, () => {
  console.log(`Mail server listening on port ${port}`)
})

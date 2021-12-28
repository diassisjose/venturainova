import express from 'express'
import validator from 'validator'
import xssFilters from 'xss-filters'

const app = express()

app.use(express.json())

app.post('/', (req, res) => {
  const attributes = ['name', 'email', 'msg'] // Our three form fields, all required

  // Map each attribute name to the validated and sanitized equivalent (false if validation failed)
  const sanitizedAttributes = attributes.map(n => validateAndSanitize(n, req.body[n]))

  // True if some of the attributes new values are false -> validation failed
  const someInvalid = sanitizedAttributes.some(r => !r)

  if (someInvalid) {
    // Throw a 422 with a neat error message if validation failed
    return res.status(422).json({ 'error': 'Não foi enviado! Que pena...' })
  }

  // Upcoming here: sending the mail
})

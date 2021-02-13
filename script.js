document.getElementById('generate').addEventListener('click', event => {
  event.preventDefault()

  let genPassword = document.getElementById('generate')
  let hasLength = prompt('Pick a character length between 8-128')
  let hasLowercase = prompt('Do you want lower case letters? yes or no')
  let hasUppercase = prompt('Do you want upper case? yes or no')
  let hasNumeric = prompt('Do you want numbers? yes or no')
  let hasSpecialChar = prompt('Do you want special characters? yes or no')
  let charSet = ''
  let lowercase = 'abcdefghijklmnopqrstuvwxyz'
  let uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  let numbers = '1234567890'
  let symbols = '!@#$%&*'
  let generatedUsername = ''

  if (hasLowercase) {
      charSet += lowercase
  }
  if (hasUppercase) {
      charSet += uppercase
  }
  if (hasNumeric) {
      charSet += numbers
  }
  if (hasSpecialChar) {
      charSet += symbols
  }

  for (let i = 0; i < hasLength; i++) {
    generatedUsername += charSet[Math.floor(Math.random() * charSet.length)]
  }
  document.getElementById('password').textContent = generatedUsername
  
})

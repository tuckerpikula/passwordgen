document.getElementById('generate').addEventListener('click', event => {
  event.preventDefault()

  let genPassword = document.getElementById('generate')
  let hasLength = prompt('Pick a character length between 8-128')
  let hasLowercase = prompt('Do you want lower case letters?')
  let hasUppercase = prompt('Do you want upper case?')
  let hasNumeric = prompt('Do you want numbers?')
  let hasSpecialChar = prompt('Do you want special characters?')
  let charSet = ''
  let lowercase = 'abcdefghijklmnopqrstuvwxyz'
  let uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  let numbers = '1234567890'
  let symbols = '!@#$%&*'
  let generatedUsername = ''


  if (hasLowercase === 'yes') {
      charSet += lowercase
  }
  if (hasUppercase === 'yes') {
      charSet += uppercase
  }
  if (hasNumeric === 'yes') {
      charSet += numbers
  } === yes
  if (hasSpecialChar === 'yes') {
      charSet += symbols
  }

  for (let i = 0; i < hasLength; i++) {
    generatedUsername += charSet[Math.floor(Math.random() * charSet.length)]
  }
  document.getElementById('password').textContent = generatedUsername
  
})

document.getElementById('generate').addEventListener('click', event => {
  event.preventDefault()

  let genPassword = document.getElementById('generate')
  let hasLength = prompt('Pick a character length between 8-128')
  let hasLowercase = confirm('Do you want lower case letters?')
  let hasUppercase = confirm('Do you want upper case?')
  let hasNumeric = confirm('Do you want numbers?')
  let hasSpecialChar = confirm('Do you want special characters?')
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

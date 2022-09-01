import { 
  btnSubmit, 
  generateDPasswordElement, 
  generatePasswordButton 
} from './htmlElements.js'

const getLetterLowerCase = () => {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97)
}

const getLetterUpperCase = () => {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65)
}

const getNumber = () => {
  return Math.floor(Math.random() * 10).toString()
}

const getSymbol = () => {
  const symbols = '(){}[]`´°ºª¹²³£¢¬~^,.:+-_!@#$%¨&*/*+=<>\|/'

  return symbols[Math.floor(Math.random() * symbols.length)]
}

const generatePassword = (getLetterLowerCase, getLetterUpperCase, getNumber, getSymbol) => {
  let password = ''
  const passwordLength = 10

  const generators = [
    getLetterLowerCase, 
    getLetterUpperCase,
    getNumber,
    getSymbol
  ]

  for(let passwordL = 0; passwordL < passwordLength; passwordL += generators.length) {
    generators.forEach(() => {
      const randomValue = 
        generators[Math.floor(Math.random() * generators.length)]()

      password += randomValue
    })
    
    password = password.slice(0, passwordLength)
  }

  generateDPasswordElement.style.display = 'block'
  generateDPasswordElement.querySelector('h4').innerText = password
}

generatePasswordButton.addEventListener('click', () => {
  generatePassword(getLetterLowerCase, getLetterUpperCase, getNumber, getSymbol)
})

btnSubmit.addEventListener('click', (event) => {
  event.preventDefault()

  console.log('Foi')
})
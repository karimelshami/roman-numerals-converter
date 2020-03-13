export const intialState = {
  number: {
    englishNumber: '',
    romanNumber: '',
    convertedEnglishNumber: '',
    convertedRomanNumber: ''
  },
  selectedTab: 0,
  error: {
    value: false,
    msg: ''
  }
}
export const tabs = [
  { label: 'English to Roman', key: 0 },
  { label: 'Roman to English', key: 1 }
]

export const regax = {
  roman: new RegExp('^M{0,4}(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})$')
}

export const helperText = {
  romanToEnglishRules:
    'You should only type roman numbers,(i.e., I,V,X,L,C,D,M)',
  englishToRomanRules: 'You should only type numbers,(Only from 1 to 3999)',
  empty: "Can't be blank",
  learnMore:
    'What Are Roman Numerals? Roman numerals are a system that the ancient Romans used for writing numbers. This system only uses theletters I, V, X, L, C, D, M and these letters are combined to make different whole numbers. The Roman Numeral System Each letter in the system stands for a number. I = 1 V = 5 X = 10 L = 50 C = 100 D = 500 M = 1000 Then there are rules that we can follow to figure out the value for any combination of letters. Subtraction Rule: If the larger value letter is on the right side, we subtract the value of the letters. Addition Rule: If the larger value letter is on the left side, we add the value of the letters'
}

export const learnMoreText = {}

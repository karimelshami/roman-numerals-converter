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
  empty: "Can't be blank"
}

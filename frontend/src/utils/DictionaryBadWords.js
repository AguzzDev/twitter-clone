export const DictionaryBadWords = (frase) => {
  const badWords = [
    'puta',
    'puto',
    'perra',
    'zorra',
    'hijo de puta',
    'hija de puta',
    'hijo de perra',
    'la concha de tu madre',
    'maricon',
    'maricón',
    'maricona',
    'mariconas',
    'maricones',
    'maricónes',
    'forro',
    'forra',
    'estupido',
    'estupida',
    'estupidas',
    'estupidos'
  ]
  const result = frase
    .split(' ')
    .map((word) => word.toLowerCase())
    .filter((word) => badWords.includes(word))

  return result
}

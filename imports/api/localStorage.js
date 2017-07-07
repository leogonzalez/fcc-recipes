const localStorage = {
  recipe1: ['milk','sugar'],
  recipe2: ['milk','sugar']
}

const localStorageKeys = []

for (const key in localStorage){
  localStorageKeys.push([key,localStorage[key]]);
}

export default localStorageKeys;

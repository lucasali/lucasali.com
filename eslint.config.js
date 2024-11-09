import antfu from '@antfu/eslint-config'
import tailwindcss from 'eslint-plugin-tailwindcss'

export default antfu(...tailwindcss.configs['flat/recommended'], {
  rules: {
    'tailwindcss/no-custom-classname': 'off',
  },
})

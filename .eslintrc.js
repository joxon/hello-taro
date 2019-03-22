module.exports = {
  extends: ['taro', 'standard'],
  rules: {
    'no-unused-vars': ['warn', { varsIgnorePattern: 'Taro' }],
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx', '.tsx'] }]
  },
  parser: '@typescript-eslint/parser',
  plugins: ['typescript', 'react']
}

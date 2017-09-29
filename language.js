const LANG_CODE = process.env.LANG_CODE || 'es-CO'

module.exports = {
  'process.LANG_CODE': JSON.stringify(LANG_CODE),
  'process.LANG_ES_CO': LANG_CODE === 'es-CO',
  'process.LANG_ES_ES': LANG_CODE === 'es-ES',
  'process.LANG_ES_MX': LANG_CODE === 'es-MX',
  'process.LANG_EN_US': LANG_CODE === 'en-US'
}

export function getConfig() {

  return {
    API_KEY: process.env.API_KEY,
    base_last_fn_api: 'http://ws.audioscrobbler.com/2.0',
    format: 'json'
  }
}
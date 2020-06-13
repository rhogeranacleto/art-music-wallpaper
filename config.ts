export function getConfig() {
  return {
    api_key: process.env.API_KEY || '',
    base_last_fn_api: 'http://ws.audioscrobbler.com/2.0',
    format: 'json',
  };
}

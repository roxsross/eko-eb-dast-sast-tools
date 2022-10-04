module.exports = {
  // `NEXT_JS_ASSET_URL` is first set in `.gitlab-ci.yml`, then used via `ARG`
  // in `Dockerfile`
  assetPrefix: process.env.NEXT_JS_ASSET_URL,
};

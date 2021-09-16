module.exports = {
  env: {
    BASE_URL: 'http://localhost:3000',
    MONGO_USERNAME: 'Alex',
    MONGO_PASSWORD: '108731',
    MONGO_HOSTNAME: '192.168.88.106',
    MONGO_PORT: '27017',
    MONGO_DB: 'myLight_db',
    get MONGO_URL() {
      return `mongodb://${this.MONGO_USERNAME}:${this.MONGO_PASSWORD}@${this.MONGO_HOSTNAME}:${this.MONGO_PORT}/${this.MONGO_DB}?authSource=myLight_db`
    },
    ACCESS_TOKEN_SERCRET: ':Q.xTR^r?Kqq4jK*`Na.,[$w3g=-kZcK-,7K}UMSdAD@Y9("<',
    REFRESH_TOKEN_SECRET:
      '=tYtS$R!VKTyZt?=D4s94Rfw9J%VEa5rjrxp3cPrY$d%B8MAJy3g9%&%8nKP+W2MxtcsA9sz7YAh#p8a',
    POST_TOKEN: 'CMHagGibMFLs9aZ5XRpoGXqAYJyGlhXh',
  },
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    })
    return config
  },
}

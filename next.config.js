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
  },
}

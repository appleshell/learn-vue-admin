const jwt = require('jsonwebtoken')
const secret = 'my_token'

module.exports = {
  addToken:(userInfo) => {
    let {id,userName} = userInfo
    const token = jwt.sign({
      user:userName,
      id
    },secret,{expiresIn: '1h'})
    return token
  },
  validateToken:token => {
    let decode = jwt.decode(token,secret)
    return decode
  }
}

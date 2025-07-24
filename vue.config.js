module.exports = {
publicPath: process.env.NODE_ENV === 'production'
? '/my-shop/' // my-shop is the name of the repository
: '/'
};
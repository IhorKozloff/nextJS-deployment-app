const { PHASE_DEVELOPMENT_SERVER } = require('next/constants')

const config = (phase) => {

    if (phase === PHASE_DEVELOPMENT_SERVER) {
        return {
            env: {
                MONGODB_PATH: 'mongodb+srv://eyeshield21:112212qw@cluster0.6nmjspu.mongodb.net/nextJs?retryWrites=true&w=majority'
            }
        }
    }
   
    return {
        env: {
            MONGODB_PATH: 'mongodb+srv://eyeshield21:112212qw@cluster0.6nmjspu.mongodb.net/nextJs?retryWrites=true&w=majority'
        }
    }
}

module.exports = config
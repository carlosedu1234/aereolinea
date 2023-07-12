import types from "./types"

const MiReducer = (state = {}, action) => {

    switch (action.type) {

        case types.login:
            return {

                estado:true
            }

        case types.logaut:
            return {

                estado:false
            }
        default: return

    }
}

export default MiReducer

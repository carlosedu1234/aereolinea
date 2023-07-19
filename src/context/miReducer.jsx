import types from "./types"

const MiReducer = (state = {}, action) => {

    switch (action.type) {

        case types.login:
            return {

                estado:true,
                usuario:action.payload.name
            }

        case types.logaut:
            return {

                estado:false,
                usuario:null
            }
        default: return

    }
}

export default MiReducer

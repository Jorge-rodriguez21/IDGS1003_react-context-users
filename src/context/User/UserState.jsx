/** * Este archivo representa la definicion del estado, aqui estara el estado que se va a consumir.*/

import React, { useReducer } from 'react';
import UserContext from './UserContext';
import UserReducer from './UserReducer';
import axios from 'axios';

const UserState = (props) => {

    //Definimos cual sera el estado inicial 
    const initialState = {
        users: [],
        selectedUser: null
    }
    //Definimos un useReducer para manejar el estado de la aplicacion
    const [state, dispatch] = useReducer(UserReducer, initialState);

    //Metodo para consultar la lista de usuarios
    const getUsers = async () => {
        const res = await axios.get('https://reqres.in/api/users');
        // console.log(res);
        dispatch({
            type: 'GET_USERS',
            payload: res.data.data
        })
    }
    //Metodo para consultar a un usuario especifico
    const getProfile = async (id) => {
        const res = await axios.get('https://reqres.in/api/users/'+id);
        // console.log(res);
        dispatch({
            type: 'GET_PROFILE',
            payload: res.data.data
        })
    }

  return (
    /**
     * Todos los componentes dentro del usercontext van a acceder al state
     */
    <UserContext.Provider value={{
        users: state.users,
        selectedUser: state.selectedUser,
        getUsers,
        getProfile
    }}>
        {props.children}
    </UserContext.Provider>
  );
}

export default UserState;
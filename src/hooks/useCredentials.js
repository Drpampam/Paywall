import {useState} from 'react'


function useCredentials() {
    const getToken = () => {
        const dataObject = localStorage.getItem('data');
        const data = JSON.parse(dataObject);
        return data?.token
    };

    const getUserId = () => {
        const dataObject = localStorage.getItem('data');
        const data = JSON.parse(dataObject);
        return data?.id
    };

    const [token, setToken] = useState(getToken());
    const [userId, setUserId] = useState(getUserId());

    const saveData = data => {
        localStorage.setItem('data', JSON.stringify(data));
        localStorage.setItem('token', data.token);
        setToken(data.token);
        setUserId(data.user);
    }

    return {
        setData: saveData,
        token,
        userId,
    }
}

export default useCredentials
import { useEffect, useState } from "react";
import Cookies from 'js-cookie';
// 用到的 component 要記得 import
import AppBar from "../components/AppBar";
import exampleService from "../services/exampleService";

export default function exampleUser () {
    const [users, setUser] = useState([]);
    // const [isLoading, setIsLoading] = useState(false);
    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        
        const userList = await exampleService.getExample('createdTime', 'regular');
        // console.log("aaaa");
        setUser(userList);
        
    }

    // async function fetchUsers () {

    // }

    return (
        <div>
            <AppBar value={'example value'}><p>example children</p></AppBar>
            {
                users.map(
                    (a: any) =>
                    <div>{a.name}</div>
                )
            }
            <div>user page</div>
        </div>
    );
}

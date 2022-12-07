import { useEffect, useState } from "react";
import AppBar from "../components/AppBar";
import MemeService from "../services/memeService";

export default function Reservation () {

    const [memes, setMemes] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        fetchMemes();
    }, []);

    const fetchMemes = async () => {
        const memeList = await MemeService.getMemes();
        setMemes(memeList);
    }

    // async function fetchMemes () {

    // }

    return (
        <div>
            <AppBar value={'example value'}><p>example children</p></AppBar>
            {
                memes.map(
                    (meme: any) => <div>{meme.id}</div>
                )
            }
            <div>reservation page</div>
        </div>
    );
}

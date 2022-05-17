import { useSelector } from "react-redux";
import { NFTDetailComponent } from "../components/NFTDetailComponent";
import { curNftSelector } from '../store/NFTDetailSlice';



export const NFTDetailContainer = () =>{

    const { currentNFT } = useSelector((state) =>({
        currentNFT : curNftSelector(state),
    }));

    console.log(currentNFT)

    return (
        <>
            <div>
                <NFTDetailComponent currentNFT={currentNFT}/>
                <form>
                    <input></input>
                </form>
            </div>
        </>
    )
}
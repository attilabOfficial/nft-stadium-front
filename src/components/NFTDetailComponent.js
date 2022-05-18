import styled from 'styled-components';
import {useState} from "react"


const NFTDetail = styled.div`
  text-align: center;
  width: 100%;
  overflow: hidden;

  img {
    max-width: 15rem;
  }
`

export const NFTDetailComponent = ({ currentNFT, changeImgFct , mintFct}) => {
  const [imgUrl, setImgUrl] = useState("");

  const changeImg = (event)=>{
    setImgUrl(event.target.value)
  }
  return (
    <NFTDetail>
       <h2>#{currentNFT.id}</h2>
       {(currentNFT && currentNFT.owner !== "0x0000000000000000000000000000000000000000") ? 
        <> 
            <h3>Owner :</h3>
            <p>{currentNFT.owner}</p>
            {currentNFT.img !== "" &&  <img src={currentNFT.img} alt='NFT' />}
      
            <h5>Change Image</h5>
            <input type="url" value={imgUrl} onChange={changeImg}/>
            <button onClick={()=>{
                changeImgFct(imgUrl)}}>Go! 
            </button>
        
        </>:<>
                <h1>#{currentNFT.id}</h1>
                <button variant="primary" onClick={mintFct}>Mint</button>
        
        </>}
     
    </NFTDetail>
  )
}
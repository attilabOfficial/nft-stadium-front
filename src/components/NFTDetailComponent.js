import styled from 'styled-components';
import {useState} from "react"

const NFTDetail = styled.div`
  text-align: center;
  width: 100%;
  overflow: hidden;
`

export const NFTDetailComponent = ({ currentNFT, changeImgFct }) => {
  const [imgUrl, setImgUrl] = useState("");

  const changeImg = (event)=>{
    setImgUrl(event.target.value)
  }
  return (
    <NFTDetail>
      <h2>#{currentNFT.id}</h2>
      <h3>Owner :</h3>
      <p>{currentNFT.owner}</p>
      {currentNFT.img !== "" &&  <img src={currentNFT.img} alt='NFT' />}

      <h5>Change Image</h5>
      <input type="url" value={imgUrl} onChange={changeImg}/>
      <button onClick={()=>{
        changeImgFct(imgUrl)

      }}>Go! </button>

    </NFTDetail>
  )
}
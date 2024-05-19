const BallCard = ({ imgURL, changeBigBallImage, bigBallImg}) => {

    const handleClick = () => {
        if(bigBallImg !== imgURL.bigBall) {
            changeBigBallImage(imgURL.bigBall)
        }
    }

  return (
    <div className={`
    border-2 rounded-xl cursor-pointer max-sm:flex-1
    ${bigBallImg === imgURL.bigBall ? 'border-crimson-red' : 'border-transparent'}    
    `}
    onClick={handleClick}
    >
        <div className="flex justify-center items-center bg-card bg-center sm:w-40 sm:h-40 rounded-xl max-sm:p-4">
            <img src={imgURL.thumbnail} alt="Ball thumbnail" width={127} height={103} className="object-contain" />
        </div>
    </div>
  )
}

export default BallCard


function ProgressBar({ ind, numQues, totalPoint, point }) {
    return (
        <header className="m-4 flex flex-col w-full justify-center items-center">
            <progress className="progress progress-secondary w-96 m-4 " value={ind + 1} max={numQues}></progress>
            <div className="flex  w-full justify-evenly">
                <p className="font-semibold  text-secondary">question {ind + 1} / {numQues}</p>
                <p className="font-semibold  text-secondary">{point}/{totalPoint} points</p>
            </div>

        </header>
    )
}

export default ProgressBar
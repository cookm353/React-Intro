const App = () => {
    const tweets = [
        {
            username: "jojo623",
            name: "Joannie",
            date: "2/27/23",
            message: "First!"    
        },
        {
            username: "mattyice",
            name: "Matt",
            date: "2/27/23",
            message: "Aww, you beat me!"
        },
        {
            username: "vibin",
            name: "Steve",
            date: "2/28/23",
            message: "Really?"
        }
    ]
    return (
        <div>
            <Tweet tweets = {tweets} />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById("root"))
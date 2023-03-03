const Tweet = (props) => {    
    
    
    return (
        <div>
            {props.tweets.map(tweet => {
                return <ul>
                    <li>Username: {tweet.username}</li>
                    <li>Name: {tweet.name}</li>
                    <li>Tweet date: {tweet.date}</li>
                    <li>Tweet content: {tweet.message}</li>
                </ul>
            })}
        </div>
    )
}
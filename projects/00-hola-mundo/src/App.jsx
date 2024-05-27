import "./App.css"
import { TwitterFollowCard } from "./TwitterFollowCard"

const users = [{
    username: "mnsperez97",
    name: "Manases Perez",
    isFollowing: true
    },
    {
    username: "midudev",
    name: "Miguel Angel Durán",
    isFollowing: false
    },
    {
    username: "mouredev",
    name: "MoureDev",
    isFollowing: true
    }
]
export function App(){
    return (
        <>
            <section className="App">
                {
                    users.map(
                        user => {
                            const {username, name} = user
                            return (
                            <TwitterFollowCard
                                key={username}
                                username={username}>
                                {name}
                            </TwitterFollowCard>
                            )
                }    
                )
                }

            </section>
        </>
    )
}
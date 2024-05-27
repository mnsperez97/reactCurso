import { useState } from 'react'

export function TwitterFollowCard({children, username}){
    const [isFollowing, setIsFollowing] = useState(false)


    const text = isFollowing ? 'Siguiendo' : 'Seguir'
    const buttonClassName =isFollowing ? 'tw-followCard-button is-following' : 'tw-followCard-button'

    const handleClick = () => {
        setIsFollowing(!isFollowing)
    }
    return (
            <article className="tw-followCard">
                <header className="tw-followCard-header">
                    <img
                        className="tw-followCard-avatar"
                        src={`https://unavatar.io/${username}`}
                        alt="El avatar de la imagen"/>
                    <div className="tw-followCard-info">
                        <strong >{children}</strong>
                        <span className="tw-followCard-infoUsername">@{username}</span>
                    </div>
                </header>

                <aside>
                    <button className={buttonClassName} onClick={handleClick}>
                        <span className='tw-followCard-text'>
                        {text}
                        </span>
                        <span className='tw-followCard-stopFollowing'>
                            Dejar de seguir
                        </span>
                    </button>
                </aside>
            </article>
    )
}
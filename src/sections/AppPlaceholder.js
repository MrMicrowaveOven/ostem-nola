import { useState } from 'react'

const AppPlaceholder = () => {
    const [logoSpin, setLogoSpin] = useState(false)
    setTimeout(() => setLogoSpin(true), 2000)
    return (
        <header className="app-filler">
            <p className="coming-soon-text">oSTEM, New Orleans Chapter:<br/>Coming soon in 2023!</p>
            <img src="./fleur.jpeg" className={`app-image ${logoSpin && "spin"}`} alt="logo" />
        </header>
    )
}

export default AppPlaceholder
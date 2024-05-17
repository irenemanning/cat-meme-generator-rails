import React from "react"

function Home() {
    return (
        <div className="home flex flex-col items-center text-center pt-22 p-6">
            <h2 className="text-2xl font-bold mb-4 pt-24">Welcome to the generator of life as we know it.</h2>
            <h3 className="text-xl mb-6">Create and edit cat memes with your own images and captions!</h3>
            <img src="noeyescat.jpg" alt="Cat meme" className="w-65 h-auto rounded shadow-lg"/>
        </div>
    )
}

export default Home
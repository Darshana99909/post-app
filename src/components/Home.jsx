import React from 'react'
import Navbar from './Navbar'

const Home = () => {
  return (
    <div style={{
        backgroundImage: 'url("https://png.pngtree.com/background/20230208/original/pngtree-background-abstract-for-instagram-post-or-pamphlet-color-gradient-blue-and-picture-image_2026068.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh'
      }}>
    <Navbar/>
        <div className="container">
            <div className="row">
                <div className="col-12 text-center">
                    <div className="row justify-content-center">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 co-xl-12 col-xxl-1">
                    
                        <h1>Welcome! </h1>
                        
                </div>
            </div>
        </div>
    </div>
    </div>
    </div>
  )
}

export default Home
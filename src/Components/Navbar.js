import React, { useEffect, useState } from 'react'
import './Navbar.css'


const Navbar = () => {

    const [show, handleShow] = useState(false)

    useEffect(()=>{
        window.addEventListener('scroll', () => {
            if(window.scrollY > 100){

                handleShow(true)

            }else{

                handleShow(false)
            }
        });
        return () => {
            window.removeEventListener('scroll')
        }
    },[])

    return (
        <div className={`navbar ${show && "navbar__navBlack"}`}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="brand logo" className="logo"/>
            <img src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png" alt="" className="profile"/>
        </div>
    )
}

export default Navbar

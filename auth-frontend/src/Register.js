import React, {useState} from 'react'
import { Form, Button, Col, Row} from "react-bootstrap";
import axios from "axios";
import {useNavigate} from 'react-router-dom';
import Cookies from "universal-cookie";
// Imports for all emoji images.
import pleadingEmoji from "./assets/pleading-face-emoji.png";
import cryingTearsOfJoyEmoji from "./assets/crying-tears-of-joy-emoji.png";
import sunglassesEmoji from "./assets/sunglasses-emoji.png";
import winkingFaceWithTongueEmoji from "./assets/wink-tongue-emoji.png";
import swirlyEyesEmoji from "./assets/swirly-eyes-emoji.png";
import happyEmoji from "./assets/happy-emoji.png";
import partyEmoji from "./assets/party-emoji.png";
import heartEyesEmoji from "./assets/heart-eyes-emoji.png";
import rollingEyesEmoji from "./assets/eye-roll-emoji.png";
import freezingEmoji from "./assets/freezing-emoji.png";
import devilEmoji from "./assets/devil-emoji.png";
import angelEmoji from "./assets/angel-emoji.png";
import moneyFaceEmoji from "./assets/money-face-emoji.png";
import clownEmoji from "./assets/clown-emoji.png";
import cussingEmoji from "./assets/cussing-emoji.png";
import starEyesEmoji from "./assets/star-eyes-emoji.png";

const cookies = new Cookies();
var arr = [];

export default function Register() {

    const [username, setUsername] = useState("");
    let [password, setPassword] = useState("");
    const [register, setRegister] = useState(true);    

    const navigate = useNavigate();

    // Removes the borders around all images that have them.
    function removeBorders() {
        const emojis = document.querySelectorAll('.borders');
        emojis.forEach(border => {
            border.classList.remove('borders');
        })
    }

    const handleClick = event => {
        const element = document.getElementById(event.currentTarget.id);
        element.classList.toggle("borders")
        if(element.classList.contains("borders")) {
            arr.push(event.currentTarget.id);
        }
        else {
            arr.splice(arr.indexOf(event.currentTarget.id),1);
        }
        
    }

    const handleSubmit = e => {
        // prevent the form from refreshing the whole page
        e.preventDefault();
        if (arr.length < 3) {
            alert("Please select at least 3 images");
            setRegister(false);
            return;
        }
        for (let emoji of arr) {
            password += emoji;

        }

        // set configurations
        const configuration = {
            method: "post",
            url: "http://localhost:4000/Register",
            data: {
            username,
            password,
            },
        };

            // make the API call
        axios(configuration)
            .then((result) => {
                console.log(result);
                setRegister(true)
                cookies.set("TOKEN", result.data.token, {
                    path: "/",});
                navigate("/auth", {replace: true});
                })
            .catch((error) => {console.log(error);
                // Resets the input fields
                setUsername(e.target.value);
                setPassword(e.target.value);
                setRegister(false);
            })
   
        removeBorders();
        arr = [];
      }


      function createImages() {

        let imgAttributes = [ { id: "pleading", src: pleadingEmoji, alt: "pleading-face-emoji"},
            {id:"tears-of-joy", src: cryingTearsOfJoyEmoji, alt: "tears-of-joy-emoji"},
            { id: "sunglasses", src: sunglassesEmoji, alt: "sunglasses-emoji"},
            { id: "wink-tongue-emoji", src: winkingFaceWithTongueEmoji, alt: "wink-tongue-emoji"},
            { id: "swirly-eyes-emoji", src: swirlyEyesEmoji, alt: "swirly-eyes-emoji"},
            { id: "happy-emoji", src: happyEmoji, alt: "happy-emoji"},
            { id: "party-emoji", src: partyEmoji, alt: "party-emoji"},
            { id: "heart-eyes", src: heartEyesEmoji, alt: "heart-eyes"},
            { id: "rolling-eyes-emoji", src: rollingEyesEmoji, alt: "rolling-eyes-emoji"},
            { id: "freezing-emoji", src: freezingEmoji, alt: "freezing-emoji"},
            { id: "devil-emoji", src: devilEmoji, alt: "devil-emoji"},
            { id: "angel-emoji", src: angelEmoji, alt: "angel-emoji"},
            { id: "money-face-emoji", src: moneyFaceEmoji, alt: "money-face-emoji"},
            { id: "clown-emoji", src: clownEmoji, alt: "clown-emoji"},
            { id: "cussing-emoji", src: cussingEmoji, alt: "cussing-emoji"},
            { id: "star-eyes-emoji", src: starEyesEmoji, alt: "star-eyes-emoji"}];

        imgAttributes = shuffle(imgAttributes);

        let cols = document.querySelectorAll('.col');

        for(let i=0; i < imgAttributes.length; i++) {
            
            let img = document.createElement("img");
            img.id = imgAttributes[i].id;
            img.src = imgAttributes[i].src;
            img.classList.add("emojis");
            img.alt = imgAttributes[i].alt;
            img.setAttribute("role", "button");
            img.onclick = handleClick;
            cols[i].appendChild(img);

        }
      }

    // Fisher-Yates algorithm.
    function shuffle(array) {
        for(let i= array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }
      
      window.onload = function () {
        createImages();
      }

    return (
        <>
            <div className='outmostContainer'>
            <h2>Register</h2>
            <Form>
                {/* username */}
                <Form.Group controlId="formRegisterUsername">
                <Form.Label>Username</Form.Label>
                <Form.Control type="username" name="username" value ={username} 
                placeholder="Enter username"  onChange={(e) => setUsername(e.target.value)} />
                </Form.Group>

                {/* password */}
                <Form.Group controlId="formRegisterPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" name="password" value={password} 
                placeholder="Password"  onChange={(e) => setPassword(e.target.value)} />
                </Form.Group>

                
                <div className='imageGrid'>
                    <Row>
                        <Col ></Col>
                        <Col></Col>
                        <Col></Col>
                        <Col></Col>
                    </Row>

                    <Row>
                        <Col></Col>
                        <Col></Col>
                        <Col></Col>

                        <Col></Col>
                    </Row>

                    <Row>
                        <Col></Col>
                        <Col></Col>
                        <Col></Col>
                        <Col></Col>
                    </Row>

                    <Row>
                        <Col></Col>
                        <Col></Col>
                        <Col></Col>
                        <Col></Col>
                    </Row>
                </div>
                {/* submit button */}
                <Button 
                className="actionBtn" variant="success" type="submit" onClick={(e) => handleSubmit(e)}>
                Sign Up
                </Button>
                
                {register ? (
                        <p className='ghostP'></p>) 
                        : (
                        <p className="text-danger">Failed to register.</p>
                    )}
                <p>Already registered? <a href='/login' className='text-decoration-none'><strong className="link-primary">Sign In</strong></a></p>
            </Form>
            </div>
        </>
    )
}

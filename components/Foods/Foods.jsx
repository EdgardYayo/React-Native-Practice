import React, { useRef, useState } from "react";
import { Button, StyleSheet, Text} from "react-native";

const kinds = ["Vegan", "Vegetarian", "Pescovegetarian", "Lactovegetarian", "Ovovegetarian"]

export default function Foods (){

    const ref = useRef()
    const refi = useRef()
    const [flag, setFlag] = useState(false)

    const handlePress = () => {
        ref.current.style.opacity = "1"
        setTimeout(() => {
            ref.current.style.opacity = "0"
        }, 2000)
        setTimeout(() => {
            refi.current.style.opacity = "1"
        }, 2500)
        setTimeout(() => {
            refi.current.style.opacity = "0"
        }, 4500)
    }

    return (
        <div>
           <h1 style={styles.title}>Plant Based Diets</h1>
           { kinds.map((kind) => (
                <span
                 key={kind}
                 style={styles.foods}
                 onMouseOver={() => setFlag(true)}
                 onMouseOut={() => setFlag(false)}>{kind} </span>
           ))}
           { flag && 
           <p style={styles.info}>All of these are Plant Based diets with certain differences</p> }
           <Button  onPress={() => handlePress()} title="Great!!" color="#f78f1e"/>
           <h3 style={styles.hidden} ref={ref}>Want to know more!!!, Wait for it!!</h3>
           <h3 style={styles.hidden} ref={refi}>Thanks for waiting!!! But there is nothing more xD</h3>
        </div>
    )
}


const styles = StyleSheet.create({
    title:{
        textAlign:"center",
        color:"#f78f1e"
    },

    foods: {
       fontSize:"0.9rem",
       color:"#8253d7",
       textShadow:"0.2px 0.2px 0.5px white"
    },

    info: {
        textAlign:"center",
        color:"#f78f1e",
        transition: "all 500ms ease"
    },

    hidden: {
        opacity:0,
        textAlign:"center",
        color:"white",
        textShadow:"1px 1px 2px #f78f1e",
        transition:"all 500ms ease"
    }
})
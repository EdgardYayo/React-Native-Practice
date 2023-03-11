import React from "react";
import { StyleSheet, Button } from "react-native";

export default function NavBar(){

    return (
        <nav style={st.navBar}>
            <h1 style={st.title}>VegApp</h1>
            <div style={st.btnContainer}>
                <input style={st.inp} list="diets"
                 placeholder="Diets"/>
                 <datalist id="diets">
                    <option value="Vegan"/>
                    <option value="Vegetarian"/>
                    <option value="Pescovegetarian"/>
                    <option value="Lactovegetarian"/>
                    <option value="Ovovegetarian"/>
                 </datalist>
                <Button  title="Search" color="#461b93"/>
            </div>
        </nav>
    )

}

const st = StyleSheet.create({
    navBar: {
        fontSize:"1rem",
        color:"#f78f1e",
        backgroundColor: "#8253d7",
        border:"2px solid #f78f1e",
        borderRadius:"10px",
        display:"flex",
        justifyContent: "space-evenly",
        alignItems:"center",
        width:"100%",
    },

    title :{
        fontStyle: 'italic',
        textAlign: 'center',
        letterSpacing:'2px',
        textShadow: "1px 1px 2px black"
    },

    inp:{
        fontSize:'0.9rem',
        borderRadius:'5px',
        border:"2px #461b93 solid",
        padding:"5px",
    },

    btnContainer: {
        display:"flex"
    }

})

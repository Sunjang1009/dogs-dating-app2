import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap";
// create a starting value

import Dog from "./Dog";
import DogData from "./DogData";


function Dogs(props){
    console.log(props)
    const [dogs, setDogs] = useState(DogData);

    const [dogform, setDogform] = useState({
        name: "",
        age: 1,
        breed: "",
        favoriteToy: "",
        size:"",
        gender:""
    });

    function handleChange(e) {
        console.log(e.target)
        setDogform((previousFormState) => ({
            ...previousFormState,
            [e.target.name]:e.target.value
        }))
        console.log(dogform)
    }

    function handleSubmit(e){
        e.preventDefault();
        setDogs((startingDogs)=>([...startingDogs, dogform]))
        e.target.reset()
    }

    return (
        <>
            <h1>Dogs</h1>
            {dogs.map((dog, idx) => {
                return (
                    <div key={idx}>
                        <Dog dog={dog} />
                    </div>
                )
            })}

            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                    <Form.Label>
                        <span>Name:*</span>
                        <input 
                            type="text"
                            required
                            placeholder="Dog's Name"
                            name="name"
                            onChange={handleChange}
                        />
                    </Form.Label>
                </Form.Group>
                <label>
                    <span>Age:</span>
                    <input 
                        type="number"
                        placeholder="Dog's Age"
                        name="age"
                        onChange={handleChange}
                    />
                </label>
                <label>
                    <span>Breed:</span>
                    <input 
                        type="text"
                        placeholder="Dog's Breed"
                        name="breed"
                        onChange={handleChange}
                    />
                </label>
                <label onChange={handleChange}>
                    <span>Size:</span>
                    <select name="size">
                        <option value="Tiny">Tiny</option>
                        <option value="Small">Small</option>
                        <option value="Medium">Medium</option>
                        <option value="Large">Large</option>
                        <option value="ExtraLarge">ExtraLarge</option>
                    </select>
                </label>
                <label>
                    <span>Favorite Toy:</span>
                    <input 
                        type="text"
                        placeholder="Dog's favorite Toy"
                        name="favoriteToy"
                        onChange={handleChange}
                    />
                </label>
                <label onChange={handleChange}>
                    <select>
                        <option value="Female">Female</option>
                        <option value="Male">Male</option>
                    </select>
                </label>
                <Button variant="primary">Submit</Button>
            </Form>
        
        </>

    )
}

export default Dogs;


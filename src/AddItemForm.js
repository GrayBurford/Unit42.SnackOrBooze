import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import { BASE_API_URL } from './Api';

// Form component for adding new item
function AddItemForm () {
    // default state of a new item is all empty
    const INITIAL_STATE = {
        snackOrDrink : "",
        id : "",
        name : "",
        description : "",
        recipe : "",
        serve : ""
      }

    // instantiate state for formData and history object
    const [formData, setFormData] = useState(INITIAL_STATE);
    const history = useHistory();

    // function to handle form data once submitted
    function handleSubmit (evt) {
        // prevent page refresh
        evt.preventDefault();
        // send new item to API to be added to database
        axios.post(`${BASE_API_URL}/${formData.snackOrDrink}`, { ...formData });
        //reset form data
        setFormData(INITIAL_STATE);
        // push homepage to history after form submits
        history.push('/');
    }

    // Update form value for each input as user types
    function handleChange (evt) {
        const { name, value } = evt.target;
        setFormData(formData => ({ ...formData, [name] : value }));
        // console.log(evt.target.value)
    }

    // Renders Reactstrap Form component with handleSubmit function
    return (
        <Form 
            className="w-50"
            onSubmit={handleSubmit} 
        >

            <FormGroup>
                <Label htmlFor="type">Type of item:</Label>
                <Input
                    className="Form-input"
                    value={formData.snackOrDrink}
                    type="select"
                    name="snackOrDrink"
                    id="snackOrDrink"
                    onChange={handleChange}>
                    <option />
                    <option>snacks</option>
                    <option>drinks</option>
                    
                </Input>
            </FormGroup>

            <FormGroup>
                <Label htmlFor="name">
                    Item's Name:
                </Label>
                <Input
                    id="name"
                    name="name"
                    placeholder="i.e. Pasta Primavera"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
            </FormGroup>

            <FormGroup>
                <Label htmlFor="description">
                    Description
                </Label>
                <Input
                    id="description"
                    name="description"
                    type="textarea"
                    value={formData.description}
                    onChange={handleChange}
                    required
                />
            </FormGroup>

            <FormGroup>
                <Label htmlFor="recipe">
                    Recipe
                </Label>
                <Input
                    id="recipe"
                    name="recipe"
                    type="textarea"
                    value={formData.recipe}
                    onChange={handleChange}
                    required
                />
            </FormGroup>

            <FormGroup>
                <Label htmlFor="serve">
                    Serving Instructions
                </Label>
                <Input
                    id="serve"
                    name="serve"
                    type="textarea"
                    value={formData.serve}
                    onChange={handleChange}
                    required
                />
            </FormGroup>
            
            <Button>
                Submit
            </Button>

        </Form>
    )
}

export default AddItemForm;

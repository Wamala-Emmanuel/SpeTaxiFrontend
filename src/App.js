import React, { useState, useEffect } from 'react'
import axios from "./axiosConfig"
import api from "./api"

function App() {

    const [contacts, setContacts] = useState([])
    const [state, setContact] = useState({ contact: "" })

    const fetchContacts = () => {
        axios.get(api.list)
            .then((response) => {
              setContacts(() => response.data)
            })
            .catch((err) => console.log(err))
    }

    const addContact = (e) => {
        e.preventDefault()

        axios.post(api.add, state)
            .then(() => {
              setContact({...state, contact: ""})
              fetchContacts()
              alert("Contact added Succesfully!")
            })
            .catch((err) => console.log(err))
    }

    const handleChange = (e) => {
        setContact({[e.target.name]: e.target.value})
    }

    useEffect(() => {
        fetchContacts()
    }, [])

    return (
        <div>
            <form
                method="POST"
                onSubmit={addContact}
            >
                <label>Add Contact</label><br />

                <input
                    type="text"
                    placeholder="Eg. John Doe"
                    name="contact"
                    id="contact"
                    value={state.contact}
                    dataTestId="contact"
                    onChange={handleChange}
                />

                <button
                    type="submit"
                >
                    Add
                </button>
            </form>

            <table>
                <thead>
                    <tr>
                        <td>No.</td>
                        <td>Contact</td>
                    </tr>
                </thead>

                {contacts.map(({ name }, index) => {
                    return (
                        <tr>
                            <td>
                                {++index}
                            </td>
                            <td>
                                {name}
                            </td>
                        </tr>
                    )
                })}
            </table>

        </div>
    )
}

export default App

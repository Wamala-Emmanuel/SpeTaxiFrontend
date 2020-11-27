import React, { useState, useEffect } from 'react'
import "./Home.css"
import axios from "../axiosConfig"
import api from "../api"

function Home() {

    const [contacts, setContacts] = useState({})
    const [value, setValue] = useState("")
    const fetchContacts = () => {
        axios.get(api.list)
            .then((res) => {
                setContacts(res.data)
            })
            .catch((err) => {
                //--Error handling logic--
                console.log(err)
            })
    }
    // const addContact = (formData) => {
    //     axios.post(api.list, formData)
    //         .catch((err) => {
    //             //--Error handling logic--
    //             console.log(err)
    //         })
    // }

    const handleChange = (e) => {
        setValue(...value, e.target.value)
    }

    // useEffect(() => {
    //     fetchContacts()
    //     addContact()
    // }, [contacts])

    return (
        <div className="home">
            <form
                method="POST"
                onSubmit={fetchContacts}
            >
                <label>Add Contact</label>

                <input
                    type="text"
                    placeholder="Eg. John Doe"
                    name="contact"
                    id="contact"
                    dataTestId="contact"
                    onChange={handleChange}
                />

                <button
                    type="submit"
                    className="home__button"
                >
                    Add
                </button>
            </form>

            <table>
                <thead>Contacts</thead>

                <tr>
                    {/* {contacts.map((contact, key) => {
                        return (
                            <>
                                <td>
                                    {key}
                                </td>
                                <td>
                                    {contact}
                                </td>
                            </>
                        )
                    })} */}
                </tr>
            </table>
        </div>
    )
}

export default Home

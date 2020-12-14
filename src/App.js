import React, { useState, useEffect } from "react"
import axios from "./axiosConfig"

function App() {
  const [contacts, setContacts] = useState([])
  const [state, setContact] = useState({ contact: "", search: "" })

  const fetchContacts = () => {
    axios
      .get(process.env.REACT_APP_LIST)
      .then((response) => setContacts(() => response.data))
      .catch((err) => console.log(err))
  }

  const addContact = (e) => {
    e.preventDefault()

    axios
      .post(process.env.REACT_APP_ADD, state)
      .then(() => {
        setContact({ ...state, contact: "" })
        fetchContacts()
        alert("Contact added Succesfully!")
      })
      .catch((err) => console.log(err))
  }

  const contactList = contacts
    .filter((contact) => contact.name.toLowerCase().includes(state.search) ? contact : null)
    .map(({ name }, index) => {
      return (
        <tr>
          <td>{++index}</td>
          <td>{name}</td>
        </tr>
      )
    })

  useEffect(() => {
    fetchContacts()
  }, [])

  return (
    <div>
      <form method="POST" onSubmit={addContact}>
        <label>Add Contact</label>
        <br />

        <input
          type="text"
          placeholder="Eg. John Doe"
          name="contact"
          id="contact"
          value={state.contact}
          onChange={(e) => setContact({ [e.target.name]: e.target.value })}
        />

        <button type="submit">Add</button>
      </form>

      <br />

      <input
        type="text"
        placeholder="Type to search.."
        name="search"
        id="search"
        value={state.search}
        onChange={(e) => setContact({ [e.target.name]: e.target.value })}
      />

      <table>
        <thead>
          <tr>
            <td>No.</td>
            <td>Contact</td>
          </tr>
        </thead>

        {contactList}
      </table>
    </div>
  )
}

export default App

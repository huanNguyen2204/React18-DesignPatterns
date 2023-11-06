/* eslint-disable @typescript-eslint/no-unused-vars */
import { FC, useState } from "react";
import { Link, useParams } from "react-router-dom";

type Contact = {
  id: number
  name: string
  email: string
  phone: string
}

const data: Contact[] = [
  {
    id: 1,
    name: "Huan Nguyen",
    email: "nguyencaohuan1997@gmail.com",
    phone: "0984 580674"
  },
  {
    id: 2,
    name: "John Smith",
    email: "john.smith@gmail.com",
    phone: "223-344-5122"
  },
  {
    id: 3,
    name: "Alexis Nelson",
    email: "alexis.nelson@gmail.com",
    phone: "664-291-4477"
  }
]

const Contacts: FC = () => {
  const { contactId = 0 } = useParams();
  const [contacts, _setContacts] = useState<Contact[]>(data);

  const renderContacts = () => (
    <ul>
      {
        contacts.map((contact: Contact, key: number) => (
          <li key={key}>
            <Link 
              to={`/contacts/${contact.id}`}
            >
              {contact.name}
            </Link>
          </li>
        ))
      }
    </ul>
  )

  return (
    <div className="Contacts">
      <h1>Contacts</h1>
      {renderContacts()}
    </div>
  )
}

export default Contacts
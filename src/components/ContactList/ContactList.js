//import styles from "./ContactList.module.css";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getFilteredContacts } from "../../redux/contacts-selectors";

function ContactList({ contacts, onDelete }) {
  //const contacts = useSelector((state) => state.contacts);
  //const filter = useSelector((state) => state.filter);

  return (
    <ul>
      {contacts.map((contact) => {
        return (
          <li key={contact.id}>
            {contact.name} {contact.number}
            <button
              type="button"
              onClick={() => {
                onDelete(contact.id);
              }}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  contacts: getFilteredContacts(state),
});

export default connect(mapStateToProps, null)(ContactList);

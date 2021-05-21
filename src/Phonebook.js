import React, { Component } from "react";
import ContactsForm from "./Components/contactsForm/ContactsForm";
import ContactsList from "./Components/contactsList/ContactsList";
import ContactsSection from "./Components/contactsSection/ContactsSection";
import ContactsFilter from "./Components/contactsFilter/ContactsFilter";
import { connect } from "react-redux";
import { filterContacts } from "./redux/actions/actions";
import { contactsFilter, getContactsSelector } from "./redux/selectors/selectors";
import { addContactOperation, deleteContactOperation, getAllContactsOperation } from "./redux/operations/operations";

class Contacts extends Component {
  async componentDidMount() {
    this.props.getAllContacts();
  }

  addContact = async contact => {
    this.props.addContactOperation(contact);
  };

  deleteContact = async e => {
    const { id } = e.target;
    this.props.deleteContactOperation(id);
  };

  onCheckDuplicateName = name => {
    return this.props.contacts.some(contact => contact.name === name);
  };

  setFilter = e => {
    const { value } = e.target;
    this.props.filterContacts(value);
  };

  getFilteredContacts = () => {
    return this.props.contacts.filter(contact => contact.name.toLowerCase().includes(this.props.filter.toLowerCase()));
  };

  render() {
    return (
      <>
        <ContactsSection title="Phonebook">
          <ContactsForm addContact={this.addContact} onCheckDuplicateName={this.onCheckDuplicateName} />
        </ContactsSection>

        <ContactsSection title="Contacts" styles="filterContainerStyle">
          <ContactsFilter filter={this.props.filter} setFilter={this.setFilter} />
        </ContactsSection>

        <ContactsSection>
          <ContactsList contacts={this.getFilteredContacts()} deleteContact={this.deleteContact} />
        </ContactsSection>
      </>
    );
  }
}

const mapStateToProps = state => ({
  contacts: getContactsSelector(state),
  filter: contactsFilter(state)
});

const mapDispatchToProps = {
  addContactOperation,
  deleteContactOperation,
  getAllContactsOperation,
  filterContacts
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Contacts);

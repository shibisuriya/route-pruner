<template>
  <div class="contacts">
    <h2>My Contacts</h2>
    <div class="search">
      <input type="text" placeholder="Search contacts" v-model="search" />
    </div>
    <ul class="contact-list">
      <li v-for="(contact, index) in filteredContacts" :key="index">
        <div class="avatar">
          <img :src="contact.avatar" alt="Avatar" />
        </div>
        <div class="details">
          <h3>{{ contact.name }}</h3>
          <p>{{ contact.email }}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      search: "",
      contacts: [
        {
          name: "John Doe",
          email: "john.doe@example.com",
          avatar: "https://randomuser.me/api/portraits/men/1.jpg",
        },
        {
          name: "Jane Doe",
          email: "jane.doe@example.com",
          avatar: "https://randomuser.me/api/portraits/women/2.jpg",
        },
        {
          name: "Bob Smith",
          email: "bob.smith@example.com",
          avatar: "https://randomuser.me/api/portraits/men/3.jpg",
        },
        {
          name: "Alice Johnson",
          email: "alice.johnson@example.com",
          avatar: "https://randomuser.me/api/portraits/women/4.jpg",
        },
      ],
    };
  },
  computed: {
    filteredContacts() {
      return this.contacts.filter((contact) =>
        contact.name.toLowerCase().includes(this.search.toLowerCase())
      );
    },
  },
};
</script>

<style>
.contacts {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
}

h2 {
  text-align: center;
  margin-bottom: 30px;
}

.search {
  margin-bottom: 20px;
}

.search input {
  width: 100%;
  padding: 10px;
  border-radius: 5px;
  border: none;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
}

.contact-list {
  list-style: none;
  margin: 0;
  padding: 0;
}

.contact-list li {
  display: flex;
  align-items: center;
  border-bottom: 1px solid #ccc;
  padding: 10px;
}

.contact-list li:last-child {
  border-bottom: none;
}

.avatar img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 10px;
}

.details h3 {
  margin: 0;
  font-size: 16px;
  font-weight: bold;
}

.details p {
  margin: 0;
  color: #999;
}
</style>

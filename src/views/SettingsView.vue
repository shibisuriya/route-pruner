<template>
  <div class="settings">
    <h2 class="settings-title">Settings</h2>
    <div class="settings-content">
      <div class="setting">
        <label for="username">Username:</label>
        <input type="text" id="username" v-model="username" />
      </div>
      <div class="setting">
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="email" />
      </div>
      <div class="setting">
        <label for="password">Password:</label>
        <input type="password" id="password" v-model="password" />
      </div>
      <div class="setting">
        <label for="notifications">Notifications:</label>
        <input type="checkbox" id="notifications" v-model="notifications" />
      </div>
    </div>
    <button class="settings-save" @click="saveSettings">Save</button>
  </div>
</template>

<script>
export default {
  name: "SettingsComponent",
  data() {
    return {
      username: "",
      email: "",
      password: "",
      notifications: false,
    };
  },
  methods: {
    saveSettings() {
      // Save the settings here...
      console.log("Settings saved!");
    },
  },
};
</script>

<style>
.settings {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
}

.settings-title {
  font-size: 1.5rem;
  margin-bottom: 20px;
}

.settings-content {
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
}

.setting {
  margin-bottom: 10px;
}

label {
  display: inline-block;
  width: 120px;
  font-weight: bold;
}

input[type="text"],
input[type="email"],
input[type="password"] {
  padding: 5px;
  border-radius: 5px;
  border: 1px solid #ccc;
  width: 250px;
}

input[type="checkbox"] {
  margin-left: 10px;
}

.settings-save {
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 10px;
  cursor: pointer;
}

.settings-save:hover {
  background-color: #0069d9;
}
</style>

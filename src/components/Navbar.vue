<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark px-5 d-flex justify-content-between">
    
    <div>
    <router-link class="navbar-brand" to="/phonebook">My PhoneBook</router-link>
    </div>
    
    <div>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item py-2 px-3">
          <router-link class="nav-link" to="/home">Home</router-link>
        </li>
        <li class="nav-item py-2 px-3">
          <router-link class="nav-link" to="/about">About</router-link>
        </li>
        <li class="nav-item py-2 px-3">
          <router-link class="nav-link" to="contactus">Contact Us</router-link>
        </li>
      </ul>
    </div>
    </div>

    <button
      class="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
      aria-bs-controls="navbarSupportedContent"
      aria-bs-expanded="false"
      aria-bs-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

  </nav>
</template>

<script>
export default {
  name: "Navbar",
};
</script>
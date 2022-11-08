<template>
  <div class="container d-flex justify-content-between flex-wrap my-5">
    <div class='w-50'>
      <h1 class="py-5">PhoneBook App</h1>
      <h5 class="py-2">save your contacts with all details needed.</h5>
      <h5 class="py-2">Add, remove and modify your contacts list.</h5>
      <h5 class="py-2">Get all details about the contact with one click.</h5>
      <h5 class="py-2">Have some ideas? feel free to contact us</h5>
      <router-link class="btn btn-primary my-2 py-2" to="/contactus">Contact us</router-link>

    </div>
    <div class='w-50'><img :src="contacts"></div>

  </div>
</template>

<script>
import contacts from '../images/contacts.png'
export default {
  name:'Home',
  data:()=>({
    contacts
  })
}
</script>

<style>

</style>
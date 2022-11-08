<template>
<div style="margin:10px auto" class="container card border-secondary w-50 h-100">
    <div class="card-header d-flex justify-content-between">
    <div>#{{contactDetails.id}}</div>
    <div>
        <EditContact/>
        <DeleteContact/>
    </div>
    </div> 
    <div class="card-body d-flex flex-column justify-content-around">
        <h2 class="card-title">Name: {{contactDetails.name}}</h2>
        <h4 class="card-title">{{contactDetails.job}}</h4>
        <h5 class="card-title">Age: {{contactDetails.age}} years Old</h5>
        <h5 class="card-title">Email: {{contactDetails.email}}</h5>
        <h5 class="card-title">Location: {{contactDetails.location}}</h5>
        <h6 class="card-text">Description: {{contactDetails.description}}</h6>
        <router-link class="btn btn-primary w-25 align-self-center" to="/phonebook">Return Back</router-link>
    </div>
    </div>
</template>
<script>
import DeleteContact from './DeleteContact.vue'
import EditContact from './EditContact.vue'

export default {
    name:'ContactDetails',
    component:{
        EditContact,
        DeleteContact
        },
    data:()=>({
        contactDetails:{}
    }),
    methods: {
        
    },
    async created(){
    const response = await fetch(`http://localhost:3000/Phonebook/${this.$route.params.id}`);
    const contactDetails = await response.json();
    return this.contactDetails = contactDetails;
  },
}

</script>

<template>
  <div class="card border-secondary mb-3 h-25 mx-1 col-lg-2 col-md-3 col-sm-5 col-11">
  <h5 class="card-header">{{contact.job}}</h5>
  <div class="card-body">
    <h2 class="card-title">{{contact.name}}</h2>
    <p class="card-text">{{contact.phone}}</p>
    <router-link class="btn btn-primary" :to="`/contactDetails/${contact.id}`" >Show All Details</router-link>
  </div>
</div>
</template>

<script>
export default {
    name:'Card',
    props:{
      contact:Object
    }
}
</script>


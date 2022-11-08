<template>
  <div class="d-flex justify-content-around my-3">
  <AddContact @addNewContact="addButtonData"/>
  </div>
  <div v-if="myPhoneBook.length!==0" class='d-flex justify-content-around flex-wrap setHeight'>
    <Card v-for="contact in myPhoneBook" :key="contact.id" :contact='contact'/>
  </div>
  <div v-if="myPhoneBook.length==0" class='text-center setHeight'>
    <h2>Sorry, Your Contacts List is Empty, Add Some Contacts First</h2>
  </div>
</template>

<script>
import Card from './Card.vue';
import AddContact from './AddContact.vue';

export default {
  components:{
    Card,
    AddContact
  },
  async created(){
    try{
    const response = await fetch('http://localhost:3000/Phonebook');
    const phonebook = await response.json();
    return this.myPhoneBook = phonebook;}
    catch(err){
      if(err) console.error(err)
    }
  },
  data:()=>({
    myPhoneBook:[],
  }),
  methods:{
    async addButtonData(userInput){
        try{
            const Obj = await fetch(`http://localhost:3000/Phonebook`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
              },body:JSON.stringify(userInput)
            });
            const parsedObj = await Obj.json()
            this.myPhoneBook.push(parsedObj)
        }catch(err){
          console.error(err)
        }
        
    }
  },emits:['addNewContact']

}
</script>

<style scoped>
.setHeight{
  min-height: calc(100vh - 189px);
}
</style>
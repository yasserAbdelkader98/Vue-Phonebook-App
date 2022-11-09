<template>
    <!-- Button trigger modal -->
<i style="cursor:pointer;color:green" class="fa-lg fas fa-edit p-2 cursor-pointer" data-bs-toggle="modal" data-bs-target="#editModal"></i>

    <!-- Modal -->
<div class="modal fade" id="editModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Edit contact..</h5>
      </div>
      <div class="modal-body">
        <!-- start form body -->
        <form>
            <div class="form-group">
                <input v-model="contact.name" @blur="checkFields" name="name" type="text" class="form-control py-2 my-1" placeholder="Contact Name (Required)">
                <p style="color:red" class="text-bold" v-if="formErrors.name.length>0">{{formErrors.name[0]}}</p>
              
                <input v-model="contact.email" @blur="checkFields" type="email" name="email" class="form-control py-2 my-1" placeholder="Contact Email (Required)">
                <p style="color:red" class="text-bold" v-if="formErrors.email.length!=0">{{formErrors.email[0]}}</p>
            
                <input v-model="contact.job" @blur="checkFields" type="text" name="job" class="form-control py-2 my-1" placeholder="Contact Job (Required)">
                <p style="color:red" class="text-bold" v-if="formErrors.job.length!=0">{{formErrors.job[0]}}</p>
                
                <input v-model="contact.age" @blur="checkFields" type="number" name="age" min="0" max="100" class="form-control py-2 my-1" placeholder="Contact Age (Required)">
                <p style="color:red" class="text-bold" v-if="formErrors.age.length!=0">{{formErrors.age[0]}}</p>
                
                <input v-model="contact.phone" @blur="checkFields" type="number" name="phone" class="form-control py-2 my-1" placeholder="Contact Phone Number (Required)">
                <p style="color:red" class="text-bold" v-if="formErrors.phone.length!=0">{{formErrors.phone[0]}}</p>
                
                <input v-model="contact.location"  type="text" name="location" class="form-control py-2 my-1" placeholder="Contact Location (Optional)">

                <input v-model="contact.description" type="text" name="description" class="form-control py-2 my-1" placeholder="Enter Description (Optional)">
            </div>
        </form>

        <!-- end form body -->
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button @click="saveChanges" type="button" class="btn btn-primary" :data-bs-dismiss="modal">Save changes</button>
      </div>
    </div>
  </div>
</div>


</template>

<script>
export default {
    name:'EditContact',
    async created(){
    const response = await fetch(`http://localhost:3000/Phonebook/${this.$route.params.id}`);
    const contactDetails = await response.json();
    return this.contact = contactDetails;
    },
    data:()=>({
        contact:{},
        formErrors:{
          name:[],
          age:[],
          email:[],
          job:[],
          phone:[],
        },
        nullOrRequired:false,
        modal:'',
        props:{
            contactDetails:Object
        }
    }),methods:{
        saveChanges(){
            this.checkErrors()
            if(!this.nullOrRequired){
              this.modal='modal'           
              this.$swal({
                title: 'Do you want to save the changes?',
                showDenyButton: true,
                confirmButtonText: `Save`,
                denyButtonText: `Don't Save`,
              }).then((result) => {
                if (result.isConfirmed){
                  this.$swal('Saved!', 'the new contact has been added', 'success')
                  const userInput = {
                    name:this.contact.name,
                    age:this.contact.age,
                    email:this.contact.email,
                    job:this.contact.job,
                    phone:this.contact.phone,
                    location:this.contact.location,
                    description:this.contact.description
                  };
                  //transfere obj
                  this.$emit('editNewContact',userInput)

                } else if (result.isDenied) {
                  this.$swal('Changes are not saved', '', 'info')
                }
              })
            }else{
              this.modal=''
                this.$swal({
                icon: 'error',
                title: 'Oops...',
                text: `Something went wrong! Please fill the required fields correctly`,
              })
            } 
        
        },
        checkErrors(){
            this.nullOrRequired=false
            for(let field in this.contact){  
              if(this.contact[field] == null){
                  this.nullOrRequired = true
              }
            }
            for(let field in this.formErrors){
                if(this.formErrors[field].length !== 0){
                    this.nullOrRequired = true
              }
            }

        },
        checkFields(e){
          if(e.target.name === 'name'){
            this.formErrors.name = []
            if(e.target.value.length < 3){
              this.formErrors.name.push('Name is required, Must be more than 3 characters')
            }
          }
          else if(e.target.name === 'email'){
            this.formErrors.email = []
            let emailRegex = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/
            if(!emailRegex.test(e.target.value)){
              this.formErrors.email.push('a Valid Email is required')
            }
          }
          else if(e.target.name === 'job'){
            this.formErrors.job = []
            if(e.target.value.length == 0){
              this.formErrors.job.push('Job is required')
            }
          }
          else if(e.target.name === 'age'){
            this.formErrors.age = []
            if(e.target.value == '' || e.target.value <= 0 || e.target.value > 100 ){
              this.formErrors.age.push('Age is required, should be lessthan 100')
            }
          }
          else if(e.target.name === 'phone'){
            this.formErrors.phone = []
            if(e.target.value == '' || e.target.value <= 0){
              this.formErrors.phone.push('Phone number is required')
            }
          }
        }
    },emits:['editNewContact']
}

</script>
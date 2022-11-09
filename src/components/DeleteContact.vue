<template>
    <i @click="deleteContact" style="cursor:pointer;color:red" class="fa-lg fa-sharp fa-solid fa-trash p-2"></i>        
</template>

<script>
export default {
    name:'DeleteContact',
    methods:{
        deleteContact(){
        this.$swal({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#d33',
        cancelButtonColor: '#3085d6',
        confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
        if (result.isConfirmed) {
           (async ()=>{
            const deletedContact = await fetch(`http://localhost:3000/Phonebook/${this.$route.params.id}`, { method: 'DELETE' });
            if(deletedContact.statusText=='OK'){
                this.$swal(
                'Deleted!',
                'Your contact has been deleted.',
                'success'
                )
                this.$router.push('/Phonebook')
            }else{
                this.$swal({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
                })
                this.$router.push('/Phonebook')
            }
           })()
            }
            })
        }
    }
}
</script>
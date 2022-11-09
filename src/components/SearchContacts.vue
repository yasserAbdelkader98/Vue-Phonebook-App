<template>
<div class="col-lg-3 col-sm-5 col-10 ">
    <input v-model="searchKeyword" type="text" class="form-control border-secondary h-25" placeholder="Search contact">
</div>
</template>

<script>
export default {
    name:'SearchContacts',
    data:()=>({
        searchKeyword :'',
    }),
    updated(){
        this.$emit('searchKeyword',this.searchKeyword)
    }
}
</script>

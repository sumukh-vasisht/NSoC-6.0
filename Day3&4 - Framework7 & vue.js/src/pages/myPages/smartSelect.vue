<template>
    <f7-page>

        <f7-navbar title="Smart Select" back-link="Back">
        <f7-nav-right style="padding-right: 20px;">
            <f7-button  href="/">Home</f7-button>
            </f7-nav-right>
        </f7-navbar>

        <f7-list>
            <f7-list-item title="Languages" smart-select :smart-select-params="{closeOnSelect:true, openIn :'popup',searchbar: true,searchbarPlaceholder: ''}">
                <select name="language" v-model="language">
                    <option value="C">C</option>
                    <option value="C++">C++</option>
                    <option value="Java">Java</option>
                    <option value="Python">Python</option>
                    <option value="Go">Go</option>
                </select>
            </f7-list-item>
        </f7-list>

        <f7-block>
            <f7-button raised fill @click="showData">Submit</f7-button>
        </f7-block>

    </f7-page>
</template>

<script>
export default {
    data(){
        return{
            language:""
        }
    },
    methods:{
        showData(){
            console.log(this.language);
            
        }
    }

}
</script>

<style>

</style>

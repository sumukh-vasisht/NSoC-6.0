<template>
    <f7-page>

        <f7-navbar title="Text Field" back-link="Back">
        <f7-nav-right style="padding-right: 20px;">
            <f7-button href="/">Home</f7-button>
            </f7-nav-right>
        </f7-navbar>

        <f7-block>
            <f7-input
                label="ENTER YOUR NAME"
                type="text"
                :value="name"
                @input="name=$event.target.value"
                placeholder="ENTER YOUR NAME"
            ></f7-input>
        </f7-block>

        <f7-block>
            <f7-input
                label="ENTER YOUR AGE"
                type="number"
                placeholder="ENTER YOUR AGE"
            ></f7-input>
        </f7-block>

        <f7-block>
            <f7-input
                label="ENTER YOUR PASSWORD"
                type="password"
                placeholder="ENTER YOUR PASSWORD"
            ></f7-input>
        </f7-block>
        <f7-block>
            <f7-button @click="showdata">Show</f7-button>
            </f7-block>   </f7-page>
</template>

<script>
export default {
    data(){
        return {
            name:""
        }
    },
    methods:{
        showdata()
        {
            console.log(this.name)
        }
    }
}
</script>

<style>

</style>

<template>
    <f7-page>

        <f7-navbar title="Checkbox" back-link="Back">
        <f7-nav-right style="padding-right: 20px;">
            <f7-button href="/">Home</f7-button>
            </f7-nav-right>
        </f7-navbar>

        <f7-block>
            <f7-list>
                <f7-list-item checkbox title="Option A" @click="a"></f7-list-item>
                <f7-list-item checkbox title="Option B"></f7-list-item>
                <f7-list-item checkbox title="Option C"></f7-list-item>
                <f7-list-item checkbox title="Option D"></f7-list-item>
                <f7-list-item checkbox title="Option E"></f7-list-item>
            </f7-list>
        </f7-block>

        <f7-block>
            <f7-list>
                <f7-list-item checkbox title="Apple"></f7-list-item>
                <f7-list-item checkbox title="Banana"></f7-list-item>
                <f7-list-item checkbox title="Mango"></f7-list-item>
                <f7-list-item checkbox title="Pineapple"></f7-list-item>
                <f7-list-item checkbox title="Grapes"></f7-list-item>
            </f7-list>
        </f7-block>

    </f7-page>
</template>

<script>
export default {
    data(){
        return{
            A:false,
            B:false,
            C:false,
            D:false,
            E:false,
            selectedValues:[]
        }
    },
    methods:{
        a(){
            if(this.A == false)
            {
                this.A = true
                this.selectedValues.push("A")
            }
            else{
                this.A = false
                let index = this.selectedValues.indexOf("A")
                this.selectedValues.splice(index,1)
            }
            console.log(this.selectedValues);
            
        }
    }

}
</script>

<style>

</style>

<template>
    <f7-page>

        <f7-block>
            <f7-button raised fill  href="/navbar">Navbar</f7-button>
        </f7-block>

        <f7-block>
            <f7-button raised fill  href="/buttons">Buttons</f7-button>
        </f7-block>

        <f7-block>
            <f7-button raised fill  href="/textFields">Text fields</f7-button>
        </f7-block>

        <f7-block>
            <f7-button raised fill  href="/lists">List and Block</f7-button>
        </f7-block>

        <f7-block>
            <f7-button raised fill  href="/checkbox">Checkbox</f7-button>
        </f7-block>

        <f7-block>
            <f7-button raised fill  href="/smartSelect">Smart Select</f7-button>
        </f7-block>

        <!--<f7-block>
            <f7-button raised fill  href="/popup">Popup</f7-button>
        </f7-block>-->
        <f7-block>
            <f7-button raised fill @click="buttonfunc">Button</f7-button>
        </f7-block>
    </f7-page>
</template>

<script>
export default {
    methods:{
        buttonfunc()
        {
            console.log("Hello World")
        }
    }

}
</script>

<style>

</style>

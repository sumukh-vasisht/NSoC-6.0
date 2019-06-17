<template>
    <f7-page>

        <!--Types of buttons-->

        <f7-navbar title="Buttons" back-link="Back">
        <f7-nav-right style="padding-right: 20px;">
            <f7-button href="/">Home</f7-button>
            </f7-nav-right>
        </f7-navbar>

        <f7-block>
            <div class="row">
                <button class="button col">Button</button>
                <button class="button col">Button</button>
                <button class="button col">Button</button>
            </div>
        </f7-block>

        <f7-block>
            <div class="row">
                <f7-button class="button col" raised fill>Button</f7-button>
                <f7-button raised fill class="button col">Button</f7-button>
                <f7-button raised fill round class="button col">Button</f7-button>
            </div>
        </f7-block>

        <f7-block>
            <div class="row">
                <f7-button class="button col" outline>Button</f7-button>
                <f7-button outline class="button col">Button</f7-button>
                <f7-button outline round class="button col">Button</f7-button>
            </div>
        </f7-block>

         <f7-block>
            <div class="row">
                <f7-button class="button col" outline large>Button</f7-button>
                <f7-button raised fill large class="button col">Button</f7-button>
                <f7-button outline round large class="button col">Button</f7-button>
            </div>
        </f7-block>

    </f7-page>
</template>

<script>
export default {

}
</script>

<style>

</style>

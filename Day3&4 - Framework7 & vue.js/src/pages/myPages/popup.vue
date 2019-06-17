<template>
    <f7-page>

        <f7-navbar title="Popup" back-link="Back">
        <f7-nav-right style="padding-right: 20px;">
            <f7-button href="/">Home</f7-button>
            </f7-nav-right>
        </f7-navbar>

        <f7-list>
            <f7-block>
                <f7-button raised  popup-open="#my-popup0">Select Language</f7-button>
            </f7-block>
        </f7-list>

        <f7-popup id="my-popup0">
            <f7-view>
                <f7-page>
                    <f7-navbar title="Select your Language">
                        <f7-nav-right>
                            <f7-link popup-close>Close</f7-link>
                        </f7-nav-right>
                    </f7-navbar>

                    <f7-block>          
                        <f7-list>
                            <f7-list-item checkbox title="C"></f7-list-item>
                            <f7-list-item checkbox title="C++"></f7-list-item>
                            <f7-list-item checkbox title="Python"></f7-list-item>            
                            <f7-block strong>
                                <f7-button fill raised >Submit</f7-button> 
                            </f7-block>          
                        </f7-list>
                    </f7-block>
                </f7-page>
            </f7-view>
        </f7-popup>

    </f7-page>
</template>

<script>
export default {

}
</script>

<style>

</style>

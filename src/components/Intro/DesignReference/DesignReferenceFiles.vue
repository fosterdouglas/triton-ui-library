<docs>

```jsx noeditor
<template>
  <div>

    <b-button
      :pressed="false"
      variant="outline-secondary"
      class="btnNavigation btnFeedback mb-4 ml-n2"
      onclick="this.blur();"
      href="http://ui-triton.e-bydesign.ca"
      >
      <i class="iconPrevious btnIconLeft"></i>
      <div class="btnText">Return to Library</div>
      <i></i>
    </b-button>

    <div>

      <b-alert fade show dismissible variant="info" class="customAlert alertInfo">
        <h4 class="alert-heading">In-Progress Designs!
          <i class="p-1 pt-2 mb-1 fal fa-xs fa-exclamation-triangle text-info align-middle"></i>
        </h4>
        <hr/>
        <p class="mb-0">Some designs in this library are <span class="font-weight-bolder">test designs, ideation, or works-in-progress </span>. Look for this icon <i title="Under construction!" class="p-1 fal fa-sm fa-exclamation-triangle text-info align-middle"></i> next to designs that are notably incomplete. If you find any inconsistencies or have any questions, please Slack or Email Foster. Thank you for your patience!</p>
      </b-alert>

    </div>

    <h1>Triton Page Redesigns</h1>
    <hr class="bg-dark"/>
    <b-card-group deck>
      <b-card title="Card Title">
          <a :href="images.sample" download>
            <b-card-img :src="images.sample" alt="Image" draggable="false" top></b-card-img>
          </a>
          <b-card-text class="mt-2">
            Some quick example text to build on the card title and make up the bulk of the card's content.
          </b-card-text>
      </b-card>

      <b-card title="Card Title">
          <a :href="images.sample" download>
            <b-card-img :src="images.sample" alt="Image" draggable="false" top></b-card-img>
          </a>
          <b-card-text class="mt-2">
            Some quick example text to build on the card title and make up the bulk of the card's content.
          </b-card-text>
      </b-card>

      <b-card title="Card Title">
          <a :href="images.sample" download>
            <b-card-img :src="images.sample" alt="Image" draggable="false" top></b-card-img>
          </a>
          <b-card-text class="mt-2">
            Some quick example text to build on the card title and make up the bulk of the card's content.
          </b-card-text>
      </b-card>
    </b-card-group>

  </div>
</template>
<script>

$(document).ready(function(){
  $( ".rsg--sidebar-4" ).addClass( "designReferenceSidebar" );
  $( ".rsg--root-1" ).removeClass( "rsg--hasSidebar-2" );
});

export default {
    data() {
        return {
            images: {
                sample: require('../../../assets/hello-world.png')
            }
        }
    }
}
</script>
```

</docs>

<docs>

<h3>Data-Only
<i class="p-1 mb-1 fal fa-xs fa-exclamation-triangle text-info bg-white align-middle"></i>
</h3>
<p>used for only displaying data, no interaction (can be dismissed in multiple ways)</p>

```js
<template>
  <div>

    <b-button
      :pressed="false"
      variant="outline-primaryfade"
      class="btnNavigation btnStandard"
      onclick="this.blur();"
      @click="modalShow = !modalShow"
      >
      {{ FuncButtonCaption }}
    </b-button>

    <b-modal
      v-model="modalShow"
      :hide-footer="true"

    >
      <template v-slot:modal-header>
        <h5 class="mb-0">Dismissable Lightbox Title</h5>
        <b-button
          class="close"
          @click="modalShow = !modalShow"
          >
        </b-button>
      </template>

      <div class="modal-body text-center">

      </div>


    </b-modal>
  </div>

</template>

<script>
  export default {
    data() {
      return {
        CancelButtonCaption: 'CANCEL',
        SaveButtonCaption: 'SAVE',
        FuncButtonCaption: 'Press to test',
        modalShow: false,
      }
    }
  }
</script>

```

</docs>

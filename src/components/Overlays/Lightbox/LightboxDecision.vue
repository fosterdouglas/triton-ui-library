<docs>

<h3>Decision
<i class="p-1 mb-1 fal fa-xs fa-exclamation-triangle text-info bg-white align-middle"></i>
</h3>


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
      :no-close-on-backdrop="true"
      :no-close-on-esc="true"
    >
      <template v-slot:modal-header>
        <h5 class="mb-0">Dismissable Lightbox Title</h5>
      </template>

      <div class="modal-body text-center">

      </div>

      <template v-slot:modal-footer>

          <b-button
            :pressed="false"
            variant="outline-warningfade"
            class="btnNavigation btnWarning float-left"
            @click="modalShow=false"
            >
            {{ CancelButtonCaption }}
          </b-button>

          <b-button
            :pressed="false"
            variant="outline-confirmfade"
            class="btnNavigation btnConfirm float-right"
            @click="modalShow=false"
            >
            {{ SaveButtonCaption }}
          </b-button>

      </template>

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

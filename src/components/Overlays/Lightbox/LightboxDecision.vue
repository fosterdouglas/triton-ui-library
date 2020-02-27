<docs>

<h3>Decision</h3>
<p>The most common type of lightbox, it requires the user to either confirm the addition or changes inside, or to cancel. The ```ESC``` key is disabled, and clicking outside of the modal will not close it.</p>

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
        <h4 class="mb-0">Decision Lightbox</h4>
      </template>

      <div class="modal-body">
        <b-row class="subGroup">
          <b-col cols="12">
            <b-input-group class="dropdownMenu" prepend="Text Field" >
              <b-form-input class="form-control" type="text" placeholder="Text Field"></b-form-input>
            </b-input-group>
          </b-col>
        </b-row>
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

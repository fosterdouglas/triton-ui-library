<docs>

```jsx noeditor

<div>

  <b-alert fade show dismissible variant="info" class="customAlert alertInfo">
    <h5 class="alert-heading">Page Task List
      <i class="p-1 pt-2 mb-1 fal fa-xs fa-exclamation-triangle text-info align-middle"></i>
    </h5>
    <hr/>
      <b-ul>
        <b-li class="alertListItem">- BROKEN: Update lightbox for Vue after transition</b-li>
      </b-ul>
  </b-alert>

</div>
```
<h3>Lightbox
<i class="p-1 mb-1 fal fa-xs fa-exclamation-triangle text-info bg-white align-middle"></i>
</h3>


```js
<template>
  <div>
    <b-button
      :pressed="false"
      variant="outline-darkfade"
      class="btnFunction btnFunctionStandard"
      onclick="this.blur();"
      @click="modalShow = !modalShow"
      >
      {{ FuncButtonCaption }}
    </b-button>

    <b-modal v-model="modalShow">

      <div class="modal-body text-center">
        <b-img class="img-fluid" src="http://sandcastle.co/cdn/ebydesign/triton/hello-world.png" />
      </div>

      <template v-slot:modal-footer>

          <b-button
            :pressed="false"
            variant="outline-confirmfade"
            class="btnNavigation btnConfirm float-left"
            @click="modalShow=false"
            >
            {{ SaveButtonCaption }}
          </b-button>

          <b-button
            :pressed="false"
            variant="outline-warningfade"
            class="btnNavigation btnWarning float-right"
            @click="modalShow=false"
            >
            {{ CancelButtonCaption }}
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
        SaveButtonCaption: 'CONFIRM',
        FuncButtonCaption: 'Press Me!',
        modalShow: false,
      }
    }
  }
</script>

```

</docs>

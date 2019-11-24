<docs>

```jsx noeditor

<div>

  <b-alert fade show dismissible variant="info" class="customAlert alertInfo">
    <h5 class="alert-heading">Foster's Task List
      <i class="p-1 pt-2 mb-1 fal fa-xs fa-exclamation-triangle text-info align-middle"></i>
    </h5>
    <hr/>
      <ul>
        <li class="alertListItem">- <del>BROKEN: Update lightbox for Vue after transition</del> <i class="iconConfirm"></i></li>
        <li class="alertListItem">- Distribute components into separate files</li>
      </ul>
  </b-alert>

</div>
```

<h3>Dismissable
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
    >

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

<h3>Persistent (Forced Action)</h3>
<p>This lightbox <u>requires</u> interaction and cannot be resolved via a standard close button nor by using the "ESC" button.

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
      @shown="showAlert"
      v-model="modalShow"
      :hide-header="true"
      :no-close-on-backdrop="true"
      :no-close-on-esc="true"
    >

      <div class="modal-body text-center">

          <b-alert
            :show="dismissCountDown"
            variant="warning"
            @dismissed="dismissCountDown=0"
            @dismiss-count-down="countDownChanged"
            class="mb-0"
          >
            Your session will end in <div class="lightboxCountdown">{{ dismissCountDown }}</div> seconds due to inactivity.<br/>Press below to continue or end.
            <b-progress
              variant="warning"
              :max="dismissSecs"
              :value="dismissCountDown"
              height="4px"
              class="mt-2"
            ></b-progress>
          </b-alert>

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
        CancelButtonCaption: 'END SESSION',
        SaveButtonCaption: 'CONTINUE',
        FuncButtonCaption: 'Press to test',
        modalShow: false,
        dismissSecs: 60,
        dismissCountDown: 0
      }
    },
    methods: {
      countDownChanged(dismissCountDown) {
        this.dismissCountDown = dismissCountDown
      },
      showAlert() {
        this.dismissCountDown = this.dismissSecs
      }
    }
  }
</script>

```

</docs>

<docs>


<h3>Button</h3>
<p>A button style specific to forms, made to be easier to find and more strongly associated with the brand.</p>

```js
<template>

  <b-container class="containsRowItems" fluid>
    <b-row>

      <b-col cols="auto" class="buttonForm">
        <b-button
          :pressed="false"
          variant="primary"
          class="btnForm"
          onclick="this.blur();"
          >
          <div class="">NEXT</div>
        </b-button>
      </b-col>

      <b-col cols="auto" class="buttonForm">
        <b-button
          :pressed="false"
          variant="info"
          class="btnForm"
          onclick="this.blur();"
          >
          <div class="">SUBMIT</div>

        </b-button>
      </b-col>

      <b-col cols="auto" class="buttonForm">
        <b-button
          :pressed="false"
          variant="confirm"
          class="btnForm"
          onclick="this.blur();"
          >
          <div class="">COMPLETE FORM</div>
          <i class="iconConfirm btnIconRight"></i>
        </b-button>
      </b-col>

      <b-col cols="auto" class="buttonForm">
        <b-button
          :pressed="false"
          variant="medium"
          class="btnForm"
          onclick="this.blur();"
          >
          <div class="">CANCEL</div>
        </b-button>
      </b-col>

    </b-row>
  </b-container>

</template>
<script>
export default {
}
</script>
```

</docs>

<docs>


<h3>Button</h3>
<p>A button style specific to forms, made to be easier to find and more strongly associated with the brand.</p>

```js
<template>

  <b-container class="containsRowItems" fluid>
    <b-row>

      <b-col class="buttonCol">
        <b-button
          :pressed="false"
          variant="primary"
          class="btnForm"
          onclick="this.blur();"
          >
          <div class="">BUTTON SAMPLE</div>
        </b-button>
      </b-col>

      <b-col class="buttonCol">
        <b-button
          :pressed="false"
          variant="info"
          class="btnForm"
          onclick="this.blur();"
          >
          <div class="">BUTTON SAMPLE</div>

        </b-button>
      </b-col>

      <b-col class="buttonCol">
        <b-button
          :pressed="false"
          variant="confirm"
          class="btnForm"
          onclick="this.blur();"
          >
          <div class="">BUTTON SAMPLE</div>
          <i class="iconConfirm btnIconRight"></i>
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

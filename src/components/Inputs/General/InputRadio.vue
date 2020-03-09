<docs>

<h3>Input Radio</h3>
<p>Used to make a single choice from multiple options. Generally it should not be mixed in a given group with the Input Switch or Input Checkbox.</p>

```js
<template>

  <b-container class="containsRowItems" fluid>

    <b-row>
      <b-col class="prependButton">

        <b-button
          :pressed="false"
          variant="outline-primaryfade"
          class="btnSmall btnStandard btnRadio"
          onclick="this.blur()"
         >
          <div class="custom-control custom-radio">
            <input checked id="customRadio1" class="custom-control-input" type="radio" name="radio"/>
            <label class="custom-control-label cursorPointer" for="customRadio1"></label>
          </div>
        </b-button>

      </b-col>
      <b-col class="prependButton">

        <b-button
          :pressed="false"
          variant="outline-primaryfade"
          class="btnSmall btnStandard btnRadio"
          onclick="this.blur()"
         >
          <div class="custom-control custom-radio">
            <input id="customRadio2" class="custom-control-input" type="radio" name="radio"/>
            <label class="custom-control-label cursorPointer" for="customRadio2"></label>
          </div>
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

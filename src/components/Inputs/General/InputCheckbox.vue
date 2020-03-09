<docs>

<h3>Input Checkbox</h3>
<p>A general-use checkbox that can be implemented in various ways, but is primarily seen used for group selection of items with <a href="../../#/Elements/Tables">Tables</a>. It can be mixed and matched in a given group with the Input Toggle.</p>

```js
<template>

  <b-container class="containsRowItems" fluid>
    <b-row>
      <b-col class="prependButton">

        <b-button
          :pressed="false"
          variant="outline-dark"
          class="btnSmall btnCheck btnStandard"
          onclick="this.blur()"
         >
          <div class="custom-control custom-checkbox">
            <input id="customCheck1" class="custom-control-input" type="checkbox"/>
            <label class="custom-control-label cursorPointer" for="customCheck1"></label>
          </div>
        </b-button>

      </b-col>
      <b-col class="prependButton">

        <b-button
          :pressed="false"
          variant="outline-primaryfade"
          class="btnSmall btnCheck btnStandard"
          onclick="this.blur()"
         >
          <div class="custom-control custom-checkbox">
            <input checked id="customCheck2" class="custom-control-input" type="checkbox"/>
            <label class="custom-control-label cursorPointer" for="customCheck2"></label>
          </div>
        </b-button>

      </b-col>
    </b-row>

  </b-container>

</template>
<script>
$(function () {
  $('#customCheck2').prop('checked', true)
});
  export default {
}
</script>
```

</docs>

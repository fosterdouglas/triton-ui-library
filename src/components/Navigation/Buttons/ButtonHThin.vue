<docs>

<h3>Thin</h3>
<p>The shorter and skinnier Thin button is used for actions and functions, unlike the Standard-sized buttons that are used mostly for navigation.</p>

```js
<template>
  <b-container class="containsRowItems" fluid>
    <b-row>

      <b-col class="buttonCol">
        <b-button
          :pressed="false"
          variant="outline-light"
          size="sm"
          class="btnThin"
          onclick="this.blur();"
          >
          <div class="btnText">BUTTON SAMPLE</div>
        </b-button>
      </b-col>

      <b-col class="buttonCol">
        <b-button
          :pressed="true"
          variant="outline-light"
          size="sm"
          class="btnThin"
          onclick="this.blur();"
          >
          <div class="btnText">BUTTON SAMPLE</div>
        </b-button>
      </b-col>

    </b-row>
  </b-container>
</template>

<script>
  export default {
    data() {
      return {
      }
    }
  }
</script>
```
</docs>

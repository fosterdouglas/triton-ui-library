<docs>

<h3>Thin</h3>
<p>The shorter and skinnier Thin button should be used in places where a button can safely be de-emphasized, for example in a footer.</p>

```js
<template>
  <div>

    <b-button
      :pressed="false"
      variant="outline-light"
      size="sm"
      class="btnThin"
      onclick="this.blur();"
      >
      <i></i>
      <div class="btnText">BUTTON SAMPLE</div>
      <i></i>
    </b-button>

    <b-button
      :pressed="false"
      variant="outline-light"
      size="sm"
      class="btnThin"
      onclick="this.blur();"
      >
      <i></i>
      <div class="btnText">BUTTON SAMPLE</div>
      <i></i>
    </b-button>

  </div>
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

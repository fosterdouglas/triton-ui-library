<docs>

<h3>Mini</h3>
<p>The mini-sized buttons are used primarily for advanced application functions.
  For example, the header title of most pages will contain a "Collapse/Expand All" button that is mini-sized.</p>

```js
<template>
  <b-container class="containsRowItems" fluid>
    <b-row>

      <b-col class="appendButton">
        <b-button
          :pressed="false"
          variant="outline-primaryfade"
          class="btnSmall text-dark"
          onclick="this.blur()"
         >
          <i class="iconArrow iconBorderMini"></i>
        </b-button>
      </b-col>

      <b-col class="appendButton">
        <b-button
          :pressed="false"
          variant="outline-confirmfade"
          class="btnSmall text-confirm"
          onclick="this.blur()"
         >
          <i class="iconConfirm iconBorderMini"></i>
        </b-button>
      </b-col>

      <b-col class="appendButton">
        <b-button
          :pressed="false"
          variant="outline-warningfade"
          class="btnSmall text-warning"
          onclick="this.blur()"
         >
          <i class="iconRemove iconBorderMini"></i>
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

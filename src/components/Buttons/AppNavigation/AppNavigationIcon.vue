<docs>

<h3>Icon</h3>
<p>...</p>

```js
<template>
  <div>
    <h5>Small</h5>

        <b-button
          :pressed="false"
          variant="outline-primaryfade"
          class="btnSmall cursorDefault text-primary"
          onclick="this.blur()"
         >
          <i class="iconSettings iconBorderMini"></i>
        </b-button>

        <b-button
          :pressed="false"
          variant="outline-warningfade"
          class="btnSmall cursorDefault text-warning"
          onclick="this.blur()"
         >
          <i class="iconRemove iconBorderMini"></i>
        </b-button>

        <b-button
          :pressed="false"
          variant="outline-confirmfade"
          class="btnSmall cursorDefault text-confirm"
          onclick="this.blur()"
         >
          <i class="iconConfirm iconBorderMini"></i>
        </b-button>

    <h5 class="mt-4">Standard</h5>

        <b-button
          :pressed="false"
          variant="outline-primaryfade"
          class="btnSmall cursorDefault text-primary"
          onclick="this.blur()"
         >
          <i class="iconSettings iconBorderStd"></i>
        </b-button>

        <b-button
          :pressed="false"
          variant="outline-warningfade"
          class="btnSmall cursorDefault text-warning"
          onclick="this.blur()"
         >
          <i class="iconRemove iconBorderStd"></i>
        </b-button>

        <b-button
          :pressed="false"
          variant="outline-confirmfade"
          class="btnSmall cursorDefault text-confirm"
          onclick="this.blur()"
         >
          <i class="iconConfirm iconBorderStd"></i>
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

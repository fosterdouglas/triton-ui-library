<docs>

<h3>Icon</h3>
<p>The icon-sized buttons are used primarily as a shortcut to accessing a function.
  For example, in the row element's "Upload File" component, a small delete icon is
  added to the row to give the user the ability to delete an attached file. Note: this
  button type should almost always be used with a popover or some other method of confirmation. A single click
  on an icon-sized button should never be immediately destructive or additive.</p>

```js
<template>
  <div>
    <h5>Small</h5>

        <b-button
          :pressed="false"
          variant="outline-primaryfade"
          class="btnSmall cursorDefault text-dark"
          onclick="this.blur()"
         >
          <i class="iconArrow iconBorderMini"></i>
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

    <h5 class="mt-4">Default</h5>

        <b-button
          :pressed="false"
          variant="outline-primaryfade"
          class="btnSmall cursorDefault text-dark"
          onclick="this.blur()"
         >
          <i class="iconArrow iconBorderStd"></i>
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

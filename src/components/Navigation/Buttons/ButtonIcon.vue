<docs>

<h3>Prepend / Append</h3>
<p>The icon-sized buttons are used primarily as a shortcut to accessing a function.
  For example, in the row element's "Upload File" component, a small delete icon is
  added to the row to give the user the ability to delete an attached file. Note: this
  button type should almost always be used with a popover or some other method of confirmation.</p>

```js
<template>
  <div>
    <b-container class="containsRowItems" fluid>
      <b-row>

        <b-col class="appendButton">
          <b-button
            :pressed="false"
            variant="outline-primaryfade"
            class="btnSmall text-dark"
            onclick="this.blur()"
           >
            <i class="iconArrow iconBorderStd"></i>
          </b-button>
        </b-col>

        <b-col class="appendButton">
          <b-button
            :pressed="false"
            variant="outline-confirmfade"
            class="btnSmall text-confirm"
            onclick="this.blur()"
           >
            <i class="iconConfirm iconBorderStd"></i>
          </b-button>
        </b-col>

        <b-col class="appendButton">
          <b-button
            :pressed="false"
            variant="outline-warningfade"
            class="btnSmall text-warning"
            onclick="this.blur()"
           >
            <i class="iconRemove iconBorderStd"></i>
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

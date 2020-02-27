<docs>

<h3>Uploaded File</h3>
<p>A special use-case row element, for displaying files that have been uploaded by a user, and some related functions.</p>


```js
<template>
  <b-container class="containsRowItems" fluid>
    <b-row>
      <b-col>

        <b-button
          block
          class="rowItem rowStandard rowItemHover cursorDefault"
          variant="none"
          onclick="this.blur();"
        >

          <div class="rowItemContent">

            <div class="rowItemPrefix">
              <i class="iconFolderOpen fa-lg fas"></i>
            </div>

            <div class="rowItemText">
              <div>
                <abbr title="background-check-text.pdf" class="initialism">background-check-text.pdf</abbr>
              </div>
            </div>

            <div class="rowItemSuffix">
            </div>

          </div>

        </b-button>

      </b-col>

      <b-col class="appendButton">
        <b-button
          :pressed="false"
          variant="outline-primaryfade"
          class="btnSmall btnStandard cursorDefault"
          onclick="this.blur();"
         >
          <i class="iconDownload iconBorderStd text-dark"></i>
        </b-button>
      </b-col>

      <b-col class="appendButton">
        <b-button
          :pressed="false"
          variant="outline-warningfade"
          class="btnSmall btnWarning cursorDefault"
          onclick="this.blur();"
         >
          <i class="iconRemove iconBorderStd text-warning"></i>
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

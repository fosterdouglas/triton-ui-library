<docs>

<h3>Clickable</h3>
<p>Occassionally, a row item may need to lead to an external site (or rarely, to another page within the application).</p>


```js
<template>
    <b-container class="containsRowItems" fluid>

      <b-row>
        <b-col>

          <b-button
            block
            class="rowItem rowStandard rowClickable cursorPointer"
            variant="none"
            onclick="this.blur();"
            href="http://www.google.com"
            target="_blank"
          >

            <div class="rowItemContent">

              <div class="rowItemPrefix">
                <i class="iconConnected fa-lg iconHover"></i>
              </div>

              <div class="rowItemText">
                http://www.google.com
              </div>

              <div class="rowItemSuffix">
              </div>

            </div>
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

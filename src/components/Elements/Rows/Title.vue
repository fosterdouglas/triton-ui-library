<docs>

<h3>Title (Grouping)</h3>
<p>The expandable title is a unique row element used for high level organization. By design, it does <b>not</b> support any of the additions that other row elements do, such as prepended and appended buttons, or badges.</p>

```js
<template>
  <b-container class="containsRowItems" fluid>
    <b-row>
      <b-col>

        <b-button
          block
          class="rowItem rowGroupTitle cursorDefault"
          variant="none"
          onclick="this.blur();"
        >

          <div class="rowItemContent">

            <div class="rowItemPrefix">
              <i class="iconCollapseExpand"></i>
            </div>

            <div class="rowItemText">
              <p class="mb-0">Expanded Styling</p>
            </div>

            <div class="rowItemSuffix">

            </div>

          </div>

        </b-button>

      </b-col>
    </b-row>

    <b-row>
      <b-col>

        <b-button
          block
          class="rowItem rowGroupTitle cursorDefault"
          variant="none"
          onclick="this.blur();"
          v-b-toggle.testing2
        >

          <div class="rowItemContent">

            <div class="rowItemPrefix">
              <i class="iconCollapseExpand"></i>
            </div>

            <div class="rowItemText">
              <p class="mb-0">Collapsed Styling (Click Me!)</p>
            </div>

            <div class="rowItemSuffix">

            </div>

          </div>

        </b-button>

    <b-collapse id="testing2">
      <b-container class="containsRowItems sectionGroup" fluid>
      <h6>Sub Group Title</h6>

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
                  </div>

                  <div class="rowItemText">
                    <p>Here is an example of the basic row element.</p>
                  </div>

                  <div class="rowItemSuffix">
                  </div>

              </div>
            </b-button>

          </b-col>
        </b-row>
      </b-container>

      </b-container>
    </b-collapse>

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

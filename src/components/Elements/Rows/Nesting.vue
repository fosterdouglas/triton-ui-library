<docs>


<h3>Nesting</h3>
<p>Utilizing the flexibility of Bootstrap's "Collapse" element, rows can be nested for additional organization. These nested groups can contain any number and type of row elements, as well as an additional nested one. For usability, it's not recommended to to nest more than twice.</p>


```js
<template>
    <b-container class="containsRowItems" fluid>
      <b-row>
        <b-col>

          <b-button
            block
            class="rowItem rowExpandable rowItemHover cursorDefault"
            variant="none"
            v-b-toggle.collapse-0
            onclick="this.blur();"
          >

            <div class="rowItemContent">

              <div class="rowItemPrefix">
                <i class="iconCollapseExpand"></i>
              </div>

              <div class="rowItemText">
                <p>A common iteration of the row element is the expanding type.</p>
              </div>

              <div class="rowItemSuffix">

              </div>

            </div>

          </b-button>

          <b-collapse id="collapse-0">
            <b-card class="rowExpandableContent">Information!</b-card>
          </b-collapse>

        </b-col>
      </b-row>

      <b-row>
        <b-col>

          <b-button
            block
            class="rowItem rowExpandable rowItemHover cursorDefault"
            variant="none"
            v-b-toggle.collapse-1
            onclick="this.blur();"
          >

            <div class="rowItemContent">

              <div class="rowItemPrefix">
                <i class="iconCollapseExpand"></i>
              </div>

              <div class="rowItemText">
                <p>Click me to expand or collapse a linked group of data.</p>
              </div>

              <div class="rowItemSuffix">

              </div>

            </div>

          </b-button>

          <b-collapse id="collapse-1">
            <b-card class="rowExpandableContent">Information!</b-card>
          </b-collapse>

        </b-col>
      </b-row>

      <b-row>
        <b-col>

          <b-button
            block
            class="rowItem rowExpandable rowItemHover cursorDefault"
            variant="none"
            v-b-toggle.collapse-2
            onclick="this.blur();"
          >

            <div class="rowItemContent">

              <div class="rowItemPrefix">
                <i class="iconCollapseExpand"></i>
              </div>

              <div class="rowItemText">
                <p>This is used to store and organize large amounts of information.</p>
              </div>

              <div class="rowItemSuffix">

              </div>

            </div>

          </b-button>

          <b-collapse visible id="collapse-2">
            <b-card class="rowExpandableContent">
              <b-container class="containsRowItems" fluid>
                <b-row>
                  <b-col>
                    <b-button
                      block
                      class="rowItem rowExpandable rowItemHover cursorDefault"
                      variant="none"
                      v-b-toggle.collapse-2-inner
                      onclick="this.blur();"
                    >

                      <div class="rowItemContent">

                        <div class="rowItemPrefix">
                          <i class="iconCollapseExpand"></i>
                        </div>

                        <div class="rowItemText">
                          <p>These can also be nested!</p>
                        </div>

                        <div class="rowItemSuffix">

                        </div>

                      </div>

                    </b-button>

                    <b-collapse id="collapse-2-inner" class="">
                      <b-card class="rowExpandableContent">Look! Even more information!</b-card>
                    </b-collapse>

                  </b-col>
                </b-row>

              </b-container>

            </b-card>
          </b-collapse>
        </b-col>
      </b-row>

    </b-container>

</template>
<script>
  export default {
    data() {
      return {
        showCollapse1: false,
        showCollapse2: true
      }
    }
  }
</script>
```

</docs>

<docs>

```jsx noeditor
<div>
<p class="ml-n3 w-75 mb-0">The row element is the building block of Triton's organizational and design system. It's used to display bite-sized interactive pieces of data, analogous to a row in a table but with much greater organizational potential. It's designed to be endlessly flexible and customizable. In general, the row element should only be used for Triton's backend system, not for customer-facing pages.</p>
<br/>
</div>
```

<h3>Standard</h3>
<p>This basic-use version of the row element won't be found often, since it can only display data. If a display-only data solution is required, the <a href="../../#/Tables/Tables">Table</a> component may be of better use.</p>

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
                <p>The app will build upon these for information and organization.</p>
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
            class="rowItem rowStandard rowItemHover cursorDefault"
            variant="none"
            onclick="this.blur();"
          >

            <div class="rowItemContent">

              <div class="rowItemPrefix">

              </div>

              <div class="rowItemText">
                <p>Often these will contain helpful interactive tooltips.</p>
              </div>

              <div class="rowItemSuffix">

              </div>

            </div>

          </b-button>
        </b-col>

        <b-col class="appendButton">
          <b-button
            :pressed="false"
            variant="-"
            class="cursorDefault rowItemHover questionBox"
            onclick="this.blur();"
            @hover="PopoverHover1 = !PopoverHover1"
            id="PopoverHover1"
           >
            <i  class="iconQuestion text-medium fa-lg"></i>
            <b-popover
              triggers="hover blur"
              variant="-"
              placement="right"
              target="PopoverHover1"

             >
             Here is some content.
            </b-popover>
          </b-button>
        </b-col>
      </b-row>
    </b-container>

</template>
<script>
  export default {
    data() {
      return {
        PopoverHover1: false
      }
    }
  }
</script>
```

</docs>

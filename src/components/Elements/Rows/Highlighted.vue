<docs>


<h3>Highlighted</h3>
<p>The highlighted element can be used for an item that's particularly important or needs focus. It also has additional margin spacing on the top and bottom to set it apart. <b>Important:</b> these can't currently be used along with a prepended or appended button, like a checkbox or a tooltip box. </p>

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
            class="rowItem rowStandard rowItemHover rowHighlightDark cursorDefault"
            variant="none"
            onclick="this.blur();"
          >

            <div class="rowItemContent">

              <div class="rowItemPrefix">
                <i class="iconPackage fas fa-lg"></i>
              </div>

              <div class="rowItemText">
                <p>This one is highlighted in yellow to give additional focus or importance.</p>
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
            class="rowItem rowStandard rowItemHover rowHighlightSecondary cursorDefault"
            variant="none"
            onclick="this.blur();"
          >

            <div class="rowItemContent">

              <div class="rowItemPrefix">
                <i class="iconExclamation"></i>
              </div>

              <div class="rowItemText">
                <p>This one is highlighted in yellow to give additional focus or importance.</p>
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
            class="rowItem rowStandard rowItemHover rowHighlightConfirm cursorDefault"
            variant="none"
            onclick="this.blur();"
          >

            <div class="rowItemContent">

              <div class="rowItemPrefix">
                <i class="iconConfirm"></i>
              </div>

              <div class="rowItemText">
                <p>A green highlight could be used to confirm a correct or valid option.</p>
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
                  <p>Here is an example of the basic row element.</p>
                </div>

                <div class="rowItemSuffix">
                </div>

            </div>
          </b-button>

        </b-col>
      </b-row><b-row>
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
            class="rowItem rowStandard rowItemHover rowHighlightWarning cursorDefault"
            variant="none"
            onclick="this.blur();"
          >

            <div class="rowItemContent">

              <div class="rowItemPrefix">
                <i class="iconRemove"></i>
              </div>

              <div class="rowItemText">
                <p>While a red highlight might indicate an error.</p>
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

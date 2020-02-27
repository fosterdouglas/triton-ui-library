<docs>

<h3>Toggle</h3>
<p>A very commonly seen addition to the row, the toggle button is used most often to enable or disable functions. In the Triton application, it's very often attached to the "override" function, allowing a user to override a value that's inherited from elsewhere.</p>

```js
<template>
    <b-container class="containsRowItems" fluid>

      <b-row>
          <b-col class="prependButton">
             <b-button
                :pressed="false"
                variant="outline-primaryfade"
                class="btnSmall btnSwitch"
                onclick="this.blur();"
                >
                 <div class="custom-control custom-switch">
                   <input type="checkbox" class="custom-control-input" id="customSwitch1" />
                   <label class="custom-control-label cursorPointer" for="customSwitch1"></label>
                 </div>
             </b-button>
          </b-col>

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
                  <p>The toggle allows a given parameter to be enabled or disabled.</p>
                </div>

                <div class="rowItemSuffix">
                </div>

              </div>

            </b-button>
        </b-col>
      </b-row>

      <b-row>
        <b-col class="prependButton">
           <b-button
              :pressed="false"
              variant="outline-primaryfade"
              class="btnSmall btnSwitch cursorDisabled"
              onclick="this.blur();"
              disabled
              >
               <div class="custom-control custom-switch">
                 <input checked disabled type="checkbox" class="custom-control-input custom-control-input-disabled" id="customSwitch2" />
                 <label class="custom-control-label custom-control-label-disabled cursorDisabled" for="customSwitch2"></label>
               </div>
           </b-button>
        </b-col>
        <b-col>

          <b-button
            block
            class="rowItem rowStandard rowItemHover"
            variant="none"
            onclick="this.blur();"
          >

            <div class="rowItemContent">

              <div class="rowItemPrefix">
              </div>

              <div class="rowItemText rowDisabledText">
                <p>Sometimes the toggle itself is disabled entirely, as a result of other settings.</p>
              </div>

              <div class="rowItemSuffix">

              </div>

            </div>

          </b-button>

        </b-col>
      </b-row>

      <b-row>
        <b-col class="prependButton">
           <b-button
              :pressed="false"
              variant="outline-primaryfade"
              class="btnSmall btnSwitch cursorDisabled"
              onclick="this.blur();"
              disabled
              >
               <div class="custom-control custom-switch">
                 <input type="checkbox" class="custom-control-input custom-control-input-disabled" id="customSwitch3" disabled />
                 <label class="custom-control-label custom-control-label-disabled cursorDisabled" for="customSwitch3"></label>
               </div>
           </b-button>
        </b-col>
        <b-col>
          <b-button
            block
            class="rowItem rowStandard rowItemHover"
            variant="none"
            onclick="this.blur();"
          >

            <div class="rowItemContent">

              <div class="rowItemPrefix">
              </div>

              <div class="rowItemText rowDisabledText">
                <p>Sometimes the toggle itself is disabled entirely, as a result of other settings.</p>
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

<docs>

<h3>Radio List</h3>
<p>Radio buttons are used to select a single choice from many options. <span class="text-info">~Upcoming feature for adding a dark border to the attached row of the selected radio button, for additional clarity~</span></p>

```js
<template>
      <b-container class="containsRowItems" fluid>

        <b-row>
          <b-col class="prependButton">
             <b-button
                :pressed="false"
                variant="outline-primaryfade"
                class="btnSmall btnStandard btnRadio"
                onclick="this.blur();"
                >
                 <div class="custom-control custom-radio">
                   <input id="customRadio1" class="custom-control-input" type="radio" name="radio"/>
                   <label class="custom-control-label cursorPointer" for="customRadio1"></label>
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
                  The radio list is used to make a single selection...
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
                class="btnSmall btnStandard btnRadio"
                onclick="this.blur();"
                >
                 <div class="custom-control custom-radio">
                   <input id="customRadio2" class="custom-control-input" type="radio" name="radio"/>
                   <label class="custom-control-label cursorPointer" for="customRadio2"></label>
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
                  Amongst many different choices.
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
                class="btnSmall btnStandard btnRadio"
                onclick="this.blur();"
                >
                 <div class="custom-control custom-radio">
                   <input id="customRadio3" class="custom-control-input" type="radio" name="radio"/>
                   <label class="custom-control-label cursorPointer" for="customRadio3"></label>
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
                  Choose wisely!
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

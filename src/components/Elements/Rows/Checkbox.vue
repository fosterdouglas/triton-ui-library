<docs>

<h3>Checkbox</h3>
<p>The checkbox addition to a row element is one of the most commonly used. There are hundreds of options and settings within the application, and many of them are "yes/no" or "true/false" which the checkbox is suited for.</p>

```js
<template>
    <b-container class="containsRowItems" fluid>

      <b-row>
        <b-col class="prependButton">
           <b-button
              :pressed="false"
              variant="outline-primaryfade"
              class="btnSmall btnStandard btnCheck"
              onclick="this.blur();"
              >
               <div class="custom-control custom-checkbox">
                 <input id="customCheck1" class="custom-control-input" type="checkbox"/>
                 <label class="custom-control-label cursorPointer" for="customCheck1"></label>
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
                The checkbox can be used to set something as true or false.
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
              class="btnSmall btnStandard btnCheck"
              onclick="this.blur();"
              >
               <div class="custom-control custom-checkbox">
                 <input id="customCheck2" class="custom-control-input" type="checkbox"/>
                 <label class="custom-control-label cursorPointer" for="customCheck2"></label>
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
                Think of it as a Yes or No answer to the accompanying text.
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

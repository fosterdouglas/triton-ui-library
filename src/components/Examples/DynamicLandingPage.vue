<docs>


<h3>Dynamic Landing Page (Triton 50)</h3>
<p>...</p>

```js
<template>
  <div>

    <h1>Getting Started</h1>
    <p>Please complete the questions below to determine the correct check for your needs.</p>
    <hr/>
      <b-row align-h="between">
        <b-col sm="auto">
          <i class="iconCircle text-dark fas fa-xs"></i>
          <i class="iconCircle text-dark fa-xs"></i>
          <i class="iconCircle text-dark fa-xs"></i>
          <i class="iconCircle text-dark fa-xs"></i>
        </b-col>
        <b-col sm="auto">
          <b-button
            :pressed="false"
            variant="outline-primaryfade"
            class="btnThin"
            size="sm"
            onclick="this.blur();"
            >
            <div class="btnText">Reset Selection</div>

          </b-button>
        </b-col>
      </b-row>


  <div class="sectionGroup">
    <h4>Is this check requested as a part of a volunteer position?
      <b-button
        :pressed="false"
        variant="outline"
        class="cursorDefault"
        @hover="showHover5 = !showHover5"
       >
        <i id="PopoverHover5" class="iconQuestion iconHover text-mediumdark fa-lg"></i>
        <b-popover
          triggers="hover blur"
          variant="mediumdark"
          placement="right"
          target="PopoverHover5"
         >
          here is some text here is some text here is some text here is some text here is some text here is some text here is some text here is some text here is some text here is some text here is some text here is some text
        </b-popover>
      </b-button>
    </h4>



    <b-container class="containsRowItems" fluid>

      <b-row>
        <b-col>
          <b-button
            block
            class="rowItem rowTitle cursorDefault"
            variant="none"
            onclick="this.blur();"
          >

            <div class="rowItemContent">


              <div class="rowItemText">
                <p class="mb-0">Please choose one:</p>
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
                Yes, I volunteer with an organization that requested this check.
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
                No.
              </div>

              <div class="rowItemSuffix">
              </div>

            </div>
          </b-button>
        </b-col>
      </b-row>

    </b-container>


  </div>

    <b-row align-h="start">
      <b-col sm="auto">
        <b-button
          :pressed="false"
          variant="outline-primaryfade"
          class="btnNavigation btnStandard float-right"
          onclick="this.blur();"
          >
          <div class="btnText">NEXT</div>
          <i class="iconArrow btnIconRight"></i>
        </b-button>
      </b-col>
    </b-row>

    <br/>
    <br/>
    <br/>
    <br/>
    <br/>

    <b-row align-h="center">
      <b-col cols="11">
        <b-card class="highlightSection">
          <h3>Criminal Record and Judicial Matters Check (CRJMC)</h3>
          <p>A collection of offence information, including convictions, outstanding warrants, charges and judicial orders available from a local police agency's records management system and other systems/records where authorized.</p>
          <p>This check is intended for applicants who are seeking volunteer and/or employment with agencies who require a criminal record check. The agency has determined that a search of pardoned sex offenders database is NOT required (i.e., border crossing or visa) therefore this check is NOT intended for applicants who are seeking volunteer and/or employment with vulnerable persons.</p>
          <b-row align-h="center">
            <b-col>
                <b-row
                  align-v="center"
                  class="border border-dark bg-light py-2"
                  style="min-height:150px; max-width:270px;">

                  <b-col
                    align-h="center"
                    align-self="end"
                    cols="12">
                    <h4 class="mb-0 text-center">MoreMore More More More Text</h4>
                  </b-col>

                  <b-col
                    align-h="center"
                    align-self="end"
                    cols="12">
                    <h6 class="m-0 text-center text-mediumdark">$10 + Applicable Tax Tax Tax Tax Tax</h6>
                  </b-col>

                  <b-col
                    align-h="center"
                    align-self="end"
                    cols="12"
                    class="text-center">
                    <b-button
                      :pressed="false"
                      variant="outline-primary"
                      class="btnNavigation btnStandard btnWhite"
                      onclick="this.blur();"
                      >
                      <div class="btnText">START CHECK</div>
                      <i class="iconArrow btnIconRight"></i>
                    </b-button>
                  </b-col>

                </b-row>

            </b-col>

            <b-col>

                <b-row
                  align-v="center"
                  class="border border-dark bg-light py-2"
                  style="min-height:150px; max-width:270px;">

                  <b-col
                    align-h="center"
                    align-self="end"
                    cols="12">
                    <h4 class="mb-0 text-center">Less Text</h4>
                  </b-col>

                  <b-col
                    align-h="center"
                    align-self="end"
                    cols="12">
                    <h6 class="m-0 text-center text-mediumdark">$10 + Applicable Tax</h6>
                  </b-col>

                  <b-col
                    align-h="center"
                    align-self="end"
                    cols="12"
                    class="text-center">
                    <b-button
                      :pressed="false"
                      variant="outline-primary"
                      class="btnNavigation btnStandard btnWhite"
                      onclick="this.blur();"
                      >
                      <div class="btnText">START CHECK</div>
                      <i class="iconArrow btnIconRight"></i>
                    </b-button>
                  </b-col>

                </b-row>

            </b-col>

            <b-col>

                <b-row
                  align-v="center"
                  class="border border-dark bg-light py-2"
                  style="min-height:150px; max-width:270px;">

                  <b-col
                    align-h="center"
                    align-self="end"
                    cols="12">
                    <h4 class="mb-0 text-center">Way Way Way Way Way Way Way Way Way Way Way Way Too Much Text!! </h4>
                  </b-col>

                  <b-col
                    align-h="center"
                    align-self="end"
                    cols="12">
                    <h6 class="m-0 text-center text-mediumdark">$10 + Applicable Tax Tax Tax Tax Tax $10 + Applicable Tax Tax Tax Tax Tax $10 + Applicable Tax Tax Tax Tax Tax</h6>
                  </b-col>

                  <b-col
                    align-h="center"
                    align-self="end"
                    cols="12"
                    class="text-center">
                    <b-button
                      :pressed="false"
                      variant="outline-primary"
                      class="btnNavigation btnStandard btnWhite"
                      onclick="this.blur();"
                      >
                      <div class="btnText">START CHECK</div>
                      <i class="iconArrow btnIconRight"></i>
                    </b-button>
                  </b-col>

                </b-row>

            </b-col>

          </b-row>
        </b-card>
      </b-col>
    </b-row>

  </div>
</template>
<script>
  export default {
    data() {
      return {
        showHover5: false
      }
  }
}
</script>
```

</docs>

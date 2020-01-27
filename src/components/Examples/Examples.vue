<docs>

<h3>Triton 5-0 Pricing Survey</h3>

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
    <h5>Is this check requested as a part of a volunteer position?
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
          :show.sync="showHover5"
         >
          here is some text here is some text here is some text here is some text here is some text here is some text here is some text here is some text here is some text here is some text here is some text here is some text
        </b-popover>
      </b-button>
    </h5>

    <p></p>
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

    <b-button
      block
      class="rowItem rowStandard rowItemHover cursorDefault"
      variant="none"
      onclick="this.blur();"
    >

      <div class="rowItemContent">

        <div class="rowItemPrefix">
          <div class="custom-control custom-radio">
            <input id="customRadio1" class="custom-control-input" type="radio" name="radio"/>
            <label class="custom-control-label cursorPointer" for="customRadio1"></label>
          </div>
        </div>

        <div class="rowItemText">
          <p class="mb-0">Yes, I volunteer with an organization that requested this check.</p>
        </div>

        <div class="rowItemSuffix">
        </div>

      </div>

    </b-button>

    <b-button
      block
      class="rowItem rowStandard rowItemHover cursorDefault"
      variant="none"
      onclick="this.blur();"
    >

      <div class="rowItemContent">

        <div class="rowItemPrefix">
          <div class="custom-control custom-radio">
            <input id="customRadio2" class="custom-control-input" type="radio" name="radio"/>
            <label class="custom-control-label cursorPointer" for="customRadio2"></label>
          </div>
        </div>

        <div class="rowItemText">
          <p class="mb-0">No.</p>
        </div>

        <div class="rowItemSuffix">
        </div>

      </div>

    </b-button>
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
      <b-col cols="10">
        <b-card class="highlightSection">
          <h3>Criminal Record and Judicial Matters Check (CRJMC)</h3>
          <p>A collection of offence information, including convictions, outstanding warrants, charges and judicial orders available from a local police agency's records management system and other systems/records where authorized.</p>
          <p>This check is intended for applicants who are seeking volunteer and/or employment with agencies who require a criminal record check. The agency has determined that a search of pardoned sex offenders database is NOT required (i.e., border crossing or visa) therefore this check is NOT intended for applicants who are seeking volunteer and/or employment with vulnerable persons.</p>
          <b-row align-h="center">
            <b-col sm="auto">
              <div class="sectionGroup text-center border border-dark bg-light">
                <b-button
                  :pressed="false"
                  variant="outline-primary"
                  class="btnNavigation btnStandard btnWhite"
                  onclick="this.blur();"
                  >
                  <div class="btnText">START CHECK</div>
                  <i class="iconArrow btnIconRight"></i>
                </b-button>
                <h6 class="mt-1 mb-n2 text-center">$50 + tax ($56.50)</h6>
              </div>
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
      }
    }
  }
</script>
```

</docs>

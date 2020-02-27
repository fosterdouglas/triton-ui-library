<docs>

<h3>EIV</h3>
<p>A demonstration of the EIV flow, including the new privacy and terms of use.</p>

```js
<template>
  <div>
    <b-container class="containsRowItems sectionGroup" fluid>
      <b-row>
        <b-col cols="9">
          <b-input-group>
            <b-input-group-prepend>
              <b-input-group-text>
              Full Name
              </b-input-group-text>
            </b-input-group-prepend>

            <b-form-input class="form-control" type="email" placeholder=""></b-form-input>
          </b-col>

          <b-col class="appendButton">
            <b-input-group-append>
              <b-button
                :pressed="false"
                variant="-"
                class="cursorDefault rowItemHover questionBox"
                onclick="this.blur();"
                @hover="PopoverHover20g = !PopoverHover20g"
                id="PopoverHover20g"
               >
                <i  class="iconQuestion text-medium fa-lg"></i>
                <b-popover
                  triggers="hover blur"
                  variant="mediumdark"
                  placement="right"
                  target="PopoverHover20g"
                 >
                 Here is some content.
                </b-popover>
              </b-button>
            </b-input-group-append>
          </b-input-group>
        </b-col>
      </b-row>
      <b-row>
        <b-col cols="9">
          <b-input-group>
            <b-input-group-prepend>
              <b-input-group-text>
              Email Address
              </b-input-group-text>
            </b-input-group-prepend>

            <b-form-input class="form-control" type="email" placeholder=""></b-form-input>
          </b-col>

          <b-col class="appendButton">
            <b-input-group-append>
              <b-button
                :pressed="false"
                variant="-"
                class="cursorDefault rowItemHover questionBox"
                onclick="this.blur();"
                @hover="PopoverHover20f = !PopoverHover20f"
                id="PopoverHover20f"
               >
                <i  class="iconQuestion text-medium fa-lg"></i>
                <b-popover
                  triggers="hover blur"
                  variant="mediumdark"
                  placement="right"
                  target="PopoverHover20f"
                 >
                 Here is some content.
                </b-popover>
              </b-button>
            </b-input-group-append>
        </b-col>
      </b-row>
      <b-row>
        <b-col cols="9">
          <b-input-group>
            <b-input-group-prepend>
              <b-input-group-text>
              Phone Number
              </b-input-group-text>
            </b-input-group-prepend>

            <b-form-input class="form-control" type="tel" v-mask="'###-###-####'" placeholder=""></b-form-input>

          </b-col>
          <b-col class="appendButton">
            <b-input-group-append>
              <b-button
                :pressed="false"
                variant="-"
                class="cursorDefault rowItemHover questionBox"
                onclick="this.blur();"
                @hover="PopoverHover20h = !PopoverHover20h"
                id="PopoverHover20h"
               >
                <i  class="iconQuestion text-medium fa-lg"></i>
                <b-popover
                  triggers="hover blur"
                  variant="mediumdark"
                  placement="right"
                  target="PopoverHover20h"
                 >
                 Here is some content.
                </b-popover>
              </b-button>
            </b-input-group-append>
        </b-col>
      </b-row>
      <b-row>
        <br/>
      </b-row>
      <b-row>
        <b-col cols="9">
          <b-button
            block
            class="rowItem rowExpandable rowItemHover cursorDefault"
            variant="none"
            onclick="this.blur();"
            id="tempRow3"
          >

            <div class="rowItemContent">

              <div class="rowItemPrefix">
                <div class="custom-control custom-checkbox">
                  <input id="customCheckPolicy" class="custom-control-input" type="checkbox"/>
                  <label class="custom-control-label cursorPointer" for="customCheckPolicy"></label>
                </div>
              </div>

              <div class="rowItemText" id="tempTerms">
                <p>Please accept our Terms of Use and Privacy Policy.</p>
              </div>

              <div class="rowItemSuffix">
              </div>

            </div>

          </b-button>
          <b-collapse visible id="collapse-Policy">
            <b-card class="rowExpandableContent">
              <p>
              Please accept the <b-link class="text-secondary" href="#">Terms Of Use</b-link> of this website, describing the responsible collection, use, and disclosure of your personal information.
              <br/><br/>
              By selecting the above check box, you give express consent to why and how your personal information may be collected and used, in protection and compliance with our <b-link class="text-secondary" target="_blank" href="https://www.tritoncanada.ca/privacy-policy">Privacy Policy</b-link>.
              <br/><br/>
              Questions about any policies may be directed to our Privacy Officer. Contact information is available in the links above.
              </p>
            </b-card>
          </b-collapse>

        </b-col>
      </b-row>
      <b-row id="tempText3">
        <b-col class="text-warning">
          Please accept our Privacy Policy by selecting the check box above.
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <b-button
            :pressed="false"
            variant="outline-primaryfade"
            class="btnNavigation btnStandard nonRowItem"
            onclick="this.blur();"
            @click="modalAPI = !modalAPI;testfunc0()"

            >
            <div class="btnText"></i>SUBMIT FORM</div>

          </b-button>
      </b-col>
    </b-row>

    </b-container>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        showHover5: false,
        PopoverHover20f: false,
        PopoverHover20g: false,
        PopoverHover20h: false
      }
    },
        methods: {
          testfunc0() {
            $( function() {
              // Get the checkbox
              var checkBox = document.getElementById("customCheckPolicy");

              // If the checkbox is checked, display the output text
              if (checkBox.checked == true){
                document.getElementById('tempText3').style.display = 'none';
                $( "#tempRow3" ).removeClass( "rowHighlightWarning" );
              } else {
                document.getElementById('tempText3').style.display = 'flex';
                $( "#tempRow3" ).addClass( "rowHighlightWarning" );
              }
            });
          }
      }
  }
</script>
```

</docs>

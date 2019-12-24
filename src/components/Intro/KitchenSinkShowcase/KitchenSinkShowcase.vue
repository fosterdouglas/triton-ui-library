<docs>

<h3>Kitchen Sink Showcase</h3>

```js
<template>


<div>
  <b-navbar toggleable="lg" type="dark" variant="primary">
    <b-navbar-brand href="#">
      <img src="https://e-bydesign.ca/assets/triton-logo.svg">
    </b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>

      <!-- Left aligned nav items -->
      <b-navbar-nav>
        <b-nav-item active href="#">Clients / Users</b-nav-item>
        <b-nav-item href="#">Reports</b-nav-item>
        <b-nav-item-dropdown class="dropdownCustomToggle" text="Tools">
          <b-dropdown-item href="#">Log Comment</b-dropdown-item>
          <b-dropdown-item href="#">Create Request</b-dropdown-item>
          <b-dropdown-item href="#">New Form</b-dropdown-item>
          <b-dropdown-item href="#">File Upload</b-dropdown-item>
        </b-nav-item-dropdown>
        <b-nav-item href="#">Queue <b-badge variant="light">4</b-badge></b-nav-item>
        <b-nav-item href="#">Admin</b-nav-item>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-item-dropdown class="dropdownCustomToggle" text="Lang" right>
          <b-dropdown-item href="#">EN</b-dropdown-item>
          <b-dropdown-item href="#">FR</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>

    </b-collapse>
  </b-navbar>



  <div>
    <b-card class="sideNav" no-body>
      <b-breadcrumb class="breadcrumbTop" :items="items"></b-breadcrumb>
      <b-tabs card vertical>
        <b-tab disabled>
          <template v-slot:title><span>General Settings</span></template>
        </b-tab>
        <b-tab>
          <template v-slot:title><span>Client Details</span></template>
          <h4>Client Details</h4>
          <b-button
            block
            class="rowItem rowTitle cursorDefault"
            variant="none"
            onclick="this.blur();"
          >

            <div class="rowItemContent">



              <div class="rowItemText">
                <p class="mb-0">Account</p>
              </div>

              <div class="rowItemSuffix">
              </div>

            </div>
          </b-button>
          <div class="sectionGroup">
              <b-row>
                <b-col cols="8">
                  <b-input-group prepend="Parent">
                    <template v-slot:append>
                      <b-button
                        :pressed="false"
                        variant="outline-secondary"
                        class="btnSmall btnFeedback text-secondary"
                        onclick="this.blur();"
                        >
                      <i class="iconEdit iconBorderStd"></i>
                      </b-button>
                    </template>

                    <b-form-input class="form-control" type="text" placeholder="Triton Master" title="Triton Master" disabled>

                    </b-form-input>




                  </b-input-group>


                </b-col>
              </b-row>
              <b-row>
                <b-col cols="8">
                  <b-input-group prepend="Name">
                    <b-form-input value="Current Client or User" class="form-control" type="text" placeholder=""></b-form-input>
                  </b-input-group>
                </b-col>
              </b-row>

          </div>

          <b-button
            block
            class="rowItem rowTitle cursorDefault"
            variant="none"
            onclick="this.blur();"
          >

            <div class="rowItemContent">



              <div class="rowItemText">
                <p class="mb-0">Contact Information</p>
              </div>

              <div class="rowItemSuffix">
              </div>

            </div>

          </b-button>
          <div class="sectionGroup">
            <b-row>
              <b-col cols="8">
                <b-input-group prepend="Street #">
                  <template v-slot:append>

                        <b-button
                          :pressed="false"
                          variant="-"
                          class="cursorDefault"
                          onclick="this.blur();"
                          @hover="showHover20 = !showHover20"
                         >
                          <i id="PopoverHover20" class="iconQuestion iconHover text-mediumdark fa-lg"></i>
                          <b-popover
                            triggers="hover blur"
                            variant="mediumdark"
                            placement="right"
                            target="PopoverHover20"
                           >
                            Here is some content.
                          </b-popover>
                        </b-button>

                  </template>
                  <b-form-input class="form-control" type="text" placeholder=""></b-form-input>
                </b-input-group>
              </b-col>
            </b-row>
            <b-row>
              <b-col cols="8">
                <b-input-group prepend="Street Name">
                  <b-form-input class="form-control" type="text" placeholder=""></b-form-input>
                </b-input-group>
              </b-col>
            </b-row>
            <b-row>
              <b-col cols="8">
                <b-input-group prepend="Unit">
                  <b-form-input class="form-control" type="text" placeholder=""></b-form-input>
                </b-input-group>
              </b-col>
            </b-row>
            <b-row>
              <b-col cols="8">
                <b-input-group prepend="City">
                  <b-form-input class="form-control" type="text" placeholder=""></b-form-input>
                </b-input-group>
              </b-col>
            </b-row>
            <b-row>
              <b-col cols="8">
                <b-input-group prepend="Province">
                  <select name="salutation" id="choose">
                    <option disabled selected>Choose One...</option>
                    <option>Alberta</option>
                    <option>British Columbia</option>
                    <option>Manitoba</option>
                    <option>New Brunswick</option>
                    <option>Newfoundland and Labrador</option>
                    <option>Nova Scotia</option>
                    <option>Ontario</option>
                    <option>Prince Edward Island</option>
                    <option>Quebec</option>
                    <option>Saskatchewan</option>
                  </select>
                </b-input-group>
              </b-col>
            </b-row>
            <b-row>
              <b-col cols="8">
                <b-input-group prepend="Postal Code">
                  <b-form-input class="form-control" for="postal" v-mask="'XXX XXX'"></b-form-input>
                </b-input-group>
              </b-col>
            </b-row>
            <b-row>
              <b-col cols="8">
                <b-input-group prepend="Country">
                  <b-form-input class="form-control" type="text" placeholder=""></b-form-input>
                </b-input-group>
              </b-col>
            </b-row>
            <b-row>
              <b-col cols="8">
                <b-input-group prepend="Phone">
                  <b-form-input class="form-control" type="tel" v-mask="'###-###-####'" placeholder=""></b-form-input>
                </b-input-group>
              </b-col>
            </b-row>
        </div>
        <div class="breadcrumbBottomSpacer"></div>
      </b-tab>

      <b-tab>
        <template v-slot:title><span>Options</span></template>
        <h4>Options</h4>
          <b-button
            block
            class="rowItem rowTitle cursorDefault"
            variant="none"
            onclick="this.blur();"
          >

            <div class="rowItemContent">



              <div class="rowItemText">
                <p class="mb-0">Options Group Name 1</p>
              </div>

              <div class="rowItemSuffix">
              </div>

            </div>

          </b-button>
          <div class="sectionGroup">
            <b-input-group>
              <div class="sectionItem">
                <b-button
                  block
                  class="rowItem rowStandard rowItemHover cursorDefault"
                  variant="none"
                  onclick="this.blur();"
                >

                  <div class="rowItemContent">

                    <div class="rowItemPrefix">
                      <div class="custom-control custom-checkbox">
                        <input id="customCheck1" class="custom-control-input" type="checkbox"/>
                        <label class="custom-control-label cursorPointer" for="customCheck1"></label>
                      </div>
                    </div>

                    <div class="rowItemText">
                      <p class="mb-0">The checkbox can be used to set something as true or false.</p>
                    </div>

                    <div class="rowItemSuffix">
                    </div>

                  </div>

                </b-button>
              </div>
              <div class="sectionItem">
                <b-button
                  block
                  class="rowItem rowStandard rowItemHover cursorDefault"
                  variant="none"
                  onclick="this.blur();"
                >

                  <div class="rowItemContent">

                    <div class="rowItemPrefix">
                      <div class="custom-control custom-checkbox">
                        <input id="customCheck2" class="custom-control-input" type="checkbox"/>
                        <label class="custom-control-label cursorPointer" for="customCheck2"></label>
                      </div>
                    </div>

                    <div class="rowItemText">
                      <p class="mb-0">The checkbox can be used to set something as true or false.</p>
                    </div>

                    <div class="rowItemSuffix">
                    </div>

                  </div>

                </b-button>
              </div>
              <div class="sectionItem">
                <b-button
                  block
                  class="rowItem rowStandard rowItemHover cursorDefault"
                  variant="none"
                  onclick="this.blur();"
                >

                  <div class="rowItemContent">

                    <div class="rowItemPrefix">
                      <div class="custom-control custom-checkbox">
                        <input id="customCheck3" class="custom-control-input" type="checkbox"/>
                        <label class="custom-control-label cursorPointer" for="customCheck3"></label>
                      </div>
                    </div>

                    <div class="rowItemText">
                      <p class="mb-0">The checkbox can be used to set something as true or false.</p>
                    </div>

                    <div class="rowItemSuffix">
                    </div>

                  </div>

                </b-button>
              </div>
              <div class="sectionItem">
                <b-button
                  block
                  class="rowItem rowStandard rowItemHover cursorDefault"
                  variant="none"
                  onclick="this.blur();"
                >

                  <div class="rowItemContent">

                    <div class="rowItemPrefix">
                      <div class="custom-control custom-checkbox">
                        <input id="customCheck4" class="custom-control-input" type="checkbox"/>
                        <label class="custom-control-label cursorPointer" for="customCheck4"></label>
                      </div>
                    </div>

                    <div class="rowItemText">
                      <p class="mb-0">The checkbox can be used to set something as true or false.</p>
                    </div>

                    <div class="rowItemSuffix">
                    </div>

                  </div>

                </b-button>

              </div>


            </b-input-group>
          </div>


      </b-tab>
        <b-tab>
          <template v-slot:title><span>Reports & Invoicing</span></template>
          <h4>Reports & Invoicing</h4>
        </b-tab>
        <b-tab>
          <template v-slot:title><span>Transactions</span></template>
          <h4>Transactions</h4>
        </b-tab>
        <b-tab>
          <template v-slot:title><span>Packages</span></template>
          <h4>Package Services</h4>
              <div>
                <b-card class="tabsNav" no-body>
                  <b-tabs pills card vertical end>
                    <b-tab title="ASSIGNED PACKAGES" disabled>
                    </b-tab>
                    <b-tab title="Package Name 001" active>

                        <b-button
                          block
                          class="rowItem rowTitle cursorDefault"
                          variant="none"
                          onclick="this.blur();"
                        >

                          <div class="rowItemContent">



                            <div class="rowItemText">
                              <p class="mb-0">Criminal Record Check (CRC)</p>
                            </div>

                            <div class="rowItemSuffix">
                            </div>

                          </div>

                        </b-button>
                        <div class="sectionGroup">
                          <div class="sectionItem">

                            <b-button
                              block
                              class="rowItem rowExpandable rowItemHover cursorDefault"
                              variant="none"
                              v-b-toggle.collapse-2
                              onclick="this.blur();"
                            >

                              <div class="rowItemContent">

                                <div class="rowItemPrefix">
                                  <i class="iconDash"></i>
                                </div>

                                <div class="rowItemText">
                                  <p>Service Fees</p>
                                </div>

                                <div class="rowItemSuffix">
                                  <i class="iconChevron"></i>
                                </div>

                              </div>

                            </b-button>

                            <b-collapse id="collapse-2">
                              <b-card class="rowExpandableContent">
                                <b-button
                                  block
                                  class="rowItem rowStandard rowItemHover cursorDefault"
                                  variant="none"
                                  onclick="this.blur();"
                                >

                                  <div class="rowItemContent">

                                      <div class="rowItemPrefix">
                                        <i class="iconInherited"></i>
                                      </div>

                                      <div class="rowItemText">
                                        Base Fee: $14.95
                                        <b-badge variant="medium">Inherited</b-badge>
                                      </div>

                                      <div class="rowItemSuffix">

                                      </div>

                                  </div>

                                </b-button>
                                <b-button
                                  block
                                  class="rowItem rowStandard rowItemHover cursorDefault"
                                  variant="none"
                                  v-b-toggle.collapse-2-inner
                                  onclick="this.blur();"
                                >

                                  <div class="rowItemContent">

                                    <div class="rowItemPrefix">
                                      <i class="iconDash"></i>
                                    </div>

                                    <div class="rowItemText">
                                      <p>Fees Override</p>
                                    </div>

                                    <div class="rowItemSuffix">
                                      <i class="iconChevron"></i>
                                    </div>

                                  </div>

                                </b-button>

                                <b-collapse id="collapse-2-inner">
                                  <b-card class="rowExpandableContentInner">
                                    <div class="custom-control custom-switch">
                                      <input v-b-toggle.collapse-4-inner type="checkbox" class="custom-control-input" id="customSwitch1" />
                                      <label class="custom-control-label cursorPointer" for="customSwitch1"></label>
                                      <div class="switchLabelColored"></div>
                                      <b-collapse id="collapse-4-inner">
                                        <b-row class="subGroup">
                                          <b-col class="mt-2" cols="6">
                                            <b-input-group prepend="Fee Override">
                                              <b-form-input class="form-control" type="text" placeholder="Fee Override"></b-form-input>
                                            </b-input-group>
                                          </b-col>
                                          <b-col cols="12">
                                            <b-input-group class="dropdownMenu" prepend="Condition">
                                              <select name="salutation" id="choose">
                                                <option disabled selected>Condition...</option>
                                                <option>Standard</option>
                                                <option>CandidateCurrentPostalCode</option>
                                                <option>GovRedeclare</option>
                                              </select>
                                            </b-input-group>
                                          </b-col>
                                          <b-col cols="12">
                                            <b-form-textarea no-resize class="form-control" type="text" placeholder="Parameters" rows="3" ></b-form-textarea>
                                          </b-col>
                                        </b-row>
                                      </b-collapse>
                                    </div>

                                  </b-card>

                              </b-collapse>


                              <b-button
                                block
                                class="rowItem rowStandard rowItemHover cursorDefault"
                                variant="none"
                                v-b-toggle.collapse-3-inner
                                onclick="this.blur();"
                              >

                                <div class="rowItemContent">

                                  <div class="rowItemPrefix">
                                    <i class="iconDash"></i>
                                  </div>

                                  <div class="rowItemText">
                                    <p>Taxes Override</p>
                                  </div>

                                  <div class="rowItemSuffix">
                                    <i class="iconChevron"></i>
                                  </div>

                                </div>

                              </b-button>

                              <b-collapse id="collapse-3-inner" class="">
                                <b-card class="rowExpandableContentInner">
                                  <div class="custom-control custom-switch">
                                    <input type="checkbox" class="custom-control-input" id="customSwitch2" />
                                    <label class="custom-control-label cursorPointer" for="customSwitch2"></label>
                                    <div class="switchLabelColored"></div>
                                  </div>

                                </b-card>

                            </b-collapse>

                              <h6>Options</h6>
                              <hr/>

                              <b-button
                                block
                                class="rowItem rowStandard rowItemHover cursorDefault"
                                variant="none"
                                onclick="this.blur();"
                              >

                                <div class="rowItemContent">

                                  <div class="rowItemPrefix">
                                    <div class="custom-control custom-checkbox">
                                      <input id="customCheck15" class="custom-control-input" type="checkbox"/>
                                      <label class="custom-control-label cursorPointer" for="customCheck15"></label>
                                    </div>
                                  </div>

                                  <div class="rowItemText">
                                    <p class="mb-0">Fee Hidden From Client</p>
                                  </div>

                                  <div class="rowItemSuffix">
                                  </div>

                                </div>

                              </b-button>
                              <b-row>
                              <b-col cols="11">
                              <b-button
                                block
                                class="rowItem rowStandard rowItemHover cursorDefault"
                                variant="none"
                                onclick="this.blur();"
                              >

                                <div class="rowItemContent">

                                  <div class="rowItemPrefix">
                                    <div class="custom-control custom-checkbox">
                                      <input id="customCheck16" class="custom-control-input" type="checkbox"/>
                                      <label class="custom-control-label cursorPointer" for="customCheck16"></label>
                                    </div>
                                  </div>

                                  <div class="rowItemText">
                                    <p class="mb-0">Allow Agency Entered Fees (Invoiced Services Only)</p>
                                  </div>

                                  <div class="rowItemSuffix">
                                  </div>

                                </div>

                              </b-button>
                            </b-col>
                          </b-row>
                          </div>
                        <div class="sectionItem">

                        </div>
                      </div>
                      <h4>Package Options</h4>
                      <div class="breadcrumbBottomSpacer"></div>
                    </b-tab>
                    <b-tab title="Package Name 002">

                    </b-tab>
                    <b-tab title="Package Name 003">

                    </b-tab>
                  </b-tabs>
                </b-card>
              </div>
        </b-tab>
        <b-tab disabled>
          <template v-slot:title><span>Override Groups</span></template>
        </b-tab>
        <b-tab>
          <template v-slot:title><span>Services</span></template>
          <h4>Services</h4>
        </b-tab>
        <b-tab>
          <template v-slot:title><span>Content</span></template>
          <h4>Content</h4>
        </b-tab>
        <b-tab>
          <template v-slot:title><span>Email</span></template>
          <h4>Email</h4>
        </b-tab>
        <b-tab>
          <template v-slot:title><span>Other</span></template>
          <h4>Other</h4>
        </b-tab>
        <template v-slot:tabs-end>
          <div class="ml-auto mt-4 mr-2">
            <b-button
              :pressed="false"
              variant="-"
              id="changesBtn"
              class="btnNavigation btnConfirm"
              onclick="this.blur();"
              @click="toastConfirm()"
              >
              <div class="btnText">SAVE CHANGES</div>
            </b-button>
          </div>
        </template>
      </b-tabs>
        <b-breadcrumb class="breadcrumbBottom" :items="items"></b-breadcrumb>
    </b-card>
  </div>



  <footer class="row">
    <b-col class="text-left footerItem">© Triton 2019, All Rights Reserved</b-col>
    <b-col class="text-right">
      <b-button
        :pressed="false"
        variant="outline-light"
        size="sm"
        class="btnThin"
        onclick="this.blur();"
        >
        <div class="btnText">CONTACT</div>
      </b-button>
    </b-col>
  </footer>

</div>

</template>

<script>
$('form').attr('autocomplete','off');
$(document).ready(function(){
  $( ".rsg--sidebar-4" ).addClass( "designReferenceSidebar" );
  $( ".rsg--root-1" ).removeClass( "rsg--hasSidebar-2" );
});
$( function() {
    $( "#choose, #parent" ).selectmenu();
  } );


export default {
    data() {
      return {
        items: [
          {
            text: 'Sample Agency',
            href: '#'
          },
          {
            text: 'Sample Client',
            href: '#'
          },
          {
            text: 'Current Client or User',
            active: true
          }
        ]
      }
    }
}
</script>
```


</docs>

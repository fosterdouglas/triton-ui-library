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
          <h6>Options</h6>
          <b-button
            block
            class="rowItem rowGroupTitle cursorDefault"
            variant="none"
            onclick="this.blur();"
            v-b-toggle.test00
          >

            <div class="rowItemContent">



              <div class="rowItemText">
                <p class="mb-0">Account</p>
              </div>

              <div class="rowItemSuffix">
              </div>

            </div>
          </b-button>
          <b-collapse id="test00">
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
                        @click="modalShow3 = !modalShow3"
                        >

                          <b-modal
                            v-model="modalShow3"
                            :no-close-on-backdrop="true"
                            :no-close-on-esc="true"
                            id="modal3"
                            @shown="modalJQ"
                          >

                            <template v-slot:modal-header>
                              <h5 class="mb-0">Change Parent Contact</h5>
                            </template>

                            <div class="modal-body">
                              <b-row class="subGroup">
                                <b-col cols="12">
                                  <b-input-group class="dropdownMenu" prepend="Parent" >
                                    <select name="Parent" id="choose5">
                                      <option disabled selected>Choose One...</option>
                                      <option>Parent Option 1</option>
                                      <option>Parent Option 2</option>
                                      <option>Parent Option 3</option>
                                      <option>Parent Option 4</option>
                                    </select>
                                  </b-input-group>
                                </b-col>
                              </b-row>
                            </div>

                            <template v-slot:modal-footer>

                                <b-button
                                  :pressed="false"
                                  variant="outline-warningfade"
                                  class="btnNavigation btnWarning float-left"
                                  @click="modalShow3=false"
                                  >
                                  CANCEL
                                </b-button>

                                <b-button
                                  :pressed="false"
                                  variant="outline-confirmfade"
                                  class="btnNavigation btnConfirm float-right"
                                  @click="modalShow3=false"
                                  >
                                  SAVE
                                </b-button>

                            </template>

                          </b-modal>

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
          </b-collapse>

          <b-button
            block
            class="rowItem rowGroupTitle cursorDefault"
            variant="none"
            onclick="this.blur();"
            v-b-toggle.test000
          >

            <div class="rowItemContent">



              <div class="rowItemText">
                <p class="mb-0">Contact Information</p>
              </div>

              <div class="rowItemSuffix">
              </div>

            </div>

          </b-button>
          <b-collapse id="test000">
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
        </b-collapse>
        <div class="breadcrumbBottomSpacer"></div>
      </b-tab>

      <b-tab>
        <template v-slot:title><span>Preferences</span></template>
        <h4>Preferences</h4>
        <h6>Options</h6>
          <b-button
            block
            class="rowItem rowGroupTitle cursorDefault"
            variant="none"
            onclick="this.blur();"
            v-b-toggle.optionsgroup1
          >

            <div class="rowItemContent">



              <div class="rowItemText">
                <p class="mb-0">Options Group Name 1</p>
              </div>

              <div class="rowItemSuffix">
              </div>

            </div>

          </b-button>
          <b-collapse id="optionsgroup1">
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
          </b-collapse>


      </b-tab>

        <b-tab>
          <template v-slot:title><span>Packages</span></template>
            <div class="tabTitle">
              <h4>Bell Package A1</h4>
              <b-badge variant="confirm">ACTIVE</b-badge>
            </div>
              <div>
                <b-card class="tabsNav" no-body>
                  <b-tabs pills card vertical end>
                    <b-tab active>
                      <template v-slot:title>
                        <span>Bell Package A1</span>
                        <b-badge variant="confirm">&nbsp</b-badge>
                      </template>
                      <h6>Options</h6>
                        <b-row class="subGroup">
                          <b-col cols="8">
                            <b-input-group class="dropdownMenu" prepend="Landing Type">
                              <select name="salutation" id="choose">
                                <option disabled selected>Customer Landing Type...</option>
                                <option>PoliceCriminalRecordCheckEmployment</option>
                                <option>PoliceCriminalRecordCheckVolunteer</option>
                                <option>PoliceInformationCheckEmployment</option>
                                <option>PoliceInformationCheckVolunteer</option>
                                <option>VulnerableSectorEmployment</option>
                                <option>VulnerableSectorVolunteer</option>
                              </select>
                            </b-input-group>
                          </b-col>
                        </b-row>
                        <b-button
                          block
                          class="rowItem rowStandard rowItemHover cursorDefault"
                          variant="none"
                          onclick="this.blur();"
                        >

                          <div class="rowItemContent">

                            <div class="rowItemPrefix">
                              <div class="custom-control custom-checkbox">
                                <input id="customCheck01" class="custom-control-input" type="checkbox"/>
                                <label class="custom-control-label cursorPointer" for="customCheck01"></label>
                              </div>
                            </div>

                            <div class="rowItemText">
                              <p class="mb-0">Show On Invoice</p>
                            </div>

                            <div class="rowItemSuffix">
                            </div>

                          </div>

                        </b-button>

                        <b-button
                          block
                          class="rowItem rowExpandable rowItemHover cursorDefault"
                          variant="none"
                          v-b-toggle.collapse-1011
                          onclick="this.blur();"
                        >

                          <div class="rowItemContent">

                            <div class="rowItemPrefix">
                              <i class="iconDash"></i>
                            </div>

                            <div class="rowItemText">
                              Static EIV Links
                              <b-badge variant="medium">3</b-badge>
                            </div>

                            <div class="rowItemSuffix">
                              <i class="iconChevron"></i>
                            </div>

                          </div>

                        </b-button>

                        <b-collapse id="collapse-1011">
                          <b-card class="rowExpandableContent">
                            <b-button
                              block
                              class="rowItem rowExpandable rowItemHover cursorDefault"
                              variant="none"
                              v-b-toggle.collapse-707
                              onclick="this.blur();"
                            >

                              <div class="rowItemContent">

                                <div class="rowItemPrefix">
                                  <i class="iconDash"></i>
                                </div>

                                <div class="rowItemText">
                                  <p>Eunice Hooper</p>
                                </div>

                                <div class="rowItemSuffix">
                                  <i class="iconChevron"></i>
                                </div>

                              </div>

                            </b-button>

                            <b-collapse id="collapse-707">
                              <b-card class="rowExpandableContent">
                                <b-row class="nonRowItem">
                                  <b-col cols="2">
                                    <b-button
                                      block
                                      class="cursorDefault"
                                      variant="none"
                                      onclick="this.blur();"
                                    >

                                      <div class="rowItemContent">

                                          <div class="rowItemText">
                                            <p>EIV Code</p>
                                          </div>

                                      </div>
                                    </b-button>
                                  </b-col>
                                    <b-button
                                      :pressed="false"
                                      variant="outline-light"
                                      size="sm"
                                      class="btnThin"
                                      onclick="this.blur();"

                                      >
                                      <div class="btnText">01c196d2-a8da-518a-f6ca-8cfc1ac79b50
                                      </div>

                                    </b-button>

                                </b-row>

                                <b-row class="nonRowItem">
                                  <b-col cols="2">
                                    <b-button
                                      block
                                      class="cursorDefault"
                                      variant="none"
                                      onclick="this.blur();"
                                    >

                                      <div class="rowItemContent">

                                          <div class="rowItemText">
                                            <p>English</p>
                                          </div>

                                      </div>
                                    </b-button>
                                  </b-col>
                                <b-button
                                  :pressed="false"
                                  variant="outline-light"
                                  size="sm"
                                  class="btnThin"
                                  onclick="this.blur();"

                                  >
                                  <div class="btnText">Copy Link</div>

                                </b-button>
                              </b-row>



                              <b-row class="nonRowItem">
                                <b-col cols="2">
                                  <b-button
                                    block
                                    class="cursorDefault"
                                    variant="none"
                                    onclick="this.blur();"
                                  >

                                    <div class="rowItemContent">



                                        <div class="rowItemText">
                                          <p>French</p>
                                        </div>



                                    </div>

                                  </b-button>
                                </b-col>
                              <b-button
                                :pressed="false"
                                variant="outline-light"
                                size="sm"
                                class="btnThin"
                                onclick="this.blur();"

                                >
                                <div class="btnText">Copy Link</div>

                              </b-button>
                            </b-row>

                              </b-card>
                            </b-collapse>

                            <b-button
                              :pressed="false"
                              variant="outline-light"
                              size="sm"
                              class="btnThin nonRowItem"
                              onclick="this.blur();"
                              @click="modalShow2 = !modalShow2"

                              >
                              <div class="btnText">Create New EIV Link</div>

                            </b-button>
                            <div class="ui-front">
                              <b-modal
                                v-model="modalShow2"
                                :no-close-on-backdrop="true"
                                id="modal2"

                              >
                                <template v-slot:modal-header>
                                  <h5 class="mb-0">Create New EIV Link</h5>

                                </template>

                                <div class="modal-body text-center">
                                  <b-row>
                                    <b-col cols="12">
                                      <b-input-group prepend="Name">
                                        <b-form-input class="form-control" type="text" placeholder=""></b-form-input>
                                      </b-input-group>
                                    </b-col>
                                  </b-row>
                                </div>

                                <template v-slot:modal-footer>

                                    <b-button
                                      :pressed="false"
                                      variant="outline-warningfade"
                                      class="btnNavigation btnWarning float-left"
                                      @click="modalShow2=false"
                                      >
                                      CANCEL
                                    </b-button>

                                    <b-button
                                      :pressed="false"
                                      variant="outline-confirmfade"
                                      class="btnNavigation btnConfirm float-right"
                                      @click="modalShow2=false"
                                      >
                                      CREATE NEW EIV LINK
                                    </b-button>

                                </template>

                              </b-modal>
                            </div>
                          </b-card>
                        </b-collapse>

                        <b-button
                          block
                          class="rowItem rowExpandable rowItemHover cursorDefault"
                          variant="none"
                          v-b-toggle.collapse-101
                          onclick="this.blur();"
                        >

                          <div class="rowItemContent">

                            <div class="rowItemPrefix">
                              <i class="iconDash"></i>
                            </div>

                            <div class="rowItemText">
                              <p>Activate / Deactive Package</p>
                            </div>

                            <div class="rowItemSuffix">
                              <i class="iconChevron"></i>
                            </div>

                          </div>

                        </b-button>

                        <b-collapse id="collapse-101">
                          <b-card class="rowExpandableContent">
                            <b-button
                              :pressed="false"
                              variant="outline-warningfade"
                              class="btnNavigation btnWarning nonRowItem"
                              onclick="this.blur();"
                              >
                              <div class="btnText">DEACTIVATE PACKAGE</div>
                            </b-button>
                          </b-card>
                        </b-collapse>



                      <h6>Content Override (Services)</h6>
                        <b-button
                          block
                          class="rowItem rowGroupTitle cursorDefault"
                          variant="none"
                          onclick="this.blur();"
                          v-b-toggle.collapse-0
                        >

                          <div class="rowItemContent">



                            <div class="rowItemText">
                              <p class="mb-0">Criminal Record Check (CRC)</p>
                            </div>

                            <div class="rowItemSuffix">
                            </div>

                          </div>

                        </b-button>
                        <b-collapse id="collapse-0">
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

                                      </div>

                                      <div class="rowItemSuffix">
                                        <b-badge variant="medium">Inherited</b-badge>
                                      </div>

                                  </div>

                                </b-button>
                                <b-button
                                  block
                                  class="rowItem rowStandard rowItemHover rowExpandable cursorDefault"
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
                                class="rowItem rowStandard rowItemHover rowExpandable cursorDefault"
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

                              <b-collapse id="collapse-3-inner">

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
                                </b-col>
                              </b-row>
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

                            </b-card>
                          </b-collapse>

                          </div>

                        <div class="sectionItem">

                          <b-button
                            block
                            class="rowItem rowExpandable rowItemHover cursorDefault"
                            variant="none"
                            v-b-toggle.collapse-2222
                            onclick="this.blur();"
                          >

                            <div class="rowItemContent">

                              <div class="rowItemPrefix">
                                <i class="iconDash"></i>
                              </div>

                              <div class="rowItemText">
                                <p>Documents</p>
                              </div>

                              <div class="rowItemSuffix">
                                <i class="iconChevron"></i>
                              </div>

                            </div>

                          </b-button>

                          <b-collapse id="collapse-2222">
                            <b-card class="rowExpandableContent">
                            </b-card>
                          </b-collapse>

                        </div>

                        <div class="sectionItem">

                          <b-button
                            block
                            class="rowItem rowExpandable rowItemHover cursorDefault"
                            variant="none"
                            v-b-toggle.collapse-22222
                            onclick="this.blur();"
                          >

                            <div class="rowItemContent">

                              <div class="rowItemPrefix">
                                <i class="iconDash"></i>
                              </div>

                              <div class="rowItemText">
                                <p>{ State Options }</p>
                              </div>

                              <div class="rowItemSuffix">
                                <i class="iconChevron"></i>
                              </div>

                            </div>

                          </b-button>

                          <b-collapse id="collapse-22222">
                            <b-card class="rowExpandableContent">
                            </b-card>
                          </b-collapse>

                        </div>

                        <div class="sectionItem">

                          <b-button
                            block
                            class="rowItem rowExpandable rowItemHover cursorDefault"
                            variant="none"
                            v-b-toggle.collapse-222222
                            onclick="this.blur();"
                          >

                            <div class="rowItemContent">

                              <div class="rowItemPrefix">
                                <i class="iconDash"></i>
                              </div>

                              <div class="rowItemText">
                                <p>Additional Options</p>
                              </div>

                              <div class="rowItemSuffix">
                                <i class="iconChevron"></i>
                              </div>

                            </div>

                          </b-button>

                          <b-collapse id="collapse-222222">
                            <b-card class="rowExpandableContent">
                            </b-card>
                          </b-collapse>

                        </div>
                      </div>
                      </b-collapse>

                      <b-button
                        block
                        class="rowItem rowGroupTitle cursorDefault"
                        variant="none"
                        onclick="this.blur();"
                        v-b-toggle.collapse-000
                      >

                        <div class="rowItemContent">



                          <div class="rowItemText">
                            <p class="mb-0">Employment Verification</p>
                          </div>

                          <div class="rowItemSuffix">
                          </div>

                        </div>

                      </b-button>
                      <b-collapse id="collapse-000">
                        <div class="sectionGroup">
                        <div class="sectionItem">

                          <b-button
                            block
                            class="rowItem rowExpandable rowItemHover cursorDefault"
                            variant="none"
                            v-b-toggle.collapse-222
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

                          <b-collapse id="collapse-222">
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
                                class="rowItem rowStandard rowItemHover rowExpandable cursorDefault"
                                variant="none"
                                v-b-toggle.collapse-222-inner
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

                              <b-collapse id="collapse-222-inner">
                                <b-card class="rowExpandableContentInner">
                                  <div class="custom-control custom-switch">
                                    <input v-b-toggle.collapse-444-inner type="checkbox" class="custom-control-input" id="customSwitch111" />
                                    <label class="custom-control-label cursorPointer" for="customSwitch111"></label>
                                    <div class="switchLabelColored"></div>
                                    <b-collapse id="collapse-444-inner">
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
                              class="rowItem rowStandard rowItemHover rowExpandable cursorDefault"
                              variant="none"
                              v-b-toggle.collapse-333-inner
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

                            <b-collapse id="collapse-333-inner" class="">
                              <b-card class="rowExpandableContentInner">
                                <div class="custom-control custom-switch">
                                  <input type="checkbox" class="custom-control-input" id="customSwitch222" />
                                  <label class="custom-control-label cursorPointer" for="customSwitch222"></label>
                                  <div class="switchLabelColored"></div>
                                </div>

                              </b-card>

                          </b-collapse>

                            <h6>Options</h6>
                            <hr/>
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
                                        <input id="customCheck1555" class="custom-control-input" type="checkbox"/>
                                        <label class="custom-control-label cursorPointer" for="customCheck1555"></label>
                                      </div>
                                    </div>

                                    <div class="rowItemText">
                                      <p class="mb-0">Fee Hidden From Client</p>
                                    </div>

                                    <div class="rowItemSuffix">
                                    </div>

                                  </div>

                                </b-button>
                              </b-col>
                            </b-row>
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
                                        <input id="customCheck1666" class="custom-control-input" type="checkbox"/>
                                        <label class="custom-control-label cursorPointer" for="customCheck1666"></label>
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
                          </b-card>
                        </b-collapse>
                        </div>
                      <div class="sectionItem">

                      </div>
                    </div>
                    </b-collapse>


                      <div class="breadcrumbBottomSpacer"></div>
                    </b-tab>


                    <b-tab>
                      <template v-slot:title>
                        <span>Bell Pacakge E</span>
                        <b-badge variant="warning">&nbsp</b-badge>
                      </template>
                    </b-tab>

                    <b-tab>
                      <template v-slot:title>
                        <span>Base Services</span>
                        <b-badge variant="confirm">&nbsp</b-badge>
                      </template>
                    </b-tab>

                    <template v-slot:tabs-end>
                      <b-button
                        :pressed="false"
                        variant="outline-light"
                        size="sm"
                        class="btnThin"
                        onclick="this.blur();"
                        @click="modalShow = !modalShow"

                        >
                        <div class="btnText">EDIT PACKAGES LIST</div>

                      </b-button>
                      <div class="ui-front">
                        <b-modal
                          v-model="modalShow"
                          :no-close-on-backdrop="true"
                          :no-close-on-esc="true"
                          id="modal1"

                        >
                          <template v-slot:modal-header>
                            <h5 class="mb-0">Edit Packages List</h5>

                          </template>

                          <div class="modal-body">
                              <p>Add, remove, or rearrange packages assigned to this client.</p>
                              <b-row>
                                <b-col cols="11" id="sortable" class="sortableGroup connectedSortable">

                                    <b-button
                                      block
                                      class="rowItem rowStandard rowItemHover cursorDefault"
                                      variant="none"
                                      onclick="this.blur();"
                                    >

                                      <div class="rowItemContent">

                                        <div class="rowItemPrefix">
                                          <i class="iconDash"></i>
                                        </div>

                                        <div class="rowItemText">
                                          <p>Bell Package A1</p>
                                        </div>

                                        <div class="rowItemSuffix">
                                          <b-button onclick="this.blur()" variant="outline-warningfade" class="btnSmall cursorDefault text-warning">
                                            <i class="iconRemove iconBorderMini"></i>
                                          </b-button>
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
                                          <i class="iconDash"></i>
                                        </div>

                                        <div class="rowItemText">
                                          <p>Bell Package E</p>
                                        </div>

                                        <div class="rowItemSuffix">
                                          <b-button onclick="this.blur()" variant="outline-warningfade" class="btnSmall cursorDefault text-warning">
                                            <i class="iconRemove iconBorderMini"></i>
                                          </b-button>
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
                                          <i class="iconDash"></i>
                                        </div>

                                        <div class="rowItemText">
                                          <p>Base Services</p>
                                        </div>

                                        <div class="rowItemSuffix">
                                          <b-button onclick="this.blur()" variant="outline-warningfade" class="btnSmall cursorDefault text-warning">
                                            <i class="iconRemove iconBorderMini"></i>
                                          </b-button>
                                        </div>

                                      </div>

                                    </b-button>

                                </b-col>
                              </b-row>
                              <b-button
                                :pressed="false"
                                variant="outline-light"
                                size="sm"
                                class="btnThin"
                                onclick="this.blur();"

                                >
                                <div class="btnText">ADD PACKAGE</div>

                              </b-button>
                          </div>

                          <template v-slot:modal-footer>

                              <b-button
                                :pressed="false"
                                variant="outline-warningfade"
                                class="btnNavigation btnWarning float-left"
                                @click="modalShow=false"
                                >
                                CANCEL
                              </b-button>

                              <b-button
                                :pressed="false"
                                variant="outline-confirmfade"
                                class="btnNavigation btnConfirm float-right"
                                @click="modalShow=false"
                                >
                                SAVE
                              </b-button>

                          </template>

                        </b-modal>
                      </div>


                    </template>

                  </b-tabs>


                </b-card>
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
          <div class="mt-3 mr-4 ml-2">
            <b-button
              disabled
              :pressed="false"
              variant="-"
              id="changesBtn"
              class="btnNavigation btnDisabled w-100"
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

$( function() {
  $( "#sortable" ).sortable({
    cancel: '', //need this to function with b-button
    opacity: .7,
    placeholder: 'ui-state-highlight', //custom style for placeholder while dragging
    scroll: false,
    helper: "clone",
    tolerance: "pointer"
  }).disableSelection();
} );

export default {
    data() {
      return {
        modalShow: false,
        modalShow2: false,
        modalShow3: false,
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
    },
    methods: {
      modalJQ() {

        console.log('Modal has shown, .selectmenu called, and z-index of dropdown updated')

        // THIS IS REQUIRED TO SHOW UI SELECT PROPERLY INSIDE MODALS
        $( function() {
            $( "#choose5" ).selectmenu();
            $( ".ui-front" ).css('z-index',9999);
          } );
      }
  }
}
</script>
```


</docs>

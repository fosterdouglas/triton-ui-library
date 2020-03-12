<docs>

<h3>Kitchen Sink</h3>

```js
<template>


<div>
  <b-navbar class="userNav" type="dark" variant="dark">
    <b-row class="w-100" align-h="between">
      <b-col sm="auto">
        <b-navbar-nav>
          <b-nav-item-dropdown right>
            <template v-slot:button-content>
              <span>
                <i class="iconAccount far fa-lg"></i>
                <em class="text-white">Eunice Hooper</em>
              </span>
            </template>
            <b-dropdown-item href="#">Edit Profile</b-dropdown-item>
            <b-dropdown-item href="#">Log Out</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-col>
      <b-col sm="auto">
        <b-navbar-nav>
          <b-nav-item-dropdown right>
            <template v-slot:button-content>
              <span>
                <i class="iconCrown text-white fas" style="visibility: hidden;"></i>
                <em class="text-white" id="securityType">USER</em>
              </span>
            </template>
            <b-dropdown-item @click="superadmin">SUPER ADMIN</b-dropdown-item>
            <b-dropdown-item @click="tritonadmin">TRITON ADMIN</b-dropdown-item>
            <b-dropdown-item @click="support">TRITON SUPPORT T3</b-dropdown-item>
            <b-dropdown-item @click="support">TRITON SUPPORT T2</b-dropdown-item>
            <b-dropdown-item @click="support">TRITON SUPPORT T1</b-dropdown-item>
            <b-dropdown-item @click="user">USER [SHADOW]</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-col>
    </b-row>
  </b-navbar>

  <b-navbar class="primaryNav" toggleable="lg" type="dark" variant="primary" sticky>
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
        <b-nav-item class="adminMenu" style="visibility: hidden;" href="#">Admin</b-nav-item>
        <b-nav-item class="securityMenu" style="visibility: hidden;" href="#"><i class="iconCrown fas mr-1 ml-n1"></i>Security</b-nav-item>
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
        <template v-slot:tabs-start>
          <b-container class="containsRowItems" fluid>
            <b-row>
              <b-col cols="12" class="px-3 mb-2">
               <b-input-group class="prependIcon">
                  <template v-slot:prepend>
                    <b-input-group-text >
                      <i class="iconSearch far text-dark"></i>
                    </b-input-group-text>
                  </template>
                  <b-form-input type="search" name="focus" required class="searchBox form-control" placeholder="Users or Clients ...">
                  </b-form-input>
                </b-input-group>
              </b-col>
              <b-col></b-col>
            </b-row>
          </b-container>
        </template>
        <b-tab disabled>
          <template v-slot:title>
            <h3>Bell Canada</h3><hr/>
          </template>
        </b-tab>
        <b-tab>
          <h2>Client Details</h2>
          <template v-slot:title>
            <span>Client Details</span>
          </template>

            <section>

              <b-container class="pageHeader" fluid>
                <b-row align-v="center">
                  <b-col>
                    <h4>Section Name</h4>
                  </b-col>
                  <b-col sm="auto" align-self="end">
                    <b-button
                      :pressed="false"
                      variant="outline-primaryfade"
                      class="btnSmall cursorDefault expandAll text-dark"
                      onclick="this.blur()"
                     >
                      <i class="iconSort fa-lg iconBorderMini"></i>
                    </b-button>

                  </b-col>
                </b-row>
              </b-container>

              <b-button
                block
                class="rowItem rowGroupTitle"
                variant="none"
                onclick="this.blur();"
                v-b-toggle.test00
              >

                <div class="rowItemContent">

                  <div class="rowItemPrefix">
                    <i class="iconCollapseExpand"></i>
                  </div>

                  <div class="rowItemText">
                    <p class="mb-0">Account</p>
                  </div>

                  <div class="rowItemSuffix">
                  </div>

                </div>
              </b-button>


            <b-collapse id="test00">
              <b-container class="containsRowItems sectionGroup" fluid>

                  <b-row>
                    <b-col>

                      <b-input-group>

                        <b-input-group-prepend>
                          <b-input-group-text>
                            Parent
                          </b-input-group-text>
                        </b-input-group-prepend>

                        <b-form-input class="form-control" type="text" placeholder="Triton Master" title="Triton Master" disabled></b-form-input>

                        <b-input-group-append>
                          <b-container class="containsRowItems" fluid>
                            <b-row>
                              <b-col class="appendButton">
                                <b-button
                                  :pressed="false"
                                  variant="outline-primary"
                                  class="btnSmall btnStandard"
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
                                        <h4 class="mb-0">Change Parent Contact</h4>
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
                              </b-col>

                              <b-col class="appendButton">
                                <b-button
                                  :pressed="false"
                                  variant="-"
                                  class="cursorDefault rowItemHover questionBox"
                                  onclick="this.blur();"
                                  @hover="PopoverHover20 = !PopoverHover20"
                                  id="PopoverHover20"
                                 >
                                  <i  class="iconQuestion text-medium fa-lg"></i>
                                  <b-popover
                                    triggers="hover blur"
                                    variant="-"
                                    placement="right"
                                    target="PopoverHover20"

                                   >
                                   Here is some content.
                                   <br/>
                                         <b-button
                                           :pressed="false"
                                           variant="outline-secondary"
                                           size="sm"
                                           class="btnNavigation btnFeedbackPressed"
                                           >
                                           EDIT TEXT <i class="iconCrown fas"></i>
                                         </b-button>

                                  </b-popover>

                                </b-button>
                              </b-col>
                            </b-row>
                          </b-container>

                        </b-input-group-append>

                      </b-input-group>
                    </b-col>
                  </b-row>



                  <b-row>
                    <b-col>

                      <b-input-group>

                        <b-input-group-prepend>
                          <b-input-group-text>
                            Name
                          </b-input-group-text>
                        </b-input-group-prepend>

                        <b-form-input value="Current Client or User" class="form-control" type="text" placeholder=""></b-form-input>

                        <b-input-group-append>
                          <b-container class="containsRowItems" fluid>
                            <b-row>

                              <b-col class="appendButton">
                                <b-button
                                  :pressed="false"
                                  variant="-"
                                  class="cursorDefault rowItemHover questionBox"
                                  onclick="this.blur();"
                                  @hover="PopoverHover2016 = !PopoverHover2016"
                                  id="PopoverHover2016"
                                 >
                                  <i  class="iconQuestion text-medium fa-lg"></i>
                                  <b-popover
                                    triggers="hover blur"
                                    variant="-"
                                    placement="right"
                                    target="PopoverHover2016"
                                   >
                                   Here is some content.
                                  </b-popover>
                                </b-button>
                              </b-col>

                            </b-row>
                          </b-container>
                        </b-input-group-append>

                      </b-input-group>

                    </b-col>
                  </b-row>

            </b-collapse>
          </b-container>




            <b-button
              block
              class="rowItem rowGroupTitle cursorDefault"
              variant="none"
              onclick="this.blur();"
              v-b-toggle.test000
            >

              <div class="rowItemContent">

                <div class="rowItemPrefix">
                  <i class="iconCollapseExpand"></i>
                </div>

                <div class="rowItemText">
                  <p class="mb-0">Contact Information</p>
                </div>

                <div class="rowItemSuffix">
                </div>

              </div>

            </b-button>

            <b-collapse id="test000">
              <b-container class="containsRowItems sectionGroup" fluid>

                  <b-row>
                    <b-col>
                      <b-input-group>

                        <b-input-group-prepend>
                          <b-input-group-text>
                            Street #
                          </b-input-group-text>
                        </b-input-group-prepend>

                        <b-form-input class="form-control" type="text" placeholder=""></b-form-input>

                        <b-input-group-append>
                          <b-container class="containsRowItems" fluid>
                            <b-row>
                              <b-col class="appendButton">
                                <b-button
                                  :pressed="false"
                                  variant="-"
                                  class="cursorDefault rowItemHover questionBox"
                                  onclick="this.blur();"
                                  @hover="PopoverHover20a = !PopoverHover20a"
                                  id="PopoverHover20a"
                                 >
                                  <i  class="iconQuestion text-medium fa-lg"></i>
                                  <b-popover
                                    triggers="hover blur"
                                    variant="-"
                                    placement="right"
                                    target="PopoverHover20a"

                                   >
                                   Here is some content.
                                  </b-popover>
                                </b-button>
                              </b-col>
                            </b-row>
                          </b-container>
                        </b-input-group-append>

                      </b-input-group>
                    </b-col>
                  </b-row>

                  <b-row>
                    <b-col>
                      <b-input-group>

                        <b-input-group-prepend>
                          <b-input-group-text>
                            Street Name
                          </b-input-group-text>
                        </b-input-group-prepend>

                        <b-form-input class="form-control" type="text" placeholder=""></b-form-input>

                        <b-input-group-append>
                          <b-container class="containsRowItems" fluid>
                            <b-row>
                              <b-col class="appendButton">
                                <b-button
                                  :pressed="false"
                                  variant="-"
                                  class="cursorDefault rowItemHover questionBox"
                                  onclick="this.blur();"
                                  @hover="PopoverHover20b = !PopoverHover20b"
                                  id="PopoverHover20b"
                                 >
                                  <i  class="iconQuestion text-medium fa-lg"></i>
                                  <b-popover
                                    triggers="hover blur"
                                    variant="-"
                                    placement="right"
                                    target="PopoverHover20b"

                                   >
                                   Here is some content.
                                  </b-popover>
                                </b-button>
                              </b-col>
                            </b-row>
                          </b-container>
                        </b-input-group-append>

                      </b-input-group>
                    </b-col>
                  </b-row>

                  <b-row>
                    <b-col>
                      <b-input-group>

                        <b-input-group-prepend>
                          <b-input-group-text>
                            Unit
                          </b-input-group-text>
                        </b-input-group-prepend>

                        <b-form-input class="form-control" type="text" placeholder=""></b-form-input>

                        <b-input-group-append>
                          <b-container class="containsRowItems" fluid>
                            <b-row>
                              <b-col class="appendButton">
                                <b-button
                                  :pressed="false"
                                  variant="-"
                                  class="cursorDefault rowItemHover questionBox"
                                  onclick="this.blur();"
                                  @hover="PopoverHover20c = !PopoverHover20c"
                                  id="PopoverHover20c"
                                 >
                                  <i  class="iconQuestion text-medium fa-lg"></i>
                                  <b-popover
                                    triggers="hover blur"
                                    variant="-"
                                    placement="right"
                                    target="PopoverHover20c"

                                   >
                                   Here is some content.
                                  </b-popover>
                                </b-button>
                              </b-col>
                            </b-row>
                          </b-container>
                        </b-input-group-append>

                      </b-input-group>
                    </b-col>
                  </b-row>

                  <b-row>
                    <b-col>
                      <b-input-group>

                        <b-input-group-prepend>
                          <b-input-group-text>
                            City
                          </b-input-group-text>
                        </b-input-group-prepend>

                        <b-form-input class="form-control" type="text" placeholder=""></b-form-input>

                        <b-input-group-append>
                          <b-container class="containsRowItems" fluid>
                            <b-row>
                              <b-col class="appendButton">
                                <b-button
                                  :pressed="false"
                                  variant="-"
                                  class="cursorDefault rowItemHover questionBox"
                                  onclick="this.blur();"
                                  @hover="PopoverHover20d = !PopoverHover20d"
                                  id="PopoverHover20d"
                                 >
                                  <i  class="iconQuestion text-medium fa-lg"></i>
                                  <b-popover
                                    triggers="hover blur"
                                    variant="-"
                                    placement="right"
                                    target="PopoverHover20d"

                                   >
                                   Here is some content.
                                  </b-popover>
                                </b-button>
                              </b-col>
                            </b-row>
                          </b-container>
                        </b-input-group-append>

                      </b-input-group>
                    </b-col>
                  </b-row>

                  <b-row>
                    <b-col>
                      <b-input-group>

                        <b-input-group-prepend>
                          <b-input-group-text>
                            Province
                          </b-input-group-text>
                        </b-input-group-prepend>

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

                        <b-input-group-append>
                          <b-container class="containsRowItems" fluid>
                            <b-row>
                              <b-col class="appendButton">
                                <b-button
                                  :pressed="false"
                                  variant="-"
                                  class="cursorDefault rowItemHover questionBox"
                                  onclick="this.blur();"
                                  @hover="PopoverHover20e = !PopoverHover20e"
                                  id="PopoverHover20e"
                                 >
                                  <i  class="iconQuestion text-medium fa-lg"></i>
                                  <b-popover
                                    triggers="hover blur"
                                    variant="-"
                                    placement="right"
                                    target="PopoverHover20e"

                                   >
                                   Here is some content.
                                  </b-popover>
                                </b-button>
                              </b-col>
                            </b-row>
                          </b-container>
                        </b-input-group-append>

                      </b-input-group>
                    </b-col>
                  </b-row>

                  <b-row>
                    <b-col>
                      <b-input-group>

                        <b-input-group-prepend>
                          <b-input-group-text>
                            Postal Code
                          </b-input-group-text>
                        </b-input-group-prepend>

                        <b-form-input class="form-control" for="postal" v-mask="'XXX XXX'"></b-form-input>

                        <b-input-group-append>
                          <b-container class="containsRowItems" fluid>
                            <b-row>
                              <b-col class="appendButton">
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
                                    variant="-"
                                    placement="right"
                                    target="PopoverHover20f"

                                   >
                                   Here is some content.
                                  </b-popover>
                                </b-button>
                              </b-col>
                            </b-row>
                          </b-container>
                        </b-input-group-append>

                      </b-input-group>
                    </b-col>
                  </b-row>

                  <b-row>
                    <b-col>
                      <b-input-group>

                        <b-input-group-prepend>
                          <b-input-group-text>
                            Country
                          </b-input-group-text>
                        </b-input-group-prepend>

                        <b-form-input class="form-control" type="text" placeholder=""></b-form-input>

                        <b-input-group-append>
                          <b-container class="containsRowItems" fluid>
                            <b-row>
                              <b-col class="appendButton">
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
                                    variant="-"
                                    placement="right"
                                    target="PopoverHover20g"

                                   >
                                   Here is some content.
                                  </b-popover>
                                </b-button>
                              </b-col>
                            </b-row>
                          </b-container>
                        </b-input-group-append>

                      </b-input-group>
                    </b-col>
                  </b-row>

                  <b-row>
                    <b-col>
                      <b-input-group>

                        <b-input-group-prepend>
                          <b-input-group-text>
                            Phone
                          </b-input-group-text>
                        </b-input-group-prepend>

                        <b-form-input class="form-control" type="tel" v-mask="'###-###-####'" placeholder=""></b-form-input>

                        <b-input-group-append>
                          <b-container class="containsRowItems" fluid>
                            <b-row>
                              <b-col class="appendButton">
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
                                    variant="-"
                                    placement="right"
                                    target="PopoverHover20h"

                                   >
                                   Here is some content.
                                  </b-popover>
                                </b-button>
                              </b-col>
                            </b-row>
                          </b-container>
                        </b-input-group-append>

                      </b-input-group>
                    </b-col>
                  </b-row>

              </b-container>
          </b-collapse>

        </section>
      </b-tab>

      <b-tab>
        <h2>Preferences</h2>
        <template v-slot:title>
          <span>Preferences</span>
        </template>

        <section>

        <b-container class="pageHeader" fluid>
          <b-row align-v="center">
            <b-col>
              <h4>Section Name</h4>
            </b-col>
            <b-col sm="auto" align-self="end">
              <b-button
                :pressed="false"
                variant="outline-primaryfade"
                class="btnSmall cursorDefault expandAll text-dark"
                onclick="this.blur()"
               >
                <i class="iconSort fa-lg iconBorderMini"></i>
              </b-button>

            </b-col>
          </b-row>
        </b-container>


          <b-button
            block
            class="rowItem rowGroupTitle cursorDefault"
            variant="none"
            onclick="this.blur();"
            v-b-toggle.optionsgroup1
          >

            <div class="rowItemContent">

              <div class="rowItemPrefix">
                <i class="iconCollapseExpand"></i>
              </div>

              <div class="rowItemText">
                <p class="mb-0">Options Group Name 1</p>
              </div>

              <div class="rowItemSuffix">
              </div>

            </div>

          </b-button>

          <b-collapse id="optionsgroup1">

            <b-container class="containsRowItems sectionGroup" fluid>
              <h6>Sub Group Name</h6>

              <b-row>
                <b-col class="prependButton">

                  <b-button
                    :pressed="false"
                    variant="outline-dark"
                    class="btnSmall btnCheck btnStandard"
                    onclick="this.blur()"
                   >
                    <div class="custom-control custom-checkbox">
                      <input checked id="customCheck1" class="custom-control-input" type="checkbox"/>
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
                        <p class="mb-0">The checkbox can be used to set something as true or false.</p>
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
                    variant="outline-dark"
                    class="btnSmall btnCheck btnStandard"
                    onclick="this.blur()"
                   >
                    <div class="custom-control custom-checkbox">
                      <input checked id="customCheck2" class="custom-control-input" type="checkbox"/>
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
                        <p class="mb-0">The checkbox can be used to set something as true or false.</p>
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
                    variant="outline-dark"
                    class="btnSmall btnCheck btnStandard"
                    onclick="this.blur()"
                   >
                    <div class="custom-control custom-checkbox">
                      <input id="customCheck3" class="custom-control-input" type="checkbox"/>
                      <label class="custom-control-label cursorPointer" for="customCheck3"></label>
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
                        <p class="mb-0">The checkbox can be used to set something as true or false.</p>
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
                    variant="outline-dark"
                    class="btnSmall btnCheck btnStandard"
                    onclick="this.blur()"
                   >
                    <div class="custom-control custom-checkbox">
                      <input checked id="customCheck4" class="custom-control-input" type="checkbox"/>
                      <label class="custom-control-label cursorPointer" for="customCheck4"></label>
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
                        <p class="mb-0">The checkbox can be used to set something as true or false.</p>
                      </div>

                      <div class="rowItemSuffix">
                      </div>

                    </div>

                  </b-button>
                </b-col>
              </b-row>


          </b-container>
          </b-collapse>

        </section>

      </b-tab>

        <b-tab active>
          <template v-slot:title><span>Packages</span></template>

                <b-card class="tabsNav containsSubNav" no-body>
                  <b-tabs pills card vertical end>



                    <b-tab>
                      <h3>Packages</h3>
                      <h2> Bell Package A1</h2>
                      <template v-slot:title>
                        <span>Bell Package A1</span>
                      </template>
                        <!--

                        <b-container class="containsRowItems" fluid>
                          <b-row>
                            <b-col>
                              <b-button
                                block
                                class="rowItem cursorDefault bg-dark text-white"
                                variant="none"
                                onclick="this.blur();"
                              >

                                <div class="rowItemContent">

                                  <div class="rowItemPrefix">

                                  </div>

                                  <div class="rowItemText">
                                    Bell Package A1
                                  </div>

                                  <div class="rowItemSuffix">
                                    <b-badge variant="confirm">Active</b-badge>
                                  </div>

                                </div>

                              </b-button>
                            </b-col>
                            <b-col class="appendButton">
                              <b-button
                                :pressed="false"
                                variant="outline-primary"
                                class="btnSmall btnStandard"
                                onclick="this.blur();"
                                @click="modalShow4 = !modalShow4"
                                >

                                  <b-modal
                                    v-model="modalShow4"
                                    :no-close-on-backdrop="true"
                                    :no-close-on-esc="true"
                                    id="modalShow4"
                                    @shown="modalJQ"
                                    size="lg"
                                  >

                                    <template v-slot:modal-header>
                                      <h4 class="mb-0">Package Settings</h4>
                                    </template>

                                    <div class="modal-body">
                                      <b-container class="containsRowItems sectionGroup" fluid>

                                        <b-row>
                                          <b-col class="prependButton">

                                            <b-button
                                              :pressed="false"
                                              variant="outline-dark"
                                              class="btnSmall btnCheck btnStandard"
                                              onclick="this.blur()"
                                             >
                                              <div class="custom-control custom-checkbox">
                                                <input id="customCheck01" class="custom-control-input" type="checkbox"/>
                                                <label class="custom-control-label cursorPointer" for="customCheck01"></label>
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
                                                  <p class="mb-0">Show On Invoice</p>
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
                                              class="rowItem rowExpandable rowItemHover cursorDefault"
                                              variant="none"
                                              v-b-toggle.collapse-101
                                              onclick="this.blur();"
                                            >

                                              <div class="rowItemContent">

                                                <div class="rowItemPrefix">
                                                  <i class="iconCollapseExpand"></i>
                                                </div>

                                                <div class="rowItemText">
                                                  <p>Activate / Deactive Package</p>
                                                </div>

                                                <div class="rowItemSuffix">
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

                                          </b-col>
                                        </b-row>
                                      </b-container>
                                    </div>

                                    <template v-slot:modal-footer>

                                        <b-button
                                          :pressed="false"
                                          variant="outline-warningfade"
                                          class="btnNavigation btnWarning float-left"
                                          @click="modalShow4=false"
                                          >
                                          CANCEL
                                        </b-button>

                                        <b-button
                                          :pressed="false"
                                          variant="outline-confirmfade"
                                          class="btnNavigation btnConfirm float-right"
                                          @click="modalShow4=false"
                                          >
                                          SAVE
                                        </b-button>

                                    </template>

                                  </b-modal>

                                <i  class="iconSettings iconBorderStd fa-lg"></i>
                              </b-button>

                            </b-col>
                          </b-row>

                        </b-container>

                      -->

                    <section> <!-- make this into an official class? or add to all sections underneath .pills.tabs-->

                        <b-container class="pageHeader" fluid>
                          <b-row align-v="center">
                            <b-col>
                              <h4>Package Content Overrides</h4>
                            </b-col>
                            <b-col sm="auto" align-self="end">
                              <b-button
                                :pressed="false"
                                variant="outline-primaryfade"
                                class="btnSmall cursorDefault expandAll text-dark"
                                onclick="this.blur()"
                               >
                                <i class="iconSort fa-lg iconBorderMini"></i>
                              </b-button>

                            </b-col>
                          </b-row>
                        </b-container>



                        <b-button
                          block
                          class="rowItem rowGroupTitle cursorDefault"
                          variant="none"
                          onclick="this.blur();"
                          v-b-toggle.collapse-0
                        >

                          <div class="rowItemContent">

                            <div class="rowItemPrefix">
                              <i class="iconCollapseExpand"></i>
                            </div>

                            <div class="rowItemText">
                              <p class="mb-0">Criminal Record Check (CRC)</p>
                            </div>

                            <div class="rowItemSuffix">
                            </div>

                          </div>

                        </b-button>


                        <b-collapse id="collapse-0">

                            <b-tabs card>
                              <b-tab title="Service Fees" active>

                                <b-container class="rowExpandableContent containsRowItems sectionGroup" fluid>

                                  <b-row>
                                    <b-col class="prependButton">
                                       <b-button
                                          :pressed="false"
                                          variant="outline-primaryfade"
                                          class="btnSmall btnSwitch"
                                          onclick="this.blur();"
                                          >
                                           <div class="custom-control custom-switch">
                                             <input v-b-toggle.collapse-2-inner type="checkbox" class="custom-control-input" id="customSwitch1" />
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
                                            Base Fee Override
                                          </div>

                                          <div class="rowItemSuffix">
                                            <b-badge variant="medium" class="text-monospace">$14.95</b-badge>
                                            <b-badge variant="medium"><i class="iconInherited fas"></i>Inherited</b-badge>
                                          </div>

                                        </div>

                                      </b-button>

                                  </b-col>
                                </b-row>

                                <b-collapse id="collapse-2-inner">
                                  <b-card class="rowExpandableContent">

                                    <b-container class="containsRowItems" fluid>

                                    <b-row>
                                      <b-col>
                                        <b-input-group prepend="Fee Override">
                                          <b-form-input class="form-control" type="text" placeholder="Fee Override"></b-form-input>
                                        </b-input-group>
                                      </b-col>
                                      <b-col class="appendButton">
                                        <b-button
                                          :pressed="false"
                                          variant="-"
                                          class="cursorDefault rowItemHover questionBox"
                                          onclick="this.blur();"
                                          @hover="PopoverHoverAPI32 = !PopoverHoverAPI32"
                                          id="PopoverHoverAPI32"
                                         >
                                          <i  class="iconQuestion text-medium fa-lg"></i>
                                          <b-popover
                                            triggers="hover blur"
                                            variant="-"
                                            placement="right"
                                            target="PopoverHoverAPI32"

                                           >
                                           Here is some content.
                                          </b-popover>
                                        </b-button>
                                      </b-col>
                                    </b-row>

                                    <b-row>
                                      <b-col>
                                        <b-input-group class="dropdownMenu" prepend="Condition">
                                          <select name="salutation" id="choose">
                                            <option disabled selected>Condition...</option>
                                            <option>Standard</option>
                                            <option>CandidateCurrentPostalCode</option>
                                            <option>GovRedeclare</option>
                                          </select>
                                        </b-input-group>
                                      </b-col>

                                      <b-col class="appendButton">
                                        <b-button
                                          :pressed="false"
                                          variant="-"
                                          class="cursorDefault rowItemHover questionBox"
                                          onclick="this.blur();"
                                          @hover="PopoverHoverAPI33 = !PopoverHoverAPI33"
                                          id="PopoverHoverAPI33"
                                         >
                                          <i  class="iconQuestion text-medium fa-lg"></i>
                                          <b-popover
                                            triggers="hover blur"
                                            variant="-"
                                            placement="right"
                                            target="PopoverHoverAPI33"

                                           >
                                           Here is some content.
                                          </b-popover>
                                        </b-button>
                                      </b-col>
                                    </b-row>

                                    <b-row>

                                      <b-col>
                                        <b-input-group>

                                          <b-input-group-prepend>
                                            <b-input-group-text>
                                              Parameters
                                            </b-input-group-text>
                                          </b-input-group-prepend>

                                          <b-form-textarea no-resize rows="3" class="form-control" type="text" placeholder="Parameters"></b-form-textarea>



                                        </b-input-group>
                                      </b-col>
                                      <b-col class="appendButton">
                                        <b-button
                                          :pressed="false"
                                          variant="-"
                                          class="cursorDefault rowItemHover questionBox"
                                          onclick="this.blur();"
                                          @hover="PopoverHoverAPI34 = !PopoverHoverAPI34"
                                          id="PopoverHoverAPI34"
                                         >
                                          <i  class="iconQuestion text-medium fa-lg"></i>
                                          <b-popover
                                            triggers="hover blur"
                                            variant="-"
                                            placement="right"
                                            target="PopoverHoverAPI34"

                                           >
                                           Here is some content.
                                          </b-popover>
                                        </b-button>
                                      </b-col>

                                    </b-row>

                                  </b-container>

                                  </b-card>

                              </b-collapse>

                                <b-row>
                                  <b-col class="prependButton">
                                     <b-button
                                        :pressed="false"
                                        variant="outline-primaryfade"
                                        class="btnSmall btnSwitch"
                                        onclick="this.blur();"
                                        >
                                         <div class="custom-control custom-switch">
                                           <input v-b-toggle.collapse-3-inner type="checkbox" class="custom-control-input" id="customSwitch10103" />
                                           <label class="custom-control-label cursorPointer" for="customSwitch10103"></label>
                                         </div>
                                      </b-button>
                                   </b-col>
                                  <b-col>
                                    <b-button
                                      block
                                      class="rowItem rowStandard rowItemHover rowExpandable cursorDefault"
                                      variant="none"
                                      v-b-toggle.collapse-3-inner
                                      onclick="this.blur();"
                                    >

                                      <div class="rowItemContent">

                                        <div class="rowItemPrefix">
                                        </div>

                                        <div class="rowItemText">
                                          <p>Taxes Override</p>
                                        </div>

                                        <div class="rowItemSuffix">

                                        </div>

                                      </div>

                                    </b-button>

                                </b-col>
                              </b-row>

                              <b-collapse id="collapse-3-inner">

                                <b-card class="rowExpandableContent">
                                  <b-container class="containsRowItems" fluid>
                                    <b-row>
                                      <b-col>
                                        <b-input-group prepend="Taxes Override">
                                          <b-form-input class="form-control" type="text" placeholder="Taxes Override"></b-form-input>
                                        </b-input-group>
                                      </b-col>
                                      <b-col class="appendButton">
                                        <b-button
                                          :pressed="false"
                                          variant="-"
                                          class="cursorDefault rowItemHover questionBox"
                                          onclick="this.blur();"
                                          @hover="PopoverHoverAPI37 = !PopoverHoverAPI37"
                                          id="PopoverHoverAPI37"
                                         >
                                          <i  class="iconQuestion text-medium fa-lg"></i>
                                          <b-popover
                                            triggers="hover blur"
                                            variant="-"
                                            placement="right"
                                            target="PopoverHoverAPI37"

                                           >
                                           Here is some content.
                                          </b-popover>
                                        </b-button>
                                      </b-col>
                                    </b-row>
                                  </b-container>

                                </b-card>

                              </b-collapse>


                              <b-row>
                                <b-col class="prependButton">
                                  <b-button
                                    :pressed="false"
                                    variant="outline-dark"
                                    class="btnSmall btnCheck btnStandard"
                                    onclick="this.blur()"
                                   >
                                    <div class="custom-control custom-checkbox">
                                      <input id="customCheck15" class="custom-control-input" type="checkbox"/>
                                      <label class="custom-control-label cursorPointer" for="customCheck15"></label>
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
                                        <p class="mb-0">Fee Hidden From Client</p>
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
                                    @hover="PopoverHoverAPI35 = !PopoverHoverAPI35"
                                    id="PopoverHoverAPI35"
                                   >
                                    <i  class="iconQuestion text-medium fa-lg"></i>
                                    <b-popover
                                      triggers="hover blur"
                                      variant="-"
                                      placement="right"
                                      target="PopoverHoverAPI35"

                                     >
                                     Here is some content.
                                    </b-popover>
                                  </b-button>
                                </b-col>
                              </b-row>

                              <b-row>
                                <b-col class="prependButton">
                                  <b-button
                                    :pressed="false"
                                    variant="outline-dark"
                                    class="btnSmall btnCheck btnStandard"
                                    onclick="this.blur()"
                                   >
                                    <div class="custom-control custom-checkbox">
                                      <input id="customCheck16" class="custom-control-input" type="checkbox"/>
                                      <label class="custom-control-label cursorPointer" for="customCheck16"></label>
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
                                        <p class="mb-0">Allow Agency Entered Fees (Invoiced Services Only)</p>
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
                                    @hover="PopoverHoverAPI36 = !PopoverHoverAPI36"
                                    id="PopoverHoverAPI36"
                                   >
                                    <i  class="iconQuestion text-medium fa-lg"></i>
                                    <b-popover
                                      triggers="hover blur"
                                      variant="-"
                                      placement="right"
                                      target="PopoverHoverAPI36"

                                     >
                                     Here is some content.
                                    </b-popover>
                                  </b-button>
                                </b-col>
                              </b-row>

                            </b-container>

                          </b-tab>
                          <b-tab title="Documents">
                            <b-container class="containsRowItems sectionGroup" fluid>
                              <b-row>
                                <b-col>
                                </b-col>
                              </b-row>
                            </b-container>
                          </b-tab>
                          <b-tab title="State Options">
                            <b-container class="containsRowItems sectionGroup" fluid>
                              <b-row>
                                <b-col>
                                </b-col>
                              </b-row>
                            </b-container>
                          </b-tab>
                          <b-tab title="Additional Options">
                            <b-container class="containsRowItems sectionGroup" fluid>
                              <b-row>
                                <b-col>
                                </b-col>
                              </b-row>
                            </b-container>
                          </b-tab>
                        </b-tabs>

                      </b-collapse>

                      <b-button
                        block
                        class="rowItem rowGroupTitle cursorDefault"
                        variant="none"
                        onclick="this.blur();"
                        v-b-toggle.collapse-000
                      >

                        <div class="rowItemContent">

                          <div class="rowItemPrefix">
                            <i class="iconCollapseExpand"></i>
                          </div>

                          <div class="rowItemText">
                            <p class="mb-0">Employment Verification</p>
                          </div>

                          <div class="rowItemSuffix">
                          </div>

                        </div>

                      </b-button>


                      <b-collapse id="collapse-000">

                      <b-tabs card>
                        <b-tab title="Service Fees" active>
                          <b-container class="containsRowItems sectionGroup" fluid>
                            <b-row>
                              <b-col>
                              </b-col>
                            </b-row>
                          </b-container>
                        </b-tab>
                        <b-tab title="Documents">
                          <b-container class="containsRowItems sectionGroup" fluid>
                            <b-row>
                              <b-col>
                              </b-col>
                            </b-row>
                          </b-container>
                        </b-tab>
                        <b-tab title="State Options">
                          <b-container class="containsRowItems sectionGroup" fluid>
                            <b-row>
                              <b-col>
                              </b-col>
                            </b-row>
                          </b-container>
                        </b-tab>
                        <b-tab title="Additional Options">
                          <b-container class="containsRowItems sectionGroup" fluid>
                            <b-row>
                              <b-col>
                              </b-col>
                            </b-row>
                          </b-container>
                        </b-tab>
                      </b-tabs>

                    </b-collapse>


                    <b-button
                      block
                      class="rowItem rowGroupTitle cursorDefault"
                      variant="none"
                      onclick="this.blur();"
                      v-b-toggle.collapse-00099
                    >

                      <div class="rowItemContent">

                        <div class="rowItemPrefix">
                          <i class="iconCollapseExpand"></i>
                        </div>

                        <div class="rowItemText">
                          <p class="mb-0">US Criminal Records</p>
                        </div>

                        <div class="rowItemSuffix">
                        </div>

                      </div>

                    </b-button>


                    <b-collapse id="collapse-00099">

                    <b-tabs card>
                      <b-tab title="Service Fees" active>
                        <b-container class="containsRowItems sectionGroup" fluid>
                          <b-row>
                            <b-col>
                            </b-col>
                          </b-row>
                        </b-container>
                      </b-tab>
                      <b-tab title="Documents">
                        <b-container class="containsRowItems sectionGroup" fluid>
                          <b-row>
                            <b-col>
                            </b-col>
                          </b-row>
                        </b-container>
                      </b-tab>
                      <b-tab title="State Options">
                        <b-container class="containsRowItems sectionGroup" fluid>
                          <b-row>
                            <b-col>
                            </b-col>
                          </b-row>
                        </b-container>
                      </b-tab>
                      <b-tab title="Additional Options">
                        <b-container class="containsRowItems sectionGroup" fluid>
                          <b-row>
                            <b-col>
                            </b-col>
                          </b-row>
                        </b-container>
                      </b-tab>
                    </b-tabs>

                  </b-collapse>

                  <b-button
                    block
                    class="rowItem rowGroupTitle cursorDefault"
                    variant="none"
                    onclick="this.blur();"
                    v-b-toggle.collapse-00088
                  >

                    <div class="rowItemContent">

                      <div class="rowItemPrefix">
                        <i class="iconCollapseExpand"></i>
                      </div>

                      <div class="rowItemText">
                        <p class="mb-0">Reference Verification</p>
                      </div>

                      <div class="rowItemSuffix">
                      </div>

                    </div>

                  </b-button>


                  <b-collapse id="collapse-00088">

                  <b-tabs card>
                    <b-tab title="Service Fees" active>
                      <b-container class="containsRowItems sectionGroup" fluid>
                        <b-row>
                          <b-col>
                          </b-col>
                        </b-row>
                      </b-container>
                    </b-tab>
                    <b-tab title="Documents">
                      <b-container class="containsRowItems sectionGroup" fluid>
                        <b-row>
                          <b-col>
                          </b-col>
                        </b-row>
                      </b-container>
                    </b-tab>
                    <b-tab title="State Options">
                      <b-container class="containsRowItems sectionGroup" fluid>
                        <b-row>
                          <b-col>
                          </b-col>
                        </b-row>
                      </b-container>
                    </b-tab>
                    <b-tab title="Additional Options">
                      <b-container class="containsRowItems sectionGroup" fluid>
                        <b-row>
                          <b-col>
                          </b-col>
                        </b-row>
                      </b-container>
                    </b-tab>
                  </b-tabs>

                </b-collapse>

                    </section>

                    </b-tab>


                    <b-tab>
                      <h3>Packages</h3>
                      <h2>Bell Package C</h2>
                      <template v-slot:title>
                        <span>Bell Package C</span>
                      </template>
                    </b-tab>

                    <b-tab>
                      <h3>Packages</h3>
                      <h2>Bell Base Services</h2>
                      <template v-slot:title>
                        <span>Bell Base Services</span>
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
                          @shown="modalJQ"
                        >
                          <template v-slot:modal-header>
                            <h4 class="mb-0">Edit Packages List</h4>

                          </template>

                          <div class="modal-body">
                              <p>Disable or rearrange packages assigned to this client.</p>
                              <b-container id="sortable" class="containsRowItems fixedGroup" fluid>
                              <b-row>
                                <b-col >

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
                                          <i class="iconGrab"></i>
                                        </div>

                                      </div>

                                    </b-button>
                                  </b-col>
                                  <b-col class="appendButton">
                                    <b-button
                                      :pressed="false"
                                      variant="outline-warningfade"
                                      class="btnSmall btnWarning"
                                      onclick="this.blur();"
                                      >
                                      <i class="iconRemove iconBorderStd text-warning"></i>
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
                                          <i class="iconDash"></i>
                                        </div>

                                        <div class="rowItemText">
                                          <p>Bell Package C</p>
                                        </div>

                                        <div class="rowItemSuffix">
                                          <i class="iconGrab"></i>
                                        </div>

                                      </div>

                                    </b-button>
                                  </b-col>
                                  <b-col class="appendButton">
                                    <b-button
                                      :pressed="false"
                                      variant="outline-warningfade"
                                      class="btnSmall btnWarning"
                                      onclick="this.blur();"
                                      >
                                      <i class="iconRemove iconBorderStd text-warning"></i>
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
                                          <i class="iconDash"></i>
                                        </div>

                                        <div class="rowItemText">
                                          <p>Base Services</p>
                                        </div>

                                        <div class="rowItemSuffix">
                                          <i class="iconGrab"></i>
                                        </div>

                                      </div>

                                    </b-button>
                                  </b-col>
                                  <b-col class="appendButton">
                                    <b-button
                                      :pressed="false"
                                      variant="outline-warningfade"
                                      class="btnSmall btnWarning"
                                      onclick="this.blur();"
                                      >
                                      <i class="iconRemove iconBorderStd text-warning"></i>
                                    </b-button>
                                  </b-col>
                                </b-row>

                              </b-container>

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


        </b-tab>

        <b-tab>
          <h2>API Config</h2>
          <template v-slot:title>
            <span>API Config</span>
          </template>

          <section>

          <b-container class="pageHeader" fluid>
            <b-row align-v="center">
              <b-col>
                <h4>Section Name</h4>
              </b-col>
              <b-col sm="auto" align-self="end">
                <b-button
                  :pressed="false"
                  variant="outline-primaryfade"
                  class="btnSmall cursorDefault expandAll text-dark"
                  onclick="this.blur()"
                  @click="APIGroup1 =! APIGroup1;APIGroup2 =! APIGroup2"
                 >
                  <i class="iconSort fa-lg iconBorderMini"></i>
                </b-button>

              </b-col>
            </b-row>
          </b-container>

          <b-container fluid>
            <b-row>
              <b-col>

                <b-button
                  block
                  class=" rowGroupTitle cursorDefault"
                  variant="none"
                  onclick="this.blur();"
                  v-b-toggle.APIGroup1
                >

                  <div class="rowItemContent">

                    <div class="rowItemPrefix">
                      <i class="iconCollapseExpand"></i>
                    </div>

                    <div class="rowItemText">
                      <p class="mb-0">Account Credentials</p>
                    </div>

                    <div class="rowItemSuffix">
                    </div>

                  </div>

                </b-button>
                <b-collapse v-model="APIGroup1" visible id="APIGroup1">


                <div class="sectionGroup">
                  <b-input-group>
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
                                 <input @click="testfunc()" v-b-toggle.collapse-API  checked type="checkbox" class="custom-control-input" id="customSwitchAPI" />
                                 <label class="custom-control-label cursorPointer" for="customSwitchAPI"></label>
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
                                  <div id="tempText">Inherited</div>
                                </div>

                                <div class="rowItemSuffix">
                                  <b-badge id="tempBadge" variant="dark" class="pr-2"><i class="iconInherited fas text-white mr-1"></i>Sample Client</b-badge>
                                </div>

                              </div>

                            </b-button>
                          </b-col>
                        </b-row>
                      </b-container>
                    </b-input-group>


                  <b-collapse id="collapse-API">
                    <b-card class="rowExpandableContent">

                      <b-container fluid class="containsRowItems sectionGroup">
                        <h6>Authentication</h6>
                        <b-row>
                          <b-col>
                            <b-input-group>

                              <b-input-group-prepend>
                                <b-input-group-text>
                                  Username
                                </b-input-group-text>
                              </b-input-group-prepend>

                              <b-form-input class="form-control" type="text" placeholder="Username"></b-form-input>

                              <b-input-group-append>
                                <b-button
                                  :pressed="false"
                                  variant="-"
                                  class="cursorDefault rowItemHover questionBox appendButton"
                                  onclick="this.blur();"
                                  @hover="PopoverHoverAPI1 = !PopoverHoverAPI1"
                                  id="PopoverHoverAPI1"
                                 >
                                  <i  class="iconQuestion text-medium fa-lg"></i>
                                  <b-popover
                                    triggers="hover blur"
                                    variant="-"
                                    placement="right"
                                    target="PopoverHoverAPI1"

                                   >
                                   Here is some content.
                                  </b-popover>
                                </b-button>
                              </b-input-group-append>

                            </b-input-group>
                          </b-col>
                        </b-row>

                        <b-row>
                          <b-col>
                            <b-input-group>

                              <b-input-group-prepend>
                                <b-input-group-text>
                                  Password
                                </b-input-group-text>
                              </b-input-group-prepend>

                              <b-form-input class="form-control" type="text" placeholder="Password"></b-form-input>

                              <b-input-group-append>
                                <b-button
                                  :pressed="false"
                                  variant="-"
                                  class="cursorDefault rowItemHover questionBox appendButton"
                                  onclick="this.blur();"
                                  @hover="PopoverHoverAPI2 = !PopoverHoverAPI2"
                                  id="PopoverHoverAPI2"
                                 >
                                  <i  class="iconQuestion text-medium fa-lg"></i>
                                  <b-popover
                                    triggers="hover blur"
                                    variant="-"
                                    placement="right"
                                    target="PopoverHoverAPI2"

                                   >
                                   Here is some content.
                                  </b-popover>
                                </b-button>
                              </b-input-group-append>

                            </b-input-group>
                          </b-col>
                        </b-row>
                      </b-container>

                      <b-container fluid class="containsRowItems sectionGroup">
                      <h6>Settings</h6>

                        <b-row>
                          <b-col>
                            <b-input-group>

                              <b-input-group-prepend>
                                <b-input-group-text>
                                  IP Whitelist
                                </b-input-group-text>
                              </b-input-group-prepend>

                              <b-form-tags no-outer-focus type="text" placeholder="IP Whitelist" add-button-variant="dark" tag-variant="dark" input-class="flex-grow-0"></b-form-tags>

                              <b-input-group-append>
                                <b-button
                                  :pressed="false"
                                  variant="-"
                                  class="cursorDefault rowItemHover questionBox appendButton"
                                  onclick="this.blur();"
                                  @hover="PopoverHoverAPI3 = !PopoverHoverAPI3"
                                  id="PopoverHoverAPI3"
                                 >
                                  <i  class="iconQuestion text-medium fa-lg"></i>
                                  <b-popover
                                    triggers="hover blur"
                                    variant="-"
                                    placement="right"
                                    target="PopoverHoverAPI3"

                                   >
                                   Here is some content.
                                  </b-popover>
                                </b-button>
                              </b-input-group-append>

                            </b-input-group>
                          </b-col>
                        </b-row>

                        <b-row>
                          <b-col class="prependButton">

                            <b-button
                              :pressed="false"
                              variant="outline-dark"
                              class="btnSmall btnCheck btnStandard"
                              onclick="this.blur()"
                             >
                              <div class="custom-control custom-checkbox">
                                <input id="customCheckIDVerify" class="custom-control-input" type="checkbox"/>
                                <label class="custom-control-label cursorPointer" for="customCheckIDVerify"></label>
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
                                  Can Use ID Verification API
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
                              @hover="PopoverHoverAPI28 = !PopoverHoverAPI28"
                              id="PopoverHoverAPI28"
                             >
                              <i  class="iconQuestion text-medium fa-lg"></i>
                              <b-popover
                                triggers="hover blur"
                                variant="-"
                                placement="right"
                                target="PopoverHoverAPI28"

                               >
                               Here is some content.
                              </b-popover>
                            </b-button>
                          </b-col>
                        </b-row>

                        <b-row>
                          <b-col class="prependButton">

                            <b-button
                              :pressed="false"
                              variant="outline-dark"
                              class="btnSmall btnCheck btnStandard"
                              onclick="this.blur()"
                             >
                              <div class="custom-control custom-checkbox">
                                <input id="customCheckResults" class="custom-control-input" type="checkbox"/>
                                <label class="custom-control-label cursorPointer" for="customCheckResults"></label>
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
                                  Results Exclude Documents
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
                              @hover="PopoverHoverAPI29 = !PopoverHoverAPI29"
                              id="PopoverHoverAPI29"
                             >
                              <i  class="iconQuestion text-medium fa-lg"></i>
                              <b-popover
                                triggers="hover blur"
                                variant="-"
                                placement="right"
                                target="PopoverHoverAPI29"

                               >
                               Here is some content.
                              </b-popover>
                            </b-button>
                          </b-col>
                        </b-row>

                      </b-container>

                      <b-container class="sectionGroup" fluid>

                      <h6>Default Hiring Manager</h6>

                      <div class="fixedGroup">

                        <b-container class="containsRowItems" fluid>

                        <b-row>
                          <b-col class="prependButton">
                            <b-button
                               :pressed="false"
                               variant="outline-primaryfade"
                               class="btnSmall btnStandard btnRadio"
                               onclick="this.blur();"
                               @click="testfunc7()"
                               id="tempAdd3"
                               >
                                <div class="custom-control custom-radio">
                                  <input id="customRadio1" class="custom-control-input" type="radio" name="radio"/>
                                  <label class="custom-control-label cursorPointer" for="customRadio1"></label>
                                </div>
                            </b-button>
                          </b-col>

                          <b-col>
                            <b-button
                              id="tempRow3"
                              block
                              class="rowItem rowStandard rowItemHover cursorDefault"
                              variant="none"
                              onclick="this.blur();"
                            >

                              <div class="rowItemContent">

                                <div class="rowItemPrefix">
                                  <i class="iconUser fas"></i>
                                </div>

                                <div class="rowItemText">
                                  <p>User ID 1</p>
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
                                  <i class="iconUser fas"></i>
                                </div>

                                <div class="rowItemText">
                                  <p>User ID 2</p>
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
                                  <i class="iconUser fas"></i>
                                </div>

                                <div class="rowItemText">
                                  <p>User ID 3</p>
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
                                  <input id="customRadio4" class="custom-control-input" type="radio" name="radio"/>
                                  <label class="custom-control-label cursorPointer" for="customRadio4"></label>
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
                                  <i class="iconUser fas"></i>
                                </div>

                                <div class="rowItemText">
                                  <p>User ID 4</p>
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
                                  <input id="customRadio5" class="custom-control-input" type="radio" name="radio"/>
                                  <label class="custom-control-label cursorPointer" for="customRadio5"></label>
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
                                  <i class="iconUser fas"></i>
                                </div>

                                <div class="rowItemText">
                                  <p>User ID 5</p>
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
                                  <input id="customRadio6" class="custom-control-input" type="radio" name="radio"/>
                                  <label class="custom-control-label cursorPointer" for="customRadio6"></label>
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
                                  <i class="iconUser fas"></i>
                                </div>

                                <div class="rowItemText">
                                  <p>User ID 6</p>
                                </div>

                                <div class="rowItemSuffix">

                                </div>

                              </div>

                            </b-button>
                          </b-col>
                        </b-row>

                      </b-container>

                      </div>

                      </b-container>

                      <b-container class="containsRowItems sectionGroup" fluid>
                        <h6>Tech Contact Information</h6>
                        <b-row>
                          <b-col>
                          <b-input-group>

                            <b-input-group-prepend>
                              <b-input-group-text>
                                Name
                              </b-input-group-text>
                            </b-input-group-prepend>

                            <b-form-input class="form-control" type="text" placeholder="Name"></b-form-input>

                            <b-input-group-append>
                              <b-button
                                :pressed="false"
                                variant="-"
                                class="cursorDefault rowItemHover questionBox appendButton"
                                onclick="this.blur();"
                                @hover="PopoverHoverAPI4 = !PopoverHoverAPI4"
                                id="PopoverHoverAPI4"
                               >
                                <i  class="iconQuestion text-medium fa-lg"></i>
                                <b-popover
                                  triggers="hover blur"
                                  variant="-"
                                  placement="right"
                                  target="PopoverHoverAPI4"

                                 >
                                 Here is some content.
                                </b-popover>
                              </b-button>
                            </b-input-group-append>

                          </b-input-group>
                        </b-col>
                        </b-row>

                        <b-row>
                        <b-col>
                          <b-input-group>

                            <b-input-group-prepend>
                              <b-input-group-text>
                                Email
                              </b-input-group-text>
                            </b-input-group-prepend>

                            <b-form-input class="form-control" type="text" placeholder="Email"></b-form-input>

                            <b-input-group-append>
                              <b-button
                                :pressed="false"
                                variant="-"
                                class="cursorDefault rowItemHover questionBox appendButton"
                                onclick="this.blur();"
                                @hover="PopoverHoverAPI5 = !PopoverHoverAPI5"
                                id="PopoverHoverAPI5"
                               >
                                <i  class="iconQuestion text-medium fa-lg"></i>
                                <b-popover
                                  triggers="hover blur"
                                  variant="-"
                                  placement="right"
                                  target="PopoverHoverAPI5"

                                 >
                                 Here is some content.
                                </b-popover>
                              </b-button>
                            </b-input-group-append>

                          </b-input-group>
                        </b-col>
                        </b-row>

                        <b-row>
                        <b-col>
                          <b-input-group>

                            <b-input-group-prepend>
                              <b-input-group-text>
                                Phone Number
                              </b-input-group-text>
                            </b-input-group-prepend>

                            <b-form-input class="form-control" type="text" placeholder="Phone Number"></b-form-input>

                            <b-input-group-append>
                              <b-button
                                :pressed="false"
                                variant="-"
                                class="cursorDefault rowItemHover questionBox appendButton"
                                onclick="this.blur();"
                                @hover="PopoverHoverAPI6 = !PopoverHoverAPI6"
                                id="PopoverHoverAPI6"
                               >
                                <i  class="iconQuestion text-medium fa-lg"></i>
                                <b-popover
                                  triggers="hover blur"
                                  variant="-"
                                  placement="right"
                                  target="PopoverHoverAPI6"

                                 >
                                 Here is some content.
                                </b-popover>
                              </b-button>
                            </b-input-group-append>

                          </b-input-group>
                        </b-col>
                        </b-row>

                        <b-row>
                        <b-col>
                          <b-input-group>

                            <b-input-group-prepend>
                              <b-input-group-text>
                                Notes
                              </b-input-group-text>
                            </b-input-group-prepend>

                            <b-form-textarea no-resize rows="3" class="form-control" type="text" placeholder="Notes"></b-form-textarea>

                            <b-input-group-append>
                              <b-button
                                :pressed="false"
                                variant="-"
                                class="cursorDefault rowItemHover questionBox appendButton"
                                onclick="this.blur();"
                                @hover="PopoverHoverAPI7 = !PopoverHoverAPI7"
                                id="PopoverHoverAPI7"
                               >
                                <i  class="iconQuestion text-medium fa-lg"></i>
                                <b-popover
                                  triggers="hover blur"
                                  variant="-"
                                  placement="right"
                                  target="PopoverHoverAPI7"

                                 >
                                 Here is some content.
                                </b-popover>
                              </b-button>
                            </b-input-group-append>

                          </b-input-group>
                        </b-col>
                      </b-row>

                    </b-container>


                          <b-container class="sectionGroup containsRowItems" fluid>
                            <h6>Webhooks</h6>
                            <b-row id="tempButton">
                              <b-col>
                                  <b-button
                                    class="rowItem rowStandard rowItemHover cursorDefault"
                                    variant="none"
                                    onclick="this.blur();"
                                  >

                                    <div class="rowItemContent">

                                      <div class="rowItemPrefix">
                                        <div class="custom-control custom-switch">
                                          <input checked @click="testfunc2()" type="checkbox" class="custom-control-input" id="customSwitchAPI2" />
                                          <label class="custom-control-label cursorPointer" for="customSwitchAPI2"></label>
                                        </div>
                                      </div>

                                      <div id="tempText2" class="rowItemText">
                                        http://www.uber.com
                                      </div>

                                      <div class="rowItemSuffix">
                                        <b-badge id="tempBadge2" variant="dark pr-2"><i class="iconAPI fas"></i> <span class="badge-text">Generic</span></b-badge>
                                      </div>

                                    </div>

                                  </b-button>

                              </b-col>
                              <b-col class="appendButton">
                                <b-button
                                  :pressed="false"
                                  variant="outline-primaryfade"
                                  class="btnSmall btnStandard"
                                  onclick="this.blur();"
                                  >
                                  <i class="iconEdit iconBorderStd text-dark"></i>
                                </b-button>
                              </b-col>
                              <b-col class="appendButton">
                                <b-button
                                  :pressed="false"
                                  variant="outline-warningfade"
                                  class="btnSmall btnWarning"
                                  onclick="this.blur();"
                                  >
                                  <i class="iconRemove iconBorderStd text-warning"></i>
                                </b-button>
                              </b-col>
                            </b-row>


                            <b-container class="containsRowItems" fluid>
                            <b-row>
                              <b-col class="buttonCol">
                                <b-button
                                  :pressed="false"
                                  variant="outline-light"
                                  size="sm"
                                  class="btnThin nonRowItem"
                                  onclick="this.blur();"
                                  @click="modalAPI = !modalAPI"

                                  >
                                  <div class="btnText"><i class="iconPlus"></i> Add Webhook</div>

                                </b-button>
                            </b-col>
                          </b-row>
                        </b-container>


                          <b-modal
                            v-model="modalAPI"
                            :no-close-on-backdrop="true"
                            :no-close-on-esc="true"
                            id="modalAPI"
                            size="lg"
                            @shown="modalJQ"

                          >
                            <template v-slot:modal-header>
                              <h4 class="mb-0">Add Webhook</h4>
                            </template>



                              <b-container class="containsRowItems sectionGroup" fluid>
                                <h6>Endpoint URL</h6>
                                    <b-row>
                                      <b-col>
                                        <b-input-group>

                                          <b-input-group-prepend>
                                            <b-input-group-text>
                                              Callback URL
                                            </b-input-group-text>
                                          </b-input-group-prepend>

                                          <b-form-input class="form-control" type="text" placeholder="Callback URL"></b-form-input>

                                          <b-input-group-append>
                                            <b-button
                                              :pressed="false"
                                              variant="-"
                                              class="cursorDefault rowItemHover questionBox appendButton"
                                              onclick="this.blur();"
                                              @hover="PopoverHoverAPI26 = !PopoverHoverAPI26"
                                              id="PopoverHoverAPI26"
                                             >
                                              <i  class="iconQuestion text-medium fa-lg"></i>
                                              <b-popover
                                                triggers="hover blur"
                                                variant="-"
                                                placement="right"
                                                target="PopoverHoverAPI26"
                                               >
                                               Here is some content.
                                              </b-popover>
                                            </b-button>
                                          </b-input-group-append>

                                        </b-input-group>
                                      </b-col>
                                    </b-row>
                                      <b-row>
                                      <b-col>
                                        <b-input-group>

                                          <b-input-group-prepend>
                                            <b-input-group-text>
                                              Callback Type
                                            </b-input-group-text>
                                          </b-input-group-prepend>

                                          <select name="salutation" id="choose3">
                                            <option disabled selected>Callback Type...</option>
                                            <option>Accio</option>
                                            <option>BellSuccessFactors</option>
                                            <option>ICIMS</option>
                                            <option>rampinteractive</option>
                                            <option>TazWorks</option>
                                            <option>TheMinery</option>
                                            <option>Uber</option>
                                            <option>WorkDay</option>
                                            <option>*Generic*</option>
                                          </select>

                                          <b-input-group-append>
                                            <b-button
                                              :pressed="false"
                                              variant="-"
                                              class="cursorDefault rowItemHover questionBox appendButton"
                                              onclick="this.blur();"
                                              @hover="PopoverHoverAPI27 = !PopoverHoverAPI27"
                                              id="PopoverHoverAPI27"
                                             >
                                              <i  class="iconQuestion text-medium fa-lg"></i>
                                              <b-popover
                                                triggers="hover blur"
                                                variant="-"
                                                placement="right"
                                                target="PopoverHoverAPI27"
                                               >
                                               Here is some content.
                                              </b-popover>
                                            </b-button>
                                          </b-input-group-append>

                                        </b-input-group>
                                      </b-col>
                                    </b-row>

                              </b-container>

                              <b-container class="containsRowItems sectionGroup">

                                <h6>Events</h6>
                                <b-row>
                                  <b-col>

                                    <b-button
                                      block
                                      class="rowItem rowStandard cursorNone"
                                      variant="-"
                                      onclick="this.blur();"
                                    >

                                      <div class="rowItemContent">

                                        <div class="rowItemPrefix">
                                          <div class="custom-control custom-checkbox">
                                            <input disabled checked id="customCheckWebhook" class="custom-control-input" type="checkbox"/>
                                            <label class="custom-control-label cursorPointer" style="opacity:.3;"  for="customCheckWebhook"></label>
                                          </div>
                                        </div>

                                        <div class="rowItemText">
                                          <p class="mb-0" style="opacity:.3;">Completed</p>
                                        </div>

                                        <div class="rowItemSuffix">
                                        </div>

                                      </div>

                                    </b-button>

                                  </b-col>
                                </b-row>

                              </b-container>




                            <template v-slot:modal-footer>

                                <b-button
                                  :pressed="false"
                                  variant="outline-warningfade"
                                  class="btnNavigation btnWarning float-left"
                                  @click="modalAPI=false"
                                  >
                                  CANCEL
                                </b-button>

                                <b-button
                                  :pressed="false"
                                  variant="outline-confirmfade"
                                  class="btnNavigation btnConfirm float-right"
                                  @click="modalAPI=false;testfunc3()"
                                  >
                                  ADD
                                </b-button>

                            </template>

                          </b-modal>

                        </b-container>
                    </b-card>
                  </b-collapse>
                </div>
              </b-collapse>
            </b-col>
          </b-row>
        </b-container>


            <b-container fluid>
              <b-row>
                <b-col>
                  <b-button
                    block
                    class="rowItem rowGroupTitle cursorDefault"
                    variant="none"
                    onclick="this.blur();"
                    v-b-toggle.APIGroup2
                  >

                    <div class="rowItemContent">

                      <div class="rowItemPrefix">
                        <i class="iconCollapseExpand"></i>
                      </div>

                      <div class="rowItemText">
                        <p class="mb-0">Package Assignments</p>
                      </div>

                      <div class="rowItemSuffix">
                      </div>

                    </div>

                  </b-button>
                  <b-collapse v-model="APIGroup2" visible id="APIGroup2">


                  <div class="sectionGroup">
                    <b-container fluid>

                      <b-row id="tempButton2">
                        <b-col>
                          <b-button
                            block
                            class="rowItem rowStandard rowItemHover cursorDefault"
                            variant="none"
                            onclick="this.blur();"
                          >

                            <div class="rowItemContent">

                              <div class="rowItemPrefix">
                                <i class="iconConnected"></i>
                              </div>

                              <div class="rowItemText">
                                UberAssignment1
                              </div>

                              <div class="rowItemSuffix">
                                <b-badge id="tempBadge2" variant="dark pr-2"><i class="iconUser fas"></i> <span class="badge-text">User ID 1</span></b-badge>
                              </div>

                            </div>

                          </b-button>
                        </b-col>
                        <b-col class="appendButton">
                          <b-button
                            :pressed="false"
                            variant="outline-primaryfade"
                            class="btnSmall btnWarning"
                            onclick="this.blur();"
                            >
                            <i class="iconEdit iconBorderStd text-dark"></i>
                          </b-button>
                        </b-col>
                        <b-col class="appendButton">
                          <b-button
                            :pressed="false"
                            variant="outline-warningfade"
                            class="btnSmall btnWarning"
                            onclick="this.blur();"
                            >
                            <i class="iconRemove iconBorderStd text-warning"></i>
                          </b-button>
                        </b-col>
                      </b-row>
                    </b-container>
                    <b-container class="containsRowItems" fluid>
                      <b-row>
                        <b-col class="buttonCol">
                          <b-button
                            :pressed="false"
                            variant="outline-light"
                            size="sm"
                            class="btnThin nonRowItem"
                            onclick="this.blur();"
                            @click="modalAPI2 = !modalAPI2;testfunc8()"

                            >
                            <div class="btnText"><i class="iconPlus"></i> Add Assignment</div>

                          </b-button>
                        </b-col>
                      </b-row>
                    </b-container>

                    <b-modal
                      v-model="modalAPI2"
                      :no-close-on-backdrop="true"
                      :no-close-on-esc="true"
                      id="modalAPI2"
                      size="lg"
                      @shown="modalJQ"
                    >
                      <template v-slot:modal-header>
                        <h3>Add Assignment</h3>
                      </template>

                      <b-container class="containsRowItems sectionGroup" fluid>
                        <b-row>
                          <b-col>
                            <b-input-group>

                              <b-input-group-prepend>
                                <b-input-group-text>
                                  Assignment Name
                                </b-input-group-text>
                              </b-input-group-prepend>

                              <b-form-input class="form-control" type="text" placeholder="Assignment Name"></b-form-input>

                              <b-input-group-append>
                                <b-button
                                  :pressed="false"
                                  variant="-"
                                  class="cursorDefault rowItemHover questionBox appendButton"
                                  onclick="this.blur();"
                                  @hover="PopoverHoverAPI31 = !PopoverHoverAPI31"
                                  id="PopoverHoverAPI31"
                                 >
                                  <i  class="iconQuestion text-medium fa-lg"></i>
                                  <b-popover
                                    triggers="hover blur"
                                    variant="-"
                                    placement="right"
                                    target="PopoverHoverAPI31"
                                   >
                                   Here is some content.
                                  </b-popover>
                                </b-button>
                              </b-input-group-append>

                            </b-input-group>
                          </b-col>
                        </b-row>
                      </b-container>

                        <div class="sectionGroup">
                          <h4>Choose Package to Connect:</h4>
                          <b-container fluid class="containsRowItems fixedGroup">
                            <b-row>
                              <b-col class="prependButton">
                                  <b-button
                                     :pressed="false"
                                     variant="outline-primaryfade"
                                     class="btnSmall btnStandard btnRadio"
                                     onclick="this.blur();"
                                     >
                                      <div class="custom-control custom-radio">
                                        <input id="customRadioPack1" class="custom-control-input" type="radio" name="radio2"/>
                                        <label class="custom-control-label cursorPointer" for="customRadioPack1"></label>
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
                                      <i class="iconPackage fas"></i>
                                    </div>

                                    <div class="rowItemText">
                                      <p>Uber Package A1</p>
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
                                     @click="testfunc4()"
                                     id="tempAdd"
                                     >
                                      <div class="custom-control custom-radio">
                                        <input id="customRadioRow2" class="custom-control-input" type="radio" name="radio2"/>
                                        <label class="custom-control-label cursorPointer" for="customRadioRow2"></label>
                                      </div>
                                  </b-button>
                              </b-col>
                              <b-col>
                                <b-button
                                  id="tempRow"
                                  block
                                  class="rowItem rowStandard rowItemHover cursorDefault"
                                  variant="none"
                                  onclick="this.blur();"
                                >

                                  <div class="rowItemContent">

                                    <div class="rowItemPrefix">
                                      <i class="iconPackage fas"></i>
                                    </div>

                                    <div class="rowItemText">
                                      <p>Uber Package C</p>
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
                                        <input id="customRadioRow3" class="custom-control-input" type="radio" name="radio2"/>
                                        <label class="custom-control-label cursorPointer" for="customRadioRow3"></label>
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
                                      <i class="iconPackage fas"></i>
                                    </div>

                                    <div class="rowItemText">
                                      <p>Uber Base Services</p>
                                    </div>

                                    <div class="rowItemSuffix">

                                    </div>

                                  </div>

                                </b-button>
                              </b-col>
                            </b-row>
                          </b-container>
                        </div>


                        <b-container class="sectionGroup" fluid>

                        <h4>Assign a Default Hiring Manager:</h4>

                        <p>Default hiring manager is used when blah blah blah come up with some good copywriting</p>

                        <b-alert id="tempAlert1" show fade variant="warning" class="customAlert">
                          <b-row align-v="center">
                            <b-col sm="auto">
                              <i class="iconExclamation"></i>
                            </b-col>
                            <b-col>
                              <p class="mb-0">A default hiring manager is not set in Account Credentials. If a hiring manager is not provided at the time of an API request, the request will be rejected.</p>
                            </b-col>
                            <b-col sm="auto">
                              <i class="iconExclamation"></i>
                            </b-col>
                          </b-row>
                        </b-alert>

                        <b-alert id="tempAlert2" fade show variant="secondary" class="customAlert alertSecondary">
                          <b-row align-v="center">
                            <b-col sm="auto">
                              <i class="iconExclamation"></i>
                            </b-col>
                            <b-col>
                              <p class="mb-0">A default hiring manager has been inherited or is assigned in the credentials setup. Assigning one here will override that.</p>
                            </b-col>
                            <b-col sm="auto">
                              <i class="iconExclamation"></i>
                            </b-col>
                          </b-row>
                        </b-alert>

                        <div class="fixedGroup">

                          <b-container class="containsRowItems" fluid>

                          <b-row>
                            <b-col class="prependButton">
                              <b-button
                                 :pressed="false"
                                 variant="outline-primaryfade"
                                 class="btnSmall btnStandard btnRadio"
                                 onclick="this.blur();"
                                 @click="testfunc5()"
                                 id="tempAdd2"
                                 >
                                  <div class="custom-control custom-radio">
                                    <input id="customRadioAssign1" class="custom-control-input" type="radio" name="radio3"/>
                                    <label class="custom-control-label cursorPointer" for="customRadioAssign1"></label>
                                  </div>
                              </b-button>
                            </b-col>

                            <b-col>
                              <b-button
                                id="tempRow2"
                                block
                                class="rowItem rowStandard rowItemHover cursorDefault"
                                variant="none"
                                onclick="this.blur();"
                              >

                                <div class="rowItemContent">

                                  <div class="rowItemPrefix">
                                    <i class="iconUser fas"></i>
                                  </div>

                                  <div class="rowItemText">
                                    <p>User ID 1</p>
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
                                    <input id="customRadioAssign2" class="custom-control-input" type="radio" name="radio3"/>
                                    <label class="custom-control-label cursorPointer" for="customRadioAssign2"></label>
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
                                    <i class="iconUser fas"></i>
                                  </div>

                                  <div class="rowItemText">
                                    <p>User ID 2</p>
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
                                    <input id="customRadioAssign3" class="custom-control-input" type="radio" name="radio3"/>
                                    <label class="custom-control-label cursorPointer" for="customRadioAssign3"></label>
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
                                    <i class="iconUser fas"></i>
                                  </div>

                                  <div class="rowItemText">
                                    <p>User ID 3</p>
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
                                    <input id="customRadioAssign4" class="custom-control-input" type="radio" name="radio3"/>
                                    <label class="custom-control-label cursorPointer" for="customRadioAssign4"></label>
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
                                    <i class="iconUser fas"></i>
                                  </div>

                                  <div class="rowItemText">
                                    <p>User ID 4</p>
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
                                    <input id="customRadioAssign5" class="custom-control-input" type="radio" name="radio3"/>
                                    <label class="custom-control-label cursorPointer" for="customRadioAssign5"></label>
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
                                    <i class="iconUser fas"></i>
                                  </div>

                                  <div class="rowItemText">
                                    <p>User ID 5</p>
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
                                    <input id="customRadioAssign6" class="custom-control-input" type="radio" name="radio3"/>
                                    <label class="custom-control-label cursorPointer" for="customRadioAssign6"></label>
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
                                    <i class="iconUser fas"></i>
                                  </div>

                                  <div class="rowItemText">
                                    <p>User ID 6</p>
                                  </div>

                                  <div class="rowItemSuffix">

                                  </div>

                                </div>

                              </b-button>
                            </b-col>
                          </b-row>

                        </b-container>

                        </div>

                        </b-container>


                          <b-container class="containsRowItems sectionGroup" fluid id="test">
                            <h4>Set Field Requirements:</h4>
                            <p><u>Not Required</u> is used when place description here. <br/>
                              <u>Required</u> is used when place description here. <br/>
                              <u>Required and Read-Only</u> is used when place description here. <br/>
                              <u>Required with Hidden Cross-Validation</u> is used when place description here. <br/>
                            </p>

                            <b-row>
                              <b-col>
                                <b-input-group>

                                  <b-input-group-prepend>
                                    <b-input-group-text>
                                    FirstName
                                    </b-input-group-text>
                                  </b-input-group-prepend>

                                  <select name="salutation" id="choose3">
                                    <option disabled selected>Set Requirement...</option>
                                    <option>Not Required</option>
                                    <option>Required</option>
                                    <option>Required and Read-Only</option>
                                    <option>Required with Hidden Cross-Validation</option>
                                  </select>

                                  <b-input-group-append>
                                    <b-button
                                      :pressed="false"
                                      variant="-"
                                      class="cursorDefault rowItemHover questionBox appendButton"
                                      onclick="this.blur();"
                                      @hover="PopoverHoverAPI8 = !PopoverHoverAPI8"
                                      id="PopoverHoverAPI8"
                                     >
                                      <i class="iconQuestion text-medium fa-lg"></i>
                                        <b-popover
                                          triggers="hover blur"
                                          variant="-"
                                          placement="right"
                                          target="PopoverHoverAPI8"
                                         >
                                         Here is some content.
                                       </b-popover>
                                    </b-button>
                                  </b-input-group-append>

                                </b-input-group>
                              </b-col>
                            </b-row>

                            <!-- NEW ROW -->

                            <b-row>
                              <b-col>
                                <b-input-group>
                                  <b-input-group-prepend>
                                    <b-input-group-text>
                                    MiddleName
                                    </b-input-group-text>
                                  </b-input-group-prepend>
                                  <select name="salutation" id="choose6">
                                    <option disabled selected>Set Requirement...</option>
                                    <option>Not Required</option>
                                    <option>Required</option>
                                    <option>Required and Read-Only</option>
                                    <option>Required with Hidden Cross-Validation</option>
                                  </select>
                                  <b-input-group-append>
                                    <b-button
                                      :pressed="false"
                                      variant="-"
                                      class="cursorDefault rowItemHover questionBox appendButton"
                                      onclick="this.blur();"
                                      @hover="PopoverHoverAPI9 = !PopoverHoverAPI9"
                                      id="PopoverHoverAPI9"
                                     >
                                      <i class="iconQuestion text-medium fa-lg"></i>
                                        <b-popover
                                          triggers="hover blur"
                                          variant="-"
                                          placement="right"
                                          target="PopoverHoverAPI9"
                                         >
                                         Here is some content.
                                       </b-popover>
                                    </b-button>
                                  </b-input-group-append>
                                </b-input-group>
                              </b-col>
                            </b-row>

                            <!-- NEW ROW -->

                            <b-row>
                              <b-col>
                                <b-input-group>
                                  <b-input-group-prepend>
                                    <b-input-group-text>
                                    LastName
                                    </b-input-group-text>
                                  </b-input-group-prepend>
                                  <select name="salutation" id="choose3">
                                    <option disabled selected>Set Requirement...</option>
                                    <option>Not Required</option>
                                    <option>Required</option>
                                    <option>Required and Read-Only</option>
                                    <option>Required with Hidden Cross-Validation</option>
                                  </select>
                                  <b-input-group-append>
                                    <b-button
                                      :pressed="false"
                                      variant="-"
                                      class="cursorDefault rowItemHover questionBox appendButton"
                                      onclick="this.blur();"
                                      @hover="PopoverHoverAPI10 = !PopoverHoverAPI10"
                                      id="PopoverHoverAPI10"
                                     >
                                      <i class="iconQuestion text-medium fa-lg"></i>
                                        <b-popover
                                          triggers="hover blur"
                                          variant="-"
                                          placement="right"
                                          target="PopoverHoverAPI10"
                                         >
                                         Here is some content.
                                       </b-popover>
                                    </b-button>
                                  </b-input-group-append>
                                </b-input-group>
                              </b-col>
                            </b-row>

                            <!-- NEW ROW -->

                            <b-row>
                              <b-col>
                                <b-input-group>

                                  <b-input-group-prepend>
                                    <b-input-group-text>
                                    AddressInfo
                                    </b-input-group-text>
                                  </b-input-group-prepend>

                                  <select name="salutation" id="choose3">
                                    <option disabled selected>Set Requirement...</option>
                                    <option>Not Required</option>
                                    <option>Required</option>
                                    <option>Required and Read-Only</option>
                                    <option>Required with Hidden Cross-Validation</option>
                                  </select>

                                  <b-input-group-append>
                                    <b-button
                                      :pressed="false"
                                      variant="-"
                                      class="cursorDefault rowItemHover questionBox appendButton"
                                      onclick="this.blur();"
                                      @hover="PopoverHoverAPI11 = !PopoverHoverAPI11"
                                      id="PopoverHoverAPI11"
                                     >
                                      <i class="iconQuestion text-medium fa-lg"></i>
                                        <b-popover
                                          triggers="hover blur"
                                          variant="-"
                                          placement="right"
                                          target="PopoverHoverAPI11"
                                         >
                                         Here is some content.
                                       </b-popover>
                                    </b-button>
                                  </b-input-group-append>

                                </b-input-group>
                              </b-col>
                            </b-row>

                            <!-- NEW ROW -->

                            <b-row>
                              <b-col>
                                <b-input-group>

                                  <b-input-group-prepend>
                                    <b-input-group-text>
                                    CostCenterId
                                    </b-input-group-text>
                                  </b-input-group-prepend>

                                  <select name="salutation" id="choose3">
                                    <option disabled selected>Set Requirement...</option>
                                    <option>Not Required</option>
                                    <option>Required</option>
                                    <option>Required and Read-Only</option>
                                    <option>Required with Hidden Cross-Validation</option>
                                  </select>

                                  <b-input-group-append>
                                    <b-button
                                      :pressed="false"
                                      variant="-"
                                      class="cursorDefault rowItemHover questionBox appendButton"
                                      onclick="this.blur();"
                                      @hover="PopoverHoverAPI12 = !PopoverHoverAPI12"
                                      id="PopoverHoverAPI12"
                                     >
                                      <i class="iconQuestion text-medium fa-lg"></i>
                                        <b-popover
                                          triggers="hover blur"
                                          variant="-"
                                          placement="right"
                                          target="PopoverHoverAPI12"
                                         >
                                         Here is some content.
                                       </b-popover>
                                    </b-button>
                                  </b-input-group-append>

                                </b-input-group>
                              </b-col>
                            </b-row>

                            <!-- NEW ROW -->

                            <b-row>
                              <b-col>
                                <b-input-group>
                                  <b-input-group-prepend>
                                    <b-input-group-text>
                                    CostCenterName
                                    </b-input-group-text>
                                  </b-input-group-prepend>
                                  <select name="salutation" id="choose3">
                                    <option disabled selected>Set Requirement...</option>
                                    <option>Not Required</option>
                                    <option>Required</option>
                                    <option>Required and Read-Only</option>
                                    <option>Required with Hidden Cross-Validation</option>
                                  </select>
                                  <b-input-group-append>
                                    <b-button
                                      :pressed="false"
                                      variant="-"
                                      class="cursorDefault rowItemHover questionBox appendButton"
                                      onclick="this.blur();"
                                      @hover="PopoverHoverAPI13 = !PopoverHoverAPI13"
                                      id="PopoverHoverAPI13"
                                     >
                                      <i class="iconQuestion text-medium fa-lg"></i>
                                        <b-popover
                                          triggers="hover blur"
                                          variant="-"
                                          placement="right"
                                          target="PopoverHoverAPI13"
                                         >
                                         Here is some content.
                                       </b-popover>
                                    </b-button>
                                  </b-input-group-append>
                                </b-input-group>
                              </b-col>
                            </b-row>
                            <b-row>
                              <b-col>
                                <b-input-group>
                                  <b-input-group-prepend>
                                    <b-input-group-text>
                                    ExternalApplicantId
                                    </b-input-group-text>
                                  </b-input-group-prepend>
                                  <select name="salutation" id="choose3">
                                    <option disabled selected>Set Requirement...</option>
                                    <option>Not Required</option>
                                    <option>Required</option>
                                    <option>Required and Read-Only</option>
                                    <option>Required with Hidden Cross-Validation</option>
                                  </select>
                                  <b-input-group-append>
                                    <b-button
                                      :pressed="false"
                                      variant="-"
                                      class="cursorDefault rowItemHover questionBox appendButton"
                                      onclick="this.blur();"
                                      @hover="PopoverHoverAPI14 = !PopoverHoverAPI14"
                                      id="PopoverHoverAPI14"
                                     >
                                      <i class="iconQuestion text-medium fa-lg"></i>
                                        <b-popover
                                          triggers="hover blur"
                                          variant="-"
                                          placement="right"
                                          target="PopoverHoverAPI14"
                                         >
                                         Here is some content.
                                       </b-popover>
                                    </b-button>
                                  </b-input-group-append>
                                </b-input-group>
                              </b-col>
                            </b-row>
                            <b-row>
                              <b-col>
                                <b-input-group>
                                  <b-input-group-prepend>
                                    <b-input-group-text>
                                    ExternalJobId
                                    </b-input-group-text>
                                  </b-input-group-prepend>
                                  <select name="salutation" id="choose3">
                                    <option disabled selected>Set Requirement...</option>
                                    <option>Not Required</option>
                                    <option>Required</option>
                                    <option>Required and Read-Only</option>
                                    <option>Required with Hidden Cross-Validation</option>
                                  </select>
                                  <b-input-group-append>
                                    <b-button
                                      :pressed="false"
                                      variant="-"
                                      class="cursorDefault rowItemHover questionBox appendButton"
                                      onclick="this.blur();"
                                      @hover="PopoverHoverAPI25 = !PopoverHoverAPI25"
                                      id="PopoverHoverAPI25"
                                     >
                                      <i class="iconQuestion text-medium fa-lg"></i>
                                        <b-popover
                                          triggers="hover blur"
                                          variant="-"
                                          placement="right"
                                          target="PopoverHoverAPI25"
                                         >
                                         Here is some content.
                                       </b-popover>
                                    </b-button>
                                  </b-input-group-append>
                                </b-input-group>
                              </b-col>
                            </b-row>
                            <b-row>
                              <b-col>
                                <b-input-group>
                                  <b-input-group-prepend>
                                    <b-input-group-text>
                                    ExternalUniqueId
                                    </b-input-group-text>
                                  </b-input-group-prepend>
                                  <select name="salutation" id="choose3">
                                    <option disabled selected>Set Requirement...</option>
                                    <option>Not Required</option>
                                    <option>Required</option>
                                    <option>Required and Read-Only</option>
                                    <option>Required with Hidden Cross-Validation</option>
                                  </select>
                                  <b-input-group-append>
                                    <b-button
                                      :pressed="false"
                                      variant="-"
                                      class="cursorDefault rowItemHover questionBox appendButton"
                                      onclick="this.blur();"
                                      @hover="PopoverHoverAPI15 = !PopoverHoverAPI15"
                                      id="PopoverHoverAPI15"
                                     >
                                      <i class="iconQuestion text-medium fa-lg"></i>
                                        <b-popover
                                          triggers="hover blur"
                                          variant="-"
                                          placement="right"
                                          target="PopoverHoverAPI15"
                                         >
                                         Here is some content.
                                       </b-popover>
                                    </b-button>
                                  </b-input-group-append>
                                </b-input-group>
                              </b-col>
                            </b-row>
                            <b-row>
                              <b-col>
                                <b-input-group>
                                  <b-input-group-prepend>
                                    <b-input-group-text>
                                    JobTitle
                                    </b-input-group-text>
                                  </b-input-group-prepend>
                                  <select name="salutation" id="choose3">
                                    <option disabled selected>Set Requirement...</option>
                                    <option>Not Required</option>
                                    <option>Required</option>
                                    <option>Required and Read-Only</option>
                                    <option>Required with Hidden Cross-Validation</option>
                                  </select>
                                  <b-input-group-append>
                                    <b-button
                                      :pressed="false"
                                      variant="-"
                                      class="cursorDefault rowItemHover questionBox appendButton"
                                      onclick="this.blur();"
                                      @hover="PopoverHoverAPI16 = !PopoverHoverAPI16"
                                      id="PopoverHoverAPI16"
                                     >
                                      <i class="iconQuestion text-medium fa-lg"></i>
                                        <b-popover
                                          triggers="hover blur"
                                          variant="-"
                                          placement="right"
                                          target="PopoverHoverAPI16"
                                         >
                                         Here is some content.
                                       </b-popover>
                                    </b-button>
                                  </b-input-group-append>
                                </b-input-group>
                              </b-col>
                            </b-row>
                            <b-row>
                              <b-col>
                                <b-input-group>
                                  <b-input-group-prepend>
                                    <b-input-group-text>
                                    DriverLicenseNum
                                    </b-input-group-text>
                                  </b-input-group-prepend>
                                  <select name="salutation" id="choose3">
                                    <option disabled selected>Set Requirement...</option>
                                    <option>Not Required</option>
                                    <option>Required</option>
                                    <option>Required and Read-Only</option>
                                    <option>Required with Hidden Cross-Validation</option>
                                  </select>
                                  <b-input-group-append>
                                    <b-button
                                      :pressed="false"
                                      variant="-"
                                      class="cursorDefault rowItemHover questionBox appendButton"
                                      onclick="this.blur();"
                                      @hover="PopoverHoverAPI17 = !PopoverHoverAPI17"
                                      id="PopoverHoverAPI17"
                                     >
                                      <i class="iconQuestion text-medium fa-lg"></i>
                                        <b-popover
                                          triggers="hover blur"
                                          variant="-"
                                          placement="right"
                                          target="PopoverHoverAPI17"
                                         >
                                         Here is some content.
                                       </b-popover>
                                    </b-button>
                                  </b-input-group-append>
                                </b-input-group>
                              </b-col>
                            </b-row>
                            <b-row>
                              <b-col>
                                <b-input-group>
                                  <b-input-group-prepend>
                                    <b-input-group-text>
                                    DriverLicenseProv
                                    </b-input-group-text>
                                  </b-input-group-prepend>
                                  <select name="salutation" id="choose3">
                                    <option disabled selected>Set Requirement...</option>
                                    <option>Not Required</option>
                                    <option>Required</option>
                                    <option>Required and Read-Only</option>
                                    <option>Required with Hidden Cross-Validation</option>
                                  </select>
                                  <b-input-group-append>
                                    <b-button
                                      :pressed="false"
                                      variant="-"
                                      class="cursorDefault rowItemHover questionBox appendButton"
                                      onclick="this.blur();"
                                      @hover="PopoverHoverAPI18 = !PopoverHoverAPI18"
                                      id="PopoverHoverAPI18"
                                     >
                                      <i class="iconQuestion text-medium fa-lg"></i>
                                        <b-popover
                                          triggers="hover blur"
                                          variant="-"
                                          placement="right"
                                          target="PopoverHoverAPI18"
                                         >
                                         Here is some content.
                                       </b-popover>
                                    </b-button>
                                  </b-input-group-append>
                                </b-input-group>
                              </b-col>
                            </b-row>
                            <b-row>
                              <b-col>
                                <b-input-group>
                                  <b-input-group-prepend>
                                    <b-input-group-text>
                                    BirthDate
                                    </b-input-group-text>
                                  </b-input-group-prepend>
                                  <select name="salutation" id="choose3">
                                    <option disabled selected>Set Requirement...</option>
                                    <option>Not Required</option>
                                    <option>Required</option>
                                    <option>Required and Read-Only</option>
                                    <option>Required with Hidden Cross-Validation</option>
                                  </select>
                                  <b-input-group-append>
                                    <b-button
                                      :pressed="false"
                                      variant="-"
                                      class="cursorDefault rowItemHover questionBox appendButton"
                                      onclick="this.blur();"
                                      @hover="PopoverHoverAPI19 = !PopoverHoverAPI19"
                                      id="PopoverHoverAPI19"
                                     >
                                      <i class="iconQuestion text-medium fa-lg"></i>
                                        <b-popover
                                          triggers="hover blur"
                                          variant="-"
                                          placement="right"
                                          target="PopoverHoverAPI19"
                                         >
                                         Here is some content.
                                       </b-popover>
                                    </b-button>
                                  </b-input-group-append>
                                </b-input-group>
                              </b-col>
                            </b-row>
                            <b-row>
                              <b-col>
                                <b-input-group>
                                  <b-input-group-prepend>
                                    <b-input-group-text>
                                    PhoneType
                                    </b-input-group-text>
                                  </b-input-group-prepend>
                                  <select name="salutation" id="choose3">
                                    <option disabled selected>Set Requirement...</option>
                                    <option>Not Required</option>
                                    <option>Required</option>
                                    <option>Required and Read-Only</option>
                                    <option>Required with Hidden Cross-Validation</option>
                                  </select>
                                  <b-input-group-append>
                                    <b-button
                                      :pressed="false"
                                      variant="-"
                                      class="cursorDefault rowItemHover questionBox appendButton"
                                      onclick="this.blur();"
                                      @hover="PopoverHoverAPI20 = !PopoverHoverAPI20"
                                      id="PopoverHoverAPI20"
                                     >
                                      <i class="iconQuestion text-medium fa-lg"></i>
                                        <b-popover
                                          triggers="hover blur"
                                          variant="-"
                                          placement="right"
                                          target="PopoverHoverAPI20"
                                         >
                                         Here is some content.
                                       </b-popover>
                                    </b-button>
                                  </b-input-group-append>
                                </b-input-group>
                              </b-col>
                            </b-row>
                            <b-row>
                              <b-col>
                                <b-input-group>
                                  <b-input-group-prepend>
                                    <b-input-group-text>
                                    PhoneNumber
                                    </b-input-group-text>
                                  </b-input-group-prepend>
                                  <select name="salutation" id="choose3">
                                    <option disabled selected>Set Requirement...</option>
                                    <option>Not Required</option>
                                    <option>Required</option>
                                    <option>Required and Read-Only</option>
                                    <option>Required with Hidden Cross-Validation</option>
                                  </select>
                                  <b-input-group-append>
                                    <b-button
                                      :pressed="false"
                                      variant="-"
                                      class="cursorDefault rowItemHover questionBox appendButton"
                                      onclick="this.blur();"
                                      @hover="PopoverHoverAPI21 = !PopoverHoverAPI21"
                                      id="PopoverHoverAPI21"
                                     >
                                      <i class="iconQuestion text-medium fa-lg"></i>
                                        <b-popover
                                          triggers="hover blur"
                                          variant="-"
                                          placement="right"
                                          target="PopoverHoverAPI21"
                                         >
                                         Here is some content.
                                       </b-popover>
                                    </b-button>
                                  </b-input-group-append>
                                </b-input-group>
                              </b-col>
                            </b-row>
                            <b-row>
                              <b-col>
                                <b-input-group>
                                  <b-input-group-prepend>
                                    <b-input-group-text>
                                    Sex
                                    </b-input-group-text>
                                  </b-input-group-prepend>
                                  <select name="salutation" id="choose3">
                                    <option disabled selected>Set Requirement...</option>
                                    <option>Not Required</option>
                                    <option>Required</option>
                                    <option>Required and Read-Only</option>
                                    <option>Required with Hidden Cross-Validation</option>
                                  </select>
                                  <b-input-group-append>
                                    <b-button
                                      :pressed="false"
                                      variant="-"
                                      class="cursorDefault rowItemHover questionBox appendButton"
                                      onclick="this.blur();"
                                      @hover="PopoverHoverAPI22 = !PopoverHoverAPI22"
                                      id="PopoverHoverAPI22"
                                     >
                                      <i class="iconQuestion text-medium fa-lg"></i>
                                        <b-popover
                                          triggers="hover blur"
                                          variant="-"
                                          placement="right"
                                          target="PopoverHoverAPI22"
                                         >
                                         Here is some content.
                                       </b-popover>
                                    </b-button>
                                  </b-input-group-append>
                                </b-input-group>
                              </b-col>
                            </b-row>
                            <b-row>
                              <b-col>
                                <b-input-group>
                                  <b-input-group-prepend>
                                    <b-input-group-text>
                                    PlaceOfBirth
                                    </b-input-group-text>
                                  </b-input-group-prepend>
                                  <select name="salutation" id="choose3">
                                    <option disabled selected>Set Requirement...</option>
                                    <option>Not Required</option>
                                    <option>Required</option>
                                    <option>Required and Read-Only</option>
                                    <option>Required with Hidden Cross-Validation</option>
                                  </select>
                                  <b-input-group-append>
                                    <b-button
                                      :pressed="false"
                                      variant="-"
                                      class="cursorDefault rowItemHover questionBox appendButton"
                                      onclick="this.blur();"
                                      @hover="PopoverHoverAPI23 = !PopoverHoverAPI23"
                                      id="PopoverHoverAPI23"
                                     >
                                      <i class="iconQuestion text-medium fa-lg"></i>
                                        <b-popover
                                          triggers="hover blur"
                                          variant="-"
                                          placement="right"
                                          target="PopoverHoverAPI23"
                                         >
                                         Here is some content.
                                       </b-popover>
                                    </b-button>
                                  </b-input-group-append>
                                </b-input-group>
                              </b-col>
                            </b-row>
                            <b-row>
                              <b-col>
                                <b-input-group>
                                  <b-input-group-prepend>
                                    <b-input-group-text>
                                    CanadianAddress
                                    </b-input-group-text>
                                  </b-input-group-prepend>
                                  <select name="salutation" id="choose3">
                                    <option disabled selected>Set Requirement...</option>
                                    <option>Not Required</option>
                                    <option>Required</option>
                                    <option>Required and Read-Only</option>
                                    <option>Required with Hidden Cross-Validation</option>
                                  </select>
                                  <b-input-group-append>
                                    <b-button
                                      :pressed="false"
                                      variant="-"
                                      class="cursorDefault rowItemHover questionBox appendButton"
                                      onclick="this.blur();"
                                      @hover="PopoverHoverAPI24 = !PopoverHoverAPI24"
                                      id="PopoverHoverAPI24"
                                     >
                                      <i class="iconQuestion text-medium fa-lg"></i>
                                        <b-popover
                                          triggers="hover blur"
                                          variant="-"
                                          placement="right"
                                          target="PopoverHoverAPI24"
                                         >
                                         Here is some content.
                                       </b-popover>
                                    </b-button>
                                  </b-input-group-append>
                                </b-input-group>
                              </b-col>
                            </b-row>
                          </b-container>





                      <template v-slot:modal-footer>

                          <b-button
                            :pressed="false"
                            variant="outline-warningfade"
                            class="btnNavigation btnWarning float-left"
                            @click="modalAPI2=false"
                            >
                            CANCEL
                          </b-button>

                          <b-button
                            :pressed="false"
                            variant="outline-confirmfade"
                            class="btnNavigation btnConfirm float-right"
                            @click="modalAPI2=false;testfunc6()"
                            >
                            ADD
                          </b-button>

                      </template>

                    </b-modal>

                  </div>

                </b-collapse>
              </b-col>
            </b-row>
          </b-container>

        </section>

        </b-tab>
        <b-tab>
          <h2>Landing Page Config</h2>
          <template v-slot:title>
            <span>Landing Page Config</span>
          </template>

          <section>

          <b-container class="pageHeader" fluid>
            <b-row align-v="center">
              <b-col>
                <h4>Section Name</h4>
              </b-col>
              <b-col sm="auto" align-self="end">
                <b-button
                  :pressed="false"
                  variant="outline-primaryfade"
                  class="btnSmall cursorDefault expandAll text-dark"
                  onclick="this.blur()"
                 >
                  <i class="iconSort fa-lg iconBorderMini"></i>
                </b-button>

              </b-col>
            </b-row>
          </b-container>

            <b-container id="moveable" class="containsRowItems" fluid>

                <b-row>
                  <b-col>

                    <b-button
                      block
                      class="rowItem rowExpandable rowItemHover cursorDefault"
                      variant="none"
                      v-b-toggle.collapse-1011new
                      onclick="this.blur();"
                    >

                      <div class="rowItemContent">

                        <div class="rowItemPrefix">
                          <i class="iconCollapseExpand"></i>
                        </div>

                        <div class="rowItemText">
                          <b-badge variant="medium">#1</b-badge>
                          Police Vulnerable Sector Check (PVS)
                        </div>

                        <div class="rowItemSuffix">
                          <i class="iconGrab"></i>

                        </div>

                      </div>

                    </b-button>
                    <b-collapse id="collapse-1011new">
                      <b-card class="rowExpandableContent">
                        <div class="textUnderline">DESCRIPTION TEXT</div>
                        <p>This check is restricted to applicants seeking employment and/or volunteering in a position of authority or trust relative to vulnerable persons in Canada only. It is a collection of offence information, including convictions, outstanding warrants, charges and judicial orders available from a local police agency's records management system and other systems/records where authorized. This check will include sexual offence convictions for which the individual has received a record suspension (pardon) where authorized by the Minister of Public Safety and Emergency Preparedness. Non-conviction information shall be released only when it meets the Exceptional Disclosure Assessment.</p>
                        <b-table
                          :outlined="true"
                          :fixed="true"
                          :no-border-collapse="true"
                          :no-select-on-click="false"
                          :items="tableitems"
                          :fields="fields"
                          :tbody-tr-class="rowClass"
                          class="tableTruncate"
                        ></b-table>
                        <b-button
                          :pressed="false"
                          variant="outline-light"
                          size="sm"
                          class="btnThin nonRowItem"
                          onclick="this.blur();"
                          >
                          <div class="btnText">Edit Group</div>

                        </b-button>
                      </b-card>
                    </b-collapse>
                </b-col>
              </b-row>


              <b-row>
                <b-col>

                  <b-button
                    block
                    class="rowItem rowExpandable rowItemHover cursorDefault"
                    variant="none"
                    v-b-toggle.collapse-1011newnew
                    onclick="this.blur();"
                  >

                    <div class="rowItemContent">

                      <div class="rowItemPrefix">
                        <i class="iconCollapseExpand"></i>
                      </div>

                      <div class="rowItemText">
                        <b-badge variant="medium">#2</b-badge>
                        Criminal Record and Judicial Matters Check (CRJMC)
                      </div>

                      <div class="rowItemSuffix">

                        <i class="iconGrab"></i>
                      </div>

                    </div>

                  </b-button>
                  <b-collapse id="collapse-1011newnew">
                    <b-card class="rowExpandableContent">
                    </b-card>
                  </b-collapse>
              </b-col>
            </b-row>

            <b-row>
              <b-col>

                <b-button
                  block
                  class="rowItem rowExpandable rowItemHover cursorDefault"
                  variant="none"
                  v-b-toggle.collapse-1011newnewnew
                  onclick="this.blur();"
                >

                  <div class="rowItemContent">

                    <div class="rowItemPrefix">
                      <i class="iconCollapseExpand"></i>
                    </div>

                    <div class="rowItemText">
                      <b-badge variant="medium">#3</b-badge>
                      Police Criminal Record Check (PCRC)
                    </div>

                    <div class="rowItemSuffix">
                      <i class="iconGrab"></i>
                    </div>

                  </div>

                </b-button>
                <b-collapse id="collapse-1011newnewnew">
                  <b-card class="rowExpandableContent">
                  </b-card>
                </b-collapse>
              </b-col>
            </b-row>

          </b-container>

            <b-row>
              <b-col>
                <b-button
                  :pressed="false"
                  variant="outline-light"
                  size="sm"
                  class="btnThin nonRowItem"
                  onclick="this.blur();"
                  @click="modalShow2new = !modalShow2new"

                  >

                  <div class="btnText">
                    <i class="iconPlus"></i>
                    Add Landing Page Group</div>

                </b-button>
              </b-col>
            </b-row>

            <b-modal
              v-model="modalShow2new"
              :no-close-on-backdrop="true"
              :no-close-on-esc="true"
              id="modal2new"
              size="lg"
            >
              <template v-slot:modal-header>
                <h4 class="mb-0">Add Landing Page Group</h4>
              </template>

              <div class="modal-body">

              <b-container class="containsRowItems sectionGroup" fluid>



                <b-row>
                  <b-col>
                    <b-input-group prepend="Check Name">
                      <b-form-input class="form-control" type="text" placeholder="Check Name"></b-form-input>
                    </b-input-group>
                  </b-col>
                </b-row>

                <b-row>
                  <b-col>
                    <b-input-group prepend="Description">
                      <b-form-textarea no-resize class="form-control" type="text" placeholder="Description" rows="5" ></b-form-textarea>
                    </b-input-group>
                  </b-col>
                </b-row>
              </b-container>



                <b-container class="containsRowItems sectionGroup">
                  <h6>Packages Available</h6>
                  <p>Assign and configure packages to this landing page group:</p>
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
                               <input id="customCheck1kk" class="custom-control-input" type="checkbox"/>
                               <label class="custom-control-label cursorPointer" for="customCheck1kk"></label>
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
                              Bell Package A1
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
                               <input id="customCheck2kk" class="custom-control-input" type="checkbox"/>
                               <label class="custom-control-label cursorPointer" for="customCheck2kk"></label>
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
                              Bell Base Services
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
                               <input id="customCheck2pp" class="custom-control-input" type="checkbox"/>
                               <label class="custom-control-label cursorPointer" for="customCheck2pp"></label>
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
                              Bell Package E
                            </div>

                            <div class="rowItemSuffix">
                            </div>

                          </div>
                        </b-button>
                      </b-col>
                    </b-row>
                  </b-container>

              </b-container>
            </div>


              <template v-slot:modal-footer>

                  <b-button
                    :pressed="false"
                    variant="outline-warningfade"
                    class="btnNavigation btnWarning float-left"
                    @click="modalShow2new=false"
                    >
                    CANCEL
                  </b-button>

                  <b-button
                    :pressed="false"
                    variant="outline-confirmfade"
                    class="btnNavigation btnConfirm float-right"
                    @click="modalShow2new=false"
                    >
                    ADD
                  </b-button>

              </template>

            </b-modal>
          </section>

        </b-tab>
        <!--
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
        -->
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
              <i class="iconSave"></i>
              <div class="btnText">SAVE CHANGES</div>
            </b-button>
          </div>
        </template>
      </b-tabs>
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
  if($( ".rsg--sidebar-4" ).hasClass("designReferenceSidebar")){
  }
  else {
     $( ".rsg--sidebar-4" ).addClass( "designReferenceSidebar" );
     $( ".rsg--root-1" ).removeClass( "rsg--hasSidebar-2" );
  }
});

$(document).ready(function(){
  $( ".b-form-tags-input" ).removeClass( "flex-grow-1 w-100" );
  $( ".b-form-tag ~ li" ).removeClass( "flex-grow-1" );
});

$( function() {
    $( "#choose, #parent" ).selectmenu();
  } );

$(function() {
  $( "#moveable" ).sortable({
    cancel: '', //need this to function with b-button
    opacity: .7,
    placeholder: 'ui-state-highlight', //custom style for placeholder while dragging
    appendTo: "div",
    scroll: false,
    helper: "clone",
    tolerance: "pointer"
  });
  $( "#sortable" ).disableSelection();
});


$(".expandAll").click(function(){
        if($(this).hasClass("collapsed")){
           $(".rowGroupTitle").slideUp("slow");
        }
        else {
           $(".rowGroupTitle").slideDown("slow");
        }
    });

export default {
    data() {
      return {
        PopoverHover20: false,
        PopoverHover2016: false,
        PopoverHover20a: false,
        PopoverHover20b: false,
        PopoverHover20c: false,
        PopoverHover20d: false,
        PopoverHover20e: false,
        PopoverHover20f: false,
        PopoverHover20g: false,
        PopoverHover20h: false,
        PopoverHoverAPI1: false,
        PopoverHoverAPI2: false,
        PopoverHoverAPI3: false,
        PopoverHoverAPI4: false,
        PopoverHoverAPI5: false,
        PopoverHoverAPI6: false,
        PopoverHoverAPI7: false,
        PopoverHoverAPI8: false,
        PopoverHoverAPI9: false,
        PopoverHoverAPI10: false,
        PopoverHoverAPI11: false,
        PopoverHoverAPI12: false,
        PopoverHoverAPI13: false,
        PopoverHoverAPI14: false,
        PopoverHoverAPI15: false,
        PopoverHoverAPI16: false,
        PopoverHoverAPI17: false,
        PopoverHoverAPI18: false,
        PopoverHoverAPI19: false,
        PopoverHoverAPI20: false,
        PopoverHoverAPI21: false,
        PopoverHoverAPI22: false,
        PopoverHoverAPI23: false,
        PopoverHoverAPI24: false,
        PopoverHoverAPI25: false,
        PopoverHoverAPI26: false,
        PopoverHoverAPI27: false,
        PopoverHoverAPI28: false,
        PopoverHoverAPI29: false,
        PopoverHoverAPI30: false,
        PopoverHoverAPI31: false,
        PopoverHoverAPI32: false,
        PopoverHoverAPI33: false,
        PopoverHoverAPI34: false,
        PopoverHoverAPI35: false,
        PopoverHoverAPI36: false,
        PopoverHoverAPI37: false,
        config: {
            placeholder: 'Compose an epic...',
            options: 'code-block',
            modules: {
              toolbar: []
            }
        },
        fields: ['assigned_package', 'display_title', 'grouping'],
        tableitems: [
          { assigned_package: 'Bell Base Services', display_title: 'Employment/Other', grouping: 'X Value' },
          { assigned_package: 'Bell Package A1', display_title: 'Volunteer', grouping: 'X Value' },
          { assigned_package: 'Bell Package E', display_title: 'Other', grouping: 'X Value' }
        ],
        tableVariants: [
          'primary',
          'secondary',
          'info',
          'danger',
          'warning',
          'success',
          'light',
          'dark'
        ],
        striped: false,
        bordered: false,
        borderless: false,
        outlined: false,
        small: false,
        hover: false,
        dark: false,
        fixed: false,
        footClone: false,
        headVariant: null,
        tableVariant: '',
        noCollapse: false,
        modalShow: false,
        modalShow2: false,
        modalShow2new: false,
        modalShow2newAPI: false,
        modalShow3: false,
        modalShow4: false,
        modalAPI: false,
        modalAPI2: false,
        APIGroupVar: false,
        APIGroup1: true,
        APIGroup2: true,
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
            $( "#choose3, #choose6" ).selectmenu();
            $( ".ui-front" ).css('z-index',9999);
          } );

          $( function() {
            $( "#sortable" ).sortable({
              cancel: '', //need this to function with b-button
              opacity: .7,
              placeholder: 'ui-state-highlight', //custom style for placeholder while dragging
              scroll: false,
              helper: "clone",
              tolerance: "pointer"
            });
            $( "#sortable" ).disableSelection();
          } );
      },
      rowClass: 'text-truncate',
      testfunc() {
        $( function() {
          // Get the checkbox
          var checkBox = document.getElementById("customSwitchAPI");

          // If the checkbox is checked, display the output text
          if (checkBox.checked == true){
            document.getElementById('tempBadge').style.opacity = '1';
            document.getElementById('tempText').style.opacity = '1';
          } else {
            document.getElementById('tempBadge').style.opacity = '.09';
            document.getElementById('tempText').style.opacity = '.3';
          }
        });
      },
      testfunc2() {
        $( function() {
          // Get the checkbox
          var checkBox = document.getElementById("customSwitchAPI2");

          // If the checkbox is checked, display the output text
          if (checkBox.checked == true){
            document.getElementById('tempBadge2').style.opacity = '1';
            document.getElementById('tempText2').style.opacity = '1';
          } else {
            document.getElementById('tempBadge2').style.opacity = '.09';
            document.getElementById('tempText2').style.opacity = '.3';
          }
        });
      },
      testfunc3() {
        $( function() {
          document.getElementById('tempButton').style.display = 'flex';
        });
      },
      testfunc4() {
        $( function() {
          //$( "#tempRow" ).addClass( "rowHighlightDark" );
        });
      },
      testfunc5() {
        $( function() {
          //$( "#tempRow2" ).addClass( "rowHighlightDark" );
        });
      },
      testfunc6() {
        $( function() {
          document.getElementById('tempButton2').style.display = 'flex';
        });
      },
      testfunc7() {
        $( function() {
          //$( "#tempRow3" ).addClass( "rowHighlightDark" );
        });
      },
      testfunc8() {
        $( function() {

          var checkBox = document.getElementById("customSwitchAPI");

          // If the checkbox is checked, display the output text
          if (checkBox.checked == true){
          document.getElementById('tempAlert1').style.display = 'none';
          document.getElementById('tempAlert2').style.display = 'block';
        } else {
          document.getElementById('tempAlert1').style.display = 'block';
          document.getElementById('tempAlert2').style.display = 'none';
        }
        });
      },
      superadmin() {
        $( function() {
            $( ".userNav" ).removeClass( "navbar-dark bg-dark navbar-secondary bg-secondary navbar-info bg-info" );
            $( ".userNav" ).addClass( "navbar-secondary bg-secondary text-white" );
            $( ".userNav > div > div > .navbar-nav > .nav-item > .nav-link" ).addClass( "text-white" );
            $( ".securityMenu" ).addClass( "bg-secondary active" );
            document.getElementById('securityType').innerHTML = 'SUPER ADMIN';
            document.getElementsByClassName('iconCrown')[0].style.visibility = 'visible';
            document.getElementsByClassName('adminMenu')[0].style.visibility = 'visible';
            document.getElementsByClassName('securityMenu')[0].style.visibility = 'visible';
            $( ".adminMenu" ).removeClass( "bg-info active" );
          } );
      },
      tritonadmin() {
        $( function() {
            $( ".userNav" ).removeClass( "navbar-dark bg-dark navbar-secondary bg-secondary navbar-info bg-info" );
            $( ".userNav" ).addClass( "navbar-info bg-info text-white" );
            $( ".userNav > div > div > .navbar-nav > .nav-item > .nav-link" ).addClass( "text-white" );
            $( ".adminMenu" ).addClass( "bg-info active" );
            document.getElementById('securityType').innerHTML = 'TRITON ADMIN';
            document.getElementsByClassName('adminMenu')[0].style.visibility = 'visible';
            document.getElementsByClassName('iconCrown')[0].style.visibility = 'hidden';
            document.getElementsByClassName('securityMenu')[0].style.visibility = 'hidden';
          } );
      },
      support() {
        $( function() {
            $( ".userNav" ).removeClass( "navbar-dark bg-dark navbar-secondary bg-secondary navbar-info bg-info" );
            $( ".userNav" ).addClass( "navbar-info bg-info text-white" );
            $( ".userNav > div > div > .navbar-nav > .nav-item > .nav-link" ).addClass( "text-white" );
            document.getElementById('securityType').innerHTML = 'TRITON SUPPORT';
            document.getElementsByClassName('iconCrown')[0].style.visibility = 'hidden';
            document.getElementsByClassName('securityMenu')[0].style.visibility = 'hidden';
            document.getElementsByClassName('adminMenu')[0].style.visibility = 'hidden';
          } );
      },
      user() {
        $( function() {
            $( ".userNav" ).removeClass( "navbar-dark bg-dark navbar-secondary bg-secondary navbar-info bg-info" );
            $( ".userNav" ).addClass( "navbar-dark bg-dark text-white" );
            $( ".userNav > div > div > .navbar-nav > .nav-item > .nav-link" ).addClass( "text-white" );
            document.getElementById('securityType').innerHTML = 'USER [SHADOWED USER]';
            document.getElementsByClassName('iconCrown')[0].style.visibility = 'hidden';
            document.getElementsByClassName('securityMenu')[0].style.visibility = 'hidden';
            document.getElementsByClassName('adminMenu')[0].style.visibility = 'hidden';
          } );
      },
      tabchange1() {
        $( function() {
            $( ".userNav" ).removeClass( "navbar-dark bg-dark navbar-secondary bg-secondary navbar-info bg-info" );
            $( ".userNav" ).addClass( "navbar-dark bg-dark text-white" );
            $( ".userNav > div > div > .navbar-nav > .nav-item > .nav-link" ).addClass( "text-white" );
            document.getElementById('securityType').innerHTML = 'USER [SHADOWED USER]';
            document.getElementsByClassName('iconCrown')[0].style.visibility = 'hidden';
            document.getElementsByClassName('securityMenu')[0].style.visibility = 'hidden';
            document.getElementsByClassName('adminMenu')[0].style.visibility = 'hidden';
          } );
      },
  }
}
</script>
```


</docs>

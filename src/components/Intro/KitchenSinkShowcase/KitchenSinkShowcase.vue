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
      <b-tabs pills card vertical>
        <b-tab disabled>
          <template v-slot:title><span>General Settings</span></template>
        </b-tab>
        <b-tab>

          <template v-slot:title><span>Client Details</span></template>
          <b-button
            block
            class="rowItem rowTitle cursorDefault"
            variant="none"
            onclick="this.blur();"
          >

            <div class="rowItemContent">



              <div class="rowItemText">
                <p class="mb-0">Address</p>
              </div>

              <div class="rowItemSuffix">
              </div>

            </div>

          </b-button>
          <b-row>
            <b-col cols="7">
              <b-input-group prepend="Street #">
                <template v-slot:append>

                      <b-button
                        :pressed="false"
                        variant="-"
                        class="cursorDefault"
                        @hover="showHover5 = !showHover5"
                       >
                        <i id="PopoverHover5" class="iconQuestion iconHover text-secondary fa-lg"></i>
                        <b-popover
                          triggers="hover blur"
                          variant="secondary"
                          placement="right"
                          target="PopoverHover5"
                          :show.sync="showHover5"
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
            <b-col cols="7">
              <b-input-group prepend="Street Name">
                <b-form-input class="form-control" type="text" placeholder=""></b-form-input>
              </b-input-group>
            </b-col>
          </b-row>
          <b-row>
            <b-col cols="7">
              <b-input-group prepend="Unit">
                <b-form-input class="form-control" type="text" placeholder=""></b-form-input>
              </b-input-group>
            </b-col>
          </b-row>
          <b-row>
            <b-col cols="7">
              <b-input-group prepend="City">
                <b-form-input class="form-control" type="text" placeholder=""></b-form-input>
              </b-input-group>
            </b-col>
          </b-row>
          <b-row>
            <b-col cols="7">
              <b-input-group prepend="Province">
                <b-select name="salutation" id="choose">
                  <option disabled selected>Choose One...</option>
                  <option>Pink</option>
                  <option>Teal</option>
                  <option>Orange</option>
                  <option>Black</option>
                  <option>Banana</option>
                </b-select>
              </b-input-group>
            </b-col>
          </b-row>
          <b-row>
            <b-col cols="7">
              <b-input-group prepend="Postal Code">
                <b-form-input class="form-control" type="text" placeholder=""></b-form-input>
              </b-input-group>
            </b-col>
          </b-row>
          <b-row>
            <b-col cols="7">
              <b-input-group prepend="Country">
                <b-form-input class="form-control" type="text" placeholder=""></b-form-input>
              </b-input-group>
            </b-col>
          </b-row>
          <b-row>
            <b-col cols="7">
              <b-input-group prepend="Phone">
                <b-form-input class="form-control" type="tel" placeholder=""></b-form-input>
              </b-input-group>
            </b-col>
          </b-row>
          <b-button
            block
            class="rowItem rowTitle cursorDefault"
            variant="none"
            onclick="this.blur();"
          >

            <div class="rowItemContent">



              <div class="rowItemText">
                <p class="mb-0">Attachments</p>
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
                <i class="iconDash"></i>
              </div>

              <div class="rowItemText">
                <div>
                  <i class="iconFolderOpen"></i>
                  <abbr title="background-check-text.pdf" class="initialism">background-check-text.pdf</abbr>
                </div>
              </div>

              <div class="rowItemSuffix">
                <div>
                  <b-button onclick="this.blur()" variant="outline-warningfade" class="btnSmall cursorDefault text-warning">
                    <i class="iconRemove iconBorderMini"></i>
                  </b-button>
                </div>
              </div>

            </div>

          </b-button>


        </b-tab>
        <b-tab>
          <template v-slot:title><span>General Settings</span></template>
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
                <p>Here is an example of the standard row element.</p>
              </div>
              <div class="rowItemSuffix">
              </div>
            </div>
          </b-button>
        </b-tab>
        <b-tab>
          <template v-slot:title><span>Reports & Invoicing</span></template>
          <b-card-text>Reports & Invoicing</b-card-text>
        </b-tab>
        <b-tab>
          <template v-slot:title><span>Transactions</span></template>
          <b-card-text>Transactions</b-card-text>
        </b-tab>
        <b-tab>
          <template v-slot:title><span>Packages</span></template>
          <b-card-text>Packages</b-card-text>
        </b-tab>
        <b-tab disabled>
          <template v-slot:title><span>Override Groups</span></template>
        </b-tab>
        <b-tab>
          <template v-slot:title><span>Services</span></template>
          <b-card-text>Services</b-card-text>
        </b-tab>
        <b-tab>
          <template v-slot:title><span>Content</span></template>
          <b-card-text>Content</b-card-text>
        </b-tab>
        <b-tab>
          <template v-slot:title><span>Email</span></template>
          <b-card-text>Email</b-card-text>
        </b-tab>
        <b-tab>
          <template v-slot:title><span>Other</span></template>
          <b-card-text>Other</b-card-text>
        </b-tab>
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
<script>  $( function() {
    $( "#choose" ).selectmenu();
  } );
$(document).ready(function(){
  $( ".rsg--sidebar-4" ).addClass( "designReferenceSidebar" );
  $( ".rsg--root-1" ).removeClass( "rsg--hasSidebar-2" );
});

export default {
      data() {
        return {
          items: [
            {
              text: 'Bell Canada',
              href: '#'
            },
            {
              text: 'Success Factors',
              href: '#'
            },
            {
              text: 'Bell Canada - Ontario Sector',
              active: true
            }
          ]
        }
      }
}
</script>
```


</docs>

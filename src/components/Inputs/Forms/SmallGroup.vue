<docs>


<h3>Small Group
<i title="Under construction!" class="p-1 fal fa-sm fa-exclamation-triangle text-info align-middle"></i>
</h3>
<p><span class="text-info">~Under construction~</span></p>

```js
<template>
  <div>



      <b-container class="containsRowItems" fluid>

        <b-row>
          <b-col cols="5" class="formSmallGroup formPrimary">
            <h3>Address Form</h3>

            <b-container fluid>
              <b-row>
                <b-col>
                  <b-form-group class="form-label-group" description="Provide a fake address because this form is fake. :)">
                    <b-form-input autocomplete="off" id="nested-street" class="form-control" placeholder="Street #"/>
                    <label for="nested-street">Street #</label>
                  </b-form-group>
                </b-col>
              </b-row>

              <b-row>
                <b-col>
                  <b-form-group class="form-label-group">
                    <b-form-input autocomplete="off" id="nested-city" class="form-control" placeholder="City"/>
                    <label for="nested-city">City</label>
                  </b-form-group>
                </b-col>
              </b-row>

              <b-row>
                <b-col>
                  <b-form-group class="form-label-group">
                    <b-form-input autocomplete="off" id="nested-country" class="form-control" placeholder="State"/>
                    <label for="nested-country">State</label>
                  </b-form-group>
                </b-col>
              </b-row>

              <b-row>
                <b-col>

                  <b-form-group>
                    <p>Please choose an option:</p>
                    <b-form-radio name="some-radios" value="A">Option A</b-form-radio>
                    <b-form-radio name="some-radios" value="B">Option B</b-form-radio>
                  </b-form-group>
                </b-col>
              </b-row>

              <b-row>
                <b-col class="buttonForm">
                  <b-button
                    :pressed="false"
                    variant="confirm"
                    class="btnForm"
                    onclick="this.blur();"
                    >
                    <div class="">SUBMIT FORM</div>
                  </b-button>
                </b-col>

                <b-col class="buttonForm">
                  <b-button
                    :pressed="false"
                    variant="medium"
                    class="btnForm"
                    onclick="this.blur();"
                    >
                    <div class="">CANCEL</div>
                  </b-button>
                </b-col>

              </b-row>
            </b-container>

            </b-col>

            <b-col class="formSmallGroup formDark">
              <h3>New Account Setup</h3>
              <p>Welcome to our site! Please set up your new account below.</p>
              <b-container fluid>
                <b-row>
                  <b-col cols="12">
                    <b-form-group class="form-label-group">
                      <b-form-input autocomplete="off" id="nested-street" class="form-control" placeholder="Street #"/>
                      <label for="nested-street">First Name</label>
                    </b-form-group>
                  </b-col>
                </b-row>

                <b-row>
                  <b-col cols="12">
                    <b-form-group class="form-label-group">
                      <b-form-input autocomplete="off" id="nested-city" class="form-control" placeholder="Street #"/>
                      <label for="nested-city">Last Name</label>
                    </b-form-group>
                  </b-col>
                </b-row>

                <b-row>
                  <b-col cols="12">
                    <b-form-group class="form-label-group">
                      <b-form-input autocomplete="off" id="nested-country" class="form-control" placeholder="Street #"/>
                      <label for="nested-country">Username</label>
                    </b-form-group>
                  </b-col>
                </b-row>

                <b-row>
                  <b-col cols="12">
                    <b-form-group
                    class="form-label-group"
                    :valid-feedback="validFeedback"
                    :state="state"
                    >
                      <b-form-input v-model="name" :state="state" type="password" autocomplete="off" id="nested-country" class="form-control" placeholder="Street #"/>
                      <label for="nested-country">Password</label>
                    </b-form-group>
                  </b-col>
                </b-row>

                <b-row align-h="center">
                  <b-col class="buttonForm">
                    <b-button
                      :pressed="false"
                      variant="info"
                      class="btnForm"
                      onclick="this.blur();"
                      >
                      <div class="">CREATE ACCOUNT</div>
                    </b-button>
                  </b-col>
                </b-row>

              </b-container>

                </b-col>
            </b-row>
        </b-container>




</div>
</template>
<script>
  export default {
    computed: {
      state() {
        return this.name.length >= 1 ? true : null
      },
      validFeedback() {
        return this.state === true ? 'Looks good!' : ''
      }
    },
    data() {
      return {
        name: ''
      }
    }
  }
</script>
```

</docs>

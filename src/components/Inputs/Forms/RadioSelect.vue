<docs>


<h3>Radio Select</h3>
<p><span class="text-info">~Under construction~</span></p>

```js
<template>
  <div>



      <b-container class="containsRowItems" fluid>

        <b-row>
          <b-col cols="6" class="formSmallGroup formLight">
            <h3>Radio Select</h3>
            <p>Testing a description paragraph here!</p>

            <b-row>
              <b-col>
                <b-form-group>
                  <b-form-radio name="some-radios" value="A">Option A</b-form-radio>
                  <b-form-radio name="some-radios" value="B">Option B</b-form-radio>
                  <b-form-radio name="some-radios" value="C">Option C</b-form-radio>
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
                  @click="toastConfirm()"
                  >
                  <div class="">CHOOSE WISELY</div>
                </b-button>
              </b-col>
              <b-col class="buttonForm">
                <b-button
                  :pressed="false"
                  variant="medium"
                  class="btnForm"
                  onclick="this.blur();"
                  >
                  <div class="">BACK</div>
                  <i class="btnIconRight iconPrevious"></i>
                </b-button>
              </b-col>
            </b-row>

            </b-col>


          </b-row>
        </b-container>




</div>
</template>
<script>
  export default {
    methods: {
      toastConfirm() {
        this.$bvToast.toast('Good choice.', {
          variant: 'success',
          solid: true,
          autoHideDelay: 2500,
          noCloseButton: true,
          toaster: 'b-toaster-bottom-left'
        })
      }
    }
  }
</script>
```

</docs>

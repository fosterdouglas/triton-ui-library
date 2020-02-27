<docs>


<h3>Small Group
<i title="Under construction!" class="p-1 fal fa-sm fa-exclamation-triangle text-info align-middle"></i>
</h3>
<p><span class="text-info">~Under construction~</span></p>

```js
<template>
  <div>



      <b-container class="containsRowItems bg-primaryfade rounded-lg p-3" style="width:500px;" fluid>
        <h3>Testing</h3>
        <b-row>

          <b-col cols="12">
          <b-form-group class="form-label-group">
            <b-form-input autocomplete="off" id="nested-street" class="form-control" placeholder="Street #"/>
            <label for="nested-street">Street #</label>
          </b-form-group>
          </b-col>

          <b-col cols="12">
          <b-form-group class="form-label-group">
            <b-form-input autocomplete="off" id="nested-city" class="form-control" placeholder="Street #"/>
            <label for="nested-city">City</label>
          </b-form-group>
          </b-col>

          <b-col cols="12">
          <b-form-group class="form-label-group">
            <b-form-input autocomplete="off" id="nested-country" class="form-control" placeholder="Street #"/>
            <label for="nested-country">Country</label>
          </b-form-group>
          </b-col>

          <b-col cols="12">
          <b-form-group>
            <label for="radio-group-1">Ship Via:</label>
            <b-form-radio-group
              class="pt-2 col-1"
              :options="['Air', 'Courier', 'Mail']"
              stacked
              id="radio-group-1"
            ></b-form-radio-group>
          </b-form-group>
          </b-col>

          <b-col class="buttonCol">
            <b-button
              :pressed="false"
              variant="primary"
              class="btnForm"
              onclick="this.blur();"
              >
              <div class="">BUTTON SAMPLE</div>
            </b-button>
          </b-col>

          </b-row>
        </b-container>




</div>
</template>
<script>
export default {
}
</script>
```

</docs>

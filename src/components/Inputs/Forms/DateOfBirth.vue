<docs>


<h3>Date Of Birth
<i title="Under construction!" class="p-1 fal fa-sm fa-exclamation-triangle text-info align-middle"></i></h3>
<p>The DOB input is used to make filling out this type of data simpler and clearer. There is a version of this for general backend use on the <a href="../../#Inputs/General">General</a> page. <span class="text-info">~Potentially needs a "Date of Birth" placeholder text to show before clicking on the field, full sized like other form fields~</span></p>

```js
<template>

  <b-container class="containsRowItems" fluid>
    <b-row>
      <b-col class="form-label-group formDOB">
        <b-form-group>
          <b-form-input type="date" class="custom-form-input" placeholder=" "/>
          <label>Date of Birth</label>
        </b-form-group>
      </b-col>
    </b-row>
  </b-container>

</template>
<script>
  export default {
}
</script>
```

</docs>
